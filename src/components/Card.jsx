
import React from 'react';
import {Grid,CardContent}from '@material-ui/core';
import { Typography,Box,Card,makeStyles } from '@material-ui/core';
import Countup from 'react-countup';

const useStyle=makeStyles({
    header:{
        background:'#f5f5f5',
        padding:10,
        textAlign:"center",
        textTransform:'uppercase',
        textDecoration: 'underline'
    }
})

const Cardcomp=({cardTitle,value,desc,lastUpdate})=>{
    const classes=useStyle();
return(
    <Grid component={Card}  style={{margin:20,boxShadow:'5px 5px 0  0 rgb(137, 189, 241)'}}>
        <Box className={classes.header}>
            <Typography variant="h5" color="textSecondary">{cardTitle}</Typography>
        </Box>
        <CardContent>
            <Typography variant="h5">
                <Countup start={0} end={value} duration={3} separator=","/>
            </Typography>
            <Typography>{desc}</Typography>
            <Typography>{new Date(lastUpdate).toDateString()}</Typography>
        </CardContent>
    
    </Grid>
);
}
export default Cardcomp;