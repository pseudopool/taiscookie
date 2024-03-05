"use client";

import { MoonLoader } from "react-spinners";

const Loading = () => (
  <div className="w-full h-screen flex justify-center items-center">
    <MoonLoader size={40} />
  </div>
);

export default Loading;
