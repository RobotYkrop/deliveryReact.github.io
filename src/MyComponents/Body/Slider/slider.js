import React from "react";
import "./slider.css"

const Slider = () => {

return (
    <div className="container">
        <div className="container-promo">
            <div className="promo pizza">
                <h1 className="promo-title">Онлайн-сервис <br/>доставки еды на дом</h1>
                <p className="promo-text">
                    Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
                </p>
            </div>
            <div className="promo sushi">
                <h1 className="promo-title">Сеты со скидкой до 30% <br/> в ресторанах</h1>
                <p className="promo-text">
                    Скидки на сеты до 30 мая по промокоду DADADA
                </p>
            </div>
        </div>
    </div>
)
}
export default Slider;