import React from "react";
import MapRotation from "./MapRotation";
import ServerConfig from "./ServerConfig";

const ServerInfo = () => {
  return (
    <div className="px-6 h-full text-white">
      <div className="">
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <img src="/img/vectors/back.svg" alt="back" />
            <p className="flex items-center gap-4 font-semibold text-xs">
              <span>MULTIPLAYER</span>
              <span>/</span>
              <span>SERVER BROWSER</span>
              <span>/</span>
            </p>
          </div>
          <h3 className="font-semibold text-3xl">SERVER INFO</h3>
        </div>
        <ServerConfig />
        <MapRotation />
      </div>
    </div>
  );
};

export default ServerInfo;
