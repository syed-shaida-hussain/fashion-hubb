import { v4 as uuid } from "uuid";
import img1  from "../../assets/images/ecom-img1.webp"
import img2  from "../../assets/images/ecom-img2.webp"
import img3  from "../../assets/images/ecom-img3.webp"
import img4  from "../../assets/images/ecom-img4.jpg"
import img5  from "../../assets/images/ecom-img5.webp"
import img6  from "../../assets/images/ecom-img6.jpg"
import img7  from "../../assets/images/ecom-img7.png"
import img8  from "../../assets/images/ecom-img8.webp"
import img9  from "../../assets/images/ecom-img9.jpg"
import img10  from "../../assets/images/ecom-img10.webp"
import img11  from "../../assets/images/ecom-img11.png"
import img12  from "../../assets/images/ecom-img12.avif"


export const products = [
  {
    _id: uuid(),
    name: "Men premium trendy Jacket",
    originalPrice: "2000",
    discountedPrice : "1500",
    src : { url : img6 , alt : "Men's jacket"},
    categoryMen: true,
    categoryWomen: false,
    cod : true ,
    fastDelivery : true,
    rating : "1",
    quantity : 1 
  },
  {
    _id: uuid(),
    name: "Men premium sports TShirt",
    originalPrice: "1500",
    discountedPrice : "1000",
    src : {url : img9 , alt : "Men's Tshirt"},
    categoryMen: true,
    categoryWomen: false,
    cod : true ,
    fastDelivery : true,
    rating : "1",
    quantity : 1 
  },
  {
    _id: uuid(),
    name: "Men winter cool Jacket",
    originalPrice: "3000",
    discountedPrice : "2500",
    src : {url : img7 , alt : "Winter jacket"},
    categoryMen: true,
    categoryWomen: false,
    cod : true ,
    fastDelivery : false,
    rating : "2",
    quantity : 1 
  },
  {
    _id: uuid(),
    name: "Women premium Tshirt",
    originalPrice: "3000",
    discountedPrice : "2800",
    src : {url : img11  , alt : "Silk saree"},
    categoryMen: false,
    categoryWomen: true,
    cod : true ,
    fastDelivery : false,
    rating : "2",
    quantity : 1 
  },
  {
    _id: uuid(),
    name: "Men stylish casual shoes",
    originalPrice: "1000",
    discountedPrice : "700",
    src : {url : img3 , alt : "Casual shoes"},
    categoryMen: true,
    categoryWomen: false,
    cod : true ,
    fastDelivery : true,
    rating : "3",
    quantity : 1 
  },
  {
    _id: uuid(),
    name: "Women premium stylish shoes",
    originalPrice: "2000",
    discountedPrice : "1500",
    src : {url : img2 , alt : "Formal shoes"},
    categoryMen: false,
    categoryWomen: true,
    cod : true ,
    fastDelivery : true,
    rating : "3",
    quantity : 1 
  },
  {
    _id: uuid(),
    name: "Men formal quality Jacket",
    originalPrice: "4000",
    discountedPrice : "3500",
    src : {url : img8 , alt : "Formal jacket"},
    categoryMen: true,
    categoryWomen: false,
    cod : false ,
    fastDelivery : false,
    rating : "4",
    quantity : 1 
  },
  {
    _id: uuid(),
    name: "Men sports durable shoes",
    originalPrice: "1000",
    discountedPrice : "500",
    src : {url : img1  , alt : "Climbing shoes"},
    categoryMen: true,
    categoryWomen: false,
    cod : false ,
    fastDelivery : false,
    rating : "4",
    quantity : 1 
  },
  {
    _id: uuid(),
    name: "Women premium party shoes",
    originalPrice: "1000",
    discountedPrice : "500",
    src : {url : img4 , alt : "Women party shoes"},
    categoryMen: false,
    categoryWomen: true,
    cod : true ,
    fastDelivery : true,
    rating : "4",
    quantity : 1 
  },
  {
    _id: uuid(),
    name: "Men formal premium pants",
    originalPrice: "3000",
    discountedPrice : "2500",
    src : {url : img12 , alt : "Formal pants"},
    categoryMen: true,
    categoryWomen: false,
    cod : false ,
    fastDelivery : false,
    rating : "5",
    quantity : 1 
  },
  {
    _id: uuid(),
    name: " women casual party Jacket",
    originalPrice: "3000",
    discountedPrice : "2000",
    src : {url : img5 , alt : "Women jacket"},
    categoryMen: false,
    categoryWomen: true,
    cod : false ,
    rating : "5",
    fastDelivery : true,
    quantity : 1 
  },
  {
    _id: uuid(),
    name: "Men round neck Tshirt",
    originalPrice: "700",
    discountedPrice : "500",
    src : {url : img10 , alt : "Round Tshirt"},
    categoryMen: true,
    categoryWomen: false,
    cod : false ,
    fastDelivery : false,
    rating : "5",
    quantity : 1 
  }
];