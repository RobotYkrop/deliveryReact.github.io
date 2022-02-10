import React from "react";
import "./rating.css";
import ReactStars from "react-rating-stars-component";


const second = {
    size: 50,
    count: 10,
    color: "black",
    activeColor: "red",
    value: 7.5,
    a11y: true,
    isHalf: true,
    emptyIcon: <i className="far fa-star" />,
    halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: newValue => {
        console.log(`${newValue}`);
    }
};

const third = {
    size: 40,
    count: 5,
    isHalf: false,
    value: 5,
    color: "#C0C0C0",
    activeColor: "gold",
    onChange: newValue => {
        console.log(`${newValue}`);
    }
};


function RatingChanged() {
    return (
        <div className="ratingChanged">
            <ReactStars {...second} />
            <ReactStars {...third}/>
        </div>
    );
}
export default RatingChanged;
