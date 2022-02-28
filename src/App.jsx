import { useEffect } from "react";
import { Welcome } from "./components/Welcome";
import classes from "./App.module.scss";

export const App = () => {
  useEffect(() => {
    console.log("App Mounted!");
  }, []);

  return (
    <div className={classes.container}>
      <Welcome />
    </div>
  );
};
