import React, { useEffect, useState } from 'react'
import "./Faq.css"

export default function index() {

    const [faq, setFaq] = useState([]);

    useEffect(() => {
       fetch("http://localhost:3000/faq")
       .then((response) => response.json())
       .then((data) => setFaq(data))
       .catch((error) => console.log(error))
    }, [])
  
    return (
    
    <section className='faq-container'>
        <h1 className='faq-title'> PERGUNTAS FREQUENTES 🖤🎸</h1>
       
       {faq.map((perguntas) => (
         <ol key={perguntas.id}>
            <li className='faq-text'>
                <h2>{perguntas.pergunta}</h2>
                <p>{perguntas.resposta}</p>
            </li>
        </ol>
       ))}

    </section>
  )
}
