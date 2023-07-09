import "./home.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Hometip from "./hometips/hometip"
import axios from "axios";
function home(props) {
    const homeItem1 = props.homeData1.map((item, index) => <Hometip index={index} key={item.id} id={item.id} pic={item.image} desc={item.desc} />);
    //const homeItem2 = props.homeData2.map((item, index) => <Hometip index={index} key={item.id} id={item.id} pic={item.image} desc={item.desc} />);
    const navigate = useNavigate();
    const [bannerId1, setBannerId1] = useState(null);
    const [bannerId2, setBannerId2] = useState(null);
    const [currentBanner, setCurrentBanner] = useState('banner1');
    const [weeknum, setWeeknum] = useState(null);
    const handlebannerpic = (id1, id2) => {
        setBannerId1(id1);
        setBannerId2(id2);
        // console.log(bannerId1);
        // console.log(bannerId2);
    }
    const [displayState, setDisplayState] = useState({ daily: true, notice: false });
    const [isBoldDaily, setIsBoldDaily] = useState(false);
    const [isBoldNotice, setIsBoldNotice] = useState(false);
    const toggleDisplay = (type) => {
        if (type === 'daily') {
            setDisplayState({ daily: true, notice: false });
            setIsBoldDaily(true);
            setIsBoldNotice(false);
        } else if (type === 'notice') {
            setDisplayState({ daily: false, notice: true });
            setIsBoldNotice(true);
            setIsBoldDaily(false);
        }
    }
    function returnmineHandler() {
        navigate("/mine/");
    }
    const [displayBox, setDisplayBox] = useState('homefunc1');
    const [tipBtn1Color, setTipBtn1Color] = useState('rgb(140, 194, 144)');
    const [tipBtn2Color, setTipBtn2Color] = useState('rgba(128, 128, 128, 0.147)');

    // const formData = new FormData();
    axios({
        method: "get",
        url: "/api/banner",
        // data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
            "traefik": "user",
        },
    }).then(res => {
        const id1 = res.data.data.list[0].id;
        const id2 = res.data.data.list[1].id;
        handlebannerpic(id1, id2);
    }, err => {
        console.log(err)
    });

    axios({
        method: "get",
        url: "/api/time",
        // data: formData,
        headers: {
            "Content-Type": "multipart/form-data",
            "traefik": "jwzx",
        },
    }).then(res => {
        //console.log(res);
    }, err => {
        console.log(err)
    });
    // Add banner rotation effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner(currentBanner === 'banner1' ? 'banner2' : 'banner1');
        }, 3000);
        return () => clearInterval(interval);
    }, [currentBanner]);
    const emptyclasshandler = () => {
        navigate("/emptyclass/")
    }
    const time = new Date();
    const date = time.getDate();//8
    const month = time.getMonth() + 1;//7
    const year = time.getFullYear();//2023
    const day = time.toLocaleString('zh-CN', { weekday: "long" });//星期六
    return (
        <div className="home-bg">
            <div id="homehead">
                We重邮
            </div>
            <div className="hometime">
                <div id="homehorn"> <img src={require("./homepic/horn.png")} id="hornpic" /></div>
                <div id="hometime">今天是<span id="year" className="time">{year}</span>年
                    <span id="month" className="time">{month}</span>月
                    <span id="date" className="time">{date}</span>日，第{weeknum}周{day}</div>
            </div>
            <div id="banner">
                <div id="banner1" style={{ transform: currentBanner === 'banner1' ? 'translateX()' : 'translateX(-100%)', transition: 'transform 1s ease-in-out' }}><img src={"https://minio.cqupt.edu.cn/wecqupt/banner/" + bannerId1} className="banner" /></div>
                <div id="banner2" style={{ transform: currentBanner === 'banner2' ? 'translateX(-100%)' : 'translateX(0))', transition: 'transform 1s ease-in-out' }}><img src={"https://minio.cqupt.edu.cn/wecqupt/banner/" + bannerId2} className="banner" /></div>
            </div>
            <div className="func">
                <div className="homefuc" id="homefunc1" style={{ transform: displayBox === 'homefunc1' ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 0.5s ease-in-out' }} >
                    {homeItem1}
                    <button className="homebtn" id="btn1" onClick={() => { setDisplayBox('homefunc2'); setTipBtn1Color('rgba(128, 128, 128, 0.147)'); setTipBtn2Color('rgb(140, 194, 144)'); }}>
                        <img src={require("../mine/minepic/arrow.png")} id="rarr" /></button></div>
                <div className="homefuc" id="homefunc2" style={{ transform: displayBox === 'homefunc2' ? 'translateX(0)' : 'translateX(100%)', transition: 'transform 0.5s ease-in-out' }} >
                    <button className="homebtn" id="btn2" onClick={() => { setDisplayBox('homefunc1'); setTipBtn1Color('rgb(140, 194, 144)'); setTipBtn2Color('rgba(128, 128, 128, 0.147)'); }}>
                        <img src={require("./homepic/larr.jpg")} id="larr" />
                    </button>
                    <div id="emptyclassdiv">
                        <button id="ecbtn" onClick={emptyclasshandler}><img src={require("./homepic/emptyclass.png")} id="empty-class" />
                        </button>
                        <span id="ecspan" >空闲教室</span>
                    </div>
                    <div id="pemarkdiv"><img src={require("./homepic/pe.png")} id="pe-mark" />
                        <span id="pespan">体育打卡</span></div>
                </div>

            </div>
            <div id="tipbtn">
                <div id="tipbtn1" className="tipbtn" style={{ backgroundColor: tipBtn1Color }}></div>
                <div id="tipbtn2" className="tipbtn" style={{ backgroundColor: tipBtn2Color }}></div>
            </div>
            <div id="board">
                <div id="boardtop">
                    <button className="boardbtn" style={{ fontWeight: isBoldDaily ? 'bold' : 'normal' }} onClick={() => toggleDisplay('daily')}>今日日程</button>
                    <button className="boardbtn" style={{ fontWeight: isBoldNotice ? 'bold' : 'normal' }} onClick={() => toggleDisplay('notice')}>教务公告</button>
                    {displayState.daily && <div id="daily">今日暂无日程</div>}
                    {displayState.notice && <div id="notice">今日公告</div>}
                </div>
            </div>
            <div id="tabbar">
                <div id="timetab">
                    <img src={require("../mine/minepic/timetable.png")} id="timepic" />
                    <p className="tabp">课表</p>
                </div>
                <div id="home"><img src={require("./homepic/home.jpg")} id="homepic" />
                    <p className="tabp" id="hometab">首页</p>
                </div>
                <div id="mine">
                    <button id="minebtn" onClick={returnmineHandler}><img src={require("./homepic/mine.jpg")} id="minepic" /></button>
                    <p className="tabp" id="minep">我的</p>
                </div>
            </div>
        </div>
    );
}
export default home;