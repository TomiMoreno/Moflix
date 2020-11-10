import Movie from "./Movie";
import { useEffect, useState } from 'react'

export default function Modal(props){
  const [isHovering, setIsHovering] = useState(false)
  const [hideMovie, setHideMovie] = useState(false)
  const [position, setPosition] = useState(window.scrollY + props.position.top)


  useEffect(()=>{
    setIsHovering(true)
    setPosition(window.scrollY + props.position.top)
  },[])

  useEffect(()=>{
    const timer = setTimeout(()=>{ 
      if(hideMovie){
        setUseModal(false)}
      },500)
    return () =>{
      window.clearTimeout(timer)
    }
  }, [hideMovie, isHovering])

  function wheelChange(e){
    let movimientoY = e.deltaY;
    let posicionInicial = window.scrollY + e.clientY
    //si el movimiento de la rueda hacia arriba es mayor a la posicion de la pagina, va a quedar en la posicion actual, es decir, va a bajar solo lo que quede de barra.
    if(-e.deltaY > window.scrollY) movimientoY = -window.scrollY
    let posicionFinal = movimientoY + posicionInicial
    //si la posicion de el mouse+ el movimiento es mayor a la altura de la pagina, el mouse permanece en su posicion inicial
    if(posicionFinal > document.body.scrollHeight) posicionFinal = posicionInicial
    if(posicionFinal < position || posicionFinal > position+props.position.height) { setHideMovie(true), setIsHovering(false)}
  }
  const {
    id,
    title,
    sinopsis,
    duracion,
    genero,
    clasificacion,
    backdrop_path,
    link,
    director,
    reparto,
    estreno,
    setPlayMovie,
    setUseModal
  } = props.movie;
  const miniatura = `https://image.tmdb.org/t/p/w780/${backdrop_path}`
  return <>
    <div onClick={()=>{setPlayMovie(id); setUseModal(false)}} onMouseOut={()=>{setHideMovie(true)}}onMouseOver={()=>{setHideMovie(false)}} className="modal" onWheel={(e)=>{wheelChange(e)}}> 
      <div className="movie" onMouseOver={(e) => {setIsHovering(true)}} onMouseOut  ={() => {setIsHovering(false)}} >
              <h3>{title}</h3>
              <img  src="/play.svg" onClick={()=>{setPlayMovie(id)}} />
      </div>
    </div>
    <style jsx>{`
        img{
          width: 25px;
          padding: 5px;
          display: block;
          margin-block-end: 1em;
          background: white;
          border:black 1px solid;
          border-radius: 10%;
          cursor:pointer;
          transition: visibility 0s, opacity 0.5s linear;
          ${isHovering ? 'visibility:visible; opacity: 1;': 'visibility:hidden;opacity: 0;'}
        }
        .modal{
        position:absolute;
        display:block;
        z-index:3;
        top: ${position}px;
        left: ${props.position.left}px;
        width: ${props.position.width}px;
        height: ${props.position.height}px;
      }
      .movie {
        cursor:pointer;
        background: url(${miniatura});
        background-size: cover;
        min-width: 300px;
        width:300px;
        height: 150px;
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        transition: all 0.25s linear;
        align-items: flex-end;
        justify-content: space-between;
        ${isHovering && `
          filter: grayscale(90%);
          min-width: 400px;
          height: 200px;`}
      }
      h3{
        color:white;
        font-weight:bold;
        background: rgba(0,0,0,0.5);
        box-shadow:2px 2px rgba(0,0,0,0.3);
        transition: visibility 0s, opacity 0.5s linear;
        ${isHovering ? 'visibility:visible;opacity: 1;': 'visibility:hidden;opacity: 0;'}
      }
      `}</style>
  </>
}