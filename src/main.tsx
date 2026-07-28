import { createRoot } from "react-dom/client";
import App from "./app/App";
import "./styles/index.css";

const faviconLink = document.createElement("link");
faviconLink.rel = "icon";
faviconLink.type = "image/png";
faviconLink.href = "/ChatGPT Image Jul 28, 2026, 08_54_04 PM.png";
document.head.appendChild(faviconLink);

createRoot(document.getElementById("root")!).render(<App />);
  