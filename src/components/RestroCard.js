import { CDN_URL } from "../utils/constants";

const RestroCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo } =
    resData?.info;
  console.log(props);
  return (
    <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating}</h5>
      <h5>{costForTwo}</h5>
    </div>
  );
};

export default RestroCard;
