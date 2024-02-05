
import React, { useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import {Paper , OutlinedInput,FormControl,Button,InputLabel} from '@mui/material'
import Todo from './Todo'


export const ACTIONS = {
    ADD_TODO : 'add-todo',
    TOGGLE_TODO : 'toggle-todo',
    DELETE_TODO : 'delete-todo'
}
const reducer  = (todo , action) => {
    switch(action.type){
        case ACTIONS.ADD_TODO : 
        return(
            [...todo,newTodo(action.payload.name)]
        )
        case ACTIONS.TOGGLE_TODO :
            return(
                todo.map(todo =>{
                    if (todo.id === action.payload.id){
                        return {...todo , complete: !todo.complete }
                    }
                    return todo
                })
            )
         case ACTIONS.DELETE_TODO :
            return todo.filter(todo => todo.id !== action.payload.id)
        default : 
        return todo
    }

    }


const newTodo = (name) => {
    return {id: Date.now() , name: name , complete : false}
}

const Homepage = () => {

    const [todo , dispatch] = useReducer(reducer , [])
    const [name , setName] = useState("")
 console.log(todo)
    const handleSubmit = (e) =>{
            e.preventDefault();
            dispatch({type: ACTIONS.ADD_TODO , payload :{name : name}})
            setName(" ")
    }
 
  return (
    <div>

        <Link to={"/authors"}>See favorite authors</Link> |
        <Link to="/authors/new">Add favorite author</Link>

        <Paper elevation={3} style={{width : "17.5rem" , padding: "2rem"}}>
            <form onSubmit={handleSubmit} >
                <FormControl variant = "outlined">
                    <InputLabel>Name</InputLabel>
                    <OutlinedInput type = "text" onChange = {e => setName(e.target.value)} style={{marginBottom: "1rem"}}/>
                </FormControl>
                <Button variant= "contained" type ="submit" > submit</Button>
            </form>


        {
            todo.map(todo => {
                return <Todo key ={ todo.id} todo ={todo} dispatch = {dispatch}/>
            })
        }
        </Paper>


    </div>
  )
}

export default Homepage