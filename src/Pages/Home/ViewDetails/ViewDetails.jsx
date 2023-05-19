import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const details = useLoaderData();

  if (!details) {
    return <progress className="progress w-56"></progress>;
  }
  return (
    <div>
      {/* {details.map((detail) => (
        <div key={detail.id}>
          <h2>{detail.name}</h2>
          <p>Price: {detail.price}</p>
          <p>Rating: {detail.rating}</p>
          <img src={detail.picture} alt={detail.name} />
        </div>
      ))} */}
      <h1>hello</h1>
    </div>
  );
};

export default ViewDetails;
