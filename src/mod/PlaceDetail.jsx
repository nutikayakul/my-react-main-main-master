import React from 'react';
import { Link } from 'react-router-dom';

const places = [
    {
        title: 'วัดพระธาตุดอยสุเทพ',
        description: 'วัดสำคัญที่ตั้งอยู่บนดอยสุเทพ เป็นที่ประดิษฐานพระบรมสารีริกธาตุของพระพุทธเจ้า นักท่องเที่ยวสามารถขึ้นบันไดนาคเพื่อไปถึงเจดีย์ทองที่มีวิวเมืองเชียงใหม่ที่งดงาม'
    },
    {
        title: 'วัดพระสิงห์',
        description: 'วัดที่มีชื่อเสียงในเชียงใหม่ มีพระพุทธสิหิงค์ซึ่งเป็นพระพุทธรูปสำคัญ และเป็นศูนย์กลางในการจัดงานสงกรานต์ประจำปี'
    },
    {
        title: 'อุทยานแห่งชาติดอยอินทนนท์',
        description: 'อุทยานแห่งชาติที่มีความสูงที่สุดในประเทศไทย มีธรรมชาติที่งดงาม น้ำตก สถานที่ชมวิวดวงอาทิตย์ขึ้น และดอกไม้เมืองหนาว'
    },
    {
        title: 'ถนนคนเดินวันอาทิตย์ (ถนนท่าแพ)',
        description: 'ถนนที่เปิดให้เดินช้อปปิ้งเฉพาะวันอาทิตย์ มีสินค้าพื้นเมือง งานศิลปะ อาหาร และการแสดงพื้นบ้าน'
    },
    {
        title: 'เชียงใหม่ไนท์ซาฟารี',
        description: 'สวนสัตว์กลางคืนที่สามารถนั่งรถรางชมสัตว์ต่าง ๆ ในบรรยากาศธรรมชาติ ทั้งสัตว์ป่าและสัตว์หายาก'
    },
    {
        title: 'ตลาดวโรรส',
        description: 'ตลาดที่มีชื่อเสียงในการขายสินค้าท้องถิ่น เช่น อาหารแห้ง ผ้าไหม และของฝากต่าง ๆ'
    },
    {
        title: 'หมู่บ้านหัตถกรรมบ่อสร้าง',
        description: 'แหล่งผลิตร่มกระดาษที่มีชื่อเสียง นักท่องเที่ยวสามารถชมการทำร่มและซื้อของที่ระลึก'
    },
    {
        title: 'ดอยอ่างขาง',
        description: 'สถานที่ท่องเที่ยวที่มีอากาศเย็นสบายตลอดปี มีสวนดอกไม้เมืองหนาว และสถานีเกษตรหลวงอ่างขาง'
    },
    {
        title: 'บ้านแม่กำปอง',
        description: 'หมู่บ้านเล็ก ๆ ในหุบเขาที่มีความเงียบสงบและธรรมชาติที่งดงาม เป็นสถานที่เหมาะสำหรับการพักผ่อน'
    },
    {
        title: 'ไร่ชาลุงเดช',
        description: 'ไร่ชาที่สวยงามบนดอยแม่สลอง นักท่องเที่ยวสามารถชมวิธีการผลิตชาและชิมชาคุณภาพ'
    }
];

const Home = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
            <h1 style={{ color: '#2c3e50' }}>สถานที่ท่องเที่ยวในเชียงใหม่</h1>
            {places.map((place, index) => (
                <div key={index} style={{ marginBottom: '20px' }}>
                    <h2 style={{ color: '#e74c3c' }}>
                        {index + 1}. <Link to={`/place/${index}`}>{place.title}</Link>
                    </h2>
                    <p>{place.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Home;
