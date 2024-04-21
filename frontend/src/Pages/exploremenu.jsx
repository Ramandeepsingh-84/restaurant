// import React from "react";
// import { Link } from "react-router-dom";


// const ExploreMenu = () => {
//   // Define some sample breakfast and dinner items
//   const breakfastItems = [
//     { name: "Pancakes", description: "Delicious fluffy pancakes served with syrup." },
//     { name: "Eggs Benedict", description: "Classic eggs benedict with hollandaise sauce." },
//     { name: "Avocado Toast", description: "Healthy avocado toast topped with cherry tomatoes." }
//   ];

//   const dinnerItems = [
//     { name: "Grilled Salmon", description: "Fresh grilled salmon served with lemon and herbs." },
//     { name: "Steak", description: "Juicy steak cooked to perfection." },
//     { name: "Vegetable Stir-Fry", description: "Colorful vegetable stir-fry with tofu." }
//   ];

//   return (
//     <div className="menu">
//       <h1>Explore Menu</h1>

//       <section className="section">
//         <h2>Breakfast</h2>
//         <div className="items">
//           {breakfastItems.map((item, index) => (
//             <div key={index} className="item">
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="section">
//         <h2>Dinner</h2>
//         <div className="items">
//           {dinnerItems.map((item, index) => (
//             <div key={index} className="item">
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//             </div>
//           ))}
//         </div>
//         <div className ="back"> <Link to="/">Back to Home</Link></div>

//       </section>

//     </div>
//   );
// };

// export default ExploreMenu;



import React from 'react'
import {data} from '../restApi.json'
import { Link, useLocation } from "react-router-dom";

const ExploreMenu = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className="container">
            <div className="heading_section">
                <h1 className="heading">Menu</h1>
                <p>we offer a diverse menu that caters to a variety of tastes. But some dishes have become our customer favorites, standing out for their unique flavors and quality ingredients. </p>
            </div>
            <div className="dishes_container">
                {
                    data[0].menu.map(element => (
                        <div className="card" key={element.id}>
                                <img src={element.image} alt={element.title} />
                                <h3>{element.title}</h3>
                                <button>{element.category}</button>
                        </div>
                    ))
                }   
            </div>
        </div>

      </section>
      <div className ="back"> <Link to="/">Back to Home</Link></div>

    </>
  )
}

export default ExploreMenu;

