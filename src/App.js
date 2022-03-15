import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Profile from "./pages/Profile"
import PrivateRoute from "./components/PrivateRoute";
import Explore from "./pages/Explore"
import Category from "./pages/Category"
import Offers from "./pages/Offers"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import ForgotPassword from "./pages/ForgotPassword"
import CreateListing from "./pages/CreateListing"
import EditListing from "./pages/EditListing"
import Listing from "./pages/Listing"
import Navbar from "./components/Navbar"
import Contact from "./pages/Contact";

function App() {
  return (
	<>
	<Router>
	  <Routes>
		<Route path="/" element={<Explore />} />
		<Route path="/profile" element={<Profile />} />
		<Route path="/profile" element={<PrivateRoute />}>
		  <Route path="/profile" element={<Profile />} />
		</Route>
		<Route path="/offers" element={<Offers />} />
		<Route path="/category/:categoryName" element={<Category />} />
		<Route path="/sign-in" element={<SignIn />} />
		<Route path="/sign-up" element={<SignUp />} />
		<Route path="/forgot-password" element={<ForgotPassword />} />
		<Route path="/create-listing" element={<CreateListing />} />
		<Route path="/edit-listing/:listingId" element={<EditListing />} />
		<Route path="/category/:categoryName/:listingId" element={<Listing />} />
		<Route path="/contact/:landlordId" element={<Contact />} />
	  </Routes>
	  <Navbar />
	</Router>
	<ToastContainer />
	</>
  );
}

export default App;
