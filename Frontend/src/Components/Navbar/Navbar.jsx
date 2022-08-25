import React from 'react';
import { Flex, Spacer,Image,Text,Box, Button } from '@chakra-ui/react'



const Navbar = () => {
  return (
<Flex style={{
   backgroundImage: "linear-gradient(to bottom right, rgb(150, 20, 20), rgb(40, 00, 00))"
}}>

  <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTau8d8nl0peYcXgxEyn9yGmUvgsl4ctYagBw&usqp=CAU' alt='Wtf Logo'
  height="75px"
  m={5}
  
  />
<Spacer/>

  <Text style={{
    color:"white",
    padding:"10px",
    margin:"5px"
  }}>Fitness</Text>
  <Text  style={{
    color:"white",
    padding:"10px",
    margin:"5px"
  }}>Nutrition</Text>
  <Text  style={{
    color:"white",
    padding:"10px",
    margin:"5px"
  }}>Gyms</Text>
  <Text  style={{
    color:"white",
    padding:"10px",
    margin:"5px"
  }}>Become Etf Partners</Text>
  <Text  style={{
    color:"white",
    padding:"10px",
    margin:"5px"
  }}>About Us</Text>
  <Button  style={{
    color:"red",
    padding:"10px",
    margin:"5px"
  }}>Log In</Button>
 
    </Flex>
  
  )
}

export default Navbar