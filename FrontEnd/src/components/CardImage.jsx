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
    return (
      <Card className="mt-6 w-96 shadow-none">
        <CardHeader className="relative h-56 mt-1">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>

        <Typography variant="h5" color="blue-gray" className=""></Typography>

        <CardFooter className="pt-4">
          <Button color="teal">Change Profile Image</Button>
        </CardFooter>
      </Card>
    );
  }
}
