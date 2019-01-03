import React, { Component } from "react";
import { Route } from "react-router-dom";
import asyncComponent from "../../helpers/AsyncFunc";

const routes = [
  {
    path: "",
    component: asyncComponent(() => import("../dashboard"))
  },
  {
    path: "paperUploader",
    component: asyncComponent(() => import("../PaperUploader"))
  },
  {
    path: "paperDisplay",
    component: asyncComponent(() => import("../PaperDisplay"))
  },
  {
    path: "paperList",
    component: asyncComponent(() => import("../PaperList/index.js"))
  },
  {
    path: "blankPage",
    component: asyncComponent(() => import("../blankPage"))
  },
  {
    path: "authCheck",
    component: asyncComponent(() => import("../AuthCheck"))
  }
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
