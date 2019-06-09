# Hoodux

[![npm version](https://badge.fury.io/js/hoodux.svg)](https://badge.fury.io/js/hoodux)

Hoodux is a helper to replace the React Redux with React hooks.

### [Demo](https://mattdamon108.github.io/hoodux/)

## Usage

### Install

```shell
$ npm install hoodux --save

or

$ yarn add hoodux
```

### API

1. `useHooduxProvider(reducer, initState)`

This is a hook to generate Hoodux Provider which should be placed on the top level of app. Hoodux provider will populate a state and dispatch to the app's components tree.

2. `useHoodux()`

This is a hook to pop a state and dispatch to use in any component in your app.

## Example

```js
import { useHooduxProvider, useHoodux } from "hoodux";

const initState = {
  isSignedIn: false,
  count: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case "auth":
      return { isSignedIn: !state.isSignedIn };
    case "changeCount":
      return { count: action.payload };
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
    <div>
      <button onClick={() => dispatch({ type: "auth" })}>Toggle</button>
      <button onClick={() => dispatch({ type: "changeCount", payload: 5 })}>
        Change count to 5
      </button>
    </div>
  );
};
```

## Next to do

- [ ] Add more types
