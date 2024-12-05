import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ImageCaption from "../components/ImageCaption";
import CardImage from "../components/CardImage";
import CardEmployee from "../components/CardEmployee";
import Sidebar from "../components/Sidebar";

import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,

} from "@material-tailwind/react";

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
  
} from "@heroicons/react/24/outline";
import {
  PencilIcon,
  PresentationChartBarIcon,
  TrashIcon,
  UserCircleIcon,
  UserPlusIcon,

} from "@heroicons/react/24/solid";

export default function Employee() {
  return (
    <div>
      <Sidebar />
      <div className="ml-16">
        {/* <ImageCaption /> */}
        <SortableTable />
      </div>
    </div>
  );
}

export function SortableTable() {
  return (
    <div>
      <div className="flex flex-row ">
        <div className="w-full ml-16">
          <CardHeader
            floated={false}
            shadow={false}
            className="rounded-none mb-4"
          >
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <div className="mb-1 flex items-center gap-2">
                  <UserCircleIcon className="h-10 w-10 bg-gray-100 p-2 rounded-md" />

                  <Typography variant="h5" color="blue-gray">
                    Employee
                  </Typography>
                </div>

                <Typography
                  color="gray"
                  className="mt-1 font-normal text-start w-8/12"
                >
                  View and manage all employee profiles in one place. Access detailed information, roles, and performance data effortlessly.
                </Typography>
              </div>
            </div>
          </CardHeader>
        </div>
      </div>
      <div className="space-8">
        
        <Breadcrumb />
        <CardEmployee />
      </div>
    </div>
  );
}
