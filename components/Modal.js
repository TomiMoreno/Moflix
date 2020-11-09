import Movie from "./Movie";
import { useEffect, useState } from 'react'

export default function Modal(props){
  const [isHovering, setIsHovering] = useState(false)
  const [hideMovie, setHideMovie] = useState(false)
  useEffect(()=>{
    const timer = setTimeout(()=>{ 
      if(isHovering){
        setUseModal({position: position.getBoundingClientRect(), movieData: props})}
        console.log('fin',isHovering)
      },500)
    return () =>{
      window.clearTimeout(timer)
    }
  }, [hideMovie])
  function wheelChange(e){
    if(e.clientY){
      console.log(e.clientY + e.deltaY)
      console.log(e.clientY )
    }
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
    <div onMouseOut={()=>{setHideMovie(true)}}onMouseOver={()=>{setHideMovie(false)}} className="modal" onWheel={(e)=>{console.log(e)}}> 
      <div className="movie" onMouseOver={(e) => {setIsHovering(true)}} onMouseOut  ={() => {setIsHovering(false)}} onClick={()=>{setPlayMovie(id)}}>
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
        top: ${window.scrollY + props.position.top}px;
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
      }
      
      h3{
        color:white;
        font-weight:bold;
        background: rgba(0,0,0,0.5);
        box-shadow:2px 2px rgba(0,0,0,0.3);
        transition: visibility 0s, opacity 0.5s linear;
        ${isHovering ? 'visibility:visible;opacity: 1;': 'visibility:hidden;opacity: 0;'}
      }
      div:hover{
        filter: grayscale(90%);
        min-width: 400px;
        height: 200px
      }
      `}</style>
  </>
}