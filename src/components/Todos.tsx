
import { useTodos } from '../store/Todos'
import {useSearchParams} from "react-router-dom"


const Todos = () => {
    const {todos,toggleTodoAsCompleted,handleDeleteTodo} = useTodos();

    const [searchParams] = useSearchParams()
    let todosData = searchParams.get('todos')
    
    
    let filterData = todos;
    
    if(todosData==="active"){
        filterData = filterData.filter((task)=>!task.completed)
        console.log(filterData);
    }

    if(todosData==="complete"){
        filterData = filterData.filter((task)=>task.completed)
        console.log(filterData);
    }

  return (
    <ul>
        {
            filterData.map((todo)=>{
                return <li key={todo.id}>
            <input type="checkbox" id={`todo-${todo.id}`} 
            checked={todo.completed}
            onChange={()=>toggleTodoAsCompleted(todo.id)}
            />
            <label htmlFor={`todo-${todo.id}`}>{todo.task}</label>
            {
                todo.completed && (
                    <button type="button" onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
                )
            }
                </li>
            })
        }
    </ul>
    
  )
}

export default Todos