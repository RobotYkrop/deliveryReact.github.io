import React, {useState} from "react"

const Form = ({title, handleClick}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('')

    return (
        <div className={"formInput"}>
            <input className={"inputAuto label-auth"}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Введите email"
            />
            <input className={"inputAuto label-auth"}
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="Введите пароль"
            />
            <button className="button button-primary button-auth" onClick={() => handleClick(email, pass)}>
                <span className="button-auth-svg"/>
                <span className="button-text">Войти</span>
                {title}
            </button>
        </div>
    )
}
export {Form}