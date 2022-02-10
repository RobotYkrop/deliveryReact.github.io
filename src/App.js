import "./App.css";
import React from 'react';
import Back from "./MyComponents/BackForm/backform";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import Header from "./MyComponents/Header/Header";
import Slider from "./MyComponents/Body/Slider/slider";
import TitleInput from "./MyComponents/Body/titleInputPage/titleInput";
import Cards from "./MyComponents/Restourants/RestourantCard/DataCards/Cards";
import Footer from "./MyComponents/Footer/Footer";
import "./MyComponents/Media/MediaQuery.css"
import About from "./MyComponents/About/About";
import {Cart} from "./MyComponents/Cart/ShopList";
import {Login} from "./MyComponents/Autorization/FormAutorization/Login";
import LoginPage from "./MyComponents/Autorization/Login";
import Registration from "./MyComponents/Autorization/RegisterPage";


class App extends React.Component{

    render()
    {
        return (


            <div>

            <Routes>
                <Route path = "/" element={<Layout/>}/>
                <Route path="/Back/*" element={<Back/>}/>
                <Route path="/:id/*" exact element={<Cart/>}/>
                <Route path="/About/*" element={<About/>}/>
                <Route path="/Login" element={<LoginPage/>}/>
                <Route path="/Register" element={<Registration/>}/>
                <Route
                    path="*"
                    element={<Navigate replace to="/Login" />}
                />
            </Routes>
    </div>

    )

    }
}
export default App;

class Layout extends React.Component{
    render()
    {
        return (
            <div>
                <Header/>
                <Slider/>
                <TitleInput/>
                <Cards>
                    <Cart/>
                </Cards>
                <Footer/>
            </div>
        )
    }
}


