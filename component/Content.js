import React, { useState } from 'react'
import styles from '../styles/Content.module.css'
import piza from '../public/piza2.png'
import piza1 from '../public/piza3.jpeg'
import piza2 from '../public/piza4.png'
import Image from 'next/image'
import ls from '../public/ls.png'
import rs from '../public/rs.png'
function Content() {
  const img1 = [ 
    piza,
    piza1,
    piza2
  ]
  const [index,setindex]=useState(0)
  const ls1=()=>{
    if(index==0){
      setindex(2)
    }
    else{
      setindex(index-1)
    }
  }
  const rs1=()=>{
    if(index==2){
      setindex(0)
    }
    else{
      setindex(index+1)
    }
  }
  return (
    <div className={styles.maindiv}>
      <div className={styles.ls} style={{left:0}}>
          <Image src={ls} fill onClick={ls1}/>
      </div>
      <div className={styles.slider} style={{transform:`translateX(${-100*index}vw)`}}>
          {img1.map((im,indx) => (
            <div className={styles.wraper}>
             <Image src={im} fill objectFit='contain' key={indx}/>
             </div>
          ))}
      </div>
      <div className={styles.ls} style={{right:0}}>
          <Image src={rs} fill onClick={rs1}/>
      </div>
    </div>
  )
}

export default Content