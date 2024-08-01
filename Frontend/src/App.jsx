import React from "react";
import "./App.css";
import MainLayout from "./components/layouts/main.layout";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <div className="">
      <MainLayout>
        <AppRouter />
      </MainLayout>
    </div>
  );
}

export default App;
