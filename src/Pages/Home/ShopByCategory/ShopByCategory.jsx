import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ShopByCategorySection = () => {
  return (
    <section className="py-8 lg:py-12 bg-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-300 mb-6 text-center">
          Shop by Category
        </h2>

        <Tabs>
          <TabList className="flex justify-center mb-6">
            <Tab className="py-2 px-4 bg-gray-800 text-gray-200 rounded-md mr-4 cursor-pointer">
              Category 1
            </Tab>
            <Tab className="py-2 px-4 bg-gray-800 text-gray-200 rounded-md mr-4 cursor-pointer">
              Category 2
            </Tab>
            <Tab className="py-2 px-4 bg-gray-800 text-gray-200 rounded-md cursor-pointer">
              Category 3
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {/* Toys for Category 1 */}
              <div className="bg-grey-400 rounded-lg shadow-md p-4">
                <img
                  src="/path/to/image-1.jpg"
                  alt="Toy 1"
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="text-xl font-semibold mb-2">Toy 1</h3>
                <p className="text-gray-600 mb-2">$19.99</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">⭐️⭐️⭐️⭐️</span>
                  <span className="ml-2 text-gray-600">(50)</span>
                </div>
                <button className="btn-success text-white px-4 py-2 rounded-md">
                  View Details
                </button>
              </div>
              
              {/* Add more toys */}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {/* Toys for Category 2 */}
              <div className="bg-grey-400 rounded-lg shadow-md p-4">
                <img
                  src="/path/to/image-2.jpg"
                  alt="Toy 2"
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="text-xl font-semibold mb-2">Toy 2</h3>
                <p className="text-gray-600 mb-2">$24.99</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">⭐️⭐️⭐️⭐️⭐️</span>
                  <span className="ml-2 text-gray-600">(100)</span>
                </div>
                <button className="btn-success text-white px-4 py-2 rounded-md">
                  View Details
                </button>
              </div>
              
              {/* Add more toys */}
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {/* Toys for Category 3 */}
              <div className="bg-grey-400 rounded-lg shadow-md p-4">
                <img
                  src="/path/to/image-3.jpg"
                  alt="Toy 3"
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h3 className="text-xl font-semibold mb-2">Toy 3</h3>
                <p className="text-gray-600 mb-2">$14.99</p>
                <div className="flex items-center mb-2">
                  <span className="text-yellow-500">⭐️⭐️⭐️</span>
                  <span className="ml-2 text-gray-600">(30)</span>
                </div>
                <button className="btn-success text-white px-4 py-2 rounded-md">
                  View Details
                </button>
              </div>
              
              {/* Add more toys */}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ShopByCategorySection;

