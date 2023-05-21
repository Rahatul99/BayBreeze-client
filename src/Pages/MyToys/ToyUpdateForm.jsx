import { useState } from 'react';

const ToyUpdateForm = ({ toy, handleModalClose, handleUpdate }) => {
    const [formValues, setFormValues] = useState({
        id: toy._id,
        price: toy.price,
        quantity: toy.quantity,
        description: toy.description
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdate(formValues);
        handleModalClose();
    };
    const handleCancel = () => {
        handleModalClose();
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4 form-control hidden">
                <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-700">
                    id
                </label>
                <input
                    name="id"
                    type="text"
                    id="id"
                    placeholder={formValues.id}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                    readOnly
                />
            </div>
            <div className="mb-4 form-control">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-700">
                    Price:
                </label>
                <input
                    name="price"
                    type="number"
                    id="price"
                    onChange={handleInputChange}
                    placeholder={formValues.price}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4 form-control">
                <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-gray-700">
                    Available Quantity:
                </label>
                <input
                    name="quantity"
                    type="number"
                    id="quantity"
                    onChange={handleInputChange}
                    placeholder={formValues.quantity}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="mb-4 form-control">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">
                    Detail Description:
                </label>
                <input
                    name="description"
                    id="description"
                    onChange={handleInputChange}
                    placeholder={formValues.description}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                />
            </div>
            <div className="flex items-end justify-evenly">
                <button type="submit" className="btn bg-blue-500 hover:bg-blue-700 text-white font-semibold">
                    Confirm
                </button>
                <div className="modal-action">
                    <button type="button" className="btn" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ToyUpdateForm;



