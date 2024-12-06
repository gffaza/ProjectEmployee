import Sidebar from "../components/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl, baseUrlGambar, Toast } from "../config";
import Spinner from "../components/Spinner";
import Swal from "sweetalert2";
import FormTambah from "../components/FormTambah";
import EmployeeTable from "../components/EmployeeTable";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import TableEmployee from "../components/TableEmployee";

const Dashboard = () => {
  return (
    <>

      <div className="flex flex-row">
        <Sidebar />
        <div className="m-8 w-full h-full ">
          <div className="mb-8">
            <Typography className="text-md text-start font-regular ml-4">
            </Typography>
          </div>
<div className="m-8"> <TableEmployee />

</div>
         
        </div>
      </div>
    </>
  );
};

export default Dashboard;
