 import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
function Searchbox({city,setCity}) {

    function changehandle(e){
        setCity(e.target.value)
        
    }
    return ( 
        <>
       
          <TextField value={city} label="Search City" onChange={changehandle} ></TextField>

        
      
       
        </>
     );
}

export default Searchbox;