import { useState } from 'react';

const AddToy = () => {
  const [toyData, setToyData] = useState({
    pictureUrl: '',
    name: '',
    sellerName: '', // Assuming this is retrieved from the logged-in user
    sellerEmail: '', // Assuming this is retrieved from the logged-in user
    subCategory: '',
    price: 0,
    rating: 0,
    quantity: 0,
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setToyData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(toyData); // Example: Log toyData to the console
    // Reset the form fields
    setToyData({
      pictureUrl: '',
      name: '',
      sellerName: '',
      sellerEmail: '',
      subCategory: '',
      price: 0,
      rating: 0,
      quantity: 0,
      description: '',
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        Add A Toy
      </h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="pictureUrl">
            Picture URL
          </label>
          <input
            type="text"
            id="pictureUrl"
            name="pictureUrl"
            value={toyData.pictureUrl}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={toyData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="subCategory">
            Sub-category
          </label>
          <input
            type="text"
            id="subCategory"
            name="subCategory"
            value={toyData.subCategory}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={toyData.price}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="rating">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={toyData.rating}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="quantity">
            Available Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={toyData.quantity}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-700" htmlFor="description">
            Detail Description
          </label>
          <textarea
            id="description"
            name="description"
            value={toyData.description}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Add Toy
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
