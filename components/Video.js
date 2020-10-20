import { useState, useEffect } from 'react'
export default function Video({id,setPlayMovie}){
  const [movieId, setMovieId] = useState("")
  useEffect(()=>{
    const getData = async () =>{
      const data = await fetch(`/api/video?id=${id}`)
      const json = await data.json()
      setMovieId(json.results[0].key)
    }
    getData()
  },[id])
  const width = globalThis.innerWidth*0.9
  const height = globalThis.innerHeight*0.9
  return(
    <>
    <div>
      <h1 onClick={()=>{setPlayMovie(false)}}>X</h1>
      {movieId
      ? <iframe width={width} height={height} src={`https://www.youtube.com/embed/${movieId}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      : <h1>Cargando</h1>
    }
    </div>
    <style jsx>{`
      h1{
        position:absolute;
        top:10px;
        right:10px;
        cursor:pointer;
      }
      div{
        position:fixed;
        top:0px;
        bottom:0px;
        left:0px;
        right:0px;
        z-index:1;
        background:rgba(0,0,0,0.8);
        display:grid;
        place-content:center;
      }
    `}</style>
    </>
  )
}