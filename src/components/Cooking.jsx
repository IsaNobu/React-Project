import PropTypes from "prop-types";

const Cooking = ({ cookingDetail }) => {
  const { recipe_name, preparing_time, calories } = cookingDetail;

  return (
    <div className="flex justify-evenly mb-6 mr-8 mt-6 bg-[#28282808] p-4 rounded-2xl font-bold text-xl">
      <div>
        <div className="w-[90px] text-center">{recipe_name}</div>
      </div>
      <div className="w-[50px] text-center">{preparing_time}</div>
      <div className="w-[50px] text-center">{calories}</div>
    </div>
  );
};

Cooking.propTypes = {
  cookingDetail: PropTypes.object,
};

export default Cooking;
