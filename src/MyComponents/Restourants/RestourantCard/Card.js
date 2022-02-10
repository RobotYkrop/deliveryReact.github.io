import React from "react";
import "./Card.css"
import {Link} from "react-router-dom";
import RatingChanged from "../../SystemRating/rating";



export default class Card extends React.Component {
    render() {
        const { name, time, price, kitchen, image} = this.props;
        return(
            <div className={"card card-restaurant"}>
                <div className={"card-image"}>
                    <img src={image} alt={"Food"}/>
                </div>
                <div className="card-text">
                <div className={'card-heading'}>
                    <Link to={`/${name}`} className={"card-title"}>
                    {name}
                </Link>
                    <div className="card-tag tag">
                        {time} мин
                    </div>
                </div>
                    <div className="card-info">
                        <div className="rating">
                            <RatingChanged/>
                        </div>
                        <div className="price">От {price} ₽</div>
                        <div className="category">{kitchen}</div>
                    </div>
                </div>
    </div>

        )
    }

}