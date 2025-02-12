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
import PrivacyPolicy from '../copyright/privacyPolicy';
import TermsConditions from '../copyright/termsConditions';
import Disclaimer from '../copyright/disclaimer';
import EULA from '../copyright/EULA';


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
        path="/privacyPolicy"
        element={
          <Transitions>
            <PrivacyPolicy />
          </Transitions>
        }
      />
      <Route
        path="/termsConditions"
        element={
          <Transitions>
            <TermsConditions />
          </Transitions>
        }
      />
      <Route
        path="/disclaimer"
        element={
          <Transitions>
            <Disclaimer />
          </Transitions>
        }
      />
      <Route
        path="/EULA"
        element={
          <Transitions>
            <EULA />
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
