import jobs from "../jobs.json";
import JobListingCard from "./JobListingCard";

export default function JobListing({ isHomePage }) {
  let newJobs = jobs;
  if (isHomePage) {
    newJobs = jobs.slice(0, 3);
  }
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHomePage ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newJobs.map((job, index) => (
            <JobListingCard {...job} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
