import { CDN_URL } from "../utils/constants";

const RestCard = (props) => {
    console.log("Props", props);

    // const { details } = props;

    const { name, cuisines, avgRating, cloudinaryImageId, sla, costForTwo, veg } =
        props.details.info;

    // const { restName, cuisine } = props;
    const imageSrc = `${CDN_URL}${cloudinaryImageId}`;

    return (
        <div className="rest-card">
            <div className="rest-card-img">
                <img src={imageSrc} alt="" />
            </div>
            <div className="rest-card-details">
                <h3>{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating}</h4>
                <h4>{sla.slaString}</h4>
            </div>
        </div>
    );
};

export default RestCard;