import React, {useState} from 'react';
import '../index.css';
import { Box, TexField } from '@mui/material';

const FormTitle=(props)=>{
    const {formTitle, setformTitle}=props

    const handleChange= (event)=>{
        const {name, value}=event.target
        setformTitle({...formTitle,[name]:value})
    }
    const handelSubmit=(e)=>{
        e.preventDefaul()
    }
}

return (
    <form>
    <Box
        sx={{
          width: '30%',
          height: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          paddingLeft: '20px',
          paddingRight: '20px',
          background: '#fff',
          borderRadius: '15px',
          boxShadow: '1px 1px 20px #333'
      }}
      >
        <TexField fullWidth
            name='title'
            id="title"
            value={formTitle.target.title}
            onChange={handleChange}
            placeholder="Search by Title"
            label="Title"
        />
      </Box>
    </form>
);

export default FormTitle;