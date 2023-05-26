import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import ToyUpdateForm from "./ToyUpdateForm";
import Swal from 'sweetalert2';

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [toyData, setToyData] = useState([]);
  // const [ modified, setModified ] = useState(false);

  useEffect(() => {
    fetch(`https://toy-marketplace-server-rouge.vercel.app/mytoys/${user?.email}`)
      .then((response) => response.json())
      .then((data) => setToyData(data));
  }, [user, toyData]);



  const handleUpdate = async (formValues) => {
    try {
      const { id, price, quantity, description } = formValues;
      const response = await fetch(`https://toy-marketplace-server-rouge.vercel.app/updateToy/${id}`, {
        method: 'PUT',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price, quantity, description }),
      });
      const result = await response.json();
      if (result.modifiedCount > 0) {
        // Update toyData state with the updated toy
        const updatedToyData = toyData.map((toy) => {
          if (toy._id === id) {
            return { ...toy, price, quantity, description };
          }
          return toy;
        });
        setToyData(updatedToyData);
      }
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Toy updated successfully!',
      });
    } catch (error) {
      console.error('Error updating toy:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'An error occurred while updating the toy.',
      });
    }
  };


  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://toy-marketplace-server-rouge.vercel.app/allToys/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount === 0) {
              swalWithBootstrapButtons.fire(
                'Not Deleted',
                'The file could not be deleted.',
                'error'
              );
            } else {
              const remaining = toyData.filter(singleToy => singleToy._id !== id);
              setToyData(remaining);
              swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
            }
          })
          .catch(error => {
            console.error('Error deleting file:', error);
            swalWithBootstrapButtons.fire(
              'Error',
              'An error occurred while deleting the file.',
              'error'
            );
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        );
      }
    });
  };
  const handleModalClose = (toyId) => {
    const modalCheckbox = document.getElementById(`my-modal-${toyId}`);
    if (modalCheckbox) {
      modalCheckbox.checked = false; // Uncheck the modal checkbox to close the modal
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-semibold text-gray-300 mb-6 text-center">
        My Toys
      </h2>

      

      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Seller</th>
            <th className="py-2 px-4 border-b">Toy Name</th>
            <th className="py-2 px-4 border-b">Sub-category</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Available Quantity</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {toyData.map((toy, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td className="py-2 px-4 border-b">{toy.sellerName}</td>
              <td className="py-2 px-4 border-b">{toy.name}</td>
              <td className="py-2 px-4 border-b">{toy.subCategory}</td>
              <td className="py-2 px-4 border-b">${toy.price}</td>
              <td className="py-2 px-4 border-b">{toy.quantity}</td>
              <td className="py-2 border-b">
                <label htmlFor={`my-modal-${toy._id}`} className="btn">
                  Update
                </label>
                <input
                  type="checkbox"
                  id={`my-modal-${toy._id}`}
                  className="modal-toggle"
                />
                <div className="modal-bottom sm:modal-middle modal">
                  <div className="modal-box w-96 bg-white p-6 rounded shadow">
                    <ToyUpdateForm
                      toy={toy}
                      handleUpdate={handleUpdate}
                      handleModalClose={() => handleModalClose(toy._id)
                      }
                    />
                  </div>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
                  onClick={() => handleDelete(toy._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;

