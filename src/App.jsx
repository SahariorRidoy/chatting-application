import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import firebaseConfig from "./Authentication/firebase.config";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter(createRoutesFromElements(<Route>
  
  <Route
  path="/" element={<Registration></Registration>}
  />
  <Route
   path="/registration" element={<Registration></Registration>}
  />
  <Route
   path="/login" element={<Login></Login>}
  />
  <Route
   path="/home" element={<Home></Home>}
  />
  <Route
   path="/*" element={<ErrorPage></ErrorPage>}
  />
</Route>));

function App() {
  return (
    <>
    <Toaster />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
