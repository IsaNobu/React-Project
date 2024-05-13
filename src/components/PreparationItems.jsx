import PropTypes from "prop-types";

const PreparationItems = ({ detail, removeButtons, items }) => {
  const { recipe_name, preparing_time, calories } = detail;
  return (
    <div className="flex justify-evenly mb-6 bg-[#28282808] p-4 rounded-lg font-bold text-xl">
      <div>
        <div className="w-[90px] text-center">{recipe_name}</div>
      </div>
      <div className="w-[50px] text-center">{preparing_time}</div>
      <div className="w-[50px] text-center ml-6">{calories}</div>
      <div>
        <button
          onClick={() => removeButtons(items)}
          className="btn bg-[#0BE58A] rounded-full ml-6"
        >
          Preparing
        </button>
      </div>
    </div>
  );
};

PreparationItems.propTypes = {
  detail: PropTypes.object.isRequired,
  items: PropTypes.object.isRequired,
  removeButtons: PropTypes.func.isRequired,
};

export default PreparationItems;
