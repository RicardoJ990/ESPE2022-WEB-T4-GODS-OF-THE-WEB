import Table from './Table'
import FormPapers from './FormPapers'
import {getId} from '../services/papersAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';

const TableLayout = () => 
{

    const [formAbstracts, setformAbstracts] = useState({
        id:""
    })

    const [astracts, setAbstracts] = useState([])
    console.log(formAbstracts.abstracts)
    useEffect(() => {
        async function loadAbstracts() {
            try
            {
            const response = await getId(formAbstracts.id)

            if (response.status === 200) {
                setAbstracts(response.data)
            }
            }catch (error){
        }
    }
    
         loadAbstracts()

    }, [formAbstracts])


    return (
        <>
            <Box>
            <img src='../public/logo.png' alt='logo'></img>
            <br/><br/> <br/><br/>
                <FormAbstracts formAbstracts={formAbstracts} setformAbstracts={setformAbstracts} />
                <br/><br/>
                <Table abstracts={abstracts} />
            </Box>
        
        </>
    )
}
export default TableLayout
