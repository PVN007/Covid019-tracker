import { useEffect,useState } from "react"
import { fetchCountries } from "../service/Api"
import { NativeSelect, Typography } from '@material-ui/core';

const Countries=({ handleCountryChange })=>{
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        const fetchApi = async() =>{
           setCountries(await fetchCountries());
        }
        fetchApi();
        
    },[])
    return(
        <>
        <Typography syle= {{marginBottom:20}} variant="h5" color="textSecondary">Reported Cases or Deaths by Country or Territory</Typography>
        <NativeSelect onChange = {(e) => handleCountryChange(e.target.value)}>
            <option value= "">United State</option>
            {countries.map((country,i) => {
                return(<option>{country}</option>);

            })}
           
        </NativeSelect>
        </>
    )
}

export default Countries;