// Header
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"
        ></img>
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

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="burger"
        src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg"
      ></img>
      <h3>Meghana Foods</h3>
      <h4>Biryani, North India</h4>
      <h4>Biryani, North India</h4>
    </div>
  );
};

const resList = [
  {
    name: "The Gourmet Kitchen",
    image: "https://example.com/images/gourmet-kitchen.jpg",
    rating: 4.5,
    address: "123 Delicious St, Food City",
    phone: "123-456-7890",
    foodItems: [
      {
        name: "Spaghetti Carbonara",
        price: 12.99,
        description: "Classic Italian pasta with creamy sauce.",
        image: "https://example.com/images/spaghetti-carbonara.jpg",
      },
      {
        name: "Margherita Pizza",
        price: 9.99,
        description:
          "Traditional pizza with fresh tomatoes, mozzarella, and basil.",
        image: "https://example.com/images/margherita-pizza.jpg",
      },
    ],
  },
  {
    name: "Sushi Paradise",
    image: "https://example.com/images/sushi-paradise.jpg",
    rating: 4.8,
    address: "456 Ocean Ave, Seafood Town",
    phone: "234-567-8901",
    foodItems: [
      {
        name: "Salmon Nigiri",
        price: 3.99,
        description: "Fresh salmon on vinegared rice.",
        image: "https://example.com/images/salmon-nigiri.jpg",
      },
      {
        name: "Dragon Roll",
        price: 11.99,
        description: "Eel, cucumber, and avocado topped with tobiko.",
        image: "https://example.com/images/dragon-roll.jpg",
      },
    ],
  },
  {
    name: "Burger Haven",
    image: "https://example.com/images/burger-haven.jpg",
    rating: 4.3,
    address: "789 Burger Blvd, Grill City",
    phone: "345-678-9012",
    foodItems: [
      {
        name: "Classic Cheeseburger",
        price: 8.99,
        description:
          "Juicy beef patty with cheddar cheese, lettuce, and tomato.",
        image: "https://example.com/images/classic-cheeseburger.jpg",
      },
      {
        name: "Bacon Avocado Burger",
        price: 10.99,
        description:
          "Beef patty with crispy bacon, avocado, and pepper jack cheese.",
        image: "https://example.com/images/bacon-avocado-burger.jpg",
      },
    ],
  },
];

// console.log(restaurants);

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resList} />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
