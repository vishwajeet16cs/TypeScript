//most common usecase of type defination in typeScript to declare the structure of an object

type Point2D={
    x:number,
    y:number,
}

type Point3D =Point2D &{// similar like inheritance
    z:number,
};

export const point:Point3D={
    x:0,
    y:0,
    z:0
}


/* export const point:Point3D={
    x:0,
    y:0,
    
}
Property 'z' is missing in type 
'{ x: number; y: number; }' 
but required in type '{ z: number; }
*/