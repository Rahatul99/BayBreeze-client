import { useLoaderData } from "react-router-dom";

const ViewToyDetail = () => {
  const toy = useLoaderData();
  console.log(toy);

  return (
    <div>
      {toy && (
        <div className="p-4">
          <div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{toy.name}</h1>
              <img src={toy.pictureUrl} alt={toy.name} className="mb-4 rounded-lg" />
              <p className="text-gray-800 text-lg mb-2">{toy.description}</p>
              <p className="text-gray-700 font-semibold">Price: ${toy.price}</p>
              <p className="text-gray-700 font-semibold">Quantity: {toy.quantity}</p>
              <p className="text-gray-700 font-semibold">Seller: {toy.sellerName}</p>
              <p className="text-gray-700 font-semibold">Email: {toy.email}</p>
              <p className="text-gray-700 font-semibold">Rating: {toy.rating}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewToyDetail;
