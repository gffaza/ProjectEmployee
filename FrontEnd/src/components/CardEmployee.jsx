import React from "react";
import { baseUrlGambar } from "../config";
import { baseUrl } from "../config";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Toast } from "../config";
import Spinner from "./Spinner";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export default function CardEmployee() {
  return (
    <div>
      <ProfileCard />
    </div>
  );
}

export function ProfileCard() {
  const [dataPegawai, setDataPegawai] = useState(null);
  const [isLoading, setisLoading] = useState(false);

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

  return (
    <>
      {isLoading || dataPegawai === null ? (
        <Spinner />
      ) : (
        <>
        <div className="grid grid-cols-4 gap-8">
          {dataPegawai.map((item, index) => {
            const isLast = index === dataPegawai.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <>
                
                  <Card className=" mb-4" key={item.id_pegawai}>
                    <CardHeader floated={false} className="h-80">
                      {/* <img src="https://awsimages.detik.net.id/community/media/visual/2019/10/30/68a652e2-2551-4fb2-81df-6b74574affd9.jpeg?w=505" alt="profile-picture" /> */}
                      <img src={`${baseUrlGambar}/${item.image}`} alt="" />
                    </CardHeader>

                    <CardBody className="text-center">
                      <Typography
                        variant="h4"
                        color="blue-gray"
                        className="mb-2"
                      >
                        {item.nama}
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="font-medium text-md"
                        textGradient
                      >
                        {item.position}
                      </Typography>
                      <Typography
                        color="blue-gray"
                        className="font-light text-sm"
                        textGradient
                      >
                        {item.role}
                      </Typography>
                    </CardBody>
                    <CardFooter>
                      <Link to={`/detailpegawai/${item.id_pegawai}`} className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded">
                        Lihat Profile Pegawai
                      </Link>
                    </CardFooter>
                    {/*                   
                  <CardFooter className="flex justify-center gap-7 pt-2">
                    <Tooltip content="Like">
                      <Typography
                        as="a"
                        href="#facebook"
                        variant="lead"
                        color="blue"
                        textGradient
                      >
                        <i className="fab fa-facebook" />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                      <Typography
                        as="a"
                        href="#twitter"
                        variant="lead"
                        color="light-blue"
                        textGradient
                      >
                        <i className="fab fa-twitter" />
                      </Typography>
                    </Tooltip>
                    <Tooltip content="Follow">
                      <Typography
                        as="a"
                        href="#instagram"
                        variant="lead"
                        color="purple"
                        textGradient
                      >
                        <i className="fab fa-instagram" />
                      </Typography>
                    </Tooltip>
                  </CardFooter> */}
                  </Card>
                
              </>
            );
          })}
          </div>
        </>
      )}
    </>
  );
}
