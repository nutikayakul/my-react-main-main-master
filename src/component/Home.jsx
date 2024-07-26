import React from 'react';
import './Home.css'; // Import CSS file for styling
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { faCity, faCocktail, faMountain, faUmbrellaBeach, faWater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';

const DestinationInfo = ({ destination }) => {
  
}

  const handleDetailsClick = () => {
    window.location.href = 'http://localhost:3000/Bangkok';
    // window.location.href = 'http://localhost:3000/ChiangMai';
    // window.location.href = 'http://localhost:3000/Phuket';
    // window.location.href = 'http://localhost:3000/Pattaya';
    // window.location.href = 'http://localhost:3000/Krabi';
  };


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      destinations: [
        {
          id: 1,
          name: "Bangkok",
          image: "https://image.bestreview.asia/wp-content/uploads/2020/09/%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2.jpg",
          description: "กรุงเทพมหานครตั้งอยู่ในบริเวณภาคกลางตอนล่างของประเทศไทย บริเวณละติจูดที่ 13.45 องศาเหนือ ลองจิจูด 100.28",
          rating: 4.5,
          reviews: 1000,
          activities: ["Shopping", "Dining", "Sightseeing"]
        },
        {
          id: 2,
          name: "เชียงใหม่",
          image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXsaD7wNJ4zXw1HC0IxF7c_BDeaj9AyRhK_A&s",
          description: "จังหวัดเชียงใหม่มีประวัติศาสตร์อันยาวนาน เคยเป็นเมืองหลวงของอาณาจักรล้านนาคือ นพบุรีศรีนครพิงค์เชียงใหม่ แต่โบราณ มี คำเมือง เป็นภาษาท้องถิ่น",
          rating: 4.7,
          reviews: 800,
          activities: ["Temples", "Night Market", "Trekking"]
        },
        {
          id: 3,
          name: "ภูเก็ต",
          image: "https://www.drivecarrental.com/th/media/sites/2/2023/06/weather-1024x577.jpg",
          description: "ที่เที่ยวภูเก็ต พร้อมพิกัดแลนด์มาร์กสุดปัง · 1. แหลมพรหมเทพ · 2. หาดสุรินทร์ · 3. จุดชมวิว ผาหินดํา · 4. ตึกชิโนโปรตุกีส เมืองเก่าภูเก็ต",
          rating: 4.6,
          reviews: 950,
          activities: ["Beaches", "Diving", "Nightlife"]
        },
        { 
          id: 4, 
          name: 'เกาะพงัน', 
          description: 'เกาะนี้มีชายหาดที่สวยงามและน้ำทะเลใสมาก', 
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZagx4GevBHgmN1v5LZvhIqo7lhrfRjEPjwg&s',
          rating: 4.5,
          reviews: 1200,
          activities: ['Snorkeling', 'Scuba Diving', 'Beach Parties']
        },
        { 
          id: 5, 
          name: 'เขาใหญ่', 
          description: 'เขานี้มีทิวทัศน์ที่สวยงามและสไตล์ชีวิตของชนบท', 
          image: 'https://img.wongnai.com/p/1920x0/2023/08/31/699e1d0986474821879866d17e72112b.jpg',
          rating: 4.8,
          reviews: 1500,
          activities: ['Hiking', 'Wildlife Watching', 'Camping']
        },
        { 
          id: 6, 
          name: 'เขาค้อ', 
          description: 'เขาที่มีอากาศดีและบรรยากาศเงียบสงบ', 
          image: 'https://png.pngtree.com/thumb_back/fw800/background/20240522/pngtree-aerial-view-of-khao-kho-district-beautiful-mountain-on-morning-image_15690005.jpg',
          rating: 4.3,
          reviews: 900,
          activities: ['Sightseeing', 'Photography', 'Relaxing']
        },
        
        
      ]
    };
  }

  render() {
    const { destinations } = this.state;
    return (
      <div className="home-container">
        <Nav />
        <div className="main-content">
          <aside className="sidebar">
            <ul className="menu">
            <li>
          <Link to="./Bangkok">
            <FontAwesomeIcon icon={faCity} /> Bangkok
          </Link>
        </li>
        <li>
          <Link to="/Chiangmai">
            <FontAwesomeIcon icon={faMountain} /> Chiang Mai
          </Link>
        </li>
        <li>
          <Link to="/Phuket">
            <FontAwesomeIcon icon={faUmbrellaBeach} /> Phuket
          </Link>
        </li>
        <li>
          <Link to="/Pattaya">
            <FontAwesomeIcon icon={faCocktail} /> Pattaya
          </Link>
        </li>
        <li>
          <Link to="/Krabi">
            <FontAwesomeIcon icon={faWater} /> Krabi
          </Link>
        </li>
            </ul>
          </aside>
          <div className="content">
            <h1 className="title">สถานที่ท่องเที่ยวยอดนิยมในประเทศไทย</h1>
            <div className="destinations">
              {destinations.map(destination => (
                <div key={destination.id} className="destination">
                  <img src={destination.image} alt={destination.name} className="destination-image" />
                  <div className="destination-info">
                    <h2 className="destination-name">{destination.name}</h2>
                    <p className="destination-description">{destination.description}</p>
                    <p className="destination-rating">Rating: {destination.rating}</p>
                    <p className="destination-reviews">Reviews: {destination.reviews}</p>
                    <p className="destination-activities">Activities: {destination.activities.join(', ')}</p>
                    <button className="details-button" onClick={handleDetailsClick}>ดูรายละเอียด</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
