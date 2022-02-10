import React from "react";
import "./titleInput.css"

function TitleInput() {
    return(
        <div className="section-heading container">
            <h2 className="section-title">Рестораны</h2>
            <label className="search">
                <input type="text" className="input input-search" placeholder="Поиск блюд и ресторанов"/>
            </label>
        </div>
    )
}
export default TitleInput;