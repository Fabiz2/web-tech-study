import "./ImgCard.css"

import corinthians from "../assets/corinthinas-logo.jpg"

const Informacao = (props) => {
    return(
        <>
        <div className="image-card">
            <h1>{props.title}</h1>
            <img src={corinthians} className="image-card-img"/>
            {props.children}
        </div>
        </>
    )
}

export default Informacao;
