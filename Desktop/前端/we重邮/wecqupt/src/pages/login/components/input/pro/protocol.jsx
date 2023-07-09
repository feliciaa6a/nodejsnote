import "./protocol.css";
import { useState } from "react";
const protocol = (props) => {
  //const [buttonClicked, setButtonClicked] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const [bgColor, setBgColor] = useState('#fff');

  function handleClick() {
    setBgColor('rgb(111,203,134)');
    setButtonText('✔');
    //setButtonClicked(true);
    props.onAccept();
  }
  return (<div id="privateWord" >
    <button id="button" style={{ backgroundColor: bgColor }} onClick={handleClick}>{buttonText}</button>
    我已阅读并同意<p id="privace">隐私政策</p>
  </div>)
}
export default protocol;