import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const {name, price, rating, picture,description, available_quantity,seller} = useLoaderData();
  return (
    <div>
        <div>
          <h2>{name}</h2>
          <h1>{description}</h1>
          <h1>{available_quantity}</h1>
          <h1>{seller}</h1>
          <p>Price: {price}</p>
          <p>Rating: {rating}</p>
          <img src={picture} alt={name} />
        </div>
      <h1>hello</h1>
    </div>
  );
};

export default ViewDetails;
