import { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HeaderHome from "./Component/HeaderHome/HeaderHome";
import About from "./pages/About/About";
import AdminIndex from "./pages/Admin/AdminIndex/AdminIndex";
import ToDoApp from "./pages/Axios/ToDoApp/ToDoApp";
import Contact from "./pages/Contact/Contact";
import Detail from "./pages/Detail/Detail";
import DemoHOC from "./pages/HOC/DemoHOC/DemoHOC";
import ModalHOC from "./pages/HOC/DemoHOC/ModalHOC";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import HookUseState from "./pages/ReactHook/HookUseState/HookUseState";
import ReduxHook from "./pages/ReactHook/ReduxHook/ReduxHook";
import ToDoListHook from "./pages/ReactHook/ReduxHook/ToDoListHook/ToDoListHook";
import UseCallbackDemo from "./pages/ReactHook/UseCallback/UseCallbackDemo";
import UseEffect from "./pages/ReactHook/UseEffect/UseEffect";
import UseMemoDemo from "./pages/ReactHook/UseMemo/UseMemoDemo";
import UseMemDemo from "./pages/ReactHook/UseMemo/UseMemoDemo";
import UseRefDemo from "./pages/ReactHook/UseRef/UseRefDemo";
import Register from "./pages/Register/Register";
import BaiTapQuanLyNguoiDung from "./ReactForm/BaiTapQuanLyNguoiDung/BaiTapQuanLyNguoiDung";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";

function App() {
  return (
    // <div className="App">
    //   <BaiTapQuanLyNguoiDung/>
    // </div>
    <BrowserRouter>
      {/* <HeaderHome /> */}
      <ModalHOC />
      <Switch>
        {/* <Route
          exact
          path={"/home"}
          render={(propsRoute) => {
            return (
              <div>
                <Home {...propsRoute} />
              </div>
            );
          }}
        /> */}
        <HomeTemplate path="/home" component={Home} />
        <HomeTemplate path="/about" component={About} />
        <Route exact path={"/contact"} component={Contact} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/register"} component={Register} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/detail/:id"} component={Detail} />
        <Route exact path={"/admin"} component={AdminIndex} />
        <Route exact path={"/hookusestate"} component={HookUseState} />
        <Route exact path={"/todoapp"} component={ToDoApp} />
        <Route exact path={"/useefffect"} component={UseEffect} />
        <Route exact path={"/usecallback"} component={UseCallbackDemo} />
        <Route exact path={"/usememo"} component={UseMemoDemo} />
        <Route exact path={"/useref"} component={UseRefDemo} />
        <Route exact path={"/reduxhook"} component={ReduxHook} />
        <Route exact path={"/todolisthook"} component={ToDoListHook} />
        <Route exact path={"/demohoc"} component={DemoHOC} />

        <Route exact path={""} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
