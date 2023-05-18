import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const ShopByCategorySection = () => {
  return (
    <section className="py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Shop by Category
        </h2>

        <Tabs>
          <TabList className="flex justify-center mb-6">
            <Tab className="py-2 px-4 bg-gray-200 text-gray-700 rounded-md mr-4 cursor-pointer">
              Category 1
            </Tab>
            <Tab className="py-2 px-4 bg-gray-200 text-gray-700 rounded-md mr-4 cursor-pointer">
              Category 2
            </Tab>
            <Tab className="py-2 px-4 bg-gray-200 text-gray-700 rounded-md cursor-pointer">
              Category 3
            </Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {/* Sub-categories for Category 1 */}
              <div>Sub-category 1.1</div>
              <div>Sub-category 1.2</div>
              <div>Sub-category 1.3</div>
              <div>Sub-category 1.4</div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {/* Sub-categories for Category 2 */}
              <div>Sub-category 2.1</div>
              <div>Sub-category 2.2</div>
              <div>Sub-category 2.3</div>
              <div>Sub-category 2.4</div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {/* Sub-categories for Category 3 */}
              <div>Sub-category 3.1</div>
              <div>Sub-category 3.2</div>
              <div>Sub-category 3.3</div>
              <div>Sub-category 3.4</div>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </section>
  );
};

export default ShopByCategorySection;
