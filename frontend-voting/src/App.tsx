import { useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Landing from "./pages/Landing";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Registration from "./pages/Registration";
import Ballotview from "./pages/Ballotview";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";

//@ts-ignore
import CreateNewPoll from "./pages/CreateNewpoll";
import ForgotPassword from "./pages/ForgotPassword";

import ContactUs from "./pages/ContactUs";

const AuthLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};
const NonAuthLayout = () => {
  return (
    <div className="flex p-1">
      <Sidebar />
      <Outlet />
    </div>
  );
};

function App() {
  const [authCheck, setAuthCheck] = useState<boolean>(false);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="h-screen w-screen absolute -z-10 bg-black-p"></div>
      <div>
        {authCheck && (
          <div className="relative">
            <NavBar />
            <Routes>
              <Route path="/registration" element={<Registration />} />
              <Route path="/ballotview" element={<Ballotview />} />
              {/* <Route path="/home" element={<Home />} /> */}
            </Routes>
          </div>
        )}

        {!authCheck && (
          <div className="relative flex">
            {!["/login", "/signup", "/forgot-password", "/"].includes(
              location.pathname
            ) && <Sidebar show={undefined} onClose={undefined} />}

            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/home" element={<Home />} />
              <Route path="/createnewpoll" element={<CreateNewPoll />} />

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </div>
        )}

        <div></div>

              <Route path="/contact" element={<ContactUs />} />

            </Route>
          ) : (
            <Route element={<NonAuthLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/createnewpoll" element={<CreateNewPoll />} />
            </Route>
          )}
          <Route path="*" element={<PageNotFound />} />
        </Routes>

      </div>
    </>
  );
}

export default App;