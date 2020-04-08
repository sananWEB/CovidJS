import React,{useEffect,useState,Fragment} from 'react'
import axios from "axios"

import {Card,Button} from 'react-bootstrap'
import { Grid,CssBaseline,Container,makeStyles, Typography} from '@material-ui/core'




const useStyles=makeStyles({
    main:{
        
        backgroundImage: "url("+process.env.PUBLIC_URL + "./covid.png)",
        backgroundPosition:" center",
        backgroundSize:" cover",
        backgroundRepeat:"no-repeat",
        backgroundAttachment: "fixed",
        maxheight:"100vh"
                 
         
    }

});

function Covid() {

    const[a,an]=useState([])
    

    useEffect(()=>{
        axios.get("https://corona.lmao.ninja/countries")
        .then(promise=>{
            
            //console.log(promise.data[8].countryInfo.flag)
             an(promise.data);
        })
         .catch(error=>{
             console.log(error)
         })
    },[])
const classes=useStyles();
const[input,inputn]=useState("")
const change=(e)=>{
        inputn(e.target.value)
}
  
const filterr=a.filter((contryy)=>{
    return contryy.country.toLowerCase().includes(input.toLowerCase())
})
  
    return (

        
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" disableGutters>
          <Grid className={classes.main}>



            <Grid item >
            <Grid container justify="center" >
              <Grid items >
              <Typography style={{fontWeight:"bold",padding:"20px",color:"white"}} variant="h4">Enter YOUR COUNTRY NAME</Typography>
              <center>
              <input style={{margin:"20px"}}type="text" onChange={change} value={input}/>
                 </center>
            </Grid>
            </Grid>
    
            </Grid>




            <Grid item >
            <Grid container justify="center"style={{maxheight:"100vh"}}>


            {filterr.map((i)=>
    <Grid items key={i.country} style={{padding:"15px"}}>
    <Card  style={{ width: '18rem',}}>
        <Card.Img variant="top" src={i.countryInfo.flag} />
    <Card.Body>
  <center>
<Card.Title>{i.country}</Card.Title>
<Card.Text>
    <b>Cases:</b><span>{i.cases}</span><br/>
   <b>TodayCases:</b><span>{i.todayCases}</span><br/>
  <b>Deaths:</b><span>{i.deaths}</span><br/>
       <b>TodayDeaths:</b><span>{i.todayDeaths}</span><br/>
       <b>Recovered:</b><span>{i.recovered}</span><br/>
       <b>Active:</b><span>{i.active}</span><br/>
       <b>Critical:</b><span>{i.critical}</span><br/>
        <b>CasesPerOneMillion:</b><span>{i.casesPerOneMillion}</span><br/>
        <b>DeathsPerOneMillion:</b><span>{i.deathsPerOneMillion}</span><br/>
        <b>Tests:</b><span>{i.tests}</span><br/>
        <b>TestsPerOneMillion:</b><span>{i.testsPerOneMillion}</span><br/>
  
</Card.Text>
</center>
</Card.Body>
</Card>
</Grid>

            )}
            
        
                
              








            </Grid>
    
            </Grid>

            
            

          </Grid>
        </Container>
        <center>
            <div style={{backgroundColor:"white"}}>
        <b>Copyright 2020</b>
        </div>
        </center>
      </React.Fragment>


 
    
            
    )
}

export default Covid;

