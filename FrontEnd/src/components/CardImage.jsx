import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function CardImage() {
  return (
    <div>
      <CardDefault />
    </div>
  );

  function CardDefault() {
    return (<>
    
      <Card className="mt-6 w-96 shadow-none">
        <CardHeader className="relative h-56 mt-1">
          <img
            src="https://awsimages.detik.net.id/community/media/visual/2019/10/30/68a652e2-2551-4fb2-81df-6b74574affd9.jpeg?w=505"
            alt="card-image"
          />
        </CardHeader>

        <Typography variant="h5" color="blue-gray" className=""></Typography>

        <CardFooter className="pt-4">
          <Button color="teal">Change Profile Image</Button>
        </CardFooter>
      </Card>
    </>
    );
  }
}
