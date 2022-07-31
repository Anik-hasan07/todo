import React, { useState } from 'react'

const NewTodo = (props) => {
    const[todo,setTodo] = useState({title:"",desc:""})

    const handleSubmit=(e)=>{
        e.preventDefault()
        props.onAddTodo(todo);
        setTodo({title:"",desc:""})

    }

    const handleChange = (event)=>{
        const name=event.target.name;
        setTodo((oldTodo)=>{
            return {...oldTodo,[name]:event.target.value}
        })
       

    }







  return (
    <form onSubmit={handleSubmit}>
        <div>
        <label>Title:</label>
        <input type="text" id='title' name="title" value={todo.title} onChange={handleChange}/>

        </div>
        <div>
        <label>desc:</label>
        <input type="text" id='desc' name="desc" value={todo.desc} onChange={handleChange}/>

        </div>
        <button type='submit'>Add todo</button>
       
      
    </form>
  )
}

export default NewTodo
