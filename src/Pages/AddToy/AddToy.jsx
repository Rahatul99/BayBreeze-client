// import { useContext } from 'react';
// import { AuthContext } from '../../Providers/AuthProvider';

// const AddToy = () => {
//   const { user } = useContext(AuthContext);

//   const handleSubmit = event =>{
//     event.preventDefault();
//     const form = event.target;
//     const pictureUrl = form.pictureUrl.value;
//     const name = form.name.value;
//     const sellerName = form.sellerName.value;
//     const email = form.email.value;
//     const subCategory = form.subCategory.value;
//     const price = form.price.value;
//     const description = form.description.value;
//     const rating = form.rating.value;
//     const quantity = form.quantity.value;

//     const add = {
//       pictureUrl,
//       name,
//       sellerName,
//       email,
//       subCategory,
//       price,
//       description,
//       rating,
//       quantity
//     } 
//     fetch('https://toy-marketplace-server-rouge.vercel.app/addtoy', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(add)
//     })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//       alert('successfully you added a toy')
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });

//   }

//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-3xl font-semibold text-gray-200 mb-6">
//         Add A Toy
//       </h2>

//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="pictureUrl">
//             Picture URL
//           </label>
//           <input
//             type="text"
//             id="pictureUrl"
//             name="pictureUrl"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="name">
//             Toy Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="name">
//             Seller Name
//           </label>
//           <input
//             type="text"
//             id="sellerName"
//             name="sellerName"
//             value={user?.displayName}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="name">
//             Seller Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={user?.email}
//             defaultValue={user?.email}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="subCategory">
//             Sub-category
//           </label>
//           <input
//             type="text"
//             id="subCategory"
//             name="subCategory"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="price">
//             Price
//           </label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="rating">
//             Rating
//           </label>
//           <input
//             type="text"
//             id="rating"
//             name="rating"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="quantity">
//             Available Quantity
//           </label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="description">
//             Detail Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           ></textarea>
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//           >
//             Add Toy
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddToy;







































// import { useContext, useState } from 'react';
// import { AuthContext } from '../../Providers/AuthProvider';

// const AddToy = () => {
//   const { user } = useContext(AuthContext);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const pictureUrl = form.pictureUrl.value;
//     const name = form.name.value;
//     const sellerName = form.sellerName.value;
//     const email = form.email.value;
//     const subCategory = form.subCategory.value;
//     const price = form.price.value;
//     const description = form.description.value;
//     const rating = form.rating.value;
//     const quantity = form.quantity.value;

//     const add = {
//       pictureUrl,
//       name,
//       sellerName,
//       email,
//       subCategory,
//       price,
//       description,
//       rating,
//       quantity,
//     };

//     fetch('https://toy-marketplace-server-rouge.vercel.app/addtoy', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(add),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setIsSuccess(true);
//         form.reset(); // Clear the form
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//       });
//   };
//   if(isSuccess){
//     alert('successful')
//   }

//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-3xl font-semibold text-gray-200 mb-6">
//         Add A Toy
//       </h2>

//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="pictureUrl">
//             Picture URL
//           </label>
//           <input
//             type="text"
//             id="pictureUrl"
//             name="pictureUrl"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="name">
//             Toy Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="name">
//             Seller Name
//           </label>
//           <input
//             type="text"
//             id="sellerName"
//             name="sellerName"
//             value={user?.displayName}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="name">
//             Seller Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={user?.email}
//             defaultValue={user?.email}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="subCategory">
//             Sub-category
//           </label>
//           <input
//             type="text"
//             id="subCategory"
//             name="subCategory"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="price">
//             Price
//           </label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="rating">
//             Rating
//           </label>
//           <input
//             type="text"
//             id="rating"
//             name="rating"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="quantity">
//             Available Quantity
//           </label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="description">
//             Detail Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           ></textarea>
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//           >
//             Add Toy
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddToy;

























// import { useContext, useState } from 'react';
// import { AuthContext } from '../../Providers/AuthProvider';

// const AddToy = () => {
//   const { user } = useContext(AuthContext);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const pictureUrl = form.pictureUrl.value;
//     const name = form.name.value;
//     const sellerName = form.sellerName.value;
//     const email = form.email.value;
//     const subCategory = form.subCategory.value;
//     const price = form.price.value;
//     const description = form.description.value;
//     const rating = form.rating.value;
//     const quantity = form.quantity.value;

