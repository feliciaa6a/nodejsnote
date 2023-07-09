import "./profile.css"
import { useNavigate } from "react-router-dom"
const profile = (props) => {
    const navigate = useNavigate();
    function unloadHandler() {
        navigate("/load/")
    }
    function proHandler() {
        navigate("/mine/")
    }
    return (
        <div className="profile-bg">
            <div id="prohead">
                <button id="probtn" onClick={proHandler}><img src={require("./propic/returnarrow.png")} id="rearr" /></button>
                我的
            </div>
            <div id="probody">
                <div id="proava">
                    <p id="prop">{props.stuInfo.stuname}</p>
                </div>
                <div id="prointro">
                    <div id="num" className="protip">学号   <p className="prop">{props.stuInfo.stuid}</p></div>
                    <div id="id" className="protip">统一认证码   <p className="prop">{props.stuInfo.stucid}</p></div>
                    <div id="unit" className="protip">学院   <p className="prop">{props.stuInfo.stuuni}</p></div>
                    <div id="major" className="protip">专业 <p className="prop">{props.stuInfo.stupro}</p></div>
                    <div id="class" className="protip">班级 <p className="prop">{props.stuInfo.stucla}</p></div>
                </div>
                <div id="unload">
                    <button id="unloadbtn" onClick={unloadHandler}>切换绑定</button>
                </div>
            </div>
        </div>
    )
}
export default profile;