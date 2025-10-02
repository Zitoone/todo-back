// On va récupérer les données de la bdd
/* const Todo=require('../models/todosModels') */
const db = require('../db')

exports.getAllTodos=async(req,res)=>{
    try {
        const todos= await db.many('SELECT * FROM todos')
        res.status(200).json(todos)       
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.getOneTodo=async(req,res)=>{
    try {        
        const todo=await db.oneO('SELECT * FROM todos WHERE id_todo= $1', req.params.id)
        if(todo==null){
            res.status(404).json({message:"Not found"})
        }
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.createTodo=async(req,res)=>{
    try {
        const {title} =req.body
        const date = new Date()
        const todo= await db.one('INSERT INTO todos (title_todo, "creationDate_todo") VALUES ($1, $2) RETURNING *', [title, date])
        res.status(201).json({todo})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.updateTodo=async(req,res)=>{
    try {
        const {id}=req.params
        // On récupère la tâche existante
        const todo=await db.oneOrNone('SELECT * FROM todos WHERE id_todo=$1', id)
        if(!todo){
            res.status(404).json({message:"Not found"})
        }
        //On inverse l'état actuel
        const isCompleted= !todo.isCompleted_todo
        const completedDate=isCompleted ? new Date() : null
        
        const updateTodo = await db.one(`UPDATE todos SET "isCompleted_todo" = $1, "completedDate_todo" = $2 WHERE id_todo = $3 RETURNING *`, [isCompleted, completedDate, id])
       
        res.status(200).json(updateTodo)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.deleteTodo=async(req,res)=>{
    try {
        const {id} = req.params
        const todo=await db.result('DELETE FROM todos WHERE id_todo = $1', id)
        if(todo.rowCount === 0){
            res.status(404).json({message:"Not found"})
        }
        res.status(200).json({message: "Element deleted"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}