import { useEffect, useState } from 'react';
import styles from './Services.module.css'
import axios from 'axios'


export default function Services() {


  let [divs , setDivs] = useState([]);

  let getApi = async ()=> {
      let {data} = await axios.get('https://reqres.in/api/users?page=1')
      setDivs(data.data)
  }

  useEffect(()=> {
      getApi()
  })
  
  return (

    <>

        <section id= {styles.services} >

          <div className= {styles.header}>
            <h2 className= {` py-5 fw-bold  ${styles.Title} `} >Services </h2>
          </div>

          <div className='container w-75'>

            <div className='row gy-4'>

              {divs.slice(0,3).map((div)=>

                <div className='col-md-4'>
                  <div className={`rounded-4 ${styles.recipe} `}>

                    <div className={styles.divImag}>
                        <img className='w-100 h-100 rounded-top-4' src={div.avatar} alt="" />
                    </div>

                    <div className='px-4 py-2'>
                        <h3 className= {`my-2 ${styles.title} `} > Lorem Ipsum </h3>
                        <p className= {styles.par} >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                            Delectus incidunt odit itaque porro voluptas libero enim 
                            aliquam tenetur et, numquam nulla laudantium 
                        </p>
                    </div>

                  </div>
                </div>
              )}

            </div>

            <div className= {`text-center mt-5 `}>
              <button className= {`py- px-5 rounded-5 ${styles.btnHelp}`} >Help Me</button>
            </div>

          </div>

        </section>
    </>
  )
}



