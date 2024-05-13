import Cooking from "./Cooking";
import PreparationItems from "./PreparationItems";
import PropTypes from "prop-types";

const WantToCook = ({
  details,
  removeButtons,
  items,
  cookingCount,
  cookingDetails,
}) => {
  console.log(cookingDetails);
  return (
    <div className="border-2 rounded-3xl p-6">
      <div className="text-center text-3xl font-bold mb-6">
        <h1>Want to cook: {details.length}</h1>
      </div>
      <hr />
      <div className="flex text-xl gap-10 ml-12 mt-6 mb-6 text-[#878787] font-semibold">
        <h3>Name</h3>
        <h3>Time</h3>
        <h3>Calories</h3>
      </div>
      <div>
        {details.map((detail, idx) => (
          <PreparationItems
            removeButtons={removeButtons}
            items={items}
            key={idx}
            detail={detail}
          ></PreparationItems>
        ))}
      </div>
      <hr />
      <div>
        <div className="text-center text-3xl font-bold mb-6">
          <h1>Cooking: {cookingCount}</h1>
        </div>
        <div className="flex justify-evenly mt-6 text-[#878787] font-semibold text-xl">
          <h3>Name</h3>
          <h3>Time</h3>
          <h3>Calories</h3>
        </div>
        <div>
          {cookingDetails.map((cookingDetail) => (
            <Cooking
              key={cookingDetail.recipe_id}
              cookingDetail={cookingDetail}
            ></Cooking>
          ))}
        </div>
        <div className="text-xl font-bold mt-6">
          <div>Total Time =</div>
          <div>Total Calories =</div>
        </div>
      </div>
    </div>
  );
};

export default WantToCook;

WantToCook.propTypes = {
  details: PropTypes.array,
  cookingDetails: PropTypes.array,
  items: PropTypes.object,
  removeButtons: PropTypes.func.isRequired,
  cookingCount: PropTypes.number.isRequired,
};
