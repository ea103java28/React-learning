import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
// import './pages/Home/index.css'
import App from "./App.jsx";
import Home from "./pages/Home/index.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  /* <App />  */
  <Home />,
  // </StrictMode>,
);
