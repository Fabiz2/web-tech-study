import "./ImgCard.css"

// import ImgCard from "../assets/img-card-2.jpg"

import ImageCard from "../../assets/img-card-2.jpg"

const ImgCard = (props) => {
    return(
        <div className="image-card">
            <img src={ImageCard} alt={props.caption || 'imagem'} className="image-card-img"/>
            <p className="image-card-caption">lorem ipsum</p>
        </div>
    )
}

export default ImgCard;