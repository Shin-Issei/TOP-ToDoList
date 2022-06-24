export default function createProject (title){
    const list = [];
    // add methods for editing and deleting
    // add properties for priority, due date and completion status
    const createTodo = (tdTitle, tdDesc) =>{
        const todoObj = {tdTitle,tdDesc};
        list.push(todoObj);
    }
    
    return {title, list, createTodo};
}
