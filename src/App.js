import logo from './logo.svg';
import './App.css';

function App() {
  const products=[
   { 
     image:"https://static.toiimg.com/thumb/resizemode-4,msid-79729969,width-1200,height-900/79729969.jpg",
    name:"Iphone 13 pro",
    ratings:"⭐⭐⭐⭐3357",
    price:"Price:₹1,35,800",
    Finalprice:"Offer price:₹1,28,000",

  },

  { image:"https://i1.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/03/Samsung-Galaxy-M12-review-5-scaled.jpg?ssl=1",
  name:"Samsung galaxy m12",
  ratings:"Ratings:⭐⭐⭐⭐83,457",
  price:"Price:₹11,658",
  Finalprice:"Offer price:₹10,800",

},

{ image:"https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg",
name:"Iphone 11",
ratings:"⭐⭐⭐⭐5621",
price:"Price:₹54,900",
Finalprice:"Offer Price:₹47,968",

},


{ image:"https://dealntechcdn.b-cdn.net/wp-content/uploads/2021/08/vivo-Y53-4G-460x460.jpg",
name:"Vivo Y53",
ratings:"⭐⭐⭐⭐260",
price:"Price:₹16,896",
Finalprice:"Offer Price:₹128,00",

},

{ image:"https://www.kickmobiles.com/images/thumbs/0020854_xiaomi-redmi-9a_808.jpeg",
name:"Redmi 9A",
ratings:"⭐⭐⭐⭐6987",
price:"Price:₹23000",
Finalprice:"Offer Price:₹20,000",

}

 ];
  return (
    <div className="App">
     {products.map((product,index)=>(
      <div key={index}className="product-container"> 
<img  className="product-pic"
src={product.image}
alt={product.name}
/>
 <p className="product-name">{product.name}</p>
 <p>{product.ratings}</p>
 <p>{product.price}</p>
 <p>{product.Finalprice}</p>
</div>
     ))}
    </div>
  );
}

export default App;
