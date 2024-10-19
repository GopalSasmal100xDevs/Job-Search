import { Hero } from "./components/Hero";
import { HomeCard } from "./components/HomeCards";
import JobListing from "./components/JobListing";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCard />
      <JobListing />
    </>
  );
}
