import React from 'react'
import piza from '../../public/piza2.png'
import Image from 'next/image'
import { connect } from 'react-redux'
import abcd from '../../styles/Index.module.css'
function cart({cart1,removecart}) {
    let sum=0
    
    for(let i=0;i<cart1.length;i++){
        sum+=cart1[i].price*cart1[i].qty
    }
    console.log(abcd.maincart)
  return (
    <div >
        {cart1.length!=0?
        <div className={abcd.maincart} >
        <div className={abcd.tablec} >
            
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Name</th>
                        
                        <th>price</th>
                        <th>quantity</th>
                        <th>total</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody >
                    {cart1.map((obj)=>(
                        <tr style={{textAlign:'center'}}>
                            <td >
                                <Image src={obj.image} height='70' width={70}/>
                            </td>
                            <td>{obj.name}</td>
                            
                            <td>{obj.price}</td>
                            <td>{obj.qty}</td>
                            <td>{obj.price*obj.qty}</td>
                            <td><button onClick={()=>removecart(obj.id)} style={{backgroundColor:'red',color:'white',cursor:'pointer',border:'none'}}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            

        </div>
        <div className={abcd.totalno} >
            <h2>CART TOTAL</h2>
            <br/>
            
            <span>Subtotal: $ {sum}</span>
            <h5>Discount: 0.00</h5>
            <span>Total: {sum}</span>
            
            <br/>
            <br/>
            <button style={{width:'80%',fontWeight:'bold',height:'2rem'}}>checkout now</button>
        </div>
        </div>
        :
        <div style={{height:'10rem',width:'100%',display:'flex',justifyContent:'center',alignItems:'center',color:'red'}}>
            <h1>NO ITEM IN CART</h1>
        </div>
        }
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        cart1:state.cart
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        removecart:(id)=>dispatch({type:'REMOVECART',payload:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(cart)