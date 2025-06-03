import ReactDOM from "react-dom/client";
import App from "./App";

window.addEventListener("load", () => {
  document.body.classList.add("fonts-loaded");
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<App />);
