import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import React, {useState} from 'react';
import profile from '../Assets/profile.png'
import phone from '../Assets/phone.png'
import chart from '../Assets/chart.png'
import learnn from '../Assets/learnn.PNG'
import vec from '../Assets/vector (2).png'
import vector from '../Assets/Vector (1).png'
import bank from '../Assets/bank.png'
import Paper from '@material-ui/core/Paper';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';







const profileStyles = makeStyles((theme)=> ({
  profileImage: {
    height: '16vh', 
    width: '100%'
  },
  transfer: {
    width: '100%',
    borderRadius: '20px', 
    paddingBottom: '1rem'
  },
  transText: {
    display: 'flex', 
    height: '13vh', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  btn: {
    width: '50%', 
    height: '13vh', 
    borderTopRightRadius: '20px', 
    textTransform: 'capitalize', 
    fontSize: '1.6rem',
    background: '#EFF2F7', 
    color: '#9DA8B6',
    '&:hover': {
      background: '#EFF2F7'
    }
  },
  btnLeft: {
    width: '50%', 
    height: '13vh', 
    textTransform: 'capitalize', 
    fontSize: '1.6rem',
    '&:hover' : {
      background: '#fff'
    }
  },
  select: {
    height: '13vh', 
    width: '50%', 
    textAlign: 'center', 
    margin: '0 auto', 
    marginTop: '2rem'
  },
  reqImage: {
    verticalAlign: 'middle', 
    marginRight: '1rem'
  },
  method: {
    display: 'flex', 
    justifyContent: 'space-between', 
    height: '13vh',
    alignItems: 'center', 
    padding: '0 0.7rem', 
    borderRadius: '24px',
    marginBottom: '1rem'
  }
}))


const Profile = () => {
  const classes = profileStyles()

  const pat = useMediaQuery('(max-width: 1000px)')
  const [showMethods, setShowMethods] = useState(true)
  const [hideMethods, setHideMethods] = useState(false)

  const handleMethods =()=> {
    setShowMethods(!showMethods)
    setHideMethods(!hideMethods)
  }

  return ( 
    <>
    <Container>
      <div className={classes.profileImage}>
        <img src={profile} alt="" style={{float: 'right'}}/>
      </div>

        <Paper className={classes.transfer}>
          <div className={classes.transText}>
           <Button className={classes.btnLeft}>Deposit</Button>
           <Button className={classes.btn}>Transfer</Button>
          </div>
            <br />
          <div className={classes.select}>
            <h3>Select a method to fund Naira wallet below</h3>

            {pat ?<Button variant="outlined"
              onClick={handleMethods}
              endIcon={<ArrowDropDownIcon />}>
              Select
            </Button> : ''
}
          </div>

          {showMethods ? <Container>
            <Paper className={classes.method}>
              <h3>
              <img src={bank} alt="" className={classes.reqImage} />
                Bank Deposit
              </h3>
              <img src={vec} alt="" />
            </Paper>

            <Paper className={classes.method}>
              <h3>
              <img src={phone} alt="" className={classes.reqImage} />
                USSD Deposit
              </h3>
              <img src={vector} alt="" />
            </Paper>

            <Paper className={classes.method}>
              <h3>
              <img src={chart} alt="" className={classes.reqImage} />
                Card Deposit
              </h3>
              <img src={vector} alt="" />
            </Paper>

            <Paper className={classes.method} style={{background: '#DEF5F2'}}>
              <img src={learnn} alt="" className={classes.reqImage} />
              <h2>
              Learn More about Funding your wallet
              </h2>
              <img src={vec} alt="" />
            </Paper>

          </Container> : hideMethods
    }
        </Paper>
      
    </Container>
    </>
   );
}
 
export default Profile;