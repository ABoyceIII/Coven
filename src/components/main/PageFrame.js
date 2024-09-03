import Header from "./Header";
import Navbar from "./Navbar";

import "../../css/PageFrame.css";
export default function PageFrame(props) {
  return (
    <div className="PageFrame">
      <Header environment={props.environment} />
      <Navbar environment={props.environment} />
      {props.content}
    </div>
  );
}
