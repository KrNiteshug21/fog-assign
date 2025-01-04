import React, { useState } from "react";

const sideMenuGames = [
  {
    src: "/img/images/side-menu-game-1.png",
    alt: "game-1",
    text: "BATTLEFIELD V",
  },
  {
    src: "/img/images/side-menu-game-2.png",
    alt: "game-2",
    text: "BATTLEFIELD 1",
  },
  {
    src: "/img/images/side-menu-game-3.png",
    alt: "game-3",
    text: "BATTLEFIELD 4",
  },
  {
    src: "/img/images/side-menu-game-4.png",
    alt: "game-4",
    text: "BATTLEFIELD HARDLINE",
  },
  { src: "/img/images/side-menu-career.png", alt: "career", text: "CAREER" },
  { src: "/img/vectors/side-menu__watch.svg", alt: "watch", text: "WATCH" },
  { src: "/img/vectors/side-menu__news.svg", alt: "news", text: "NEWS" },
];

const utils = [
  { src: "/img/vectors/side-menu__help.svg", alt: "help", text: "HELP" },
  { src: "/img/vectors/quit.svg", alt: "quit", text: "QUIT" },
];

const SideGames = ({ game, index, selectedGame, setSelectedGame }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setSelectedGame(index)}
      className={`${
        selectedGame === index ? "border-l-2 border-primary-orange" : ""
      } relative w-full`}
    >
      <img
        className={`${
          selectedGame !== index ? "opacity-50" : ""
        } mx-auto w-8 h-8 object-center object-cover hover:opacity-100`}
        src={game.src}
        alt={game.alt}
      />
      {isHovered && (
        <p className="top-1/2 left-12 absolute bg-primary-black px-1 w-max text-2xs text-white -translate-y-1/2">
          {game.text}
        </p>
      )}
    </div>
  );
};

const UtilComp = ({ util }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full"
    >
      <img
        className="opacity-70 hover:opacity-100 mx-auto"
        src={util.src}
        alt={util.alt}
      />
      {isHovered && (
        <p className="top-1/2 left-12 absolute bg-primary-black px-1 w-max text-2xs text-white -translate-y-1/2">
          {util.text}
        </p>
      )}
    </div>
  );
};

const Navigation = () => {
  const [selectedGame, setSelectedGame] = useState(2);

  return (
    <div className="top-0 left-0 absolute border-white/30 bg-main-nav border-r w-14 h-screen">
      <div className="flex flex-col justify-between items-center pt-[17vh]">
        <div className="space-y-2 w-full">
          {sideMenuGames.map((game, index) => (
            <SideGames
              key={index}
              setSelectedGame={setSelectedGame}
              selectedGame={selectedGame}
              index={index}
              game={game}
            />
          ))}
        </div>
        <div className="space-y-8 mt-[32vh] w-full">
          {utils.map((util, index) => (
            <UtilComp key={index} util={util} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navigation;
