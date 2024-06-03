// import { Volume1 } from "lucide-react";
import React, { useEffect, useState } from "react";

function Translation(props) {
  const [to, setto] = useState("Hindi");
  const [text, settext] = useState("");
  const [targettext, settargettext] = useState("");
  // const [audio, setaudio] = useState("");
  const handleonchange = (e) => {
    settext(e.target.value);
    settargettext("");
    translatefunction();
  };
  useEffect(() => {
    translatefunction();
  }, [to]);
  async function translatefunction() {
    const y = {
      text: text,
      lang: to,
    };

    try {
      const x = await fetch("http://localhost:9000/dotranslate", {
        method: "POST",
        // mode: "cors",
        // mod: "no-cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(y),
      });
      const parsedData = await x.json();
      settargettext(parsedData.data.translation_text);
    } catch (error) {
      console.error(error);
    }
  }
  async function textToSpeech() {
    const inputObj = {
      input: text,
    };

    try {
      const response = await fetch("http://localhost:9000/audio", {
        method: "POST",
        // mode: "cors",
        // mod: "no-cors",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(inputObj),
      });
      // const parsedData = await response.arrayBuffer();
      const parsedData = await response.blob();
      // const blob = new Blob([parsedData.result], {
      //   type: "audio/mpeg",
      // });
      // const blobUrl = URL.createObjectURL(blob);
      // setaudio(blobUrl);

      console.log(parsedData);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      <div
        className="main"
        style={{
          marginLeft: "8rem",
          marginRight: "8rem",
          marginTop: "4rem",
        }}
      >
        <div
          className=" d-flex"
          style={{ borderBottom: "1px solid #ccc", height: "3rem" }}
        >
          <div className="A1" style={{ width: "50vw" }}>
            <button className="button-86"> English</button>
          </div>
          <div className="A2" style={{ width: "50vw" }}>
            <button
              className=" dropdown-toggle button-85"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {to}
            </button>
            <ul className="dropdown-menu dropdown-menu-secondary">
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setto("Chinese");
                  }}
                >
                  Chinese
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setto("German");
                  }}
                >
                  German
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setto("Japanese");
                  }}
                >
                  Japanese
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setto("Hindi");
                  }}
                >
                  Hindi
                </button>
              </li>
              <li>
                <button
                  className="dropdown-item"
                  onClick={() => {
                    setto("Russian");
                  }}
                >
                  Russian
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex">
          <div
            className="B"
            style={{
              borderRight: "1px solid #ccc",
              width: "50vw",
              height: "35vh",
            }}
          >
            <textarea
              className="form-control myBox"
              style={{ height: "100%", border: "none" }}
              onChange={handleonchange}
              value={text}
              placeholder="enter text here"
              // style={{
              //   backgroundColor: props.mode === "dark" ? "grey" : "white",
              //   color: props.mode === "light" ? "black" : "white",

              // }}
            ></textarea>
          </div>
          <div className="C" style={{ width: "50vw" }}>
            <textarea
              className="form-control myBox"
              style={{ height: "100%", border: "none" }}
              // onChange={handleonchange}
              value={targettext}
              placeholder="Translated text"
              // style={{
              //   backgroundColor: props.mode === "dark" ? "grey" : "white",
              //   color: props.mode === "light" ? "black" : "white",
              // }}
            ></textarea>
          </div>
        </div>
      </div>
      <div
        className="my-3"
        style={{
          marginLeft: "8rem",
          marginRight: "8rem",
          marginTop: "4rem",
        }}
      >
        {/* <button
          className={`btn btn-light`}
          // style={{}}
          onClick={translatefunction}
        >
          Translate
        </button> */}
        {/* <button className={"btn btn-light"} onClick={textToSpeech}>
          <Volume1 />
        </button>
        <audio id="speech" controls src={audio}></audio> */}
      </div>
    </>

    //     <button className={`button-85`} style={{}} onClick={translatefunction}>
    //       Translate
    //     </button>
    //     <button className={"button-85"} onClick={textToSpeech}>
    //       Audio
    //     </button>
    //   </div>

    // </div>
  );
}

export default Translation;
