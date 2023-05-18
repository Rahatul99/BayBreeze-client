const ShopByAge = () => {
  const ageRanges = [
    { age: '0-2 years', imageSrc: 'https://images.unsplash.com/photo-1477239439998-839196943351?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=780&q=80' },
    { age: '3-4 years', imageSrc: 'https://images.unsplash.com/photo-1501686637-b7aa9c48a882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80' },
    { age: '5-7 years', imageSrc: 'https://images.unsplash.com/photo-1581861181562-34284733005a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
    { age: '8-10 years', imageSrc: 'https://images.unsplash.com/photo-1498674202614-ac0172c6c61a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80' },
  ];

  return (
    <section className=" bg-gray-800 text-white p-10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-center">Shop by Age</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {ageRanges.map((range, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-lg">
              <img src={range.imageSrc} alt={`Age Range: ${range.age}`} className="w-full h-64 object-cover" />
              <div className="p-4 bg-grey-500">
                <h3 className="text-lg font-semibold mb-2">{range.age}</h3>
                <button className="btn-accent hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopByAge;
