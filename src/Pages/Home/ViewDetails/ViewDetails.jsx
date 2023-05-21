import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const { name, price, rating, picture, description, available_quantity, seller } = useLoaderData();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-md bg-white rounded-lg overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src={picture} alt={name} />
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-2">{name}</h2>
          <p className="text-gray-700 mb-2">{description}</p>
          <p className="text-gray-700 mb-2">Available Quantity: {available_quantity}</p>
          <p className="text-gray-700 mb-2">Seller: {seller}</p>
          <p className="text-lg font-bold mb-2">Price: {price}</p>
          <p className="text-lg font-bold mb-2">Rating: {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;

