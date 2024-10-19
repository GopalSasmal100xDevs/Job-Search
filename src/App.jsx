import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobDetailsPage from "./pages/JobDetailsPage";
import EditJobPage from "./pages/EditJobPage";
import AddJobPage from "./pages/AddJobPage";
import { toast } from "react-toastify";

export default function App() {
  // Add new Job
  const addJob = async (newJob) => {
    try {
      await fetch("/api/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newJob),
      });
      toast.success("Job Added Successfully");
      return;
    } catch (error) {
      toast.error("Faild to Save");
    }
  };

  // delete Job
  const deleteJob = async (id) => {
    try {
      await fetch(`/api/jobs/${id}`, {
        method: "DELETE",
      });
      toast.success("Job Deleted Successfully");

      return;
    } catch (error) {
      toast.error("Faild to Delete Job");
    }
  };

  const updateJob = async (job) => {
    try {
      await fetch(`/api/jobs/${job.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(job),
      });
      toast.success("Job Updated Successfully");
    } catch (error) {
      toast.error("Faild to Update Job!");
    }
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/add-jobs"
          element={<AddJobPage addJobSubmit={addJob} />}
        />
        <Route
          path="/edit/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
        />
        <Route
          path="/jobs/:id"
          element={<JobDetailsPage deleteJob={deleteJob} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}
