import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { baseUrl, baseUrlGambar, Toast } from "../config";
import Spinner from "../components/Spinner";
import Swal from "sweetalert2";
import FormTambah from "../components/FormTambah";

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
import { LoginContext } from "../context/LoginContext";

const TABLE_HEAD = ["Employee", "Position", "Role", "Department", "Group", "Lokasi Kerja", "Action"];

export default function TableEmployee() {
  const [isLoading, setisLoading] = useState(false);
  const [dataPegawai, setDataPegawai] = useState(null);
  const {dataLogin, setDataLogin} = useContext(LoginContext);
  // const [isOpenModalTambah, setisOpenModalTambah] = useState(false);
  const loadData = () => {
    setisLoading(true);
    axios
      .get(`${baseUrl}/pegawai`)
      .then((response) => {
        console.log(response.data);
        const hasil = response.data;
        setDataPegawai(hasil.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setisLoading(false);
      });
  };

  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  const handleDelete = (id, nama) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Anda akan menghapus " + nama,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, Hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        setisLoading(true);
        axios
          .delete(`${baseUrl}/pegawai/${id}`,{
            headers:{
              Authorization: dataLogin.access_token,
            },
          })
          .then((response) => {
            console.log(response);
            Toast.fire({
              icon: "success",
              title: "Data Berhasil dihapus",
            });
            loadData();
          })
          .catch((error) => {
            console.log(error);
          })
          .finally(() => {
            setisLoading(false);
          });
      }
    });
  };
  return (
    <>
    {isLoading || dataPegawai === null ? (
                <Spinner />
            ) : (
    
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
        {/* {JSON.stringify(dataPegawai)} */}
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

                 {dataPegawai.map(
                  (item, index) => {
                    const isLast = index === dataPegawai.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={item.id_pegawai}>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar src={item.image} alt={item.nama} size="sm" />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {item.nama}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {item.email}
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
                              {item.position}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                        <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.role}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.departmen}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.group}
                          </Typography>
                        </td>
                        
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item.lokasi_kerja}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Edit User">
                            <IconButton  onClick={() =>
                        (window.location.href = `/pegawai/${item.id_pegawai}`)
                      }  variant="text">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip content="Pecat Pegawai">
                            <IconButton onClick={() => handleDelete(item.id_pegawai, item.nama)} variant="text">
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
    </div>
     )}
    </>
  );
}

export function SortableTable() {
  return (
    <>
    </>
  );
}
