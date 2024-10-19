import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./redux/store";
import Sidebar from "./components/Sidebar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="flex">
      <Provider store={store}>
        <Router>
          <Sidebar />
          <div className="flex-1 bg-gray-100">
            <AppRoutes />
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
