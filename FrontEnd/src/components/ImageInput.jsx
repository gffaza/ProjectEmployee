
import React, { useState } from "react";


// export default function ImageInput() {
//   return (
//     <div>ImageInput</div>
//   )
// }


const ImageInput = () => {
  const [preview, setPreview] = useState(
    "https://awsimages.detik.net.id/community/media/visual/2019/10/30/68a652e2-2551-4fb2-81df-6b74574affd9.jpeg?w=505"
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <form>
      <div className="flex items-center space-x-6">
        <div className="shrink-0">
          <img
            id="preview_img"
            className="h-16 w-16 object-cover rounded-full"
            src={preview}
            alt="Current profile photo"
          />
        </div>
        <label className="block">
          <span className="sr-only">Choose profile photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-violet-50 file:text-violet-700
              hover:file:bg-violet-100
            "
          />
        </label>
      </div>
    </form>
  );
};

export default ImageInput;
