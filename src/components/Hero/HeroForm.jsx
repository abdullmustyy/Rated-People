import { jobTypeData } from "./HeroJobTypeData";

export default function HeroForm({ job, chooseJob }) {
  function showJobTypes(jobNeeded) {
    for (let i = 0; i < jobTypeData.length; i++) {
      if (jobTypeData[i].jobNeeded === jobNeeded) {
        return jobTypeData[i].jobTypeOptions.map((option, i) => (
          <option key={i} className="font-bold text-gray" value={option}>
            {option}
          </option>
        ));
      }
    }
  }

  return (
    <section className="bg-brown sm:w-[80%] text-white p-6 rounded-lg">
      <div className="mb-4">
        <h2 className="font-extrabold text-lg">
          Post your job for free and available tradespeople will contact you to
          quote
        </h2>
      </div>
      <form>
        <div className="flex flex-col space-y-5">
          <div>
            <label htmlFor="jobNeeded" className="font-medium text-sm">
              What type of tradesperson do you need?
            </label>
            <select
              name="jobNeeded"
              id="jobNeeded"
              value={job.jobNeeded}
              onChange={(e) => chooseJob(e)}
              className="text-brown text-base p-2 w-full cursor-pointer"
            >
              <option value="">Please select</option>
              <option className="font-bold text-gray" value="Bathroom fitter">
                Bathroom fitter
              </option>
              <option
                className="font-bold text-gray"
                value="Blacksmith / Metal worker"
              >
                Blacksmith / Metal worker
              </option>
              <option className="font-bold text-gray" value="Bricklayer">
                Bricklayer
              </option>
              <option className="font-bold text-gray" value="Builder">
                Builder
              </option>
              <option
                className="font-bold text-gray"
                value="CCTV / Satellites / Alarms"
              >
                CCTV / Satellites / Alarms
              </option>
            </select>
          </div>
          <div>
            <label htmlFor="jobType" className="font-medium text-sm">
              What type of job is it?
            </label>
            <select
              name="jobType"
              id="jobType"
              value={job.jobType}
              onChange={(e) => chooseJob(e)}
              className="text-brown text-base p-2 w-full cursor-pointer"
            >
              <option value="">Please select</option>
              {showJobTypes(job.jobNeeded)}
            </select>
          </div>
          <div className="flex sm:justify-end justify-center">
            <button className="font-bold text-base ml-2 py-2 px-8 bg-neon rounded-lg hover:bg-[#72a50d]">
              CONTINUE
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
