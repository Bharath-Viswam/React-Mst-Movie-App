import { Button, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const AddMovie = (props) => {
  const[inp,setInp]= useState(props.data)
  console.log("props.data",props.data);
  console.log("props.method",props.method);
  var navigate = useNavigate()
  const inputHandler = (e)=>{
    const{name,value} = e.target;
    setInp((inp)=>({...inp,[name]:value}))
    console.log(inp);
  }

 const addHandler = ()=>{
  if(props.method==="post"){
    axios.post("http://localhost:3005/addmovies",inp)
    .then((res=>{
   alert("movie added")
   navigate("/")
    }))
    .catch(err=>console.log(err))
     setInp({moviename:'',year:'',actor:'',camera:'',actress:'',producer:'',director:'',language:''})
  }
  if(props.method ==="put"){
    axios.put("http://localhost:3005/editmovies/" + inp._id,inp)
    .then((res)=>{
      alert("updated")
      window.location.reload(false)
    })
  }

 }
  return (
    <div style={{paddingTop:'110px'}}>
        
       <Grid container spacing={4} flexDirection={'row'} justifyContent={'center'}>
        <Grid   item  xs={12} sm={6} md={6}>
        <Button variant='contained'>Movie Name</Button> &nbsp;
            <TextField name='moviename' value={inp.moviename} onChange={inputHandler}></TextField>;
        </Grid>
           
            <Grid   item  xs={12} sm={6} md={6}>
            <Button variant='contained'>Released Year</Button> &nbsp; 
            <TextField name='year' value={inp.year} onChange={inputHandler}></TextField>
            </Grid>
            <Grid  item xs={12} sm={6} md={6}>
            <Button variant='contained'>Actor</Button> &nbsp; 
            <TextField name='actor' value={inp.actor} onChange={inputHandler}></TextField>
            </Grid>
            <Grid  item xs={12} sm={6} md={6}>
            <Button variant='contained'>Camera</Button> &nbsp; 
            <TextField name='camera' value={inp.camera} onChange={inputHandler}></TextField>
            </Grid>
            <Grid   item xs={12} sm={6} md={6}>
            <Button variant='contained'>Actress</Button> &nbsp; 
            <TextField name='actress' value={inp.actress} onChange={inputHandler}></TextField>
            </Grid>
            <Grid  item xs={12} sm={6} md={6}>
            <Button variant='contained'>Producer</Button> &nbsp; 
            <TextField name='producer' value={inp.producer} onChange={inputHandler}></TextField>
            </Grid>
            <Grid   item xs={12} sm={6} md={6}>
            <Button variant='contained'>Director</Button> &nbsp; 
            <TextField name='director' value={inp.director} onChange={inputHandler}></TextField>
            </Grid>
    
            <Grid   item xs={12} sm={6} md={6}>
            <Button variant='contained'>Language</Button> &nbsp; 
            <TextField name='language' value={inp.language} onChange={inputHandler}></TextField>
            </Grid>
            <br />
            <br />
            <br />
            <br/>
            <br />
            <Grid   item xs={12} sm={12} md={10}>
              <Button variant='contained' onClick={addHandler}>Add</Button>
            </Grid>

       </Grid>
 
    </div>
  )
}

export default AddMovie