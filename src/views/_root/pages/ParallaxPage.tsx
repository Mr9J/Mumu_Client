import React, { useEffect, useRef, useState } from "react";
import { bg, moon, mountain, road } from "@/assets/_parallax_img";
import "@/styles/ParallaxPage.css";

const ParallaxPage = () => {
  const [scroll, setScroll] = useState(0);
  const bgImg = useRef(null);
  const moonImg = useRef(null);
  const mountainImg = useRef(null);
  const roadImg = useRef(null);
  const h2Head = useRef(null);

  useEffect(() => {
    () => {
      window.alert("ye");
    };
  }, []);

  return (
    <div className="bg-veryDarkBlue min-h-1500">
      <section
        className=" relative w-full h-screen overflow-hidden flex justify-center items-center"
        id="parallax-section"
      >
        <img
          src={bg}
          alt="bg"
          className=" absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          ref={bgImg}
        />
        <img
          src={moon}
          alt="moon"
          className=" absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          ref={moonImg}
        />
        <img
          src={mountain}
          alt="mountain"
          className=" absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          ref={mountainImg}
        />
        <img
          src={road}
          alt="road"
          className=" absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
          ref={roadImg}
        />
        <h2 className="relative text-white text-9xl z-10" ref={h2Head}>
          MUMU, Empower Your Dreams
        </h2>
      </section>
    </div>
  );
};

export default ParallaxPage;
