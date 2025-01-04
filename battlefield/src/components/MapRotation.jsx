import React from "react";

const maps = [
  {
    src: "/img/maps/browser__SI-next-image-w.jpg",
    alt: "map-1",
    conquestType: "conquest large",
    location: "dawnbreaker",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(1).jpg",
    alt: "map-2",
    conquestType: "conquest large",
    location: "propaganda",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(2).jpg",
    alt: "map-3",
    conquestType: "conquest large",
    location: "operation locker",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(3).jpg",
    alt: "map-4",
    conquestType: "conquest large",
    location: "lancang dam",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(4).jpg",
    alt: "map-5",
    conquestType: "conquest large",
    location: "siege of shanghai",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(5).jpg",
    alt: "map-6",
    conquestType: "conquest large",
    location: "golmund railway",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(6).jpg",
    alt: "map-7",
    conquestType: "conquest large",
    location: "propaganda",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(7).jpg",
    alt: "map-8",
    conquestType: "conquest large",
    location: "siege of shanghai",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(8).jpg",
    alt: "map-9",
    conquestType: "conquest large",
    location: "dawnbreaker",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(9).jpg",
    alt: "map-10",
    conquestType: "conquest large",
    location: "propaganda",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(10).jpg",
    alt: "map-11",
    conquestType: "conquest large",
    location: "operation locker",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(11).jpg",
    alt: "map-12",
    conquestType: "conquest large",
    location: "lancang dam",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(12).jpg",
    alt: "map-13",
    conquestType: "conquest large",
    location: "siege of shanghai",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(13).jpg",
    alt: "map-14",
    conquestType: "conquest large",
    location: "golmund railway",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(14).jpg",
    alt: "map-15",
    conquestType: "conquest large",
    location: "propaganda",
  },
  {
    src: "/img/maps/browser__SI-next-image-w(15).jpg",
    alt: "map-16",
    conquestType: "conquest large",
    location: "siege of shanghai",
  },
];

const MapRotation = () => {
  return (
    <div className="space-y-4 w-full text-white">
      <h3 className="font-medium text-xs">Map Rotation</h3>
      <div className="gap-4 grid grid-cols-4 w-max">
        {maps.map((map, index) => (
          <div key={index} className="relative w-52 h-28 overflow-hidden group">
            <div className="transition-transform group-hover:-translate-y-1 duration-200">
              <img className="scale-105" src={map.src} alt={map.alt} />
            </div>
            <div className="group-hover:bg-white group-hover:text-primary-black/70 -bottom-1 absolute bg-primary-black/90 backdrop-blur-md p-4 w-full font-semibold text-sm">
              <h4>{map.conquestType.toUpperCase()}</h4>
              <h4>{map.location.toUpperCase()}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MapRotation;
