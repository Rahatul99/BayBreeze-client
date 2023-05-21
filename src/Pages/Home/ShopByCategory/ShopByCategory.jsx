import { useContext, useEffect, useState } from 'react';
import Rating from 'react-rating';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { FaRegStar, FaStar } from "react-icons/fa";
import { AuthContext } from '../../../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ShopByCategorySection = () => {
  const [toysData, setToysData] = useState(null);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      offset: 200,
      delay: 50,
      duration: 1000,
      easing: 'ease-in-out',
      mirror: true,
      once: false,
      placement: 'top-center',
    });
  }, []);

  useEffect(() => {
    fetch('https://toy-marketplace-server-rouge.vercel.app/categories')
      .then(response => response.json())
      .then(data => setToysData(data))
      .catch(error => console.error(error));
  }, []);

  const handleViewDetails = (category, toy) => {
    if (!user) {
      Swal.fire({
        title: 'Please log in first to view details',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }).then(() => {
        navigate('/login');
      });
    } else {
      navigate(`/viewdetails/${category}/${toy}`);
    }
  };

  if (!toysData) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-8 lg:py-12 bg-gray-700" data-aos="fade-up">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-300 mb-6 text-center">
          Shop by Category
        </h2>

        <Tabs>
          <TabList className="md:flex justify-center mb-6">
            {toysData.map((category) => (
              <Tab
                key={category.name}
                className="py-2 px-4 bg-gray-800 text-gray-200 rounded-md mr-4 cursor-pointer"
              >
                {category.name}
              </Tab>
            ))}
          </TabList>
          {toysData?.map((category) => (
            <TabPanel key={category.name}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                {category?.toys?.map((toy) => (
                  <div
                    key={toy.name}
                    data-aos="zoom-in"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-placement="top-center"
                    className="bg-grey-400 rounded-lg shadow-md p-4"
                  >
                    <img
                      src={toy.picture}
                      alt={toy.name}
                      className="w-full h-40 object-cover rounded-md mb-2"
                    />
                    <h3 className="text-xl text-gray-200 font-semibold mb-2">{toy.name}</h3>
                    <p className="text-gray-200 mb-2">{toy.price}</p>
                    <div className="flex items-center mb-2">
                      <span className="pr-2 text-gray-200">{toy.rating}</span>
                      <Rating
                        placeholderRating={toy.rating}
                        emptySymbol={<FaRegStar />}
                        readonly
                        placeholderSymbol={<FaStar />}
                        fullSymbol={<FaStar />}
                      />
                    </div>
                    <button
                      className="btn-success text-white px-4 py-2 rounded-md"
                      onClick={() => handleViewDetails(category._id, toy.sub_id)}
                    >
                      View Details
                    </button>
                  </div>
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
