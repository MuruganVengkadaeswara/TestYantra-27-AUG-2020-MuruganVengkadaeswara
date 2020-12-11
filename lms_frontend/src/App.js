import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AppProvider } from "./components/Context/AppContext";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import LoanApplication from "./components/LoanApplication/LoanApplication";
import AddEmployee from "./components/AddEmployee/AddEmployee";
import AddRole from "./components/AddRole/AddRole";
import Home from "./components/Home/Home";
import EmployeeDashboard from "./components/EmployeeDashboard/EmployeeDashboard";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import CarouselComp from "./components/Carousel/CarouselComp";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import HomeContents from './components/HomeContents/HomeContents'
function App() {
  return (
    <div>
      <Router>
          <AppProvider>
            {/* <Route exact path='/' component={Home}></Route> */}
            <Home/>
            {/* <AddClient/> */}
            {/* <EmployeeDashboard/> */}
            {/* <AdminDashboard/> */}
            {/* <EmployeeDashboard/> */}
          </AppProvider>
      </Router>
    </div>
  );
}

export default App;
