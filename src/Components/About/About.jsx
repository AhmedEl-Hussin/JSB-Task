import React from 'react'
import styles from './About.module.css'
import trash from '../../photo/Rectangle 263.png'

export default function About() {
    return (
    <>

        <section id= {styles.About} >
            <div className= {styles.aboutLayer} >
                <div className= {styles.carve}></div>

                <div className= {styles.cartona} >
                    <div className='container '>
                        <div className='row'>
                            
                            <div className='col-md-6'>
                                <div className=' overflow-hidden'>
                                    <h2 className='fs-1 fw-bolder text-white mt-4'>About Us</h2>
                                    <p className= {` py-2 text-white fw-bold ${styles.aboutPar}`} >Lorem ipsum dolor sit amet consectetur  fugiat eligendi numquam cumque adipisicing elit. Illum sunt quisquam fugiat eligendi numquam cumque quasi ad optio laborum et.</p>
                                    <div className= {` ${styles.imgTrash}`}>
                                        <img className= "w-100" src= {trash} alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 '>
                                <div className='text-end overflow-hidden pt-5 '>
                                    <h2 className='mt-5 text-white fs-1 fw-bolder'>Where</h2>
                                    <p className= {` text-white fw-bold ps-5 mt-3 ${styles.wherePar}`} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                        Illum voluptates voluptatibus velit porro inventore molestiae 
                                        nam! Maxime reiciendis nulla, saepe quae, quibusdam dicta eligendi, eius iure dolor molestias. aspernatur
                                        eligendi, eius iure dolor molestias. Vitae blanditiis soluta quam, maiores 
                                        magnam fuga eligendi, eius iure dolor molestias. omnis reprehenderit architecto voluptatibus non, magni corporis 
                                        perspiciatis, tempora eum ducimus iure odit dolor! reprehenderit architecto voluptatibus non, magni 
                                    </p>

                                </div>
                            </div>

                        </div>

                        <div className='text-center mt-5'> <button className= "btn btn-warning mt-5 fs-6 fw-bold py-2 px-5 rounded-5" > Help Me </button> </div>

                    </div>

                </div>

            </div>
        </section>
    </>
)
}
