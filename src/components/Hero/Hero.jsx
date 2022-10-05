import { useState, useCallback } from "react";
import HeroForm from "./HeroForm";
import image from "../../assets/image.png";

export default function Hero() {
  const [job, setJob] = useState({
    jobNeeded: "",
    jobType: "",
  });

  const chooseJob = useCallback(
    (e) => {
      const { name, value } = e.target;
      setJob((prevJob) => ({ ...prevJob, [name]: value }));
    },
    [job]
  );

  return (
    <main className="py-8 bg-heroBg relative">
      <div className="container m-auto">
        <div>
          <h1 className="font-extrabold text-gray text-[2.6rem]">
            Find a tradesperson with Rated People
          </h1>
        </div>
        <div className="flex justify-between my-8">
          <div className="w-full">
            <HeroForm job={job} chooseJob={chooseJob} />
          </div>
          <div className="w-full">
            <h2 className="font-medium text-gray text-[1.6rem] break-words">
              Every trade you might need, with 88,000+ 5{" "}
              <span className="text-[#fbbf24]">★</span> ratings in the last
              year.
            </h2>
            <div className="absolute right-20 bottom-0 w-80">
              <img src={image} alt="Image" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
