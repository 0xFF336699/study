

componentDidMount(){

​	this.elem.addEventListener()

}

componentWillUnmount(){

this.elem.removeEventListener()

}

render(){

​	return <div ref={elem=>this.elem=elem} />

}