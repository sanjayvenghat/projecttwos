import React, { useEffect } from 'react' 
import { useState } from 'react' 
import { FaAngleDown, FaAngleUp } from "react-icons/fa"; 
import {  GoArrowDownRight } from "react-icons/go"; 
import { IoFastFood } from "react-icons/io5";
import { RiShoppingCart2Line } from "react-icons/ri";
import './App.css'
const App = () => {  
  let [arrs,setarr]=useState([]) 
  useEffect(()=>{ 
    let arr=[ 
      {
    revenue: 2.047,
          order: 356,
          dinein: 220,
        takeaway: 135
      } 
      
      
    
    ] 
   let random=Math.floor(Math.random()*1)
setarr(arr)

  },[])
  
  return (
    <div className='backgrd'>   
    
    
    { 
      
  arrs.map(val=>( 
  <div className='main'>  
  <div className='container'>   
  <div style={{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center', 
    height:"30%"
  }}> 
  <h3  className="texts" style={{
    margin:"20px"
  }}>Revenue</h3>  
  <p style={{
    margin:"20px",
    color:"red"
  }}>{Math.floor(Math.random()*10+1)+"%"}<span><FaAngleDown/></span></p>

  </div> 
  <div style={{
    display:'flex',
  
    alignItems:"center",
    height:"70%",
    width:"100%"
  }}>  
  <div style={{
    backgroundColor:"yellow",
    height:"30px",
    width:"30px",
    borderRadius:"50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginRight:"20px"
  }}>  
<GoArrowDownRight style={{
  color:"white"
}}/>
  </div>
  <h2>${val.revenue}</h2> 
  </div>
  
 
  
  </div> 
   
  <div className='container'>   
  <div style={{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center', 
    height:"30%"
  }}> 
  <h3 style={{
    margin:"20px"
  }}>Orders</h3>  
  <p style={{
    margin:"20px",
    color:"green"
  }}>{Math.floor(Math.random()*30+1)+"%"}<span><FaAngleUp/></span></p>

  </div> 
  <div style={{
    display:'flex',
  
    alignItems:"center",
    height:"70%",
    width:"100%"
  }}>  
  <div style={{
    backgroundColor:"green",
    height:"30px",
    width:"30px",
    borderRadius:"50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginRight:"20px"
  }}>  
<RiShoppingCart2Line style={{
  color:"white"
}}/>
  </div>
  <h2>${val.order}</h2> 
  </div>
  
 
  

  
  </div>   
  <div className='container'>   
  <div style={{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center', 
    height:"30%"
  }}> 
  <h3 style={{
    margin:"20px"
  }}>Dinein</h3>  
  <p style={{
    margin:"20px",
    color:"green"
  }}>{Math.floor(Math.random()*20+1)+"%"}<span><FaAngleUp/></span></p>

  </div> 
  <div style={{
    display:'flex',
  
    alignItems:"center",
    height:"70%",
    width:"100%"
  }}>  
  <div style={{
    backgroundColor:"red",
    height:"30px",
    width:"30px",
    borderRadius:"50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginRight:"20px"
  }}>  
<IoFastFood style={{
  color:"white"
}}/>
  </div>
  <h2>${val.dinein}</h2> 
  </div>
  
 
  

  
  </div>   
  <div className='container'>   
  <div style={{
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center', 
    height:"30%"
  }}> 
  <h3 style={{
    margin:"20px"
  }}>Takeaway</h3>  
  <p style={{
    margin:"20px",
    color:"red"
  }}>{Math.floor(Math.random()*20+1)+"%"}<span><FaAngleUp/></span></p>

  </div> 
  <div style={{
    display:'flex',
  
    alignItems:"center",
    height:"70%",
    width:"100%"
  }}>  
  <div style={{
    backgroundColor:"yellow",
    height:"30px",
    width:"30px",
    borderRadius:"50%",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    marginRight:"20px"
  }}>  
<IoFastFood style={{
  color:"white"
}}/>
  </div>
  <h2>${val.takeaway}</h2> 
  </div>
  
 
  

  
  </div>
 
  

  </div>
      ))

    
    }
  
    
     
    </div>
  )
}

export default App