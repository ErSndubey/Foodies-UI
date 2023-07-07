import React from "react";
import ReactDOM from "react-dom/client";

// JSX Code ➤ React.creatElement ➤ Object ➤ HTML(DOM)
const Title = ()=> (
  <h1 id="title" key="h5">
    Namaste React.
  </h1>
);

//React Components ( hear we are using Functional component)

const HeaderComponent = () => {
  return ( // for multiple lines '()' is mandatory
    <div>
      {Title()}
      <h1>Namste React Functional component</h1>
      <h1>This is a h1 tag</h1>

    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// passing a element inside the root
root.render(<HeaderComponent/>);
