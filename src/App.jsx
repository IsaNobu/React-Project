import Header from "./Designs/Header";
import Banner from "./Designs/Banner";
import OurRecipes from "./components/OurRecipes";
import WantToCook from "./components/WantToCook";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [details, setDetails] = useState([]);
  const [clickedButtons, setClickButtons] = useState(new Set());

  const button = (items) => {
    if (!clickedButtons.has(items.recipe_id)) {
      setClickButtons(
        (prevClicked) => new Set([...prevClicked, items.recipe_id])
      );
      const allDetails = [...details, items];
      setDetails(allDetails);
    } else {
      toast("Already Exists");
    }
  };

  return (
    <>
      <ToastContainer />
      <Header></Header>
      <Banner></Banner>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">Our Recipes</h1>
        <h3 className="text-2xl">
          Heres our recipes and select what you want to dine in with and all the
          details are shared
        </h3>
      </div>
      <div className="flex justify-center gap-12 mt-10">
        <div>
          <OurRecipes button={button}></OurRecipes>
        </div>
        <div className="w-1/4">
          <WantToCook details={details}></WantToCook>
        </div>
      </div>
    </>
  );
}

export default App;
