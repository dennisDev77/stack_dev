import React from 'react'
import styles from './Footer.module.css'


const Footer=()=>{
  

    return(
        <>
         <section className={` ${styles.section} text-personal-gray flex flex-col flex-wrap items-center justify-center gap-2`} >

            <div className='text-center font-light text-personal-gray pb-3'>
            <p className='text-personal-gray '>Desenvolvido por <a href='https://github.com/dennisDev77'>Dinis Camela</a></p>
            </div>
         </section>
        </>
    )
}
export default Footer