import "./mine.css";
import Tips from "./components/tips/tip";
import { useNavigate } from 'react-router-dom';
function mine(props) {
    const tipItem = props.tipsData.map((item, index) => <Tips index={index} key={item.id} id={item.id} pic={item.Image} desc={item.desc} />);
    const navigate = useNavigate();
    function moreinfoHandler() {
        navigate('/profile/')
    };
    function returnhomeHandler() {
        navigate("/home/")
    }
    //console.log(props.stuInfo);
    return (
        <div className="mine-bg">
            <div id="self-info">
                <div id="avatar"><img src={require("../mine/minepic/avatar.jpg")} id="avapic" /></div>
                <div id="self-intro">{props.stuInfo.stuname}<p id="stu-num">{props.stuInfo.stuid}</p></div>
                <button id="more-info" onClick={moreinfoHandler}>详情</button>
                <div id="arrow"></div>
            </div>
            <div id="morefunc">
                {tipItem}
            </div>
            <div id="tabbar">
                <div id="timetab">
                    <img src={require("./minepic/timetable.png")} className="tabpic" />
                    <p className="tabp">课表</p>
                </div>
                <div id="home"><button id="homebtn" onClick={returnhomeHandler}> <img src={require("./minepic/home.png")} className="tabpic" /></button>

                    <p className="tabp">首页</p>
                </div>
                <div id="mine">
                    <img src={require("./minepic/mine.png")} className="tabpic" />
                    <p className="tabp" id="minetab">我的</p>
                </div>
            </div>
        </div>
    )
}
export default mine;