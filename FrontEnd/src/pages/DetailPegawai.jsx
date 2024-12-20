
import React from "react";
import Sidebar from "../components/Sidebar";
import {
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Typography,
  CardHeader,
} from "@material-tailwind/react";
import FormTambah from "../components/FormTambah";
import FormDetail from "../components/FormDetail";

export default function DetailPegawai() {
  return (
    <div className="flex flex-row ">
      <Sidebar />
      
      <div className="w-full ml-16">
      
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none mb-4"
        >
         
          <div className="mb-8 flex items-center justify-between gap-8">
            <div>
              <div className="mb-1 flex items-center gap-2">
                <PlusCircleIcon className="h-10 w-10 bg-gray-100 p-2 rounded-md" />

                <Typography variant="h5" color="blue-gray">
                  Recruitment
                </Typography>
              </div>

              <Typography
                color="gray"
                className="mt-1 font-normal text-start w-8/12"
              >
                Create a comprehensive employee profile to get them started. Add
                personal details, roles, and responsibilities seamlessly.
              </Typography>
            </div>
          </div>
        </CardHeader>
        <FormDetail />
      </div>
    </div>
  );
}
