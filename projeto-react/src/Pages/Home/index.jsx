import React from 'react'
import Box from "../../components/Box"
import img1 from "../../assets/images/974-280x200-grayscale.jpg"
import img2 from "../../assets/images/1084-280x200-grayscale.jpg"

export default function home() {
  return (
   <main className='container'>
    <section className='d-flex'>
      <Box
      title="Titulo do componente"
      imagem={img1}
      description="Este é um paragrafo de amplo para o componente." 
      />
      <Box
      title="Titulo do componente 2"
      imagem={img2}
      description="Este é um paragrafo de amplo para o componente."
      />
    </section>
   </main>
  )
}
