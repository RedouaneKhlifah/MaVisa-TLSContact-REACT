import Body1 from "./bodyComponents/Body1";
import Body2 from "./bodyComponents/Body2";
import Body3 from "./bodyComponents/Body3";
import "../style/style.css";

function Body() {
  return (
    <div className="body">
      <Body1 />
      <Body2 />
      <Body3 />
    </div>
  );
}

export default Body;
