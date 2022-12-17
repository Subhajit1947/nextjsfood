import cart from "../pages/cart"

const initialstate={
    cart:[],
    currproduct:null
}
const Reducerpro=(state=initialstate,action)=>{
    switch(action.type){
        case 'ADDCURRP':
            return {...state,currproduct:action.payload}
        case 'ADDTOCART':
            const item=action.payload
            const incart=state.cart.find((obj)=>obj.id==item.id)
            return{
                ...state,
                cart:incart?state.cart.map((obj)=>obj.id==item.id?{...obj,qty:obj.qty+1}:obj):[...state.cart,{...item,qty:1}]
            }
        case 'REMOVECART':
            let narr=state.cart.filter((obj)=>obj.id!=action.payload)

            return{
                ...state,
                cart:[...narr]
            }
        default:
            return state
    }
    
}
export default Reducerpro