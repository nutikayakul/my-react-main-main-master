import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import "./Bangkok.css"; // Import CSS สำหรับการปรับแต่ง
import Nav from "../component/Nav";

const BangkokPlaces = () => {
  const places = [
    {
      id: 1,
      name: "วัดพระแก้ว",
      image: "https://img.kapook.com/u/2023/sutasinee/04/WatPhraKaew11.jpg",
      url: "https://travel.trueid.net/detail/gpKn8l8oRrob",
    },
    {
      id: 2,
      name: "พระบรมมหาราชวัง",
      image: "https://image.bangkokbiznews.com/image/kt/media/image/fileupload1/source/162831322364.jpg?1628313356370?x-image-process=style/lg-webp",
      url: "https://www.bangkokbiznews.com/news/953433",
    },
    { id: 3, name: "วัดอรุณ", image: "https://placeimg.com/300/200/people",
      image: "https://novotelbangkokplatinum.com/wp-content/uploads/sites/63/2016/11/destination-wat-arun1.jpg",
      url: "https://novotelbangkokplatinum.com/th/bangkok-destinations/bangkok-tradition-culture/wat-arun/",
     },
    {
      id: 4,
      name: "ตลาดนัดจตุจักร",
      image: "https://img.salehere.co.th/p/1200x0/2023/01/09/drb7zox6l4ik.jpg",
      url: "https://salehere.co.th/articles/travel-chatuchak-night-market",
    },
    {
      id: 5,
      name: "ถนนข้าวสาร",
      image: "https://www.muaythaihostels.com/uploads/052541.jpg",
      url: "https://www.muaythaihostels.com/blog/read/202",
    },
    { id: 6, name: "สวนลุมพินี", 
      image: "https://www.salika.co/wp-content/uploads/2021/05/lumpini-park-100-years-public-hearing-8.jpg",
      url: "https://www.salika.co/2021/05/30/lumpini-park-100-years-public-hearing/",
    },
    {
      id: 7,
      name: "ห้างสรรพสินค้าสยามพารากอน",
      image: "https://www.siamparagon.co.th/public/images/aboutus/SPD.jpg",
      url: "https://www.siamparagon.co.th/about-us",
    },
    { id: 8, name: "เยาวราช", 
      image: "https://palanla.com/ckeditor/upload/files/id37/domestic_location/Yaowarat/DSC00296.jpg",
      url: "https://palanla.com/th/domesticLocation/detail/1416",
     },
  ];

  return (
    <div className="nav-bk">
      <Nav />
      <div className="container">
        <h1 className="text-center">สถานที่ท่องเที่ยวในกรุงเทพฯ</h1>
        <div className="row">
          <p>กรุงเทพมหานคร หรือที่รู้จักกันในชื่อ กรุงเทพฯ เป็นเมืองหลวงของประเทศไทยและเป็นศูนย์กลางทางวัฒนธรรม เศรษฐกิจ และการเมืองของประเทศ มีความหลากหลายในด้านสถาปัตยกรรม วิถีชีวิต และแหล่งท่องเที่ยวที่น่าสนใจมากมาย ทำให้เป็นหนึ่งในจุดหมายปลายทางยอดนิยมของนักท่องเที่ยวจากทั่วโลก</p>
          {places.map((place) => (
            <div key={place.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={place.image}
                  className="card-img-top rounded img-fluid"
                  alt={place.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{place.name}</h5>
                  <p className="card-text">
                    รายละเอียดเพิ่มเติมเกี่ยวกับ {place.name}{" "}
                    สามารถเข้าไปดูได้ในเว็บไซต์หรือแหล่งข้อมูลท่องเที่ยวอื่นๆ
                  </p>
                  <a href={place.url} className="btn btn-primary">
                    <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                    ดูรายละเอียด
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BangkokPlaces;
