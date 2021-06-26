import { makeStyles,Box, Typography,CircularProgress,Grid } from "@material-ui/core"
import Card from './Card';

const useStyle = makeStyles({
    component:{
        margin:'50px 0',
        flexDirection:'column',
        alignItems:'center',
        display:'flex'
    },
    container:{
       color:'#8aca2b', 
       textAlign:'center',
       textDecoration: 'underline',
       textTransform:'uppercase'
    }
})

const Cards =({data:{confirmed,recovered,deaths,lastUpdate}}) =>{
    const classes=useStyle();
    if(!confirmed){
        return <CircularProgress/>
    }
    return(
        <Box className={classes.component}>
        <Typography className={classes.container} variant="h4" gutterBottom>Coronavirus-Cases-Globally</Typography>
        <Grid container spacing={3} justify="center">
        <Card
            cardTitle="Infected"
            value={confirmed.value}
            desc="Number of Infected Cases of Covid-19"
            lastUpdate={lastUpdate}
        />
        <Card
            cardTitle="Recovered"
            value={recovered.value}
            desc="Number of Recovered Cases from Covid-19"
            lastUpdate={lastUpdate}
        />
        <Card 
            cardTitle="Deaths"
            value={deaths.value}
            desc="Number of Deaths Caused by Covid-19"
            lastUpdate={lastUpdate}

        />
        </Grid>
        </Box>
    );

}
export default Cards;