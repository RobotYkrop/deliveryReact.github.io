import React from "react";
import "./Cards.css"
import Card from "../Card";


export default class List extends React.Component {
    render() {
        const cardList = [
        {
            "id": 1,
            "name": "Пицца Плюс",
            "time": 50,
            "price": 900,
            "kitchen": "Пицца, Суши",
            "image": "/img/pizza-plus/preview.jpg",
        },
        {
            "id": 2,
            "name": "Тануки",
            "time": 60,
            "price": 1200,
            "kitchen": "Пицца, Суши",
            "image": "/img/tanuki/preview.jpg",
        },
        {
            "id": 3,
            "name": "FoodBand",
            "time": 40,
            "price": 450,
            "kitchen": "Пицца, Суши",
            "image": "/img/food-band/preview.jpg",
        },
        {
            "id": 4,
            "name": "Палки",
            "time": 55,
            "price": 500,
            "kitchen": "Пицца, Суши",
            "image": "/img/palki-skalki/preview.jpg",
        },
        {
            "id": 5,
            "name": "Гуси Лебеди",
            "time": 75,
            "price": 1000,
            "kitchen": "Русская кухня",
            "image": "/img/gusi-lebedi/preview.jpg",
        },
        {
            "id": 6,
            "name": "PizzaBurger",
            "time": 45,
            "price": 700,
            "kitchen": "Пицца, Суши",
            "image": "/img/pizza-burger/preview.jpg",
        }

        ]
            return (
                <div className={"card-list container"}>

                    {
                        cardList.map((user) => {
                            return (
                                <Card
                                    key = {user.id}
                                    name = {user.name}
                                    time = {user['time']}
                                    price = {user.price}
                                    kitchen = {user.kitchen}
                                    image = {user['image']}
                                />
                            )
                        })
                    }
                </div>

            )

    }
}

