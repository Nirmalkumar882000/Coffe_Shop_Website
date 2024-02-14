import React from "react";
import AppStore from "../../assets/website/app_store.png";
import PlayStore from "../../assets/website/play_store.png";
import bgImg from "../../assets/website/coffee-beans-bg.png";

function AppBanner() {
  const BgImg = {
    backgroundImage: `url(${bgImg})`,
    backgroundColor: "#270c03",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <div className="py-14" style={BgImg}>
      <div className="container">
        <div className="grid items-center grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="max-w-xl mx-auto space-y-6">
            {/* Text-Content */}

            <div className="pl-3 text-2xl font-semibold text-center sm:text-4xl text-white/90">
              <h1>Coffee Cafe is Available for Android and IOS</h1>
              {/* Logo section */}
              <div className="flex flex-wrap items-center justify-center ">
                <a href="#">
                  <img
                    src={AppStore}
                    alt="App Store"
                    className="max-w-[150px] sm:max-w-[120px] ms:max-w-[200px]"
                  />
                </a>
                <a href="#">
                  <img
                    src={PlayStore}
                    alt="Play Store"
                    className="max-w-[160px] sm:max-w-[120px] ms:max-w-[200px]"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppBanner;
