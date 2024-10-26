# 例子

链接  
<https://blog.csdn.net/linhieng/article/details/136971101>

``` ts
enum ShapeType {
    Square = 1,
    Circle = 2
}
interface Square {
    size: number;
}
interface Circle {
    radius: number;
}

type MutableRecord<U> = {
    [SubType in keyof U]: {
        type: SubType;
        data: U[SubType]
    };
}[keyof U];

type Shape = MutableRecord<{
    [ShapeType.Square]: Square;
    [ShapeType.Circle]: Circle;
}>;


const circle: Shape = {
    type: ShapeType.Circle,
    data: {
        // 这里只出现 radius
    }
};
const square: Shape = {
    type: ShapeType.Square,
    data: {
        // 这里只出现 size
    }
};


```
