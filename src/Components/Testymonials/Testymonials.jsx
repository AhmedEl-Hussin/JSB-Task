import React from 'react'
import styles from './Testymonials.module.css'
import photo from '../../photo/Ellipse 1.png'

export default function Testymonials() {
  return (

    <>

        <section id= {styles.Testymonials}>

            <div className= {styles.header}>
                <h2 className= {` py-5 fw-bold  ${styles.Title} `} >Testymonials </h2>
            </div>

            <div className='container w-75'>
                <div className='row gy-4'>

                    <div className='col-md-6'>
                        <div className= {` d-flex p-4 rounded-5 ${styles.caption} `} >

                            <div className= {styles.divImg} >
                                <img width="50" src= {photo} alt="" />
                            </div>

                            <div className='ms-2'>
                                <h6 className= {styles.captionTitle} >Courtney Henry</h6>
                                <p className= {styles.captionPar} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Error ea nulla, ipsa illum nemo sunt obcaecati animi maiores  enim voluptatibus dicta saepe, 
                                    repudiandae, nemo sunt obcaecati animi maiores eos molestias?
                                </p>
                                
                                <i class= {` fa-solid fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className= {` d-flex p-4 rounded-5 ${styles.caption} `} >

                            <div className= {styles.divImg} >
                                <img width="50" src= {photo} alt="" />
                            </div>

                            <div className='ms-2'>
                                <h6 className= {styles.captionTitle} >Courtney Henry</h6>
                                <p className= {styles.captionPar} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Error ea nulla, ipsa illum nemo sunt obcaecati animi maiores  enim voluptatibus dicta saepe, 
                                    repudiandae, nemo sunt obcaecati animi maiores eos molestias?
                                </p>
                                
                                <i class= {` fa-solid fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className= {` d-flex p-4 rounded-5 ${styles.caption} `} >

                            <div className= {styles.divImg} >
                                <img width="50" src= {photo} alt="" />
                            </div>

                            <div className='ms-2'>
                                <h6 className= {styles.captionTitle} >Courtney Henry</h6>
                                <p className= {styles.captionPar} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Error ea nulla, ipsa illum nemo sunt obcaecati animi maiores  enim voluptatibus dicta saepe, 
                                    repudiandae, nemo sunt obcaecati animi maiores eos molestias?
                                </p>
                                
                                <i class= {` fa-solid fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className= {` d-flex p-4 rounded-5 ${styles.caption} `} >

                            <div className= {styles.divImg} >
                                <img width="50" src= {photo} alt="" />
                            </div>

                            <div className='ms-2'>
                                <h6 className= {styles.captionTitle} >Courtney Henry</h6>
                                <p className= {styles.captionPar} >Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                                    Error ea nulla, ipsa illum nemo sunt obcaecati animi maiores  enim voluptatibus dicta saepe, 
                                    repudiandae, nemo sunt obcaecati animi maiores eos molestias?
                                </p>
                                
                                <i class= {` fa-solid fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                                <i class= {` fa-solid ms-1 fa-star ${styles.icon} `} ></i>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </section>

    </>
  )
}
