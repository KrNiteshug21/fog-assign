import React from "react";
import MapRotation from "./MapRotation";
import ServerConfig from "./ServerConfig";

const ServerInfo = () => {
  return (
    <div className="mx-20 py-4 h-full text-white">
      <div className="relative space-y-8 lg:w-3/4 h-full overflow-y-auto">
        <div className="top-0 z-10 sticky mb-14">
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
