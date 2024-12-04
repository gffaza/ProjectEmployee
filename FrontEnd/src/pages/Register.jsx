import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Spinner from "../components/Spinner";
import axios from "axios";
import { baseUrl } from "../config";
import { Toast } from "../config";
import TabsMaterial from "../components/TabsMaterial";

export default function Registrasi() {
  const [isLoading, setisLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setisLoading(true);
    axios
      .post(`${baseUrl}/register`, data)
      .then((response) => {
        console.log(response);
        const hasil = response.data;
        if (hasil.status == "success") {
          Toast.fire({
            icon: "success",
            title: "Registrasi Berhasil",
          });
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  return (
    <div className="flex grid grid-cols-2 w-full h-full">
      <div
        className={
          "flex flex-col justify-start items-center mt-32 h-screen min-w-full" +
          (errors != null ? "mt-20" : "mt-4")
        }
      >
        <form className="bg-white p-2 pl-4 pr-4 rounded-lg w-full max-w-md">
          <TabsMaterial />
        </form>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-2 pl-4 pr-4 rounded-lg  w-full max-w-md"
        >
          <div className="mb-4">
            <label
              className="text-start block text-gray-700 font-medium mb-2"
              htmlFor="username"
            >
              {" "}
              Nama
            </label>
            <input
              type="text"
              id="nama"
              {...register("nama", { required: "Nama Wajib diisi" })}
              className={
                'text-start w-full px-4 py-2 border ${errors.nama ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              }
            />
            {errors.nama && (
              <p className="text-start text-red-500 text-xs mt-1">{errors.nama.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="text-start block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              {...register("email", {
                required: "Email Wajib diisi",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={
                'text-start w-full px-4 py-2 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              }
            />
            {errors.email && (
              <p className="text-start text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="text-start block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password Wajib diisi" })}
              className={
                'text-start w-full px-4 py-2 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              }
            />
            {errors.password && (
              <p className="text-start text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              className="text-start block text-gray-700 font-medium mb-2"
              htmlFor="password_confirmation"
            >
              Konfirmasi Password
            </label>
            <input
              type="password"
              id="password_confirmation"
              {...register("password_confirmation", {
                required: "Konfirmasi Password Wajib diisi",
              })}
              className={
                'text-start w-full px-4 py-2 border ${errors.password_confirmation ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
              }
            />
            {errors.password_confirmation && (
              <p className=" text-start text-red-500 text-xs mt-1">
                {errors.password_confirmation.message}
              </p>
            )}
          </div>
          {/* <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Telp
            </label>
            <input
              type="text"
              id="telp"
              {...register("telp", { required: "Telp Wajib diisi" })}
              className={'w-full px-4 py-2 border ${errors.telp ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'}
            />
            {errors.telp && (
              <p className="text-red-500 text-xs mt-1">{errors.telp.message}</p>
            )}
          </div> */}

          <div>
            {isLoading ? (
              <Spinner />
            ) : (
              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-2 px-4 rounded-md hover:bg-gray-700"
              >
                Registrasi
              </button>
            )}
          </div>
        </form>
      </div>
      <div>
        <img
          className="object-cover w-full h-full"
          src="https://images.wallpaperscraft.com/image/single/skyscraper_building_architecture_112550_3840x2160.jpg"
          alt=""
        />
      </div>
    </div>
  );
}
