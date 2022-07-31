import React from 'react'

const Todo = (props) => {
    const{title,desc}=props.todo;
    const{id} = props;

    const handleClick=(id)=>{
      props.onRemoveTodo(id);
    }
    
  return (
    <article>
        <div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
        <div>
            <button onClick={()=>{handleClick(id)}}>Delete</button>
        </div>
      
    </article>
  )
}

export default Todo
