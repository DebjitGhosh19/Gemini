import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// import UserContext from "../context/Context.jsx";
import ContextProvider from "../context/Context.jsx";

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <App />
  </ContextProvider>
);
