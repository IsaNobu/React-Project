import PropTypes from "prop-types";
import { CiTimer } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const RecipeCard = ({ items, button }) => {
  const {
    recipe_name,
    recipe_img,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = items;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={recipe_img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{recipe_name}</h2>
        <p className="text-[#878787]">{short_description}</p>
        <hr />
        <div>
          <h1 className="text-xl font-semibold ">
            Ingredients: {ingredients.length}
          </h1>
          <ul>
            {ingredients.map((ingredients, idx) => (
              <li className="ml-6 mt-1 text-[#878787]" key={idx}>
                {ingredients}
              </li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="flex items-center gap-24">
          <div className="flex items-center gap-2">
            <CiTimer /> {preparing_time}
          </div>
          <div className="flex items-center gap-2">
            <FaFire />
            {calories}
          </div>
        </div>
        <div>
          <button
            onClick={() => button(items)}
            className="btn text-xl mt-4 bg-[#0BE58A] border-none px-14 rounded-full"
          >
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

RecipeCard.propTypes = {
  items: PropTypes.object.isRequired,
  button: PropTypes.func.isRequired,
};
