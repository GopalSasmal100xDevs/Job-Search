import { Hero } from "../components/Hero";
import { HomeCard } from "../components/HomeCards";
import JobListing from "../components/JobListing";
import ViewAllJobs from "../components/ViewAllJobs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeCard />
      <JobListing isHomePage />
      <ViewAllJobs />
    </>
  );
}
