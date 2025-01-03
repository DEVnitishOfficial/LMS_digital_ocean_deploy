import { Route,Routes } from "react-router-dom"

import RequireAuth from "./components/Auth/RequireAuth"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Course/Contact"
import CourseDescription from "./pages/Course/CourseDescription"
import CourseList from "./pages/Course/CourseList"
import CreateCourse from "./pages/Course/CreateCourse"
import AddLecture from "./pages/Dashboard/AddLecture"
import AdminDashboard from "./pages/Dashboard/AdminDashboard"
import DisplayLecture from "./pages/Dashboard/DisplayLecture"
import Denied from "./pages/Denied"
import HomePage from "./pages/HomePage"
import AdmitCard from "./pages/Ignou/AdmitCard"
import LogIn from "./pages/LogIn"
import NotFound from "./pages/NotFound"
import CheckOut from "./pages/Payment/CheckOut"
import CheckoutFailure from "./pages/Payment/CheckoutFailure"
import CheckoutSuccess from "./pages/Payment/CheckoutSuccess"
import SignUp from "./pages/SignUp"
import EditProfile from "./pages/User/EditProfile"
import UserProfile from "./pages/User/userProfile"

function App() {

  return (
    <>
    <Routes >
      <Route path="/" element={<HomePage/>}> </Route>
      <Route path="/about" element={<AboutUs/>}> </Route>
      <Route path="/signup" element={<SignUp/>}> </Route>
      <Route path="/login" element={<LogIn/>}> </Route>
      <Route path="/contact" element={<Contact/>}> </Route>
      <Route path="/denied" element={<Denied/>}> </Route>
      <Route path="/admit-card" element={<AdmitCard/>}> </Route>

      <Route path="/course/description" element={<CourseDescription />}></Route>

      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
      <Route path="/course/create" element={<CreateCourse />}> </Route>
      <Route path="/course/addlecture" element={<AddLecture />}> </Route>
      <Route path="/admin/dashboard" element={<AdminDashboard />}> </Route>
      </Route>

      <Route element={<RequireAuth allowedRoles={["ADMIN","USER"]} />}>
      <Route path="/user/profile" element={<UserProfile />} />
      <Route path="/user/editProfile" element={<EditProfile />} />
      <Route path="/checkout" element={<CheckOut />}/>
      <Route path="/checkout/success" element={<CheckoutSuccess/>}/>
      <Route path="/checkout/fail" element={<CheckoutFailure/>}/>
      <Route path="/course/displaylectures" element={<DisplayLecture/>}/>
      </Route>

      <Route path="/courses" element={<CourseList/>}> </Route>



      <Route path="*" element={<NotFound />}></Route>
    </Routes>
    </>
  )
}

export default App
