import "./Footer.css"
import img1 from "../../assets/images/logoipsum-422.png"
import React from 'react'

export default function index() {
    return (
        <footer className='footer'>
            <section>
                <img src={img1} />
            </section>
        </footer>
    )
}
