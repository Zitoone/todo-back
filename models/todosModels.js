const mongoose=require('mongoose')

const todoSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    isCompleted:{
        type: Boolean,
        default: false
    },
    creationDate:{
        type: Date,
        default: Date.now
    },
    completedDate:{
        type: Date
    }
})

//Pour pouvoir utiliser notre schema de données, on doit l'exporter
module.exports=mongoose.model('Todo', todoSchema)


//table todos
    //title_todo:
        //varchar(255)
        //not null
    //isCompleted_todo:
        //boolean
        // default: false
    //creationDate_todo:
        // datetime / timestamp
        // default ?
    // completedDate_todo:
        // datetime