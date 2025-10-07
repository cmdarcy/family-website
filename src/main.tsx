import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router";
import { TodaySchedule } from "./components/TodaySchedule.tsx";
import { Schedule } from "./components/Schedule.tsx";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<TodaySchedule />} />
          <Route path="/:day" element={<Schedule />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
