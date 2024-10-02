import ReactDOM from "react-dom/client";
import MyAppRouter from "./router/index.tsx";
import { MuiXLicense } from "./components/index.tsx";
import "./index.css";

<MuiXLicense />;
const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<MyAppRouter />);
} else {
  throw new Error("Root element not found");
}
