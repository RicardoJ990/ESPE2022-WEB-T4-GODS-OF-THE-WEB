import Table from './Table'
import FormTitle from './FormTitle'
import {getTitle} from '../services/axios'
import '../index.css';
import {Box} from "@mui/material"
import React, {useEffect, useState} from 'react';

const TableLayout = () => {

    const [formTitle, setformTitle] = useState({
        id: ""
    })

    const [titles, setTitles] = useState([])
    console.log(formTitle.title)
    useEffect(() => {
        async function loadTitles() {
            try
            {
            const response = await getTitle(formTitle.title)

            if (response.status === 200) {
                setTitles(response.data)
            }
        } catch (error){

        }
    }

        loadTitles()
        
    }, [formTitle])


    return (
        <>
            <Box>
                <img src='../public/logo.png' alt='logo'></img>
            <br/><br/> <br/><br/>
                <FormTitle formTitle={formTitle} setformTitle={setformTitle} />
                <br/><br/>
                <Table titles={titles} />
            </Box>
        
        </>
    )
}
export default TableLayout