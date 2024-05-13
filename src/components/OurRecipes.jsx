import { useEffect, useState } from "react";
import RecipeCard from "./RecipeCard";
import PropTypes from "prop-types";

const OurRecipes = ({ button }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("source.JSON")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-12">
      {items.map((items) => (
        <RecipeCard
          button={button}
          key={items.recipe_id}
          items={items}
        ></RecipeCard>
      ))}
    </div>
  );
};

export default OurRecipes;

OurRecipes.propTypes = {
  button: PropTypes.func.isRequired,
};
