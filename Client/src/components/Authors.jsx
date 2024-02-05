import React from 'react'
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper, Button} from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import DeleteButton from './DeleteButton'
const Authors = (props) => {
  
    const { authors , removeFromDom } = props;
    const navigate = useNavigate();
    console.log(authors);

  return (
    <>
         <h1>Favorite Authors</h1>

        <Link to={"/authors/new"}>Add an Author</Link>

        <p>We have quotes by: </p>
        
        {
            
            authors.length >= 1 ?

       

               <Paper>
                  <TableContainer>
                      <Table>
                          <TableHead>
                              <TableRow>
                              <TableCell>
                                  Author
                              </TableCell>

                              <TableCell>
                                  Actions
                              </TableCell>

                              </TableRow>

                          </TableHead>
                          <TableBody>
          {
                         authors.map((author,index)=>{
          return(
                              <TableRow >
                                  <TableCell key={index}>
                                  {author.name}
                                  </TableCell>
                                    
                                  <TableCell>
                                      <Button variant ="contained"  onClick={()=>{navigate(`/authors/${author._id}/edit`)}} style={{marginRight: "1rem"}}>Edit</Button>
                                      <DeleteButton variant ="contained" authorId = {author._id} successCallBack ={()=>{removeFromDom(author._id)}}/>

                                  </TableCell>
                          
                              </TableRow>
)})}
                          </TableBody>
                      </Table>
                  </TableContainer>
              </Paper> 
              :
              <p> you have no favorite Authors </p>

          }
</>
)
}

export default Authors