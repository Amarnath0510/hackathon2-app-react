
import './App.css';
import Card from '@mui/material/Card';

function App() {
  const products=[
   { 

     id:"100",
     image:"https://static.toiimg.com/thumb/resizemode-4,msid-79729969,width-1200,height-900/79729969.jpg",
    name:"Iphone 13 pro",
    ratings:"⭐⭐⭐⭐3357",
    price:"₹1,35,800",
    

  },

  { 
    id:"102",
    image:"https://i1.wp.com/www.smartprix.com/bytes/wp-content/uploads/2021/03/Samsung-Galaxy-M12-review-5-scaled.jpg?ssl=1",
  name:"Samsung galaxy m12",
  ratings:"⭐⭐⭐⭐83,457",
  price:"₹11,658",


},


{ id:"103",
  image:"https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg",
name:"Iphone 11",
ratings:"⭐⭐⭐⭐5621",
price:"₹54,900",


},


{   
  id:"104",
   image:"https://dealntechcdn.b-cdn.net/wp-content/uploads/2021/08/vivo-Y53-4G-460x460.jpg",
name:"Vivo Y53",
ratings:"⭐⭐⭐⭐260",
price:"₹16,896",


},

{
  id:"105",
   image:"https://www.kickmobiles.com/images/thumbs/0020854_xiaomi-redmi-9a_808.jpeg",
name:"Redmi 9A",
ratings:"⭐⭐⭐⭐6987",
price:"₹23000",


}

 ];
  return (
    <div className="App">
     {products.map((product,index)=>(
      <Card variant="outlined" key={index} className="product-container">
     
<img  className="product-pic"
src={product.image}
alt={product.name}
/>
 <p className="product-name">{product.name}</p>
 <p>{product.ratings}</p>
 <p>{product.price}</p>
 

</Card>
     ))}
   
    </div>
  );
}

export default App;
