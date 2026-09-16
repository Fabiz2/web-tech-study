import "./Header.css"
import img1 from "../../assets/images/logoipsum-422.png"
import React from 'react'

export default function index() {
  return (
    <header className='header'>

      <section className='title-container'>   
        <img src={img1} />
        <div>
          <h1 className='title'>Rock-and-roll</h1>
          <h2 className="subtitle">Site dos emos</h2>
        </div>
      </section>
    </header>
  )
}
