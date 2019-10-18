```
https://play.golang.org/p/FxIUav9LDMc

package main

import (
	"fmt"
)

func main() {
	arr := [4]int{10, 20, 30, 40}
	slice := arr[0:2]
	t1 := slice
	t2 := append(slice, 1)
	t3 := append(append(slice, 1), 2)	
	t4 := append(t2, 2)
	t5 := append(append(append(slice, 1), 2), 3)
	t6 := append(t4, 3)
	slice[0] = 11
	fmt.Println("cap slice",cap(slice))
	fmt.Println("cap t1", cap(t1))
	fmt.Println("cap t2", cap(t2))
	fmt.Println("cap t3", cap(t3))
	fmt.Println("cap t4", cap(t4))
	fmt.Println("cap t5", cap(t5))
	fmt.Println("cap t6", cap(t6))
	fmt.Println("t1", t1[0])
	fmt.Println("t2", t2[0])
	fmt.Println("t3", t3[0])
	fmt.Println("t4", t4[0])
	fmt.Println("t5", t5[0])
	fmt.Println("t6", t6[0])
}

cap slice 4
cap t1 4
cap t2 4
cap t3 4
cap t4 4
cap t5 8
cap t6 8
t1 11
t2 11
t3 11
t4 11
t5 10
t6 10
```