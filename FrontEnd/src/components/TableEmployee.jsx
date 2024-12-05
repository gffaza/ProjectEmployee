import React from "react";

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  PencilIcon,
  PresentationChartBarIcon,
  TrashIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";
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

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["Member", "Function", "Status", "Lokasi Kerja", "Action"];

const TABLE_ROWS = [
  {
    id_employee: 1,
    img : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "Herry Gunardi",
    job: "Direktur Utama",
    role: "Direksi",
    department: "-",
    email: "qX9dG@example.com",
    org: "Organisasi",
    lokasi_kerja: "Jakarta Pusat",
    status: "Active",
  },
  {
    id_employee: 2,
    img : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Saladdin D Effendi",
    job: "Direktur IT",
    role: "Direksi",
    department: "-",
    email: "qX9dG@example.com",
    org: "Organisasi",
    status: "Cuti",
    lokasi_kerja: "Jakarta Pusat",
  },
  {
    id_employee: 3,
    img : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "Herry Gunardi",
    job: "Direktur Utama",
    role: "Direksi",
    department: "-",
    email: "qX9dG@example.com",
    org: "Organisasi",
    lokasi_kerja: "Jakarta Pusat",
    status: "Active",
  },
  {
    id_employee: 4,
    img : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "Herry Gunardi",
    job: "Direktur Utama",
    role: "Direksi",
    department: "-",
    email: "qX9dG@example.com",
    org: "Organisasi",
    lokasi_kerja: "Jakarta Pusat",
    status: "Active",
  },
  {
    id_employee: 5,
    img : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Saladdin D Effendi",
    job: "Direktur IT",
    role: "Direksi",
    department: "-",
    email: "qX9dG@example.com",
    org: "Organisasi",
    status: "Cuti",
    lokasi_kerja: "Jakarta Pusat",
  },
  {
    id_employee: 6,
    img : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Saladdin D Effendi",
    job: "Direktur IT",
    role: "Direksi",
    department: "-",
    email: "qX9dG@example.com",
    org: "Organisasi",
    status: "Cuti",
    lokasi_kerja: "Jakarta Pusat",
  },
  
];

export default function TableEmployee() {
  return (
    <div>
      <SortableTable />
    </div>
  );
}

export function SortableTable() {
  return (
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
                <PresentationChartBarIcon className="h-10 w-10 bg-gray-100 p-2 rounded-md" />

                <Typography variant="h5" color="blue-gray">
                  Dashboard
                </Typography>
              </div>

              <Typography
                color="gray"
                className="mt-1 font-normal text-start w-8/12"
              >
                Gain a clear overview of employee profiles, performance metrics,
                and activities. Empower your team with actionable insights.
              </Typography>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              {/* <Button variant="outlined" size="sm">
                view all
              </Button> */}
              <Button className="flex items-center gap-3" size="sm">
                <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Employee
              </Button>
            </div>
          </div>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
          {/* <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div> */}
        </CardHeader>

        <Card className="h-full w-full">
          <CardBody className="overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={head}
                      className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                      >
                        {head}{" "}
                        {index !== TABLE_HEAD.length - 1 && (
                          <ChevronUpDownIcon
                            strokeWidth={2}
                            className="h-4 w-4"
                          />
                        )}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(
                  ({ img, name, email, job, org, status, lokasi_kerja }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar src={img} alt={name} size="sm" />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {email}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {job}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {org}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={
                                status === "Active"
                                  ? "Active"
                                  : status === "Cuti"
                                  ? "Cuti"
                                  : status === "Sakit"
                                  ? "Sakit"
                                  : "Non-Active"
                              }
                              color={
                                status === "Active"
                                  ? "green"
                                  : status === "Cuti"
                                  ? "blue-gray"
                                  : status === "Sakit"
                                  ? "orange"
                                  : "red"
                              }
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {lokasi_kerja}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Edit User">
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip content="Pecat Pegawai">
                            <IconButton variant="text">
                              <TrashIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              Page 1 of 10
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm">
                Previous
              </Button>
              <Button variant="outlined" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}