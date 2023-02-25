import React from "react";
import User from "./components/User";
import { MyProvider } from "./context";

export default function App() {
  return (
    <MyProvider>
      <User />
    </MyProvider>
  );
}
