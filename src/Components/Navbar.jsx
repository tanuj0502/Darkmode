import React from 'react'

const Navbar = () => {
  
  return (
    <> 
     <nav >
     <img src="https://brotomotiv.in/wp-content/uploads/2021/12/logo-brotomotive.png" alt="" />
       <ul style={{display:"flex", justifyContent:"space-evenly"}}>
       <button>Sedan</button>
        <button>SUV</button>
        <button>Hatchback</button>
        <button>Convertible</button>
       <button>Log In</button>
       <button>Sign In</button>
       </ul>
    </nav></>
  )
}

export default Navbar