import React from "react";
import Sidebar from "../components/Sidebar";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Typography,
  Card,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import CardImage from "../components/CardImage";
import { Form } from "react-router-dom";

export default function Recruitment() {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="m-8">
        <div className="mb-8">
          <div className="flex flex-row mb-2 p-4 align-middle">
            <UserCircleIcon className="h-10 w-10 bg-gray-300 p-2 rounded-md" />
            <Typography className="text-xl font-semibold ml-4 ">
              Recruitment
            </Typography>
          </div>
          <Typography className="text-md text-start font-regular ml-4">
            Create a comprehensive employee profile to get them started. Add
            personal details, roles, and responsibilities seamlessly.
          </Typography>
        </div>
        <div className="grid-rows-2">
          {/* change profile image */}
          <div className="flex flex-row grid-cols-3">
            <CardImage />
            {/* form 1 */}
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
            {/* form 2 */}
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

          {/* button save changes */}
          <div className="flex flex-row grid-cols-2 items-end mt-40 text-center">
                <button className="  text-gray font-bold py-2 px-4 rounded ml-1 flex items-center justify-center w-full">
                  Cancel
                </button>
                <button className="bg-teal-300 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded ml-1 flex items-center justify-center w-full">
                  Save Changes
                </button>
              </div>
          {/* <div
            className="absolute bottom-20 right-48 flex flex-row grid-cols-2 align-text-bottom mb-4 ml-4"
          >
            <button className=" text-gray font-bold py-2 px-4 rounded mr-1">
              Cancel
            </button>
            <button className="bg-teal-300 hover:bg-teal-500 text-white font-bold py-2 px-4 rounded ml-1">
              Save Changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
