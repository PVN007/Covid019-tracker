import React from 'react';
import {Component} from 'react';
import {Box,withStyles} from '@material-ui/core';
import logo from './image/image.jpg';
import Cards from './components/Cards'
import { fetchData } from './service/Api';
import { Typography } from '@material-ui/core';
import Countries from './components/Countries';
import Chart from './components/Chart';
import Profile from './components/Profile';



const style ={
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column'

  },
  header:{
    background:'#F5F5F5',
    textAlign:'center',
    fontSize:20,
    padding:10,
    color:'#777',
    position:'fixed',
    top:0,
    width:'100%',
    height:'5vh'

  },
  lastUpdate:{
    color:'#777',
    fontSize:20,
    padding:15,
    height:'5vh',
    marginTop:'40px'
  }
}



class App extends Component{
  state = {
    data: {},
    country: ''
  }

  async componentDidMount(){
  const fetcheData= await fetchData();
  this.setState({data:fetcheData})
  console.log(fetcheData);
  }
  handleCountryChange = async(country) => {
    const fetchedData = await fetchData(country);
    this.setState({data: fetchedData, country: country})
    console.log(fetchedData);
  }
  
  render(){
    const {data}=this.state;
    return(
      <Box className={this.props.classes.container}>
      <Box className={this.props.classes.header}>COVID-19 CORONAVIRUS PANDEMIC</Box>
      <Typography className={this.props.classes.lastUpdate} variant="h3">Last Updated:{data.lastUpdate && new Date(data.lastUpdate).toDateString()}</Typography>
      <img style={{width:350}} src={logo} alt="covid"/>
      <Cards data={data}/>
      <Countries handleCountryChange={this.handleCountryChange}/>
      <Chart data={data} />
      <Profile/>
      </Box>
    );
  }
}
export default withStyles(style) (App);