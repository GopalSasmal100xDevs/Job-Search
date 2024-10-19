import { useEffect, useState } from "react";
import JobListingCard from "./JobListingCard";
import Spinner from "./Spinner";

export default function JobListing({ isHomePage }) {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const baseURL = "/api/jobs";
    const apiUrl = isHomePage ? `${baseURL}?_limit=3` : baseURL;
    const fetchJobs = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("Error while fetching " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHomePage ? "Recent Jobs" : "Browse Jobs"}
        </h2>
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <JobListingCard {...job} key={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
