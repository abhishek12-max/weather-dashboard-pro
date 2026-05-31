import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Weathercard({weather}) {
    return ( 
        <>

       <Card sx={{ mt: 3, maxWidth:350, mx:"auto" }}>
          <CardContent >
              <div style={{ textAlign: "center" }}>
   <img
      src={`https:${weather.current?.condition?.icon}`}
      alt="weather icon"
   />
</div>
            <Typography variant="h6" sx={{mr:2 ,textAlign:"center", mb:1}}> Name:{weather.location?.name}</Typography>
            <Typography variant="body1"sx={{mr:2}} >Temperature:{weather.current?.temp_c}°C</Typography>
            <Typography variant="body2" sx={{mr:2}}>Condition:{weather.current?.condition.text}</Typography>
            <Typography variant="body2" sx={{mr:2}}>Humidity:{weather.current?.humidity}%</Typography>
            <Typography variant="body2" sx={{mr:2}}>Wind:{weather.current?.wind_kph}km/h</Typography>

          </CardContent>
       </Card>

        </>
     );
}

export default Weathercard;