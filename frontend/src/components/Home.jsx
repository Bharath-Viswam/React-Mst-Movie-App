import { Button, CircularProgress, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import AddMovie from './AddMovie';
const Home = () => {
    var[loading,setLoading] = useState(false)
    var[update,setUpdate] = useState(false)
    var[singleValue,setSingleValue] = useState([])
    var[data,setData] = useState([])
    useEffect(()=>{
        setLoading(true)
axios.get("http://localhost:3005/movies")
.then((res)=>{
setData(res.data)
setLoading(false)
})
.catch(err=>console.log(err))
    },[])
var deleteValues = (id)=>{
    axios.delete("http://localhost:3005/deletemovies/" +id)
    .then((res)=>{
        alert("deleted")
        window.location.reload(false)
    })
}
const updateValues = (value)=>{
    console.log("update clicked");
    setUpdate(true)
    setSingleValue(value)
    

}
var finalJsx=    <div style={{paddingTop:'110px'}}>
{loading? <CircularProgress color='primary'></CircularProgress>:
<Grid item xs={12} sm={12} md={12}>   
<TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Movie Name
                    </TableCell>
                    <TableCell>
                        Actor
                    </TableCell>
                    <TableCell>
                        Actress
                    </TableCell>
                    <TableCell>
                        Director
                    </TableCell>
                    <TableCell>
                        Released Year 
                    </TableCell>
                    <TableCell>
                        Camera 
                    </TableCell>
                    <TableCell>
                        Producer 
                    </TableCell>
                    <TableCell>
                        Language
                    </TableCell>
                   
                </TableRow>
            </TableHead>
            <TableBody>
               
      {data.map((val,i)=>{
        return(
            <TableRow>
            <TableCell>{val.moviename}</TableCell>
            <TableCell>{val.actor}</TableCell>
            <TableCell>{val.actress}</TableCell>
            <TableCell>{val.director}</TableCell>
            <TableCell>{val.year}</TableCell>
            <TableCell>{val.camera}</TableCell>
            <TableCell>{val.producer}</TableCell>
            <TableCell>{val.language}</TableCell>
            <TableCell>   
            <Button variant='contained' onClick={()=>updateValues(val)}>Edit <EditIcon/></Button>
        &nbsp;<Button variant='contained' onClick={()=>deleteValues(val._id)}>Delete <DeleteIcon/></Button>
            </TableCell>
            </TableRow>
        )
      })}
        
                
                     
                  
         
          
            </TableBody>
        </Table>
    </TableContainer>
</Grid>   
    
    }
   
</div>
if(update) finalJsx = <AddMovie data={singleValue} method='put'/>
  return finalJsx
}

export default Home