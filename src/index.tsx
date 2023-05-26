import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { StrictMode } from "react";

import App from "./app/App";
import { store } from "./app/store/rootStore";
import "./app/styles/index.scss";
import MUIProvider from "./app/providers/MUIProvider";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);

root.render(
  <StrictMode>
    <Provider store={store}>
      <MUIProvider>
        <App />
      </MUIProvider>
    </Provider>
  </StrictMode>
);
