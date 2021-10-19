import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Blogs from './Components/Blogs/Blogs';
import OurTeam from './Components/OurTeam/OurTeam';
import NotFound from './Components/NotFound/NotFound';
import NavBar from './Components/Home/NavBar';
import ServiceDetails from './Components/Services/ServiceDetails';
import Department from './Components/Department/Department';
import Footer from './Components/Home/Footer';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute';
import ServiceDetail from './Components/Services/ServiceDetails';

function App() {
  return (
    <AuthProvider>


      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/departments">
            <Department></Department>
          </Route>
          <PrivateRoute path="/service/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <Route path="/ourTeam">
            <OurTeam></OurTeam>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>


    </AuthProvider>
  );
}

export default App;
