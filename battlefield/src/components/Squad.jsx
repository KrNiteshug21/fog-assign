import React, { useState } from "react";

const Squad = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 right-0 h-screen space-y-4
        ${isHovered ? "w-48 bg-primary-black/70" : "w-14 bg-transparent"}
         text-white my-6 py-4 px-2
        transition-all duration-300 ease-in-out
        text-2xs`}
    >
      <div className="space-y-4">
        <hr className="border-white/40" />

        <div className="space-y-2 text-white">
          <h3 className="flex gap-2">
            <img src="/img/vectors/squad.svg" alt="logo" />
            {isHovered && <span className="">SQUAD</span>}
          </h3>
          <div>
            <div className="flex items-center group">
              <p className="group-hover:bg-primary-black group-hover:text-white place-content-center grid bg-gray-500 w-8 h-8 text-base text-primary-black">
                +
              </p>
              {isHovered && (
                <p className="group-hover:bg-white group-hover:text-primary-black flex-auto justify-start items-center grid px-2 h-8">
                  Squad Join
                </p>
              )}
            </div>
          </div>
        </div>

        <hr className="border-white/40" />

        <div className="space-y-2 text-white">
          <h3 className="flex gap-2">
            <img className="" src="/img/vectors/online.svg" alt="logo" />
            {isHovered && <span className="">ONLINE</span>}
          </h3>
          <div className="flex items-center border-primary-green border-l-2 w-full h-full group">
            <div>
              <img
                className="opacity-50 group-hover:opacity-100 ml-1 w-10 h-10"
                src="/img/images/image-1.png"
              />
            </div>
            {isHovered && (
              <div className="group-hover:bg-white group-hover:text-primary-black flex-auto items-center grid pl-2 h-10">
                <h3 className="">Mary Jane</h3>
                <p className="text-gray-400">Online</p>
              </div>
            )}
          </div>
        </div>

        <hr className="border-white/40" />

        <div className="space-y-2 text-white">
          <h3 className="flex gap-2">
            <img className="" src="/img/vectors/offline.svg" alt="logo" />
            {isHovered && <span className="">OFFLINE</span>}
          </h3>
          <div className="flex items-center border-l-2 w-full h-full group">
            <div>
              <img
                className="opacity-50 group-hover:opacity-100 ml-1 w-10 h-10"
                src="/img/images/image-2.png"
              />
            </div>
            {isHovered && (
              <div className="group-hover:bg-white group-hover:text-primary-black flex-auto items-center grid pl-2 h-10">
                <h3>420</h3>
                <p className="text-gray-400">Offline</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Squad;
