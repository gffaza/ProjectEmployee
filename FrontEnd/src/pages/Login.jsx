import axios from "axios";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Toast } from "../config";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../config";
import { LoginContext } from "../context/LoginContext";
// import { Spinner } from "../components/Spinner";
import TabsMaterial from "../components/TabsMaterial";

export default function Login() {
  const [isLoading, setisLoading] = useState(false);
  const { dataLogin, setDataLogin } = useContext(LoginContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    setisLoading(true);
    axios
      .post(`${baseUrl}/login`, data)
      .then((response) => {
        console.log(response.data);
        const hasil = response.data;
        if (hasil.sukses == 1) {
          Toast.fire({
            icon: "success",
            title: hasil.message,
          });
          localStorage.setItem("dataLogin", JSON.stringify(hasil.data));
          setDataLogin(hasil.data);
          navigate("/admin");
        } else {
          Toast.fire({
            icon: "error",
            title: hasil.pesan,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  return (
    <div className="flex grid grid-cols-2 w-full h-screen">
      <div className="flex flex-col justify-start items-center mt-32 h-screen min-w-full">
        <form className="bg-white p-4 rounded-lg w-full max-w-md">
          <TabsMaterial />
        </form>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-4 rounded-lg  w-full max-w-md"
        >
          <div className="mb-4">
            <label
              className="text-start block text-gray-700 font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              {...register("email", { required: true })}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
            />
            {errors.email && <p className="text-start text-red-500">Email is required</p>}
          </div>

          <div className="mb-4">
            <label
              className="text-start block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              {...register("password", { required: true })}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Password"
            />
            {errors.password && (
              <p className="text-red-500 text-start">Password is required</p>
            )}
          </div>

          <button
            className="w-full bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login
          </button>
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
