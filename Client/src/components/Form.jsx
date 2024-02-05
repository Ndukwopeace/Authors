import React, { useState } from 'react'
import {Paper,FormControl,InputLabel,OutlinedInput,Button} from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'


const styles = {
    
    paper : {
        width: "20rem",
        padding : "1rem"
    },

    formControl : {
        display : "flex",
        flexDirection : "column",
        gap : "1rem"
    },

    input: {
        marginBottom : "1rem"
    },

    div : {
        display : "flex",
        gap : "1rem",
        justifyContent : "center"
    }

}
const Form = (props) => {
    
    const navigate = useNavigate();
    const {onSubmitProp, initialName, errorMessage } = props
    const [name , setName] = useState(initialName);


    const submitHandler = (e) =>{
            e.preventDefault();
            onSubmitProp({name});
            
    }

  return (
    <>
        <h1>Favorite Authors</h1>

        <Link to={"/authors"}>Home</Link>

        <p>Add a new author: </p>

    <Paper elevation={3} style={styles.paper}>
        <form onSubmit={submitHandler}>
            <FormControl variant="outlined"  >
                <InputLabel> Name </InputLabel>
                <OutlinedInput type ="text"  value = {name} onChange = {(e)=>setName(e.target.value)} style={styles.input} />
                {errorMessage.name ? <p style ={{color:"red"}}>{errorMessage.name.message}</p> : null }
            </FormControl>

            <div style={styles.div}>
                <Button  variant ="outlined" color= "primary" onClick={() =>navigate(-1)}>Cancel</Button>
                <Button type='submit'  variant ="outlined" color= "primary" >Submit</Button>
            </div>
        </form>

    </Paper>
    </>
  )
}

export default Form