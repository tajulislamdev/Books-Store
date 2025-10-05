import React from "react";
import AppStoreImg from "../../assets/app_store.png";
import PlayStoreImg from "../../assets/play_store.png";
import Banner from "../../assets/website/board.png";

const bannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const AppStore = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 text-white py-10 min-h-[300px]"
      style={bannerImg}
    >
      <div className="container">
        <div
          data-aos="fade-up"
          data-aos-duration="300"
          className="space-y-6 max-w-xl mx-auto text-center sm:text-left"
        >
          <h1 className="text-2xl sm:text-4xl font-semibold">
            Read Books at Your Fingertips
          </h1>
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4">
            <a href="#">
              <img
                src={PlayStoreImg}
                alt="Play store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
            <a href="#">
              <img
                src={AppStoreImg}
                alt="App store"
                className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppStore;

