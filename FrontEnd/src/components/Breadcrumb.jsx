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
        Docs
      </a>
      <a href="#" className="opacity-60">
        Components
      </a>
      <a href="#">Breadcrumbs</a>
    </Breadcrumbs>
  );
}