import React from "react";
import "./style.css";

/*

💪 Exercise: Making your own components

Notice that the main content has been extracted into its own component.

🎯 Your task:
1. Extract the header content into its own component called Header.
2. Do the same with the footer content.
In total, App should contain 3 custom components (Header, MainContent, Footer).

💡 Note: React components must start with a capital letter.

*/

export default function App() {
  return (
    <div>
      <Header />
      <MainContent />

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>React App</h1>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <a href="#">Privacy policy</a>
    </footer>
  );
}

function MainContent() {
  return (
    <main>
      <h2>Welcome!</h2>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png"
        alt="React logo"
        width="200px"
        className="spinning"
      />
      <p>This is some very interesting content.</p>
    </main>
  );
}
