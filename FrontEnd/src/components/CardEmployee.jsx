import React from 'react'

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
  )
}


   
  export function ProfileCard() {
    return (
      <Card className="w-96">
        <CardHeader floated={false} className="h-80">
          <img src="https://awsimages.detik.net.id/community/media/visual/2019/10/30/68a652e2-2551-4fb2-81df-6b74574affd9.jpeg?w=505" alt="profile-picture" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            Harry Gunardi
          </Typography>
          <Typography color="blue-gray" className="font-medium" textGradient>
            Direktur Utama
          </Typography>
        </CardBody>
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
        </CardFooter>
      </Card>
    );
  }