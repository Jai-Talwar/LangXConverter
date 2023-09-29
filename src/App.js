import "./App.css";
// import About from "./components/About";
import React, { useState } from "react";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [mode, setmode] = useState("light");
  const [modebtn, setmodebtn] = useState("dark");
  const [alert, setalert] = useState(null);
  const [btncol, setbtncol] = useState("primary");

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };
  const myfunc = () => {
    if (mode === "light") {
      setbtncol("dark");

      setmode("dark");
      setmodebtn("light");
      document.body.style.backgroundColor = "grey";
      showAlert("dark mode is enabled", "success");
    } else {
      setbtncol("primary");
      setmode("light");
      setmodebtn("dark");
      document.body.style.backgroundColor = "white";
      showAlert("light mode is enabled", "success");
    }
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Text-Converter"
        aboutText="About Us"
        mode={mode}
        modebtn={modebtn}
        myfunc={myfunc}
      />
      <Alert alert={alert} />
      {/* <div className="container my-3">
          <Textform
            heading="Enter The Text"
            mode={mode}
            modebtn={modebtn}
            showAlert={showAlert}
            btncol={btncol}
          />
        </div> */}
      {/* <Routes>
          <Route
            path="/"
            element={ */}
      <div className="container my-3">
        <Textform
          heading="Enter The Text"
          mode={mode}
          modebtn={modebtn}
          showAlert={showAlert}
          btncol={btncol}
        />
      </div>
      {/* }
          ></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
