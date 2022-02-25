type point2D={
    x:number,
    y:number,
}
/* type point3D={
    x:number,
    y:number,
    z:number,
}
here in Point2D and Point3D x&y is repeating

*/
// here we saying point3d have all the menber of point 2D and one more z

type point3D=point2D &{
    z:number,
}