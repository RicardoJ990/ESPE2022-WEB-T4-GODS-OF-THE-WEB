import React, {useState} from 'react';
import '../App.css'
import '../index.css';
import { Box, TextField} from "@mui/material";

const FormTitle= (props) =>{
    const {formTitle, setformTitle}=props

    const handleChange= (event)=>{
        const {id, value}=event.target
        setformTitle({...formTitle,[id]:value})
    }
    const handelSubmit=(e)=>{
        e.preventDefaul()
    }

    return (
        
        <form>

            <Box 
                sx={{
                    width: '70%',
                    height: '90%',
                    marginLeft:'auto',
                    marginRight:'auto',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    paddingLeft:'20px',
                    paddingRight:'20px',
                    background: '',  /* fallback for old browsers */
                    borderRadius: '15px',
                    boxShadow: '1px 1px 20px #333'
                }}
            >
                
        

                {/* Paper */}
                <TextField fullWidth 
                    name='id' 
                    id="id" 
                    value={formTitle.id}
                    onChange={handleChange}
                    placeholder="Topic" 
                    label="SEARCH BY" 
                />
                
            </Box>
            
        </form>
            
    );

};

export default FormTitle;