import React,{useState,useEffect} from 'react';
import Form from './Form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const Update = (props) => {
    const [errorMessage , setErrorMessage] = useState()
    const [person , setPerson] = useState({})
    // const {authors} = props
    const {id} = useParams();
    const [loaded , setLoaded] = useState(false);
    const navigate = useNavigate()
    // console.log(id)
    useEffect(()=>{
        axios.get(`http://localhost:8002/api/authors/${id}`)
        .then(res => {
            console.log(res.data)
            setPerson(res.data)
            setLoaded(true)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const updateAuthor = (authorObject) =>{
        axios.put(`http://localhost:8002/api/authors/${id}`,authorObject)
        .then(res => {
            console.log(res.data)
            // authors.push(res.data)
            navigate("/authors")
        }
        ).catch(err => {console.log(err)
            setErrorMessage(err.response.data.errors)
        })

    }
  return (
    <>
    {
        loaded && <Form onSubmitProp = {updateAuthor} initialName ={person.name} errorMessage = {errorMessage}/>
    }
    </>
  )
}

export default Update