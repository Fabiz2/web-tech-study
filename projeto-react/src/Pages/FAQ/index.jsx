import React from 'react'
import "./Faq.css"

export default function index() {
  return (
    <section className='faq-container'>
        <h1 className='faq-title'> PERGUNTAS FREQUENTES — SITE DOS EMOS🖤😭</h1>
        <ol>
            <li className='faq-text'>
                <h2>O que é o "Rock-and-roll: Site dos emos"?</h2>
                <p>Somos o ponto de encontro definitivo na internet para a comunidade emo, subculturas alternativas e apaixonados pela vertente mais sentimental do rock. Se você cresceu ouvindo guitarras melódicas, letras confessionais e marcando o olho com lápis preto (ou está descobrindo esse universo agora), este é o seu lugar.</p>
            </li>

            <li className='faq-text'>
                <h2>Qual é o objetivo do site?</h2>
                <p>Nosso foco é resgatar a nostalgia dos anos 2000 e abrir espaço para o cenário emo atual. Funcionamos como um portal de notícias, fórum de discussão, agregador de playlists e agenda de eventos e shows dedicados ao gênero.</p>
            </li>

            <li className='faq-text'>
                <h2>Preciso pagar para fazer parte da comunidade?</h2>
                <p>Não! O acesso ao portal, leitura de artigos e a criação de perfil em nossa comunidade são 100% gratuitos. Futuramente, teremos uma área de membros VIP (com benefícios exclusivos, sorteio de ingressos e produtos) e uma loja oficial.</p>
            </li>

            <li className='faq-text'>
                <h2>Por que o logotipo do topo parece uma banda de Death/Thrash Metal?</h2>
                <p>Porque o emo também tem suas raízes no hardcore e no som pesado! Brincadeiras à parte, nossa estética une o visual clássico dos logotipos "espinhosos" do metal com a sensibilidade e o melodrama da cultura emo. É sobre quebrar padrões com muito estilo.</p>
            </li>
        </ol>

    </section>
  )
}
