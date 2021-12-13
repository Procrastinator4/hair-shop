import React from "react";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Categories
        id={"about"}
        heading={"Categories Of The Month"}
        image1={"/watch.jpg"}
        image2={"/shoe.jpg"}
        image3={"/glass.jpg"}
        title1={"Watch "}
        title2={"Shoe"}
        title3={"Sun Glass"}
      />
      <Categories
        id={"shop"}
        heading={"Featured Products"}
        image1={"/lighter.jpg"}
        image2={"/wristwatch.jpg"}
        image3={"/camera.jpg"}
        title1={"Lighter"}
        title2={"Wrist Watch"}
        title3={"Production Camera"}
      />
      <Footer />
    </div>
  );
}

export default App;
