import React,{} from 'react'
import { Grid,makeStyles,CssBaseline,Container,Typography} from '@material-ui/core';
import {Card,Button} from 'react-bootstrap'
//import "./app.css"
const useStyles=makeStyles({
    container:{
  
        height:"100vh",
        backgroundImage: "url("+process.env.PUBLIC_URL + "./intro.png)",
        backgroundPosition:" center",
        backgroundSize:" cover",
        
      //border:"2px solid black",
    },
    navbar:{
        color:"white",
       // border:"2px solid white", 
    },
    intro:{
        paddingTop:"80px",
        height:"75vh",
        color:"white",
        //border:"2px solid white", 
    }
});
const Header=()=> {
    const classes=useStyles();
    return (
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl" disableGutters>
      <Grid container direction="column" className={classes.container} >


          <Grid items >
          <Grid container justify="center" className={classes.navbar}>
              <Grid items >
    <Typography variant="h4" style={{padding:"20px",fontWeight:"bold"}}align="center">(CovidJS)COVID-19 TRACKER</Typography>
            </Grid>
            </Grid>
          </Grid>



          <Grid items >
              
              <Grid container justify="center" alignItems="center" className={classes.intro}>
              <Grid items >
            <Typography variant="h4" style={{padding:"20px",fontWeight:"bold"}} align="center">HELLO I`M MUHAMMAD SANAN <br></br> A JavaScript Developer From Peshawar Pakistan.</Typography>
            <center>
            <Button href="https://www.facebook.com/sanankhan16" target="_blank" variant="primary">Profile</Button>
            </center>
            <Typography variant="body1" style={{padding:"20px",fontWeight:"bold"}} align="center">IF YOU LIKE MY APP PLEASE SHARE IT WITH YOUR FRIENDS AND FAMILIY</Typography>
            </Grid>
            </Grid>


          </Grid>

</Grid>

      </Container>
    </React.Fragment>
        
    )
}

export default Header;
