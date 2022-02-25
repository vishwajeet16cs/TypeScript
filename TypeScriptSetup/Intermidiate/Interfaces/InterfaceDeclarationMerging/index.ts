//Express Base
 export interface Request{
     body:any;
 }

 //Export JSON
 export interface Request{
     json:any;
 }

 //Our App
 function handleRequest(req:Request){
     req.body;
     req.json;
 }