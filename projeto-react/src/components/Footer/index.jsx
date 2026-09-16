import "./Footer.css"
import img1 from "../../assets/images/logoipsum-422.png"
import React from 'react'

export default function index() {
    return (
        <footer className='footer'>
            <section className="section-footer">
                <img src={img1} />
                <p>©Site dos emos</p>
            </section>
        </footer>
    )
}
