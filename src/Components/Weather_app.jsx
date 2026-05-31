import { useEffect, useState } from "react";
import Searchbox from "./Searchbox";
import Button from "@mui/material/Button";
import Weathercard from "./Weathercard";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
function Weather_app() {
    const[city,setCity]=useState("dehradun");
    const[weather,setWeather]=useState({});
    const[loading,setLoading]=useState(false);
    const[error,setError]=useState("")


   async function getweather(){
     setLoading(true);
   let res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=8aad405979b44e7eb0564011263105&q=${city}`
   );

   let data = await res.json();
     if(data.error){
        setError(data.error.message)
        setWeather({})
   setLoading(false)
    setCity("")

     }else{
        console.log(data)
   setWeather(data)
   setLoading(false)
   setError("")
   setCity("")
     }
    
}

  useEffect(()=>{
     getweather();
  },[])

    return ( 
        <>
        <AppBar position="static">
   <Toolbar sx={{ justifyContent: "center" }}>
      <Typography >
         Weather Dashboard
      </Typography>
   </Toolbar>
</AppBar>
        
        <div style={{
    width: "400px",
    margin: "20px auto",
    textAlign: "center"
  }}>
          <Searchbox city={city} setCity={setCity}/>
        <Button onClick={getweather} variant="contained" sx={{ml:1 , mt:1}}>search</Button>
        </div>
       {error && (
   <Alert>
      {error}
   </Alert>
)}
          {loading? <CircularProgress />:
           <div>
             {weather.location && (
   <Weathercard weather={weather}/>
)}
           </div>
           
           }

           
      
        </>
     );
}

export default Weather_app;