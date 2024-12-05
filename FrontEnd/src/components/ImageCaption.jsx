import React from 'react'
import { Typography } from "@material-tailwind/react";


export default function ImageCaption() {
  return (
    <div>
      <ImgWithBlurredCaption />
    </div>
  )
}

 
export function ImgWithBlurredCaption() {
  return (
    <figure className="relative h-96 w-full">
      <img
        className="h-full w-full rounded-xl object-cover object-center"
        src="https://images.wallpaperscraft.com/image/single/skyscraper_building_architecture_112550_3840x2160.jpg"
        alt="nature image"
      />
      <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
        <div>
          <Typography variant="h5" color="blue-gray">
            Daftar Insan BSI
          </Typography>
          <Typography color="gray" className="mt-2 font-normal">
          </Typography>
        </div>
        <Typography variant="h5" color="blue-gray">
          
        </Typography>
      </figcaption>
    </figure>
  );
}
