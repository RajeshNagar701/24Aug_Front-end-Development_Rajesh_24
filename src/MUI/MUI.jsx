/*

Move faster
with intuitive React UI tools

Material UI is an open-source React component library that implements Google's Material Design. 
It's comprehensive and can be used in production out of the box.

MUI offers a comprehensive suite of free UI tools to help you ship new features faster. 
Start with Material UI, our fully-loaded component library, or bring your own design system to 
our production-ready components.


https://mui.com/material-ui/getting-started/installation/


Ready to use components free forever

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid




*/


import React from 'react'
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function MUI() {

    return (
        <div>
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>

            <hr />

            <Button variant="outlined" startIcon={<DeleteIcon />}>
                Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
                Send
            </Button>

            <hr />

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                    <Grid item xs={8}>
                        <Item>xs=8</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default MUI