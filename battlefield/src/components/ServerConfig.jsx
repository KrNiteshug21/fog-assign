import React from "react";
import GameRules from "./GameRules";
import GameAdvancedSettings from "./GameAdvancedSettings";
import GameSettings from "./GameSettings";

const ServerConfig = () => {
  return (
    <div className="space-y-4 pr-4">
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
      <section className="flex items-center gap-4 mt-4 w-full font-medium text-xs tracking-wider">
        <button className="border-1 border-white/20 hover:bg-white px-4 py-2 w-52 text-center hover:text-primary-black transition-all duration-300">
          JOIN
        </button>
        <button className="border-1 border-white/20 hover:bg-white px-4 py-2 w-52 text-center hover:text-primary-black transition-all duration-300">
          SPECTATE
        </button>
        <button className="border-1 border-white/20 hover:bg-white px-4 py-2 w-52 text-center hover:text-primary-black transition-all duration-300">
          JOIN AS COMMANDER
        </button>
        <button className="flex justify-center items-center gap-2 border-1 border-white/20 hover:bg-white px-4 py-2 w-28 text-center hover:text-primary-black transition-all duration-300">
          <img
            className="text-primary-black"
            src="/img/vectors/star.svg"
            alt="star"
          />
          <span>13672</span>
        </button>
      </section>
      <section className="flex items-center gap-6 text-center">
        <div>
          <p className="font-semibold text-xs">PLAYERS</p>
          <h3 className="font-semibold text-xl">60/64</h3>
        </div>
        <div>
          <p className="font-semibold text-xs">PING</p>
          <h3 className="font-semibold text-xl">104ms</h3>
        </div>
        <div>
          <p className="font-semibold text-xs">TICKETRATE</p>
          <h3 className="font-semibold text-xl">60Hz</h3>
        </div>
      </section>
      <section className="md:w-3/4">
        <div className="flex justify-between items-start gap-8">
          <GameSettings />
          <GameAdvancedSettings />
          <GameRules />
        </div>
      </section>
    </div>
  );
};

export default ServerConfig;
