import mongoose from "mongoose";


const todosSchema = new mongoose.Schema({
    todoId: {
        type:String,
        unique:true,
        default:`TODO-${Date.now()}-${Math.floor(Math.random() * 1000)}`
    },
    title: {
        type:String,
        required:[true, "Title is a required field"]
    },
    isCompleted: {
        type:Boolean,
        default:false
    }
})

export default mongoose.model("Todo", todosSchema);