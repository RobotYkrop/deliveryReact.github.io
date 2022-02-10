import React from 'react'
import {Link} from "react-router-dom"
import './Autorization.css';
import {SignUp} from "./FormAutorization/SignUp";


const Registration = () => {
    return (
        <div>
            <Link to="/"><button className="button button-primary">
                <span className="button-auth-svg"/>
                <span className="button-text">На главную</span>
            </button></Link>
            <div className="modal-dialog modal-dialog-auth">
            <h2 className={"titleRega"}>Регистрация:</h2>
            <SignUp/>
            <p>
                Вы уже зарегистрированы? <Link to="/login">Войти</Link>
            </p>
        </div>
        </div>
    )
}

export default Registration;