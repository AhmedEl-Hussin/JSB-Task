import React from 'react'
import styles from "./Home.module.css"
import flooer from "../../photo/flooer2.jpeg"
import logo from "../../photo/Trash Hauling.png"

export default function Home() {
  return (

    <>
      <section id= {styles.home} >

          <div className= {styles.carve} ></div>

          <div className= {` ${styles.cartona} `} >
            <div className='caontainer '>

              <div className='row'>

              <div className='col-md-4'>
                <div className=''> 
                  <img className={` w-100 ${styles.imgFlooer}`} src={flooer} alt="" />
                </div>
              </div>

              <div className='col-md-6'>
                <div className=' text-center pt-5'>
                  <h3 className= {` pb-5 ${styles.logoTitle} `} > <img className={styles.imgLogo} src= {logo} alt="" /> Round Rock</h3>
                  <button className= {`mb-2 ${styles.btnExpert} `} >Experts</button>
                  <h4 className= {styles.lorem} >Lorem</h4>
                  <h1 className= {styles.titleHome} >Lorem Lorem</h1>
                  <p className= {styles.par} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br/> Ut, laboriosam harum. Praesentium aliquam quae dolorum. Rerum<br/> repudiandae quam tempore minima.</p>
                  <button className= {styles.btnHelp} >Help Me</button>
                </div>
              </div>


              </div>

            </div>
          </div>

      </section>

    </>
  )
}
