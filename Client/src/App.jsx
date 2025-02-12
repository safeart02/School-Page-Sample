import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "../pages/homePage";
import MainLayout from "../layouts/mainLayout";
import CoursePage from "../pages/coursePage";
import NotFoundPage from "../pages/notFoundPage";
import Transitions from "./Transitions"; // Import the Transitions component

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route
        index
        element={
          <Transitions>
            <HomePage />
          </Transitions>
        }
      />
      <Route
        path="/course"
        element={
          <Transitions>
            <CoursePage />
          </Transitions>
        }
      />
      <Route
        path="*"
        element={
          <Transitions>
            <NotFoundPage />
          </Transitions>
        }
      />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
