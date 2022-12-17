import React from 'react'
import piza from '../../public/piza2.png'
import db from '../../component/db.json'
import Image from 'next/image'
import {  connect } from 'react-redux'
function product({currp,addtocart}) {

  return (
    <>
    {currp!=null?
    <div style={{width:'100vw',paddingBottom:'3px',display:'flex'}}>
        <div style={{height:'calc(100vh - 100px)',width:'50%',position:'relative',zIndex:'4'}}>
            <Image src={currp.image} fill/>
        </div>
        <div style={{width:'50%',paddingTop:'1rem'}}>
            <h3>{currp.name}</h3> 
            <br/>
            <br/>
            <span style={{color:'brown',fontSize:'2rem'}}>$ {currp.price}</span>
            <br/>
            <br/>
            <br/>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley
                  <br/>
                  <br/><br/>
            </p>
            <span style={{fontWeight:'bold'}}>Choose the size </span>
            <div style={{display:'flex',alignItems:'center', heigth:'20%'}}>
                <div style={{marginRight:'1rem'}}><Image src={currp.image} height='40' width={40}/></div>
                <div style={{marginRight:'1rem'}}><Image src={currp.image} height='55' width={55}/></div>
                <div><Image src={currp.image} height='70' width={70}/></div>
                
            </div>
            <span style={{fontWeight:'bold'}}>Choose additional ingredient</span>
            <div style={{display:'flex',margin:'1rem'}}>
                {currp.ingredients.map((ing)=>(
                   <div style={{marginRight:'1rem'}}>
                        <input type={'checkbox'} style={{height:'1.5rem',width:'1.5rem'}}/>
                        <label>{ing}</label>
                    </div> 
                ))}
            </div>
            <input type={'number'} style={{ marginRight:'1rem',height:'2rem',width:'3rem',border:'solid 1px'}} defaultValue={1}/>
            <button onClick={()=>addtocart(currp)} style={{backgroundColor:'greenyellow' ,border:'none' ,height:'2rem',width:'6rem',cursor:'pointer'}}>ADD to Cart</button>
            
        </div>
    </div>
    :
    <div style={{height:'calc(100vh - 100px)',width:'100vw',textAlign:'center',paddingTop:'5rem',color:'red'}}>
        <h1>go to home</h1>
    </div>}
    </>
  )
}
const mapStateToProps=(state)=>{
    return{
        currp:state.currproduct
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addtocart:(c)=>dispatch({type:'ADDTOCART',payload:c})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(product)