import { useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function JobListingCard({
  id,
  title,
  type,
  description,
  location,
  salary,
}) {
  const [showDesc, setShowDesc] = useState(false);

  let shortDesc = description;
  if (!showDesc) {
    shortDesc = description.slice(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative" key={id}>
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{type}</div>
          <h3 className="text-xl font-bold">{title}</h3>
        </div>

        <div className="mb-2">{shortDesc}</div>
        <button
          onClick={() => setShowDesc((prev) => !prev)}
          className="text-indigo-500 mb-2 hover:text-indigo-600"
        >
          {showDesc ? "Less" : "More"}
        </button>

        <h3 className="text-indigo-500 mb-2">{salary} / Year</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {location}
          </div>
          <Link
            to={`/jobs/${id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm cursor-pointer"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}
