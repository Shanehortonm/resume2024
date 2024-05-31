import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import banner from "../../assets/bannerAnimation.json";

export const BannerHello = () => {
  return (
    <div className="banner-animation">
      <Player autoplay src={banner}></Player>
    </div>
  );
};
