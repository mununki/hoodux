import React from "react";
import "./css/reset.css";
import { useHooduxProvider, useHoodux } from "../src/index";

const initState = {
  isSignedIn: false
};

const reducer = (state, action) => {
  switch (action.type) {
    case "auth":
      return { isSignedIn: !state.isSignedIn };
    default:
      throw new Error("Invalid action type");
  }
};

const App = () => {
  const { HooduxProvider } = useHooduxProvider(reducer, initState);
  return (
    <HooduxProvider>
      <Main />
    </HooduxProvider>
  );
};

const Main = () => {
  const { state, dispatch } = useHoodux();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      }}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            marginBottom: "1rem"
          }}>
          {"{"}state.isSignedIn:{" "}
          {state.isSignedIn ? (
            <span style={{ color: "blue" }}>true</span>
          ) : (
            <span style={{ color: "red" }}>false</span>
          )}
          {"}"}
        </div>
        <button
          onClick={() => dispatch({ type: "auth" })}
          style={{
            fontSize: "1rem",
            padding: "0.2rem 0.5rem",
            borderRadius: 3,
            cursor: "pointer"
          }}>
          Hoodux
        </button>
      </div>
    </div>
  );
};

export default App;
