import imgCard from "../assets/imgCard.jpg"
import "./Card.css"

const Card = () => {
    return (

        <section>
            <article className="card">
                <h1>Lorem Ipsun</h1>
                <img src={imgCard} className="img-card"/>
                <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, cumque libero ut voluptate saepe repudiandae dicta eum voluptates illo, sit voluptatem, impedit vitae amet rem aperiam recusandae laboriosam quis! Distinctio!</p>
            </article>

            <hr />
    </section>

    )
}

export default Card;