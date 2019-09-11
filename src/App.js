import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import List from "./components/List/List";
import Detail from "./components/Detail/Detail";

export default function App() {
  return (
    <div>
      <Header />
      <Sidebar />
      <List />

      <Detail />
    </div>
  );
}
