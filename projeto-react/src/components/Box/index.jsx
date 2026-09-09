import "./Box.css"
import React from 'react'

export default function index(props) {
    console.log(props)
  return (
    <section className='container-box'>
        <h1 className='title-box'>{props.title}</h1>
        <img src={props.imagem} />
        <p className='description'>
            {props.description}
        </p>   
    </section>
  )
}
