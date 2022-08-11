import React from 'react';
import {Box} from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { IconButton, Button } from "@mui/material";
import '../index.css'

const Table=(props)=>{
    const titles= props.titles

console.log(titles)

const columns = [
    { field: 'n', headerName:"ID", width: 200},
    { field: 'id', headerName: 'URL', width: 300, 
    renderCell: (params) =>
    (
        <IconButton
            href={`https://journals.plos.org/plosone/article?id=${params.id}`}
            >
                <Button>{params.id}</Button>
            </IconButton>
    ),
    },
    {field: 'journal', headerName: 'Journal', width: 200},
    {field: 'eissn', headerName: 'Eissn', width: 200},
    {field: 'publication_date', headerName: 'Publication date', width: 200},
    {field: 'article_type', headerName: 'Article type', width: 200},
    {field: 'author_display', headerName: 'Author display', width: 200},
    {field: 'title_display', headerName: 'Title display', width: 200},
    {field: 'score', headerName: 'Score', width: 200},
]

return (
    <Box
        sx={{
            width: '70%',
            height: '82%',
            marginLeft:'auto',
            marginRight:'auto',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            paddingLeft:'20px',
            paddingRight:'20px',
            background: '#fff', 
            borderRadius: '15px',
            boxShadow: '1px 1px 20px #333'
        }}
    >

        <h1>List de Articulos</h1><br/>

        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows  = 
                { 
                    titles.map(item => (
                        {
                            n: Math.random() * (100000 - 1) + 1,
                            id:item.id,
                            title_display: item.title_display,
                            journal: item.journal,
                            eissn: item.eissn,
                            publication_date: item.publication_date,
                            article_type: item.article_type,
                            author_display: item.author_display,
                            score: item.score

                        }
                    )) 
                }
                
                columns={columns}
            
                pageSize={10}
                rowsPerPageOptions={[10]}
            />
        </div>
    </Box>
);
}
export default Table