import React from "react";
import MapRotation from "./MapRotation";
import ServerConfig from "./ServerConfig";

const ServerInfo = () => {
  return (
    <div className="ml-20 h-screen text-white overflow-hidden">
      <div className="relative space-y-8">
        <div className="top-0 z-10 sticky pt-4">
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
        <div className="pr-4 w-max h-[85vh] overflow-y-auto scrollbar">
          <ServerConfig />
          <MapRotation />
        </div>
      </div>
    </div>
  );
};

export default ServerInfo;
