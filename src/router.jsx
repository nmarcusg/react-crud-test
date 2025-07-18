import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';

export const router  = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/login", element: <Login />},
    {path: "/signup", element: <Signup />},
    {path: "/dashboard", element: <Dashboard />}
]);