import { Button } from '@mui/material'
import React from 'react'
import { ACTIONS } from './Homepage'

const Todo = (props) => {
    const {todo,dispatch} = props
  return (
    <div style={{marginTop: "1rem"}}>
        <span style = {{color: todo.complete ? "#AAA" : "#000"}}>
            {todo.name}
        </span>

        <Button variant = "outlined" onClick={() =>dispatch({type: ACTIONS.TOGGLE_TODO , payload : {id : todo.id}})}>Toggle</Button>
        <Button variant = "outlined" onClick={()=>dispatch({type: ACTIONS.DELETE_TODO , payload : {id : todo.id}})}>Delete</Button>

    </div>
  )
}

export default Todo