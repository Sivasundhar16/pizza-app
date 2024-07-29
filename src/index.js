import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella olive oil and rosemary",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

const Header = () => {
  const siva = {};
  return (
    <header className="header">
      <h1 style={siva}>Pizza Hunt </h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Pizza Menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian clusine. 6 creative dishes to choose from. All
            from our stone oven , all organic, all delicious
          </p>

          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza totalMenu={pizza} key={pizza.name} /> //This arrow function receives each element of pizzaData as its pizza parameter during each iteration.
              // here Pizza is a function below and name as props
            ))}
          </ul>
        </> // this is called react freagment
      ) : (
        <p>We are Closed Now !</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozzarella , spinachi,chees"
        picname="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Finghi"
        ingredient="Tomato,Mushroom"
        picname="pizzas/funghi.jpg"
        price={15}
      /> */}
    </main>
  );
};

function Pizza({ totalMenu }) {
  return (
    <li className={`pizza ${totalMenu.soldOut ? "sold-out" : ""}`}>
      <img src={totalMenu.photoName} alt={totalMenu.name} />
      <div>
        <h3>{totalMenu.name}</h3>
        <p>{totalMenu.ingredients}</p>
        <span>{totalMenu.soldOut ? "SOLD OUT" : totalMenu.price}</span>
      </div>
    </li>
  );
}

const Footer = () => {
  // var siva = "my first name";
  // console.log(siva);

  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 12;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("we are currently open");
  // else alert("we are closed");

  return (
    <footer className="footer">
      <div>
        {isOpen ? (
          <Order siva={closeHour} sundar={openHour} />
        ) : (
          <p>We're Closed😿 </p>
        )}
        <button className="btn">Order</button>
      </div>
    </footer>
  );
};

const Order = ({ siva, sundar }) => {
  return (
    <p>
      We are Open from {sundar.openHour} To {siva.closeHour}.Come visit us again
      😎😉
    </p>
  );
};

// react v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> // render twice the code
);

//before version 18
//React.render(<app />.document.getElementById("root"))
// babel - converting html into java script
// snippet for shortcut
