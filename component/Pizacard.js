import React from 'react'
import Image from 'next/image'
import piza from '../public/piza2.png'
import Link from 'next/link'
import { connect, Connect } from 'react-redux'
function Pizacard({p,addcurrp}) {
  return (
    <div style={{heigth:'8rem',width:'15rem',margin:'1rem'}}>
          
        <Image src={p.image} height={100} width={100}/>
        <h3>{p.name}</h3> 
        <span>$ {p.price}</span>
        <p>{p.vegetarian?'vegetarian':'nonvegetarian'}</p>
        <Link href={`/Viewproduct/${p.id}`}> <button onClick={()=>addcurrp(p)} style={{backgroundColor:'greenyellow',border:'none',fontWeight:'bold',cursor:'pointer' ,padding:'2px',marginTop:'1rem'}}>View Item</button></Link>
    </div>
  )
}
const mapDispatchToProps=(dispatch)=>{
  return{
    addcurrp:(p)=>dispatch({type:'ADDCURRP',payload:p})
  }
}
export default connect(null,mapDispatchToProps)(Pizacard)