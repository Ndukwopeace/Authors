import React from 'react'
import { Button } from '@mui/material'
import axios from 'axios'

const DeleteButton = (props) => {

        const {authorId , successCallBack} = props

    const deleteAuthor = () =>{
            axios.delete(`http://localhost:8002/api/authors/${authorId}`)
            .then(res => {

                successCallBack();
            }
                )
            .catch(err = console.log(err))

            
    } 

  return (
    <>
        <Button variant='contained' onClick={deleteAuthor}> Delete</Button>
    </>
  )
}

export default DeleteButton