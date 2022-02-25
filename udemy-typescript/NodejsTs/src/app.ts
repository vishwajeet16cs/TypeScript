import express,{Request,Response,NextFunction}from 'express'
import todoRoutes from "./routes/todos"
import {json} from "body-parser"//middleware parse json we get from responce

const app=express();

app.use(json())

//to connect running express application
app.use("/todos",todoRoutes)//req targetting diff url will not hendal

//Error handleing middleware
app.use((error:Error,req:Request,res:Response,next:NextFunction)=>{
    res.status(500).json({message:error.message})
})//error handeling middleware


app.listen(3000)