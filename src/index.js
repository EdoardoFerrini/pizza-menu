import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  return (
    <div>
      <h2>Our Menu</h2>
      <Pizza />
    </div>
  );
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/margherita.jpg" alt="Pizza Margherita" />
      <h2>Pizza Margherita</h2>
      <p>Pizza with tomatoes and mozzarella</p>
    </div>
  );
}

function Footer() {
  return (
    <footer>{new Date().toLocaleDateString()}. We're currently open</footer>
  );
  //return React.createElement('footer', null, "We're currently open")
  /* per mostrare quanto sarebbe difficile creare componenti senza il JSX */
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
