import React from "react";
import { Route, Routes } from "react-router-dom";
import { Urls } from "../constant/Urls";
import HomePage from "../pages/home.page";
import LoginPage from "../pages/login.page";
import EditMcqPage from "../pages/mcq/EditMcq.page";
import McqPage from "../pages/mcq/Mcq.page";
import McqsPage from "../pages/mcq/Mcqs.page";
import NewMcqPage from "../pages/mcq/NewMcq.page";
import SignupPage from "../pages/signup.page";
import ProtectedRoute from "./ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={Urls.Home()} element={<HomePage />} />
      <Route path={Urls.Signup()} element={<SignupPage />} />
      <Route path={Urls.Login()} element={<LoginPage />} />

      <Route
        path={Urls.Mcqs.Mcqs()}
        element={
          <ProtectedRoute>
            <McqsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={Urls.Mcqs.Mcq(":id")}
        element={
          <ProtectedRoute>
            <McqPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={Urls.Mcqs.NewMcq()}
        element={
          <ProtectedRoute>
            <NewMcqPage />
          </ProtectedRoute>
        }
      />
      <Route
        path={Urls.Mcqs.EditMcq(":id")}
        element={
          <ProtectedRoute>
            <EditMcqPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
