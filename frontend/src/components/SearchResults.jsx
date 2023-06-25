import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const SearchResults = () => {
    const[searchResults,setSearchResults] = useState([])
    const {qry} = useLocation().state


        useEffect(()=>{
            console.log(qry)
            console.log("link","http://localhost:3005/search/" + qry.qry);
            axios.get("http://localhost:3005/search/" + qry.qry)
            .then((res)=>{
                setSearchResults(res.data)
              
                console.log("data",res.data)
            })
            .catch(err=>console.log(err))
        },[])
        

  return (
    <div style={{paddingTop:'110px'}}>
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
               
      {searchResults.map((val,i)=>{
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
       
            </TableRow>
        )
      })}
        
                
                     
                  
         
          
            </TableBody>
        </Table>
    </TableContainer>
    </div>
  )
}

export default SearchResults