import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Registration from "./components/Registration";
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(<Route>
  <Route
      path="/"
      element={<Home />}
      />
  <Route
  path="/" element={<Registration></Registration>}
  />
  <Route
   path="/registration" element={<Registration></Registration>}
  />
  <Route
   path="/login" element={<Login></Login>}
  />
</Route>));

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
