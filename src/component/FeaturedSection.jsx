import React from "react";
import videophone from "../assets/videos/Screencast From 2026-05-18 12-29-16.mp4";
import videoLeptop from "../assets/videos/Screencast From 2026-05-18 13-02-53.mp4";
function FeaturedSection() {
  return (
    <>
      {/* <!-- Featured Section with Balanced Spacing & Premium Background --> */}
      <section className="relative py-10 md:py-16 bg-linear-to-br from-surface via-surface-container-low to-surface-container overflow-hidden border-y border-outline-variant">
        {/* BACKGROUND EFFECT: Sikar City Logo/Text Watermark Animation */}
        <div className="absolute inset-0 select-none pointer-events-none flex items-center justify-center z-0 opacity-[0.03] md:opacity-[0.05]">
          <div className="text-[12vw] font-black tracking-widest uppercase text-primary animate-pulse whitespace-nowrap">
            SIKAR CITY
          </div>
        </div>
        {/* Decorative Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-primary/10 rounded-full blur-[100px] pointer-events-none z-0"></div>
        <div className="absolute top-12 left-10 w-50 h-50 bg-secondary/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
        <div className="relative px-4 sm:px-6 md:px-8 max-w-275 mx-auto z-10">
          {/* Flex Layout: Balanced gap so that the laptop is fully visible */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-center justify-center">
            {/* LEFT SIDE: Laptop Mockup (Fully Visible) */}
            <div className="w-full max-w-110 md:max-w-120 flex flex-col justify-center items-center relative px-1 transform hover:-translate-y-1 transition-transform duration-300">
              {/* Laptop Screen Frame */}
              <div className="relative w-full aspect-16/10 border-10 border-slate-800 rounded-t-xl bg-slate-900 shadow-2xl overflow-hidden ring-1 ring-outline-variant/30">
                {/* Laptop WebCam Dot */}
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-black rounded-full z-20"></div>

                {/* Inner Screen Video Wrapper */}
                <div className="w-full h-full bg-black relative z-10">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload"
                  >
                    <source src={videoLeptop} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
              {/* Laptop Base/Keyboard Part */}
              <div className="relative w-[106%] h-2.5 bg-linear-to-b from-slate-700 to-slate-800 rounded-b-lg shadow-md z-20">
                {/* Laptop Center Opener Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-0.5 bg-slate-900 rounded-b-sm"></div>
              </div>

              {/* Laptop Base Stand Shadow Effect */}
              <div className="w-[85%] h-1 bg-black/20 blur-[1px] rounded-full mx-auto mt-0.5"></div>
            </div>
            {/* RIGHT SIDE: Phone Mockup (Placed side-by-side with clean spacing) */}
            <div className="w-full max-w-50 flex justify-center items-center relative pt-2 lg:pt-0 transform hover:-translate-y-1 transition-transform duration-300 z-30">
              {/* Phone Mockup Frame */}
              <div className="relative mx-auto border-8 border-slate-900 rounded-4xl h-85 w-42.5 sm:h-90 sm:w-45 shadow-2xl bg-slate-900 overflow-hidden ring-2 ring-outline-variant/40">
                {/* Phone Speaker/Camera Notch */}
                <div className="absolute top-0 inset-x-0 h-2.5 bg-slate-900 flex justify-center z-20">
                  <div className="w-16 h-1.5 bg-black rounded-b-md"></div>
                </div>

                {/* Video Component */}
                <div className="w-full h-full bg-black relative z-10">
                  <video
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controlsList="nodownload"
                  >
                    <source src={videophone} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>

                {/* Phone Bottom Home Bar */}
                <div className="absolute bottom-1 inset-x-0 h-1 flex justify-center z-20">
                  <div className="w-16 h-0.5 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturedSection;
