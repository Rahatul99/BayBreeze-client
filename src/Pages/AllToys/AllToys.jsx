import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import './AllToys.css';

const AllToys = () => {
  const [toyData, setToyData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [toysPerPage, setToysPerPage] = useState(20)
  const { totalToys } = useLoaderData();

  // const toysPerPage = 20;
  const totalPages = Math.ceil(totalToys / toysPerPage);

  const pageNumbers = [...Array(totalPages).keys()];

  // useEffect(() => {
  //   fetch('https://toy-marketplace-server-rouge.vercel.app/allToys')
  //     .then(response => response.json())
  //     .then(data => setToyData(data))
  //     .catch(error => console.error(error));
  // }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://toy-marketplace-server-rouge.vercel.app/allToys?pages=${currentPage}&limit=${toysPerPage}`);
      const data = await response.json();
      setToyData(data);
    }
    fetchData();
  },[currentPage, toysPerPage]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredToys = toyData.filter(toy =>
    toy.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const options = [5, 10, 20];
  function handleSelectChange(event){
    setToysPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  }

  return (
    <>
        <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-gray-300 mb-6 text-center">
        All Toys
      </h2>
      <div className="mb-4 flex justify-center">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search by toy name"
          className="w-[40%] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
        />
      </div>
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
          {filteredToys.map((toy, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
              <td className="py-2 px-4 border-b">{toy.sellerName}</td>
              <td className="py-2 px-4 border-b">{toy.name}</td>
              <td className="py-2 px-4 border-b">{toy.subCategory}</td>
              <td className="py-2 px-4 border-b">${toy.price}</td>
              <td className="py-2 px-4 border-b">{toy.quantity}</td>
              <td className="py-2 px-4 border-b">
                <Link to={`/viewtoydetail/${toy._id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
    <div className="pagination">
            {
              pageNumbers.map(number => <button className={currentPage === number ? 'selected' : 'btn'} key={number}
              onClick={() => setCurrentPage(number)}
              >{number}</button> )
            }
            <select value={toysPerPage} onChange={handleSelectChange}>
              {options.map(option => (
                <option key={option} value={option}> 
                  {option}
                </option>
              ))

              }
            </select>
    </div>
    </>
  );
};

export default AllToys;

