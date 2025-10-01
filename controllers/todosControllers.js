

// On va récupérer les données de la bdd
const Todo=require('../models/todosModels')

exports.getAllTodos=async(req,res)=>{
    try {
        const todos= await Todo.find()
        res.status(200).json(todos)       
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.getOneTodo=async(req,res)=>{
    try {        
        const todo=await Todo.findById(req.params.id)
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
        const todo= new Todo({title})
        await todo.save(
        res.status(201).json({todo})
        )
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.updateTodo=async(req,res)=>{
    try {
        const {id}=req.params
        // On récupère la tâche existante
        const todo=await Todo.findById(id)
        if(!todo){
            res.status(404).json({message:"Not found"})
        }
        //On inverse l'état actuel
        todo.isCompleted= !todo.isCompleted
        todo.completedDate=todo.isCompleted ? new Date() : null
        await todo.save()
        res.status(200).json(todo)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

exports.deleteTodo=async(req,res)=>{
    try {
        const todo=await Todo.findById(req.params.id)
        if(todo == null){
            res.status(404).json({message:"Not found"})
        }
        await todo.deleteOne()
        res.status(200).json({message: "Element deleted"})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}