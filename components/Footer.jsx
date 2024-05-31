import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <p className="w-full text-center text-gray-600">tridentKe@gmail.com</p>
      <p className="w-full text-center text-gray-600">+254 748 920 306</p>
      <br />

      <div className="flex w-full justify-center space-x-8">
        <a href="#">
          <img src="/ig.jpg" alt="" className="w-[24px]" />
        </a>
        <a href="#">
          <img src="/tt.png" alt="" className="w-[24px]" />
        </a>
        <a href="#">
          <img src="/yt.png" alt="" className="w-[24px]" />
        </a>
      </div>
      <br />

      <p className="w-full text-[0.7rem] text-center text-gray-600">
        Copyright© Trident. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
