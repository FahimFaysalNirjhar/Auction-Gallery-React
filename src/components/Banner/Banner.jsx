import React from "react";
import BannerMin from "../../assets/Banner-min.jpg";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${BannerMin})`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold font-sora">
            Bid on Unique Items from Around the World
          </h1>
          <p className="mb-5 font-sora text-2xl">
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions
          </p>
          <button className="btn bg-white rounded-3xl font-sora">
            Explore Auctions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
