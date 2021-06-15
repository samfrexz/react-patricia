import React, { } from 'react'
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import download from '../Assets/Download.png'
import naira from '../Assets/naira.png'
import telephone from '../Assets/telephone.png'
import Download from '../Assets/Download.png'
import frame from '../Assets/Frame 1.png'
import rdate from '../Assets/Group 1808.png'
import vector from '../Assets/Vector (1).png'
import vect from '../Assets/vector (2).png'
import Naira from '../Assets/transparentN.png'
import group2304 from '../Assets/Group 2304.png'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import SideBar from '../Pages/SideBar'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Paper from '@material-ui/core/Paper';
import Profile from '../Pages/Profile'




const useStyles = makeStyles((theme)=> ({
  nairaImg: {
  float: 'left',
   marginRight: '1rem',
    width: '45px'
},
  grid: {
    borderRight: '1px solid #EFF2F7;'
  },
  request: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem'
  },
  requestMobile: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem',
    flexDirection: 'column',
  },
  recae: {
    display: 'flex',
     marginTop: '2rem'
  },
  reqPaper: {
    width: '50%',
    display: 'flex',
    height: '14vh',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '24px',
    padding: '0 0.6rem'
  },
  reqMobile: {
    width: '100%',
    display: 'flex',
    height: '14vh',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: '24px',
    padding: '0 0.6rem'
  },
  reqImage: {
    verticalAlign: 'middle',
    marginRight: '1rem'
  },
  recent: {
    width: '100%',
    borderRadius: '20px',
    marginBottom: '1rem'
  },
  activity: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1rem 0.6rem',
    alignItems: 'center'
  },
  gridMobile: {
    border: 'none'
  }
}))

const Home = ({ showLink }) => {

  const classes = useStyles()
  
  const pat = useMediaQuery('(max-width: 1000px)')

  // const [showLinks, setShowLinks] = useState(true)


  return ( 
    <>
    <Grid container>

        {/* ***********************************this is the side nav **************************** */}
      <Grid item lg={2} className={pat ? classes.gridMobile : classes.grid}>
       
       {showLink && <SideBar /> 
      }
      </Grid>

      <Grid item xs={12} lg={6} className={pat ?classes.gridMobile : classes.grid}>
          <Container>
            <Typography variant="h3">
              Wallet
            </Typography>

            <div>
              <img src={naira} alt="currency symbol" className={classes.nairaImg} />
              <h2>Naira Wallet <img src={download} alt="" /></h2>
              <p>Lorem Ipsum dolor sit amet </p>
            </div>

            <div>
              <img src={group2304} alt="" style={{width: '100%', marginTop: '2rem',}} />
            </div>

            <div className={pat ? classes.requestMobile : classes.request}>
              <Paper className={pat ? classes.reqMobile : classes.reqPaper}>
                <h3><img src={frame} alt="" className={classes.reqImage} /> Request Money</h3>
                <img src={vector} alt="" />
              </Paper>

              <Paper className={pat ? classes.reqMobile : classes.reqPaper}>
               <h3><img src={telephone} alt="" className={classes.reqImage} /> Cardless Withdrawal</h3>
                <img src={vect} alt="" />
              </Paper>
            </div>

            <div className={classes.recae}>
              <Paper className={classes.recent}>
               <div className={classes.activity}>
                 <p>Recent Activity</p>
                <span>
                <img src={rdate} alt="" />
                 <img src={Download} alt="" />
                </span>
               </div>

               <div className={classes.activity}>
                 <p>
                   <img src={Naira} alt="" className={classes.reqImage} />
                   Self  Withdrawal
                   </p>
                  <p>0.003 BTC</p>
                  <p>Just now</p>
                  <p>Success</p>
               </div>
              <Paper elevation="2">
               <div className={classes.activity}>
                 <p>
                   <img src={Naira} alt="" className={classes.reqImage} />
                   Deposit
                   </p>
                  <p>0.003 BTC</p>
                  <p>Today</p>
                  <p>Failed</p>
               </div>
               </Paper>
               <div className={classes.activity}>
                 <p>
                   <img src={Naira} alt="" className={classes.reqImage} />
                   Transfer
                   </p>
                  <p>0.003 BTC</p>
                  <p>7:23am</p>
                  <p>Pending</p>
               </div>

               <div className={classes.activity}>
                 <p>
                   <img src={Naira} alt="" className={classes.reqImage} />
                   Deposit
                   </p>
                  <p>0.003 BTC</p>
                  <p>Yesterday</p>
                  <p>Success</p>
               </div>
              </Paper>
            </div>

          </Container>
      </Grid>

      <Grid item xs={12} lg={4} >
        <Profile />
      </Grid>

    </Grid>
    </>
   );
}
 
export default Home;