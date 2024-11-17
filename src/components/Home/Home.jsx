import React from 'react'
import { FaGithub } from "react-icons/fa6";
import api from '../../service/API';
import styles from './Home.module.css'
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const [users, setUsers]=React.useState([])
  const [repositorio, setRepositorio]=React.useState()
  const [loading, setLoading]=React.useState(false)
  const [smsErr, setSmsErr]=React.useState('')


  const dica={
       dica1:'Rapaz, essa conta tá quase vazia! Para de passear e bora encher de repositórios. Nem vinte ainda? Senta e bota essa criatividade pra funcionar!',

       dica2:'Tá ficando interessante! Agora, se continuar nesse ritmo, o GitHub vai começar a reconhecer o peso dessa conta. Bora trazer mais projetos e fazer essa coleção crescer!',

       dica3:'Opa, isso aqui tá parecendo o estoque de um grande dev! Já temos uma bela coleção, hein? Continua nesse ritmo que o GitHub vai precisar de mais espaço pra tua conta!'
   }


  const inputUser=React.useRef()

  async function getUsers(){
   setLoading(true)
    try{
      const response= await api.get(`/${inputUser.current.value}`)
      
      const dados=[response.data]
      setUsers(dados)
      setLoading(false)
     
      //Trabalhando na Dica
      if(dados[0].public_repos<20){
        setRepositorio(dica.dica1)
     }
     else if(dados[0].public_repos>=20 && dados[0].public_repos<=50){
       setRepositorio(dica.dica2)
     }    
     else{
       setRepositorio(dica.dica3)
     }

    }catch(err){
      console.log(err.message)
      setSmsErr(err.message)
      setLoading(false)
    }

  }
   
  return (
    <>
    <section className='container flex flex-col justify-start items-center flex-wrap gap-4'>
        
        <h2 className=' text-5xl pt-8'> <FaGithub/> </h2>
        <form className='bg-personal-black rounded-md flex flex-wrap flex-col items-center gap-4 h-60' onSubmit={(e)=>e.preventDefault()}> 

         <h1 className='text-personal-white text-center text-4xl font-semibold pt-8'>Stack Dev Github</h1>
        <input type='search' placeholder='Usuario Github' name='search' className='p-2 text-base font-light rounded-sm' ref={inputUser} />

         <button className='bg-personal-blue-200 py-2 px-3 rounded-sm text-base font-light text-personal-white hover:opacity-80 transition' onClick={getUsers}>Chamar Agora</button>
      </form>
       
      { 
          loading ?
          <ClipLoader
          color={'#8B8AE1'}
          loading={loading}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        /> 
        :
          users.map((user)=>(
      <div className='bg-personal-black rounded-md flex flex-wrap flex-col items-center gap-3 md:w-9/12 p-3 w-full' key={user.id}>
        
        <div className='flex justify-between w-full'>
        <h3 className='font-light text-base'>Nome: <span className='text-personal-gray'>{user.name}</span></h3> 
        <span><img src={user.avatar_url} alt="Carregado foto" className={styles.avatar}/></span>
        </div>

        <div className='flex justify-between flex-col w-full'>
        <h3 className='font-light text-base'>Especialidade</h3> 
        <p className='font-light text-base text-personal-gray text-justify'>{user.bio}</p>
        </div>
        

        <div className='flex justify-between w-full'>
        <h3 className='font-light text-base'>Repositorio Total:  <span className='text-personal-gray'>{user.public_repos}</span></h3> 
        <h3 className='font-light text-base'>Trabalho:  <span className='text-personal-gray'>{user.company}</span></h3> 
        </div>

        <div className='flex justify-between w-full'>
        <h3 className='font-light text-base'>Seguidores:  <span className='text-personal-gray'>{user.followers}</span></h3> 
        <h3 className='font-light text-base'>Seguindo:  <span className='text-personal-gray'>{user.following}</span></h3> 
        </div>


      <div className='flex justify-between flex-col w-full'>
        <h3 className='font-light text-base'>Dica</h3> 
        <p className='font-light text-base text-personal-gray text-justify'>{repositorio}</p>
      </div>

      </div>

        ))  
      }   

    </section>

    </>
  )
}

export default Home
