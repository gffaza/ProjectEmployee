import React, { useState } from "react";
// Importing icons
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
  CardBody,
  CardFooter,
} from "@material-tailwind/react";

import CardImage from "../components/CardImage";

const EmployeeForm = () => {
  const [employee, setEmployee] = useState({
    image: null,
    name: "",
    email: "",
    birthdate: "",
    phone: "",
    onboarding: false,
    position: "",
    role: "",
    department: "",
    group: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setEmployee((prev) => ({ ...prev, [name]: checked }));
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
    console.log("Form Submitted:", employee);
    alert("Form submitted successfully!");
    // Reset form after submission
    setEmployee({
      image: null,
      name: "",
      email: "",
      birthdate: "",
      phone: "",
      onboarding: false,
      position: "",
      role: "",
      department: "",
      group: "",
      location: "",
    });
  };

  const handleCancel = () => {
    // Reset the form without submitting
    setEmployee({
      image: null,
      name: "",
      email: "",
      birthdate: "",
      phone: "",
      onboarding: false,
      position: "",
      role: "",
      department: "",
      group: "",
      location: "",
    });
  };

  return (
    <div>
      <div className="grid-rows-2">
        <div className="flex flex-row grid-cols-3">
          <Card className="mt-6 w-96 shadow-none">
            <CardHeader className="relative h-56 mt-1">
              <img
                src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                alt="card-image"
              />
            </CardHeader>

            <Typography
              variant="h5"
              color="blue-gray"
              className=""
            ></Typography>

            <CardFooter className="pt-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="w-full border rounded p-2 text-sm"
              />
            </CardFooter>
          </Card>

          <div>
            <form
              className="mt-8 mb-2 ml-8 w-80 max-w-screen-lg sm:w-96"
              onSubmit={handleSubmit}
            >
              <div className="mb-1 flex flex-col gap-4">
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
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={employee.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className="w-full border rounded p-2 text-sm"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Birthdate
                  </label>
                  <input
                    type="date"
                    name="birthdate"
                    value={employee.birthdate}
                    onChange={handleChange}
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

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Position
                  </label>
                  <input
                    type="text"
                    name="position"
                    value={employee.position}
                    onChange={handleChange}
                    placeholder="Enter position"
                    className="w-full border rounded p-2 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={employee.role}
                    onChange={handleChange}
                    placeholder="Enter role"
                    className="w-full border rounded p-2 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={employee.department}
                    onChange={handleChange}
                    placeholder="Enter department"
                    className="w-full border rounded p-2 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Group
                  </label>
                  <input
                    type="text"
                    name="group"
                    value={employee.group}
                    onChange={handleChange}
                    placeholder="Enter group"
                    className="w-full border rounded p-2 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={employee.location}
                    onChange={handleChange}
                    placeholder="Enter location"
                    className="w-full border rounded p-2 text-sm"
                  />
                </div>
              </div>

              <div className="flex flex-row justify-between mt-6">
                <button
                  type="button"
                  className="text-gray-500 font-bold py-2 px-4 rounded border border-gray-300"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
