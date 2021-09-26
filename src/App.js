import { BrowserRouter,Route, Switch } from "react-router-dom";
import AdminHomePage from "./pages/AdminHomePage";
import AdminUserList from "./pages/AdminUserList";
import AdminRegList from "./pages/AdminRegList";
import AdminRegView from "./pages/AdminRegView";
import CustomerHomePage from "./pages/CustomerHomePage";
import CustomerSPView from "./pages/CustomerSPView";
import CustomerWorkProgress from "./pages/CustomerWorkProgress";
import CustomerWorkDetails from "./pages/CustomerWorkDetails";

function App() {
  return (
      <div>
        
        <BrowserRouter>
        <Switch>
          <Route exact path='/AdminHomePage'>
              <AdminHomePage/>
          </Route>
          <Route exact path='/AdminRegList'>
            <AdminRegList/>
          </Route>
          <Route exact path='/AdminUserList'>
            <AdminUserList/>
          </Route>
          <Route exact path='/AdminRegView'>
            <AdminRegView/>
          </Route>
          <Route exact path='/CustomerHomePage'>
              <CustomerHomePage/>
          </Route>
          <Route exact path='/CustomerSPView'>
              <CustomerSPView/>
          </Route>
          <Route exact path='/CustomerWorkProgress'>
              <CustomerWorkProgress/>
          </Route>
          <Route exact path='/CustomerWorkDetails'>
              <CustomerWorkDetails/>
          </Route>
        </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
