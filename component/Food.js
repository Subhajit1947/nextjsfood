import React from 'react'
import Pizacard from './Pizacard'
import db from './db.json'
function Food() {
  return (
    <div style={{textAlign:'center'}}>
        <h1>The best pizza in kolkata</h1>
        
        <p>When you develop a mockup page or backend API is not ready for data fetching <br/> and you have to make Frontend Development with static data until it comes,<br/> react-lorem-ipsum will create your gibberish texts for you</p>
        <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap',width:'100vw'}}>
          {
            db.map((p)=>(
              <Pizacard p={p}/>
            ))
          }
            
            {/* <Pizacard/>
            <Pizacard/>
            <Pizacard/>
            <Pizacard/>
            <Pizacard/>
            <Pizacard/> */}
        </div>
    </div>
  )
}

export default Food