//     const add = {
//       pictureUrl,
//       name,
//       sellerName,
//       email,
//       subCategory,
//       price,
//       description,
//       rating,
//       quantity,
//     };

//     try {
//       const response = await fetch('https://toy-marketplace-server-rouge.vercel.app/addtoy', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(add),
//       });

//       if (response.ok) {
//         setIsSuccess(true);
//         form.reset(); // Clear the form
//       } else {
//         throw new Error('Failed to add toy');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="text-3xl font-semibold text-gray-200 mb-6">Add A Toy</h2>
//       {isSuccess && (
//         <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
//           <span className="block sm:inline">Successfully added a toy!</span>
//           <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setIsSuccess(false)}>
//             <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//               <title>Close</title>
//               <path
//                 fillRule="evenodd"
//                 d="M14.348 5.652a.5.5 0 0 0-.707 0L10 9.293 5.354 4.647a.5.5 0 1 0-.707.707L9.293 10l-4.646 4.646a.5.5 0 0 0 .708.708L10 10.707l4.646 4.646a.5.5 0 0 0 .708-.708L10.707 10l4.647-4.646a.5.5 0 0 0 0-.707z"
//               />
//             </svg>
//           </span>
//         </div>
//       )}
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="pictureUrl">
//             Picture URL
//           </label>
//           <input
//             type="text"
//             id="pictureUrl"
//             name="pictureUrl"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="name">
//             Toy Name
//           </label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="name">
//             Seller Name
//           </label>
//           <input
//             type="text"
//             id="sellerName"
//             name="sellerName"
//             value={user?.displayName}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="name">
//             Seller Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={user?.email}
//             defaultValue={user?.email}
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>

//         {/* <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="subCategory">
//             Sub-category
//           </label>
//           <input
//             type="text"
//             id="subCategory"
//             name="subCategory"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div> */}

// <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="subCategory">
//             Sub-category
//           </label>
//           <select
//             id="subCategory"
//             name="subCategory"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           >
//             {subCategories.map((category, index) => (
//               <option key={index} value={category}>
//                 {category}
//               </option>
//             ))}
//           </select>
//         </div>






//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="price">
//             Price
//           </label>
//           <input
//             type="number"
//             id="price"
//             name="price"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="rating">
//             Rating
//           </label>
//           <input
//             type="text"
//             id="rating"
//             name="rating"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="quantity">
//             Available Quantity
//           </label>
//           <input
//             type="number"
//             id="quantity"
//             name="quantity"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block mb-2 text-sm font-medium text-gray-200" htmlFor="description">
//             Detail Description
//           </label>
//           <textarea
//             id="description"
//             name="description"
//             className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//             required
//           ></textarea>
//         </div>
//         <div className="flex justify-center">
//           <button
//             type="submit"
//             className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
//           >
//             Add Toy
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddToy;

























import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const [isSuccess, setIsSuccess] = useState(false);
  const subCategories = ['Remote Car', 'Police Car', 'Ambulance Car']; // Replace with your sub-category options

  const handleSubmit = async (event) => {
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
      quantity,
    };

    try {
      const response = await fetch('https://toy-marketplace-server-rouge.vercel.app/addtoy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(add),
      });

      if (response.ok) {
        setIsSuccess(true);
        form.reset(); // Clear the form
      } else {
        throw new Error('Failed to add toy');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-gray-200 mb-6">Add A Toy</h2>
      {isSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
          <span className="block sm:inline">Successfully added a toy!</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setIsSuccess(false)}>
            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <title>Close</title>
              <path
                fillRule="evenodd"
                d="M14.348 5.652a.5.5 0 0 0-.707 0L10 9.293 5.354 4.647a.5.5 0 1 0-.707.707L9.293 10l-4.646 4.646a.5.5 0 0 0 .708.708L10 10.707l4.646 4.646a.5.5 0 0 0 .708-.708L10.707 10l4.647-4.646a.5.5 0 0 0 0-.707z"
              />
            </svg>
          </span>
        </div>
      )}
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
          <select
            id="subCategory"
            name="subCategory"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
            required
          >
            {subCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
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
            type="text"
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