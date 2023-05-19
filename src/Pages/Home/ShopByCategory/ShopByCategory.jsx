import { useContext, useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { FaRegStar, FaStar } from "react-icons/fa";
import { AuthContext } from '../../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ShopByCategorySection = () => {
  const [toysData, setToysData] = useState();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();


  useEffect(() => {
    fetch('toysData.json')
      .then(response => response.json())
      .then(data => setToysData(data))
      .catch(error => console.error(error));
  }, []);


  const handleViewDetails = (toyId) => {
    if (!user) {
      alert("You have to log in first to view details");
      navigate('/login');
    } else {
      // Redirect to toy details page
      // Implement the logic for navigating to the details page
      navigate(`/toys/${toyId}`);
    }
  };

  if (!toysData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-8 lg:py-12 bg-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-300 mb-6 text-center">
          Shop by Category
        </h2>

        <Tabs>
          <TabList className="md:flex justify-center mb-6">
            {toysData.categories.map((category) => (
              <Tab
                key={category.name}
                className="py-2 px-4 bg-gray-800 text-gray-200 rounded-md mr-4 cursor-pointer"
              >
                {category.name}
              </Tab>
            ))}
          </TabList>

          {toysData.categories.map((category) => (
            <TabPanel key={category.name}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category.tabs.map((tab) => (
                  tab.toys.map((toy) => (
                    <div
                      key={toy.id}
                      className="bg-grey-400 rounded-lg shadow-md p-4"
                    >
                      <img
                        src={toy.picture}
                        alt={toy.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                      />
                      <h3 className="text-xl text-gray-200 font-semibold mb-2">{toy.name}</h3>
                      <p className="text-gray-200 mb-2">{toy.price}</p>
                      <div className="flex items-center mb-2 ">
                        <span className="pr-2 text-gray-200">{toy.rating}</span>
                        <Rating
                          placeholderRating={toy.rating}
                          emptySymbol={<FaRegStar />}
                          readonly
                          placeholderSymbol={<FaStar />}
                          fullSymbol={<FaStar />}
                        />
                      </div>
                      {/* <button
                        className="btn-success text-white px-4 py-2 rounded-md"
                      onClick={() => {
                        if (!user) {
                          // Handle notification and redirection to login page
                          alert("You have to log in first to view details");
                          // Redirect to login page using React Router or any other method
                          // window.location.href = "/login";
                          <Link to="/login" />
                        } else {
                         
                          // Redirect to toy details page
                          // Implement the logic for navigating to the details page
                        }
                      }}
                      >
                        View Details
                      </button> */}
                      <button
                        className="btn-success text-white px-4 py-2 rounded-md"
                        onClick={() => handleViewDetails(toy.id)}
                      >
                        View Details
                      </button>
                    </div>
                  ))
                ))}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ShopByCategorySection;
