import express from "express";
const router = express.Router()
import Todo from "../models/todos.js";

router.post("/", async (req,res) => {
    try {
        const todo = await Todo.create(req.body);
        res.status(201).json({message:"Todo created successfully"});
    } catch (e) {
        res.status(400).json({error:e.message});
    }
})

router.get("/", async (req,res) => {
    try {
        const todos = await Todo.find({}, {title:1, todoId:1, _id:0});
        if(todos.length===0) {
            res.send("No TODOS in the DB collection...")
        }
        res.status(200).json(todos);
    } catch (e) {
        res.status(400).json({error:e.message});
    }
})

router.delete("/:todoId", async (req,res) => {
    try {
        const deletedTodo = await Todo.deleteOne({todoId:req.params.todoId});
        res.status(200).send("Deleted Successfully");
    } catch (e) {
        res.status(400).json({error:e.message});
    }
})

export default router;