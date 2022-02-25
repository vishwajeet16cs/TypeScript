/* 
import { Request,Response,NextFunction } from "express"

export const createTodo =(req:Request,res:Response,next:NextFunction)=>{} */
import { RequestHandler } from "express"
import {Todo} from "../models/todo"

const TODOS:Todo[]=[]
export const createTodo:RequestHandler =(req,res,next)=>{
    const text =(req.body as {text:string}).text// type casting
    const newTodo=new Todo(Math.random().toString(),text)

    TODOS.push(newTodo)

    res.status(201).json({message:"Create the todo",createdTodo:newTodo});
    next()
} 

export const getTodos: RequestHandler=(req,res,next)=>{
    res.json({todos:TODOS})
}

//by generic type <id:string> we tell its type to ts 
export const updateTodo: RequestHandler<{id:string}>=(req,res,next)=>{
    const todoId=req.params.id
    console.log(todoId)

    const updatedText=(req.body as {text:string}).text;

    const todoIndex= TODOS.findIndex(todo=>todo.id===todoId)

    if(todoIndex<0){
        throw new Error("Could not find todoes")
    }

    TODOS[todoIndex]=new Todo(TODOS[todoIndex].id,updatedText)

    res.json({message:"updated!",updateTodo:TODOS[todoIndex]})
}


//delete todo

export const deleteTodo: RequestHandler=(req,res,next)=>{
    const todoId= req.params.id;

    const todoIndex = TODOS.findIndex(todo=>todo.id===todoId);

    if(todoIndex<0){
        throw new Error("Could not find todo!");
    }
    TODOS.splice(todoIndex,1);

    res.json({messag:"Todo deleted"})
};