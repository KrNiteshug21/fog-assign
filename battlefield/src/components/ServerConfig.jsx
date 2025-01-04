import React from "react";

const ServerConfig = () => {
  return (
    <div>
      <section className="space-y-1 font-medium text-gray-200 text-sm">
        <h3 className="mb-2 font-semibold text-2xl">! RC3-BASEMAPS</h3>
        <div className="flex items-center gap-2">
          <img src="/img/vectors/flag.svg" alt="flag" />
          <p>CONQUEST LARGE - LANCANG DAM - CUSTOM - 60 hz</p>
        </div>
        <p>
          Server protected by The_K-50 AntiCheat. Vip !Rules, Questions,
          Request, Appeal, Visit us: www.epg.gg | Discord
          https://discord.gg/3r5NK4d join
        </p>
      </section>
      <section className="flex items-center gap-4 mt-4 w-full lg:w-2/3 text-sm">
        <button className="flex-auto border-2 border-white/50 hover:bg-white py-2 text-center hover:text-primary-black transition-all duration-300">
          JOIN
        </button>
        <button className="flex-auto border-2 border-white/50 hover:bg-white py-2 text-center hover:text-primary-black transition-all duration-300">
          SPECTATE
        </button>
        <button className="flex-auto border-2 border-white/50 hover:bg-white py-2 text-center hover:text-primary-black transition-all duration-300">
          JOIN AS COMMANDER
        </button>
        <button className="flex flex-auto justify-center items-center gap-2 border-2 border-white/50 hover:bg-white py-2 text-center hover:text-primary-black transition-all duration-300">
          <img
            className="text-primary-black"
            src="/img/vectors/star.svg"
            alt="star"
          />
          <span>13672</span>
        </button>
      </section>
      <section>configs</section>
    </div>
  );
};

export default ServerConfig;
