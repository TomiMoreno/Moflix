import {useState} from 'react'
import { useRouter } from 'next/router'
import { useAppContext } from './Context'
import Button from './Button'
export default function Login() {
    const [formData, setFormData] = useState({})
    const [error, setError] = useState(false)
    const {usuario, setUsuario} = useAppContext()
    const router = useRouter()

    const handleInput = (e)=>{
      setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e)=>{
      e.preventDefault()
      if(formData.correo && formData.password){
        setUsuario(formData)
        router.push('/')
      }
      else{
        setError(true)
      }
    }
    return (
        <main> 
          {error && <span>¡Error! Asegurate de tener un correo válido y volvé a intentarlo</span>}
          <form onSubmit={handleSubmit}>
              <div className="inputGroup">
                <label htmlFor="correo">Correo: </label>
                <input type="email" name="correo" size="40" onInput={handleInput}/>
              </div>
              <div className="inputGroup">
                <label htmlFor="contraseña">Contraseña: </label>
                <input type="password" name="password" size="40" onInput={handleInput}/>
              </div>
              <Button type="submit" >Iniciar Sesión</Button>
          </form>
          <style jsx>
            {`
            span {
                color: red;
              }
              form{
                  width: 300px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
                  height: 300px;
                  border-radius:15%;
                  border: white 2px solid;
                  padding:10px;
                  margin-top: 3px;
                  font-family:inherit;
                  font-size: 19px;
              }          
              button{
                color:red;
                width:45%;
                margin: 0 27.5%;
              }
              .inputGroup{
                display:flex;
                flex-direction:column;
              }
              input{
                height:30px;
              }
              main{
                // text-align: center;
                width:300px;
              }
            `}
          </style>
          </main>
          
    )    }           
               
               
               