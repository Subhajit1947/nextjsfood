import React,{useState} from 'react'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import cart1 from '../public/cart.png'
import Link from 'next/link'
import { connect } from 'react-redux'
function Navbar({cart}) {
    const [nav1,setnav1]=useState(false)
  return (
    <div className={styles.navbar}>
        <div className={styles.iboton} onClick={()=>setnav1(!nav1)}>
            <span></span>
            <span></span>
            <span></span>
            
        </div>
        <div className={nav1==true?styles.show:styles.abc}>
            <Link href={'/'}><h4 className={styles.na}>HomePage</h4></Link>
            <Link href={'/product'}><h4 className={styles.na}>product</h4></Link>
            <h4 className={styles.na}>Menu</h4>
            <h4 className={styles.na}>Events</h4>
            <h4 className={styles.na}>Blog</h4>
            <h4 className={styles.na}>Contact</h4>
        </div>
        <div className={styles.navchil}>
            <div className={styles.callicon}>
                <Image height={32} width={32} src={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAXVBMVEUzqGf///8kpF/a7eEqpmKHx6EtpmQdo1wAn1Q8q23g8Oa228S+38tIr3QUoVnx+PRxvZCg0bNYs375/ft7wZdjuIWo1brN5tdquovF49Hp9O2v2L9RsXmXzq2PyqfeFnLrAAAFLElEQVRogcWb67qqIBCGERDUVDyV1bLu/zK3WpYCDpi4+X72mK+chmFmQMFm1Ul7KsOiytCgrCrC8tQm9fYXoW2PJ2nYIdyLMoZeYowOP6AqTJPD2KINM8TxxJTFMEdZ2Ar37Jo0Wb7K/fLzrCG23W/HFmUWURP4jadRVto13oZNipzbgd94nhfECZucI7oB/BKNzma6iU2ueDt5pOOriQ6zxZP+Rh7p9AmPO8i+xfxn8iAe335kiybaRR4UNUDT19kpw7vRCGGWbmeHuQPyoDzcyBbVvpGei1cr/a5nk/j36a2KxvrVpmW3bIsZM4ux1pZ9ctffk/jJjn1xNcvmyi827Mv+Va1TpMIV9umIVg/KlW6X2Tf3Yz2JywZWYhO3E3wpRiC2iA9lxwJgVy5NiiparbPD4wb7JR6usdOjpvhXeapniyPHehITWnbjYr82CTc69u0YeyYruqlsEf8XNELfhfZhP81znDnZWvlTZhPDyu5PWv1xt0MODABNJPYVfCnj3aO9i1oIB9aHFks2Aec4jU/T2RJ+0E6cLNhnqDn8OluU4X44Pc/ZBFpfuAhmcrEeIjJjF0CzWRYs5MC5oM2XLaDXYdnBBcfHTlx82CWwtrFyrCD7dzteTuw6A2wGU4NH+w0/y+o3G5pp7Kyg4SGy0zjbBnYDDCD/U9nB3+5eH2dbzxZQl3NtvA76h5VYJkZ2C3bhXcdudzectyMbslSs0wfqdk+3YfkguAN1U23QfSd6tFgoSMBHVthBtXsrT3p2Co3dcWye9mxwY1pj7z879QOOgg56Dev0sZL9LgTrAlQbntGusasLd7pGCfwanW0RnZPIW4JaA1sNlNw2BbTX2S06wWx1C306OkPgEyphtmLYoL1+G7tEoWHGUjlY4OrESENUGN71cjG+KlydGFmBTAaKxUt24qrdrEKZ6RksxSNLVxECI7kfl+uSXYOG0LEiybTtdxzsRZslO3gcH5f5KJLt6sGhsLloIbEdOMm9YpvZhiI53wK7l5bKjOt7kByMdOGhD+vbZNdGqTvK/lXe2zWTPX/DlQSfuqdgirbkTnt7btjHpo9Uel1ObTAakntb2O/t/T5m2L8/X6k6jWk04zD66hn7FGq/fxv8lo/yhwJP4u9/889We+F2b+z9FoO/NoOric26yd9Nn69C8eQ2w977ayY/9SvZixj7/dXFy7h4kBS5xbDXBv98LhbrfNYhO48r+edbZhr2wT/fEDCjnc5ZT4pF/G0ajtJQFzKeS8DzmATPtCdi7fEBPmO+z2OGZ5ZwdZmvy5BqS0znbxWub6ROYCzldf7eFiGlugm3oivAfscdtm2IFGlz2VvZeWuOM6li2rCXRjWwPU9xJjC+pv1m2YHT6w40aYqvwRFsnfBKAcNSUPnAJ64IxlO1YvxhLlIDu3yKp/5ytuSdacqlwPL5xpF/8jsZh8qFDOnsWfwczBusCiNd8cYkKMI/zxtsn20v5dlasRIcklnkS37NQ7A81rb9D6yqXOaJfk97MYweUmFmcokNMZxlfsyQF4RfRbswTe6irsWdpGHFDL7q51Btmw8FxXCOUVZVHeLrtbNfNpHYNnlgwwdYponVPLDX/LfPvL/XegevdR4+61u81vV4rWfyWsfls37Na92e13pFr3WaXutTD6nLVTt8hR3c/NUje63D9lp/Hvisuw+83jfwes8i8Hm/JPB6rybweZ9opHu7RzXSN98f442b+2OD/N2bG2R7X5A7vy84yts9ybd83Q+d5Oxe7D9G4D1EwhdmRgAAAABJRU5ErkJggg=='}/>

            </div>
            <div className={styles.callno}>
                <h3>Order Now</h3>
                <h3>9876542351</h3>
            </div>
        </div>
        <div className={styles.navchil}>
            <Link href={'/'}><h4 className={styles.na}>HomePage</h4></Link>
            <Link href={'/product'}><h4 className={styles.na}>product</h4></Link>
            <h4 className={styles.na}>Menu</h4>
            <h4 className={styles.na}>Events</h4>
            <h4 className={styles.na}>Blog</h4>
            <h4 className={styles.na}>Contact</h4>
        </div>
        
        <div className={styles.navchil}>
            <div>
                <Link href={'/cart'}><Image height={32} width={32} src={cart1}/></Link>
            </div>
            <div className={styles.cartno}>
                {cart.length}
            </div>
        </div>
        
    </div>
  )
}
const mapStateToProps=(state)=>{
    return{
        cart:state.cart
    }
}

export default connect(mapStateToProps)(Navbar)