import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  //const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza />
    </main>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/margherita.jpg" alt="Pizza Margherita" />
      <h3>Pizza Margherita</h3>
      <p>Pizza with tomatoes and mozzarella</p>
    </div>
  );
}

function Footer() {
  const hours = new Date().getHours();
  const openHours = 12;
  const closedHours = 22;
  const isOpen = hours >= openHours && hours <= closedHours;

  console.log(isOpen);

  return (
    <footer className="footer">{new Date().toLocaleDateString()}. We're currently open</footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
