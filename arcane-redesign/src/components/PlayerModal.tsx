import { createPortal } from "react-dom";

function About() {
  return createPortal(
    <>
      <div className={"background-overlay"} onClick={props.onClose}></div>
      <div></div>
    </>,
    document.getElementById("modal")!
  );
}

export default About;
