// Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"></img>
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
