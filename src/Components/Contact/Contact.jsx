import React from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  return (

    <>

        <section id= {styles.Contact}>

            <div className= {styles.header}>
                <h2 className= {` py-5 fw-bold  ${styles.Title} `} >Contact Us </h2>
            </div>

            <div className= {`container w-50`}>

                    <div className='row gy-4 '>

                        <div className= {`col-md-6 `}>
                            <div className=''>

                                <input placeholder='Name' className= {` ${styles.inputs} rounded-4 px-3 py-2 `} type="text" />
                                <input placeholder='Email' className= {` ${styles.inputs} rounded-4 px-3 py-2 mt-3`} type="email" />
                                <input placeholder='Phone ' className= {` ${styles.inputs} rounded-4 px-3 py-2 mt-3`} type="number" />
                                <br/>
                                <button className= {`px-5 rounded-5 mt-4 py-2 ms-5 ${styles.btns} `} >SEND</button>

                            </div>
                        </div>

                        <div className='col-md-6'>
                            <div className=' ps-3'>

                                <i class={`fa-solid mt-5 fa-envelope ${styles.icon} `} ></i>
                                <span className= {` ${styles.span}`}>Upskilling.egl@gmail.com</span> <br />

                                <i class= {`fa-sharp mt-4 fa-solid fa-phone ${styles.icon} `} ></i>
                                <span className= {` ${styles.span}`}>+201154932137</span>

                            </div>

                        </div>
                        
                    </div>

                </div>

        </section>

    </>
  )
}
