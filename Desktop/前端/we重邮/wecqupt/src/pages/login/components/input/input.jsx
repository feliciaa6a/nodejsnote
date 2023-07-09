import "./input.css";
import Protocol from "./pro/protocol";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { login } from "../../api/api";
const input = (props) => {
    const [bgColor, setBgColor] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [protocolAccepted, setProtocolAccepted] = useState(false);
    const navigate = useNavigate();
    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    const handleStuInfo = (stuid, stuname, stupro, stucla, stuuni, stucid) => {
        props.onStuInfo({ stuid, stuname, stupro, stucla, stuuni, stucid });
        return { stuid, stuname, stupro, stucla, stuuni, stucid };
    };
    function handleLogin(username, password) {
        if (!protocolAccepted) { // Check if the protocol button has been clicked
            alert("请先接受隐私政策");
            return;
        }
        setBgColor('rgb(111,203,134)');
        const formData = new FormData();
        formData.append("cqupt_id", username);
        formData.append("password", password);
        axios({
            method: "post",
            url: "/api/login",
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
                "traefik": "user",
            },
        }).then(res => {
            console.log(res);
            const stuname = res.data.data.user_info.name;
            const stuid = res.data.data.user_info.student_id;
            const stupro = res.data.data.user_info.profession_name;
            const stucla = res.data.data.user_info.class;
            const stuuni = res.data.data.user_info.unit_name;
            const stucid = res.data.data.user_info.cqupt_id;
            handleStuInfo(stuid, stuname, stupro, stucla, stuuni, stucid);
            navigate('/mine/')
        }, err => {
            console.log(err)
            alert("请输入正确的用户名和密码")
            setBgColor('rgba(183, 183, 183, 0.69)');
        });
    }
    return (
        <div className="input">
            <div className="inputhold">
                <div id="pic1" className="pic"></div>
                <input id="input1" type="txt" placeholder="请输入统一认证码" value={username} onChange={handleUsernameChange}></input>
            </div>
            <div className="inputhold">
                <div id="pic2" className="pic"></div>
                <input id="input2" type="password" placeholder="请输入密码" value={password} onChange={handlePasswordChange}></input>
            </div>
            <Protocol onAccept={() => setProtocolAccepted(true)} />
            <div id="load">
                <button id="loadbtn" style={{ backgroundColor: bgColor }} onClick={() => handleLogin(username, password)}>登录</button>
            </div>
        </div>
    )
}
export default input;