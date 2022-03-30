import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderHome from "./Component/HeaderHome/HeaderHome";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import BaiTapQuanLyNguoiDung from "./ReactForm/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung";

function App() {
  return (
    <div className="App">
      <BaiTapQuanLyNguoiDung/>
    </div>
    // <BrowserRouter>
    // <HeaderHome/>
    //   <Switch>
    //     <Route exact path={"/home"} component={Home} />
    //     <Route exact path={"/contact"} component={Contact} />
    //     <Route exact path={"/login"} component={Login} />
    //     <Route exact path={"/register"} component={Register} />
    //     <Route exact path={"/About"} component={About} />
    //     <Route exact path={""} component={Home} />
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
