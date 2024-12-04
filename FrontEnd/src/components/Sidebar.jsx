import React, { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Toast } from "../config";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export default function Sidebar() {
  return <DefaultSidebar />;
}

export function DefaultSidebar() {
  const { dataLogin, setDataLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  const logout = () => {
    Swal.fire({
      title: "Apakah anda yakin ingin logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
    }).then((result) => {
      if (result.isConfirmed) {
        Toast.fire({
          title: "Logout Berhasil",
          icon: "success",
          text: `Selamat tinggal ${dataLogin.user.name}`,
        });
        localStorage.removeItem("dataLogin");
        setDataLogin(null);
        navigate("/login");
      }
    });
  };

  return (
    <Card
      className="fixed top-0 left-0 h-screen w-64 p-4 shadow-xl shadow-blue-gray-900/5 flex flex-col justify-between"
    >
      {/* Sidebar Header */}
      <div>
        <div className="flex flex-row mb-6 p-4">
          <img src="inban.svg" className="w-8 h-8" alt="Logo" />
          <Typography
            variant="h4"
            color="blue-gray"
            className="items-center justify-center p-0.5 pl-4"
          >
            Inban
          </Typography>
        </div>
        {/* Sidebar Menu */}
        <List>
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/" className="text-gray-800 hover:text-blue-600">
              Dashboard
            </Link>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            <Link to="/recruitment" className="text-gray-800 hover:text-blue-600">
              Recruitment
            </Link>
          </ListItem>
        </List>
      </div>

      {/* Logout Button */}
      <div>
        <List>
          <ListItem onClick={logout} className="mt-4">
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
            Log Out
          </ListItem>
        </List>
      </div>
    </Card>
  );
}
