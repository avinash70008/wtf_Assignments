import React from 'react'
import {Image,Input,Icon, Spacer, color  } from '@chakra-ui/react'
import {BsSearch} from "react-icons/bs"


const Home = () => {
  return (
    <div>
    <div style={{
        backgroundImage: "linear-gradient(to bottom right, rgb(150, 20, 20), rgb(40, 00, 00))",
        overFlow:"scroll"
     }}>

<Image style={{
    height:"430px"
}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPpDnaLKAWPE1VBnoju1fmD43MLL73VW-CGw&usqp=CAU' />





    </div>
    <div style={{
         backgroundColor:"black",
         marginTop:"20px"
    }}>
    <Icon as = {BsSearch} />
     <Input  style={{
       
        marginLeft:"10px",
        color:"white"
       
        
        
    }} 
   placeholder= 'Search Gym name here...'/>
  <div style={{
    display:"flex"
  }}>
<div style={{
textAlign:"start",
marginTop:"30px",
marginLeft:"50px",
height:"700px",


}}>
    <div style={{
        display:"flex",
       
    }} >
    <h1 style={{
        fontSize:"20px",
        color:"white"
    }}>Filter</h1>
<button style={{
    padding:"10px",
    color:"white",
    backgroundColor:"red",
    marginLeft:"20px"
}}>Reset</button>
</div>

    <h5 style={{
        color:"white",
        marginTop:"30px"
    }}>Location</h5>
    <input placeholder='Enter Location' />
   
    <h6 style={{
        color:"white"
    }}>Price</h6>
    
    <input style={{
        width:"80px",
       
    }} placeholder='Min' />
    <input style={{
        marginLeft:"20px",
        width:"80px"
    }} placeholder='Max' />
    <div style={{
        marginTop:"10px"
    }}>
        <h1 style={{
            color:"white"
        }}>Cities</h1>
    <select>
        <option >Select city</option>
        <option>New Delhi</option>
        <option>Gajiabad</option>
        <option>Noida</option>
        <option>Delhi</option>
       

    </select>
    <div style={{
        border:"1px solid white",
        marginLeft:"250px",
        color:"white"
    }}>
<p>sdkjdsdsjdjsk</p>
<p>sdkjdsdsjdjsk</p>
<p>sdkjdsdsjdjsk</p>
<p>sdkjdsdsjdjsk</p>
<p>sdkjdsdsjdjsk</p>
<p>sdkjdsdsjdjsk</p>
<p>sdkjdsdsjdjsk</p>
    </div>
   
    </div>
    </div>


</div>




</div>

<div style={{
    height:"300px",
    backgroundImage: "linear-gradient(to bottom right, rgb(255, 0, 0), rgb(255, 10, 50))",

}}>

<div style={{
    
    textAlign:"start",
    marginLeft:"240px",
    color:"white",
   

}}>
    
    <h1>WTF FITNESS</h1>
    <h1>EXPERIRNCE</h1>
    <h1>@ YOUR REGULAR</h1>
    <h1>gYM cOST</h1>
</div>
<image src="https://wtfup.me/assets/loader.gif"/>


</div>




    </div>
  )
}

export default Home