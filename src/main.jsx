import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./routes/root.jsx";
import ErrorPage from "./routes/error-page.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Provider as JotaiProvider } from "jotai";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import HeaderBar from "./components/HeaderBar.jsx";
import Login from "./routes/Login.jsx";
import Logout from "./routes/Logout.jsx";
import Home from "./routes/Home.jsx";
import RequestList from "./routes/RequestList.jsx";
import RequestForm from "./routes/RequestForm.jsx";
import PendingRequests from "./routes/PendingRequests.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <HeaderBar />
        <Home />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "RequestList",
    element: (
      <div>
        <HeaderBar />
        <RequestList />
      </div>
    ),
  },
  {
    path: "RequestForm",
    element: (
      <div>
        <HeaderBar />
        <RequestForm />
      </div>
    ),
  },
  {
    path: "login",
    element: (
      <div>
        <HeaderBar />
        <Login />
      </div>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "logout",
    element: (
      <div>
        <HeaderBar />
        <Logout />
      </div>
    ),
  },
  {
    path: "PendingRequests",
    element: (
      <div>
        <HeaderBar />
        <PendingRequests />
      </div>
    ),
  },
  {
    path: "PendingRequests",
    element: (
      <div>
        <HeaderBar />
        <PendingRequests />
      </div>
    ),
  },
]);

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/" {...props} role={undefined} />
));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <JotaiProvider>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </QueryClientProvider>
    </JotaiProvider>
  </React.StrictMode>
);
