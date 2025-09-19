const express=require('express')
const router=express.Router()

//Importer le controller, en faisant appel a la fonction qui vient du controller
const todosController=require('../controllers/todosControllers')

//Creation des routes
router.get('/', todosController.getAllTodos )
router.get('/:id',todosController.getOneTodo )
router.post('/', todosController.createTodo )
router.patch('/:id', todosController.updateTodo )
router.delete('/:id', todosController.deleteTodo)

module.exports=router
