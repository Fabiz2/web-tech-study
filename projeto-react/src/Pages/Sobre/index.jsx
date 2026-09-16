import React from 'react'

import "./sobre.css"

export default function index() {
  return (
    <section className='about-container'>
      <div className=''>
        <h1 className='about-title'>Sobre - Site dos emos</h1>
        <div className='about-text'>
          <p>
            Não é apenas uma fase, é a nossa identidade. O Site dos emos nasceu para ser um refúgio digital dedicado a todos que encontram nas letras confessionais, nas guitarras choradas e no bom e velho rock-and-roll a sua verdadeira voz.
          </p>

          <p>
            Relembramos os tempos de franjas de lado, as comunidades do Orkut, os MP3 players lotados e, acima de tudo, celebramos as bandas que moldaram a nossa história (e continuam salvando nossos dias). Se os seus sentimentos sempre falaram mais alto e a música é o seu espelho, você está em casa.
          </p>
        </div>
      </div>

      <div className='missao'>
        <h2 className='about-title'>Missão</h2>
        <ul className='about-text'>
          <li>Acolher e conectar a comunidade rock e emo através da música e da nostalgia.</li>
          <li>Manter viva a essência lírica e sentimental de uma cultura que marcou gerações.</li>
          <li>Provar para o mundo que nunca foi "apenas uma fase".</li>
        </ul>
      </div>
    </section>
  )
}
