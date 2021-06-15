import Home from "./Pages/Home";
import { makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider  } from "@material-ui/core";
import React, {useState} from 'react'


const theme = createMuiTheme({
  typography: {
    fontFamily: 'Poppins',
    fontWeightLight: '400',
    fontWeightMedium: '600',
    fontWeightRegular: '500',
    fontWeightBold: '700'
  }
})

const navStyles = makeStyles((theme)=> ({
  topNav: {
    width: '100%',
    height: '8vh',
    background: '#006156',
    display: 'flex',
    position: 'fixed',
    left: '0',
    right: '0',
    zIndex: '100',
    marginBottom: '3rem'
  },
  topContainer: {
    width: '93%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menu: {
    color: '#fff', 
    cursor: 'pointer', 
    border: '2px solid #fff'
  }
}))



function App() {
  const classes = navStyles()
  const mobile = useMediaQuery('(max-width: 1000px)')

  const pageWidth = document.body.offsetWidth;
  const pageThreshold = 1000;

  const [showLink, setShowLink] = useState(pageWidth >  pageThreshold)

  const handleLink =()=> {
      setShowLink(!showLink)
      if (pageWidth <= pageThreshold ) {
        setShowLink(!showLink)
      }
    }

  return (
    <>
    <ThemeProvider theme={theme}>
    { mobile ? <header className={classes.topNav}>
      <div className={classes.topContainer}>
        <img src="https://res.cloudinary.com/dslkhklbl/image/upload/v1623596245/logo-white_aj9tz5.svg" alt="" />
        <p><MenuIcon className={classes.menu} onClick={handleLink} /></p>
      </div>
    </header> : ''
  }
    <br />
    <Home showLink={showLink} />
    </ThemeProvider>
   
    </>
  );
}

export default App;
