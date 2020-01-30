import React, { Component } from 'react';
import IdCard from './components/IdCard/IdCard';
import Greetings from './components/Greetings/Greetings';
import './App.css'
import Random from './components/Random/Random';
import BoxColor from './components/BoxColor/BoxColor';
import CreditCard from './components/CreditCard/CreditCard';
import Rating from './components/Rating/Rating';
import LikeButton from './components/LikeButton/LikeButton';
import QRCodeGenerator from './components/QRCode/QRCodeGenerator';

class App extends Component {
  render() {
    return (
      <div className="App">

        {/* IDCARD */}
        <h1 className="margin-center-10">IdCard</h1>
        <div className="idcard-container mt-10">
          <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
          />

          <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
          />
        </div>

        {/* GREETINGS */}
        <h1 className="margin-center-10">Greetings</h1>
        <div className="greetings-container">
          <Greetings lang="es">Ueuemi</Greetings>
        </div>

        {/* RANDOM */}
        <h1 className="margin-center-10">Random</h1>
        <div className="greetings-container">
          <Random min={1} max={6} />
        </div>

        {/* BOXCOLOR */}
        <h1 className="margin-center-10">BoxColor</h1>
        <div>
          <BoxColor r={255} g={0} b={0} />
          <BoxColor r={128} g={255} b={0} />
        </div>

        {/* CREDITCARD */}
        <h1 className="margin-center-10">CreditCard</h1>
        <div>
          <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" />
        </div>

        {/* RATING */}
        <h1 className="margin-center-10">STARS</h1>
        <div>
          <Rating>0</Rating>
          <Rating>1.49</Rating>
          <Rating>1.5</Rating>
          <Rating>3</Rating>
          <Rating>4</Rating>
          <Rating>5</Rating>
        </div>

        {/* LIKEBUTTON */}
        <h1 className="margin-center-10">LIKEBUTTON</h1>
        <div>
          <LikeButton/>
        </div>

        <h1 className="margin-center-10">QRGENERATOR</h1>
        <div>
          <QRCodeGenerator />
        </div>

        

      </div>
    );
  }
}

export default App;
