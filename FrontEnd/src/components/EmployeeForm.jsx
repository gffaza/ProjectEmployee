import React, { useState } from 'react';

import {
    PresentationChartBarIcon,
    UserCircleIcon,
    PowerIcon,
    UserPlusIcon,
  } from "@heroicons/react/24/solid";
  import {
    Typography,
    Card,
    Input,
    Checkbox,
    Button,
    CardHeader,
  } from "@material-tailwind/react";
  import CardImage from "../components/CardImage";
  import { Form } from "react-router-dom";


const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    image: null,
    name: '',
    phone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEmployee((prev) => ({ ...prev, image: URL.createObjectURL(file) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending data to the database
    console.log('Form Submitted:', employee);
    alert('Form submitted successfully!');
    // Reset form after submission
    setEmployee({ image: null, name: '', phone: '' });
  };

  const handleCancel = () => {
    // Reset the form without submitting
    setEmployee({ image: null, name: '', phone: '' });
  };

  return (
    <div >

<div className="grid-rows-2">
          <div className="flex flex-row grid-cols-3">
            <CardImage />
           
            <div>
              <form className="mt-8 mb-2 ml-8 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-4">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-1 text-start"
                  >
                    Nama Lengkap
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-4">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-1 text-start"
                  >
                    Email
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-4">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-1 text-start"
                  >
                    Tanggal Lahir
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-4">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-1 text-start"
                  >
                    No Telp
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-4">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-1 text-start"
                  >
                    On Boarding
                  </Typography>
                  <Input
                    size="lg"
                    type="date"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </form>
            </div>
            <div>
              <form className="mt-8 mb-2 ml-8 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-4">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-1 text-start"
                  >
                    Position
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-4">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-1 text-start"
                  >
                    Role
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-4">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-1 text-start"
                  >
                    Departmen
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-4">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-1 text-start"
                  >
                    Group
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <div className="mb-1 flex flex-col gap-4">
                  <Typography
                    variant="h6"
                    color="blue-gray"
                    className="-mb-1 text-start"
                  >
                    Lokasi Kerja
                  </Typography>
                  <Input
                    size="lg"
                    placeholder="name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
              </form>
              <div className="flex flex-row grid-cols-2 items-end mt-40 text-center">
                <button className="  text-gray font-bold py-2 px-4 rounded ml-1 flex items-center justify-center w-full">
                  Cancel
                </button>
                <button className="bg-teal-300 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded ml-1 flex items-center justify-center w-full">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
        
    
{/*     
    <div className="max-w-md mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4"></h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full border rounded p-2 text-sm"
          />
          {employee.image && (
            <img
              src={employee.image}
              alt="Employee"
              className="mt-2 w-24 h-24 object-cover rounded-full"
            />
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Enter name"
            className="w-full border rounded p-2 text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
            className="w-full border rounded p-2 text-sm"
            required
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            onClick={handleCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    
    </div> */}

    </div>

  );
};

export default EmployeeForm;


