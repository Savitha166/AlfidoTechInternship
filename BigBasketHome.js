import React from 'react';
import './BigBasketHome.css';
import fruitsImg from './Images/fruit.jpg';
import grainsImg from './Images/Grains.jpg';
import cakesImg from './Images/Cakes.jpg';
import snacksImg from './Images/snack.jpg';
import appleImg from './Images/apple.jpg';
import guavaImg from './Images/Guava.jpg';
import pgrainsImg from './Images/pgrain.jpg';
import { useNavigate } from 'react-router-dom';

export default function BigBasketHome() {
  const categories = [
    { name: 'Fruits & Vegetables', img: fruitsImg },
    { name: 'Foodgrains', img: grainsImg },
    { name: 'Cakes', img: cakesImg },
    { name: 'Snack', img: snacksImg },
  ];

  const discounts = [
    { name: 'Apple - 40%', img: appleImg },
    { name: 'Grains - 29%', img: pgrainsImg },
    { name: 'Guava - 10%', img: guavaImg },
  ];
  const navigate1=useNavigate();
  const handleHome=()=>
  {
      navigate1('/bigbaskethome')
  }

  const navigate2=useNavigate();
  const handleAbout=()=>{
    navigate2("/about");
  }
  const navigate3=useNavigate();
  const handleContact=()=>{
    navigate3("/contact");
  }
  return (
    <div className="home-container">
      <nav className="menu-bar">
        <div className="logo">BigBasket</div>
        <ul>
          <li onClick={handleHome}>Home</li>
          <li onClick={handleAbout}>About</li>
          <li onClick={handleContact}>Contact</li>
        </ul>
      </nav>

      <header className="search-bar">
        <input type="text" placeholder="Search items" />
        <button>🔍</button>
        <div className="icons">
          <span>🛒</span>
          <span>👤</span>
        </div>
      </header>

<section className="intro">
  <h2>🧺 Empowering the Future of Grocery Retail</h2>
  <p>
    BigBasket is redefining online grocery shopping in India. 
    With cutting-edge tech, a strong supply chain, and trusted farmer partnerships, 
    we deliver fresh, quality products to your doorstep—fast, reliable, and hassle-free.
  </p>
</section>
      <h2 className="section-title">Product Category</h2>
      <div className="card-container">
        {categories.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      <h2 className="section-title">Discount Products</h2>
      <div className="card-container">
        {discounts.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
<footer className="footer">
  <div className="footer-content">
    <p>&copy; {new Date().getFullYear()} BigBasket. All rights reserved.</p>
    <p>Designed with 💚 for a better grocery experience.</p>
  </div>
</footer>

    </div>
  );
}
