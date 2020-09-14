import {useAppContext} from '../components/Context'
import Link from "next/link";
import Login from '../components/Login'

export default function Auth(){
  return (
  <div> 
    <Login />
    <style jsx>
          {`
            div {
              height:100vh;
              display:grid;
              place-content:center;
              
            }
          `}
    </style>
  </div>)
}