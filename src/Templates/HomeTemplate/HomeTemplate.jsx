import React from "react";
import { Route } from "react-router-dom";
import HeaderHome from "../../Component/HeaderHome/HeaderHome";

export default function HomeTemplate(props) {
  return (
    <div>
      <Route
        exact
        path={props.path}
        render={(propsRoute) => {
          return (
            <div>
              <HeaderHome />
              <props.component {...propsRoute} />
            </div>
          );
        }}
      />
    </div>
  );
}
