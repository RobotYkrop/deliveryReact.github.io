import {Link} from "react-router-dom"
import {Login} from "./FormAutorization/Login";
import React from "react";

const LoginPage = () => {

        return (
            <div>

            <Link to="/"><button className="button button-primary">
                <span className="button-auth-svg"/>
                <span className="button-text">На главную</span>
            </button></Link>
            <div className="modal-dialog modal-dialog-auth">
                <h2 className={"titleRega"}>Вход</h2>
                <Login/>
                <p>
                    или <Link to="/Register">Зарегистрироваться</Link>
                </p>
            </div>
        </div>

        )


    }
export default LoginPage