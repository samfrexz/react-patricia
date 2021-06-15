import React, {} from 'react'
import { makeStyles } from '@material-ui/core';
import logo from '../Assets/logo.png'
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import category from '../Assets/Category.png'
import activity from '../Assets/Activity.png'
import wallet from '../Assets/Wallet.png'
import product from '../Assets/product.png'
import referral from '../Assets/referral.png'
import question from '../Assets/question.png'
import useMediaQuery from '@material-ui/core/useMediaQuery';



const linkStyles = makeStyles((theme)=> ({
  link: {
    width: '75%', 
    margin: '0 auto', 
    display: 'flex',
    flexDirection: 'column',
    zIndex: '-1'
  },
  help: {
    marginTop: '32rem', 
    width: '75%', 
    margin: '0 auto',
  },
  helpMobile: {
    marginTop: '10rem', 
    width: '100%', 
    margin: '0 auto',
  }
  }))



const SideBar = () => {

  const classes = linkStyles()
  const mobile = useMediaQuery('(min-width: 1000px)')
  const mob = useMediaQuery('(max-width: 1000px)')
  
  
  const navStyles = {
    imgg: {
      textAlign: 'center',
      marginBottom: '6rem',
      paddingTop: '0.6rem',
    }
  };

  return ( 
   <>
    
   { mobile ? <div style={{...navStyles.imgg}}>
      <img src={logo} alt="compny's logo" style={{width: '135px'}} />
    </div> : ''
  }
  
    <List className={classes.link}>
      <ListItem button>
        <ListItemIcon> <img src={category} alt="" /></ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      <ListItem button>
        <ListItemIcon> <img src={activity} alt="" /></ListItemIcon>
        <ListItemText primary="Activity" />
      </ListItem>

      <ListItem button>
        <ListItemIcon> <img src={wallet} alt="" /></ListItemIcon>
        <ListItemText primary="Wallet" />
      </ListItem>

      <ListItem button>
        <ListItemIcon> <img src={product} alt="" /></ListItemIcon>
        <ListItemText primary="Product" />
      </ListItem>

      <ListItem button>
        <ListItemIcon> <img src={referral} alt="" /></ListItemIcon>
        <ListItemText primary="Referral" />
      </ListItem>
    </List>
    
    <List className={mob ? classes.helpMobile : classes.help}>
      <ListItem>
        <ListItemIcon><img src={question} alt="" /> </ListItemIcon>
        <ListItemText primary="Help Center" />
      </ListItem>
    </List>
    
    </> 
   );
}
 
export default SideBar;



// const pageWidth = document.body.offsetWidth;
// const pageThreshold = 650;

// const itemClass = todo.done ? classes.done : 'todo.item'

// const [description, setDescription] = useState(
//   pageWidth > pageThreshold
// )

// const handleDescription =()=> {
//   setDescription(!description)
//   if (pageWidth <= pageThreshold) {
//     setDescription(!description)
//   } 
// }