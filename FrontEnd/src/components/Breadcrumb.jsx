import React from 'react'
import { Breadcrumbs } from "@material-tailwind/react";


export default function Breadcrumb() {
  return (
    <div>
        <BreadcrumbsCustomSeparator />
    </div>
  )
}

 
export function BreadcrumbsCustomSeparator() {
  return (
    <Breadcrumbs separator="-">
      <a href="#" className="opacity-60">
        Direktorat
      </a>
      <a href="#" className="opacity-60">
        Group
      </a>
      <a href="#">Department</a>
    </Breadcrumbs>
  );
}