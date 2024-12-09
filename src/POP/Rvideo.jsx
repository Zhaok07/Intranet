import './Rvideo.css'
import React from "react";
import ReactPlayer from 'react-player'

const Rvideo = () =>{
    return(
        <div className='container-video'>
        <ReactPlayer
        url="https://youtu.be/hMAPyGoqQVw?list=RDhMAPyGoqQVw"
        controls={true}
        width="100%"  /* Ajusta a largura */
        height="255px" /* Ajusta a altura */
        
        />
        </div>
    )
}


export default Rvideo;