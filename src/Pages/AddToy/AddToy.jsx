import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const AddToy = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = event =>{
    event.preventDefault();
    const form = event.target;
    const pictureUrl = form.pictureUrl.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = form.email.value;
    const subCategory = form.subCategory.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;

    const add = {
      pictureUrl,
      name,
      sellerName,
      email,
      subCategory,
      price,
      description,
      rating,
      quantity
    } 
    fetch('https://toy-marketplace-server-rouge.vercel.app/addtoy', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(add)
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-gray-200 mb-6">
        Add A Toy
      </h2>

      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="pictureUrl">
            Picture URL
          </label>
          <input
            type="text"
            id="pictureUrl"
            name="pictureUrl"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="name">
            Toy Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="name">
            Seller Name
          </label>
          <input
            type="text"
            id="sellerName"
            name="sellerName"
            value={user?.displayName}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="name">
            Seller Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={user?.email}
            defaultValue={user?.email}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="subCategory">
            Sub-category
          </label>
          <input
            type="text"
            id="subCategory"
            name="subCategory"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="rating">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="quantity">
            Available Quantity
          </label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="description">
            Detail Description
          </label>
          <textarea
            id="description"
            name="description"
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
