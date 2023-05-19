import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App";
import { store } from "./store/rootStore";
import "./common/styles/index.scss";
import MUIProvider from "./components/providers/MUIProvider";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <MUIProvider>
      <App />
    </MUIProvider>
  </Provider>
);
