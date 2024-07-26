// src/components/Footer.js
import React from 'react';
import './Footer.css';  // ตรวจสอบเส้นทางของไฟล์ CSS
const destinations = [
    {
      city: 'กรุงเทพฯ',
      places: [
        {
          name: 'วัดพระแก้ว และพระบรมมหาราชวัง',
          description: 'วัดพระแก้วเป็นวัดที่มีความสำคัญที่สุดในประเทศไทย มีพระแก้วมรกตซึ่งเป็นพระพุทธรูปคู่บ้านคู่เมือง ตั้งอยู่ในเขตพระบรมมหาราชวัง ซึ่งเป็นที่ประทับของพระมหากษัตริย์ไทยในอดีต'
        },
        {
          name: 'ตลาดนัดจตุจักร',
          description: 'ตลาดนัดจตุจักรเป็นตลาดนัดที่ใหญ่ที่สุดในประเทศไทย มีสินค้าหลากหลายประเภท ตั้งแต่เสื้อผ้า ของตกแต่งบ้าน อาหาร และของฝากต่าง ๆ'
        },
        {
          name: 'ถนนข้าวสาร',
          description: 'ถนนข้าวสารเป็นแหล่งท่องเที่ยวยอดนิยมสำหรับนักเดินทางที่ต้องการพบปะสังสรรค์ มีร้านอาหาร ร้านค้า และบาร์ต่าง ๆ ที่เปิดให้บริการตลอดคืน'
        }
      ]
    },
    {
      city: 'เชียงใหม่',
      places: [
        {
          name: 'ดอยสุเทพ',
          description: 'ดอยสุเทพเป็นภูเขาที่มีความสูงและมีวิวทิวทัศน์ที่งดงาม บนยอดดอยมีวัดพระธาตุดอยสุเทพซึ่งเป็นสถานที่สำคัญทางศาสนาและมีทิวทัศน์ที่สามารถมองเห็นเมืองเชียงใหม่ได้อย่างชัดเจน'
        },
        {
          name: 'ตลาดนัดกลางคืนเชียงใหม่',
          description: 'ตลาดนัดกลางคืนเชียงใหม่เป็นสถานที่ช้อปปิ้งที่มีสินค้าให้เลือกมากมาย ทั้งงานฝีมือท้องถิ่น อาหารพื้นเมือง และของที่ระลึกต่าง ๆ'
        },
        {
          name: 'บ้านกางหลวง',
          description: 'หมู่บ้านเล็ก ๆ ในจังหวัดเชียงใหม่ที่มีความสงบเงียบและเต็มไปด้วยธรรมชาติที่งดงาม เป็นสถานที่ที่เหมาะสำหรับการพักผ่อนและสัมผัสวิถีชีวิตท้องถิ่น'
        }
      ]
    },
    {
      city: 'ภูเก็ต',
      places: [
        {
          name: 'หาดป่าตอง',
          description: 'หาดป่าตองเป็นหาดที่มีความคึกคักและเต็มไปด้วยกิจกรรมต่าง ๆ เช่น การเล่นน้ำ การนอนอาบแดด และการเล่นกีฬาทางน้ำ นอกจากนี้ยังมีร้านอาหารและบาร์ให้บริการมากมาย'
        },
        {
          name: 'เกาะพีพี',
          description: 'เกาะพีพีเป็นหนึ่งในเกาะที่มีชื่อเสียงระดับโลก ด้วยน้ำทะเลสีฟ้าใสและหาดทรายขาว เป็นสถานที่ยอดนิยมสำหรับการดำน้ำตื้นและดำน้ำลึก'
        },
        {
          name: 'แหลมพรหมเทพ',
          description: 'แหลมพรหมเทพเป็นจุดชมพระอาทิตย์ตกที่สวยงามที่สุดในภูเก็ต มีวิวทิวทัศน์ที่น่าประทับใจและเป็นจุดถ่ายรูปยอดนิยมสำหรับนักท่องเที่ยว'
        }
      ]
    }
  ];
  
  // คอมโพเนนต์สำหรับแสดงข้อมูลสถานที่ท่องเที่ยว
  const Destination = ({ city, places }) => (
    <div>
      <h2>{city}</h2>
      {places.map((place, index) => (
        <div key={index}>
          <h3>{place.name}</h3>
          <p>{place.description}</p>
        </div>
      ))}
    </div>
  );
  
  const Footer = () => (
    <footer className="footer">
      <div className="footer-content">
        <h4>ติดต่อเรา</h4>
        <p>ที่อยู่: 123 ถนนการท่องเที่ยว, กรุงเทพฯ, ประเทศไทย</p>
        <p>โทรศัพท์: +66 555 5555</p>
        <p>อีเมล: User@gmail.com</p>
        <div className="social-media">
          <a href="/" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="/" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
    </footer>
  );


export default Footer;
