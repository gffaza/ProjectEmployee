import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Spinner from "./Spinner";
import axios from "axios";
import { baseUrl, Toast } from "../config";
import { LoginContext } from "../context/LoginContext";
import { useNavigate } from "react-router-dom";

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
import ImageInput from "./ImageInput";

export default function FormTambah() {
  const [isLoading, setisLoading] = useState(false);
  const [dataKategori, setdataKategori] = useState(null);
  const { dataLogin, setDataLogin } = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const [preview, setPreview] = useState(
    "https://awsimages.detik.net.id/community/media/visual/2019/10/30/68a652e2-2551-4fb2-81df-6b74574affd9.jpeg?w=505"
  );

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${baseUrl}/pegawai`, {
        headers: {
          Authorization: `Bearer ${dataLogin.access_token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const hasil = response.data;
        setdataKategori(hasil.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setisLoading(false);
      });

    return () => {};
  }, []);

  const onSubmit = (data) => {
    console.log(data);
    setisLoading(true);
    const fData = new FormData();
    fData.append("nama", data.nama);
    fData.append("email", data.email);
    fData.append("telp", data.telp);
    fData.append("tgl_lahir", data.tgl_lahir);
    fData.append("onboard", data.onboard);
    fData.append("position", data.position);
    fData.append("role", data.role);
    fData.append("departmen", data.departmen);
    fData.append("group", data.group);
    fData.append("lokasi_kerja", data.lokasi_kerja);
    fData.append("image", data.image[0]); // Ambil file dari array
    fData.append("stok", data.stok);
    axios
      .post(`${baseUrl}/pegawai`, fData, {
        headers: {
          Authorization: `Bearer ${dataLogin.access_token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        const hasil = response.data;
        if (hasil.sukses == 1) {
          Toast.fire({
            icon: "success",
            title: hasil.pesan,
          });
          reset();
          navigate("/recruitment");
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
    <div>
      {/* beda form */}

      <div className="max-w mx-auto  bg-white px-6 rounded ">
        {/* <h2 className="text-2xl font-bold mb-4">Form Tambah Buku</h2> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Layouting */}
          <div className="grid grid-rows-2 gap-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <div className="justify-center grid grid-rows-2 items-center ">
                  <div className="">
                    <img
                      id="preview_img"
                      className="h-5/6 w-5/6 object-cover rounded-lg"
                      src={preview}
                      alt="Current profile photo"
                    />
                  </div>
                  {/* helo */}
                  <label className="block ">
                    <span className="sr-only">Choose Photo Profiel</span>
                    <input
                      type="file"
                      accept="image/*"
                      {...register("image", { required: "Image harus diisi" })}
                      onChange={handleFileChange}
                      className="block w-full text-sm text-slate-500
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-violet-50 file:text-violet-700
                        hover:file:bg-violet-100
                      "
                    />
                    {errors.image && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.image.message}
                    </p>
                  )}
                  
                  </label>
                </div>

              </div>

              <div>
                <div className="mb-4">
                  <label className="block font-medium mb-1 text-start mb-2 font-medium">
                    Nama Lengkap
                  </label>
                  <input
                    placeholder="Nama lengkap"
                    type="text"
                    {...register("nama", { required: "Nama Buku harus diisi" })}
                    className={`w-full p-2 border rounded ${
                      errors.nama ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.nama && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.nama.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block font-medium mb-1 text-start mb-2 font-medium">
                    Email
                  </label>
                  <input
                    placeholder="Email"
                    type="text"
                    {...register("email", {
                      required: "Nama Buku harus diisi",
                    })}
                    className={`w-full p-2 border rounded ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block font-medium mb-1 text-start mb-2 font-medium">
                    No Telp
                  </label>
                  <input
                    placeholder="No Telp"
                    type="text"
                    {...register("telp", { required: "Nama Buku harus diisi" })}
                    className={`w-full p-2 border rounded ${
                      errors.telp ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.telp && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.telp.message}
                    </p>
                  )}
                </div>

                {/* Tanggal Pinjam */}
                <div className="mb-4">
                  <label className="block font-medium mb-1 text-start">
                    Tanggal Lahir
                  </label>
                  <input
                    type="date"
                    {...register("tgl_lahir", {
                      required: "Tanggal lahir harus diisi",
                      validate: (value) =>
                        new Date(value) < new Date() ||
                        "Harus kurang dari hari ini",
                    })}
                    className={`w-full p-2 border rounded ${
                      errors.tgl_lahir ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.tgl_lahir && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.tgl_lahir.message}
                    </p>
                  )}
                </div>

                {/* Tanggal Pinjam */}
                <div className="mb-4">
                  <label className="block font-medium mb-1 text-start">
                    On Boarding
                  </label>
                  <input
                    type="date"
                    {...register("onboard", {
                      required: "Tanggal On Board harus diisi",
                      validate: (value) =>
                        new Date(value) > new Date() ||
                        "Harus lebih dari hari ini",
                    })}
                    className={`w-full p-2 border rounded ${
                      errors.onboard ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.onboard && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.onboard.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                {/* Kategori */}
                {/* <div className="mb-4">
            <label className="block font-medium mb-1">Position</label>

            <select
              {...register("position", { required: "Position harus diisi" })}
              className={`w-full p-2 border rounded ${
                errors.position ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Position</option>
              {dataKategori != null &&
                !isLoading &&
                dataKategori.map((kategori) => (
                  <option
                    key={kategori.id_kategori}
                    value={kategori.id_kategori}
                  >
                    {kategori.nama_kategori}
                  </option>
                ))}
            </select>
            {errors.kategori && (
              <p className="text-red-500 text-sm mt-1">
                {errors.kategori.message}
              </p>
            )}
          </div> */}

                <div className="mb-4">
                  <label className="block font-medium mb-1 text-start mb-2 font-medium">
                    Position
                  </label>
                  <input
                    placeholder="Position"
                    type="text"
                    {...register("position", {
                      required: "Nama Buku harus diisi",
                    })}
                    className={`w-full p-2 border rounded ${
                      errors.position ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.position && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.position.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block mb-1 text-start mb-2 font-medium">
                    Group
                  </label>
                  <input
                    placeholder="Group Penempatan"
                    type="text"
                    {...register("group", {
                      required: "Group penempatan harus diisi",
                    })}
                    className={`w-full p-2 border rounded ${
                      errors.group ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.group && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.group.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block font-medium mb-1 text-start mb-2">
                    Departmen
                  </label>
                  <input
                    placeholder="Departmen penempatan"
                    type="text"
                    {...register("departmen", {
                      required: "Nama Buku harus diisi",
                    })}
                    className={`w-full p-2 border rounded ${
                      errors.departmen ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.departmen && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.departmen.message}
                    </p>
                  )}
                </div>

                <div className="mb-4">
                  <label className="block font-medium mb-1 text-start mb-2">
                    Lokasi Kerja
                  </label>
                  <input
                    placeholder="Lokasi kerja"
                    type="text"
                    {...register("lokasi_kerja", {
                      required: "Nama Buku harus diisi",
                    })}
                    className={`w-full p-2 border rounded ${
                      errors.lokasi_kerja ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.lokasi_kerja && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.lokasi_kerja.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* button  */}
            <div className="flex flex-row">
              <div className="basis-1/3"></div>
              <div className="basis-1/3">
                <button className="w-full h-fit basis-1/3  text-black p-2 rounded ">
                  Cancel
                </button>
              </div>

              {isLoading ? (
                <Spinner />
              ) : (
                <button
                  type="submit"
                  className="w-full h-fit basis-1/3 bg-teal-300 text-white p-2 rounded hover:bg-teal-400"
                >
                  Tambah Pegawai
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
