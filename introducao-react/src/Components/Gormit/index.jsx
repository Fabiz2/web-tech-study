import "./gormit.css"
import React from 'react'

function index() {
    const BoxData = [
        {
            title: "Toby",
            poder: "Marinho",
            nickname: "Senhor da Água",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMFIea2uVeRSpsMqHNW_6eEZrXi0hDRhl-nXtemmlCi5HOlb7ju8B5XJg&s=10",
            color: "#009aff"
        },
        {
            title: "Nick",
            poder: "Terra",
            nickname: "Senhor da Terra",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO-7-e8oRQOwtj3_1-2WYaR03vQ0p2vz_o4Hwmscc72H_BppWwqfVPKLmf&s=10",
            color: "#ffa500"
        },
        {
            title: "Jessica",
            poder: "Ar",
            nickname: "Senhora do Ar",
            imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRDVHhu9KRgSO5pEJz_ydgdmuD7znCBDPn534G89tYml7t4KgeqaEJR2Na&s=10",
            color: "#ffcbdb"
        },
        {
            title: "Lucas",
            poder: "Planta",
            nickname: "Senhor da Floresta",
            imagem: "https://i.pinimg.com/474x/b7/e1/ed/b7e1ed98898a24b18fb39b88e88af6f3.jpg",
            color: "#5ccd32"
        }
    ]
  return (
    <div className="gormit-container">
      {BoxData.map((box, index) => {
        return(
            <div className='gormit' key={index} style={{background: box.color}}>
            <h2>{box.title}</h2>
            <p>{box.poder}</p>
            <p>{box.nickname}</p>
            <img src={box.imagem} />
          </div>
        )
      })}
    </div>
  )
}

export default index
