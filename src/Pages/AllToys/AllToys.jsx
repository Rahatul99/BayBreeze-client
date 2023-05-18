const AllToys = () => {
  const toyData = [
    {
      seller: 'John Doe',
      name: 'Robot Building Kit',
      subCategory: 'Engineering Toys',
      price: 29.99,
      quantity: 10,
    },
    {
      seller: 'Jane Smith',
      name: 'Language Learning Set',
      subCategory: 'Language Toys',
      price: 19.99,
      quantity: 5,
    },
    // Add more toy objects as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        All Toys
      </h2>

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Seller</th>
            <th className="py-2 px-4 border-b">Toy Name</th>
            <th className="py-2 px-4 border-b">Sub-category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Available Quantity</th>
            <th className="py-2 px-4 border-b"></th>
          </tr>
        </thead>
        <tbody>
          {toyData.map((toy, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="py-2 px-4 border-b">{toy.seller}</td>
              <td className="py-2 px-4 border-b">{toy.name}</td>
              <td className="py-2 px-4 border-b">{toy.subCategory}</td>
              <td className="py-2 px-4 border-b">${toy.price.toFixed(2)}</td>
              <td className="py-2 px-4 border-b">{toy.quantity}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
