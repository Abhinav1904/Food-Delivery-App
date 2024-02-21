import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-2 w-[250px] rounded-md hover:bg-gray-200">
      <img
        className="box-content h-[150px] w-full rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-2 text-md">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestroCard;
