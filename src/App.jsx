import { useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Items from "./components/Items/Items";
import Nav from "./components/Navbar/Nav";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Items data={data}></Items>
      <Footer></Footer>
    </>
  );
}

export default App;
