import { Carousel } from "@trendyol-js/react-carousel";
import React, { useContext } from "react";
import { StorieContext } from "../../Contexts/Storie";

export default function Stories() {
  const { stories } = useContext(StorieContext);

  return (
    <div className="border border-zinc-200 bg-white lg:rounded-md flex flex-row p-3">
      <Carousel
        show={5.5}
        slide={3}
        swiping={true}
        transition={0.5}
      >
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center">
            <div className="rounded-full w-16 h-16  bg-gradient-to-r flex items-center justify-center from-[#feda75] via-[#d62976] to-[#962fbf]">
              <div className="flex flex-col justify-between items-center bg-white rounded-full">
                <img
                  className="w-14 h-14 m-px rounded-full"
                  src={story.image}
                  alt="Story Imagem"
                />
              </div>
            </div>
            <p className="mt-2 text-xs">{story.username}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
