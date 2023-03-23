import { AppBar,Avatar,Badge,InputBase,styled, Toolbar, Typography } from '@mui/material'
import React from 'react'
import PetsIcon  from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';


import { Box } from '@mui/material';
const StyledToolbar = styled(Toolbar)({
  display:'flex',
  justifyContent:'space-between'
})
const Search =styled('div')(({theme})=>({
  backgroundColor:'white',
  justifyContent:'space-between',
  padding:'0 10px',
borderRadius: theme.shape.borderRadius,
width:'40%'
}))
const Icons=styled(Box)(({theme})=>({
 display:'none',
alignItems:'center',
gap:'20px',
[theme.breakpoints.up('sm')]:{
  display:'flex'
}
}))
const UserBox=styled(Box)(({theme})=>({
  display:'flex',
 alignItems:'center',
 gap:'10px',
 
 }))
function Navbar() {
  return (
   
    <AppBar position='sticky'>
    <StyledToolbar>
      <Typography variant='h6' sx={{display:{xs:'none',sm:'block'}}}>
      Navbar
      </Typography>
      <PetsIcon sx={{display:{xs:'block',sm:'none'}}}/>
      <Search><InputBase placeholder='Search...'/></Search>
      <Icons>
      <Badge badgeContent={4} color='error'>
        <MailIcon/>
      </Badge>
      <Badge badgeContent={2} color='error'>
        <Notifications/>
      </Badge>
      <Avatar src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg'/>
      </Icons>
      <UserBox>
      <Avatar src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg'/>
     <Typography variant='span'></Typography>
      </UserBox>
      </StyledToolbar>  
</AppBar>
  )
}

export default Navbar
