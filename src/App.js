import { Route } from "react-router-dom";
import { routes } from "./routes";

export const App = () => {
  return (
    <div>
      {routes.map((item, index) => (
        <Route
          key={index}
          path={item.path}
          exact={item.exact}
          children={<item.page />}
        />
      ))}
    </div>
  );
};
