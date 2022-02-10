import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import RestourantList from "../Restourants/PizzaDataBase";
import "./ShopList.css"

class Food extends React.Component{
    constructor(props){
        super(props);
        this.state = {selected: false};
        this.addBasketFood = this.addBasketFood.bind(this);
    }

    addBasketFood(ev){
        ev.preventDefault();
        this.props.handleAddBasket(this.props.id);
    }
    render(){

        const price = this.props.price ? <strong>{this.props.price}</strong> :<del>&nbsp;</del> ;
        return <div className={"food"}>
                <img className={"card-food-image"} src={this.props.image} alt="" />
            <h3 className="card-title card-title-reg">{this.props.name}</h3>
            <div className="card-info">
                <div className="ingredients">
                    <p>{this.props.description}</p>
                </div>
            </div>
            <strong className="card-price-bold">{price} ₽</strong>

            <button className="button button-primary button-add-cart" onClick={this.addBasketFood}><span
                className="button-card-text">В корзину</span>
                <span className="button-cart-svg"/>
            </button>
        </div>
    }
}


export class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            RestourantList: RestourantList,
            items: []
        };
        this.updateFood = this.updateFood.bind(this);
        this.addBasket = this.addBasket.bind(this);
        this.removeBasket = this.removeBasket.bind(this);
    }
    removeBasket(id){
        let items = this.state.items.slice(0),result = [];
        items[id] = undefined;
        this.setState({items:items});
    }
    addBasket(id){
        let items = this.state.items.slice(0);
        items[id] = id in items ? ++items[id] : 1;
        this.setState({items:items});
        console.log(items,id)
    }

    updateFood(newFood){
        const tmp = this.state.RestourantList;
        tmp.push(newFood);
        this.setState({RestourantList: tmp});
    }
    render(){
        const Foods = RestourantList.map(item => {
            return item.price ?
                <Food
                    id={item["id"]}
                    key={item["id"]}
                    name={item["name"]}
                    image={item["image"]}
                    description={item["description"]}
                    price={item["price"]}
                    handleAddBasket={this.addBasket}
                />:
                <Food name={item["name"]} price={item["price"]} description={item["description"]}/>
        });
        return <div>
            <Header/>
            <div className={"container food-flex"}>
            <Basket
                items={this.state.items}
                RestourantList={this.state.RestourantList}
                handleRemoveBasket={this.removeBasket}
            />
            {Foods}
            </div>
            <Footer/>
        </div>;
    }
}
class Basket extends React.Component {
    constructor(props){
        super(props);
        this.deleteBasketItem = this.deleteBasketItem.bind(this);
    }
    deleteBasketItem(ev){
        ev.preventDefault();
        this.props.handleRemoveBasket(ev.target.id);
    }
    getIndexById(id){
        for(let p in this.props.RestourantList)
            if (this.props.RestourantList[p]['id'] == id)
                return p
    }
    render(){
        let items = [], j,sum = 0;

        for(let i in this.props.items){
            if(!this.props.items[i]) continue;
            j = this.getIndexById(i);
            sum += this.props.items[i] * this.props.RestourantList[j]['price'];
            items.push(
                <div className='basket-item'>
                    <span>«{this.props.RestourantList[j]['name']}»</span>
                    <span>{this.props.items[i]}шт.</span>
                    <span>{this.props.RestourantList[j]['price']}руб.</span>
                    <button className="button button-primary" onClick={this.deleteBasketItem} id={i}>Удалить</button>
                </div>
            );
        }
        return <div className='basket'>
            <h3>Корзина</h3>
            {items}
            <div className="basket-item">
                <span>Всего <b>{sum}</b> руб.</span>
            </div>
        </div>
    }
}

