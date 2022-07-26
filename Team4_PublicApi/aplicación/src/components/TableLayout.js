import Table from './Table'
import FormPapers from './FormPapers'
import {getId} from '../services/papersAxios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';

const TableLayout = () => 
{

    const [formPapers, setformPapers] = useState({
        id:""
    })

    const [papers, setPapers] = useState([])
    console.log(formPapers.papers)
    useEffect(() => {
        async function loadPapers() {
            try
            {
            const response = await getId(formPapers.id)

            if (response.status === 200) {
                setPapers(response.data)
            }
            }catch (error){
        }
    }
    
         loadPapers()

    }, [formPapers])


    return (
        <>
            <Box>
            <img src='../public/logo.png' alt='logo'></img>
            <br/><br/> <br/><br/>
                <FormPapers formPapers={formPapers} setformPapers={setformPapers} />
                <br/><br/>
                <Table papers={papers} />
            </Box>
        
        </>
    )
}
export default TableLayout
