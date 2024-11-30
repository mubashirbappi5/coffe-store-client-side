import React from "react";

const Banner = () => {
  return (
    <div className="font-mainfamily">
      <div className="bg-banner min-h-screen bg-cover flex justify-center items-center">
        <div className="grid grid-cols-2">
          <div></div>

          <div className="text-white w-9/12 space-y-4">
            <h1 className="text-xl font-semibold">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="font-thin text-sm">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn bg-[#E3B577] border-none">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
