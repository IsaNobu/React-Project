import PropTypes from "prop-types";

const PreparationItems = ({ detail }) => {
  const { recipe_name, preparing_time, calories } = detail;
  return (
    <div className="flex justify-evenly mb-6 text-lg">
      <div>
        <div className="w-[90px] text-center">{recipe_name}</div>
      </div>
      <div className="w-[50px] text-center">{preparing_time}</div>
      <div className="w-[50px] text-center">{calories}</div>
      <div>
        <button className="btn bg-[#0BE58A] rounded-full">Preparing</button>
      </div>
    </div>
  );
};

PreparationItems.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default PreparationItems;
