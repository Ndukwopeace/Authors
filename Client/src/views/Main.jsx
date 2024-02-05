import React,{useState ,useEffect} from 'react'
import axios from 'axios'
import {BrowserRouter,Routes,Route, Link,useNavigate} from 'react-router-dom'
import Authors from '../components/Authors'
import Form from '../components/Form'
import Homepage from '../components/Homepage'

const Main = (props) => {
    const [authors , setAuthors] = useState([])
    const [errorMessage , setErrorMessage] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("http://localhost:8002/api/authors")
        .then(res => {
            console.log(res.data)
            setAuthors(res.data)
            console.log(authors)}
            
        )
        .catch(err => console.log(err))
    },[])

    const addAuthor = (authorObject) =>{
        axios.post("http://localhost:8002/api/authors",authorObject)
        .then(res => {
            console.log(res.data)
            setAuthors([...authors ,res.data])
            navigate("/authors")

    })
        .catch(err =>{
            console.log(err.response)
            setErrorMessage( err.response.data.errors);
        })
    }

    const removeFromDom = (authorId) =>{
        setAuthors(authors.filter(author => author._id != authorId))
    }
  return (
    <>
            
        
            <Routes>
                <Route path ="/" element={<Homepage/>}/>
                <Route path ={"/authors"}  element ={<Authors authors={authors}  removeFromDom = {removeFromDom}/>} />
                <Route path ="/authors/new"  element ={<Form onSubmitProp = {addAuthor} initialName = "" errorMessage={errorMessage}/>}/>
            </Routes>
       
        
    </>
  )
}

export default Main