侦听的位置  
github.com/hashicorp/consul/api/watch  
watch的方法在funcs.go里

	watchFuncFactory = map[string]watchFactory{
		"key":           keyWatch,
		"keyprefix":     keyPrefixWatch,
		"services":      servicesWatch,
		"nodes":         nodesWatch,
		"service":       serviceWatch,
		"checks":        checksWatch,
		"event":         eventWatch,
		"connect_roots": connectRootsWatch,
		"connect_leaf":  connectLeafWatch,
		"agent_service": agentServiceWatch,
	}
参照上方代码之下的代码能找到各种侦听对应需要添加的参数，例如keyprefix是要侦听的type，要侦听的字段是prefix  
{type:"keyprefix",prefix:"/folder path"}  
