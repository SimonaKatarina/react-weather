import React from 'react';
import './index.css';

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import WeatherSearch from "./WeatherSearch";
import GitLink from "./GitLink";

import "./App.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <GitLink />
    </div>
  </StrictMode>
)
