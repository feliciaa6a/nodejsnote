import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Home from '../src/pages/home/home';
import LogIn from '../src/pages/login/login';
import Mine from '../src/pages/mine/mine';
import Profile from './pages/profile/profile';
import Emptyclass from './pages/emptyclass/emptyclass';

function App() {
    const tipsData = [{
        id: '1',
        Image: require("./pages/mine/components/tips/tippic/onlineserve.png"),
        desc: "在线客服"
    },
    {
        id: '2',
        Image: require("./pages/mine/components/tips/tippic/feedback.png"),
        desc: "问题反馈"
    },
    {
        id: '3',
        Image: require("./pages/mine/components/tips/tippic/versionlog.png"),
        desc: "版本日志"
    },
    {
        id: '4',
        Image: require("./pages/mine/components/tips/tippic/prointro.png"),
        desc: "产品介绍"
    },
    {
        id: '5',
        Image: require("./pages/mine/components/tips/tippic/team.png"),
        desc: "开发团队"
    },
    {
        id: '6',
        Image: require("./pages/mine/components/tips/tippic/setting.png"),
        desc: "系统设置"
    },]
    const homeData1 = [
        {
            id: "1",
            image: require("./pages/home/homepic/news.png"),
            desc: "校园资讯"
        },
        {
            id: "2",
            image: require("./pages/home/homepic/tt.jpg"),
            desc: "课表查询"
        },
        {
            id: "3",
            image: require("./pages/home/homepic/map.png"),
            desc: "重邮地图"
        },
        {
            id: "4",
            image: require("./pages/home/homepic/book.jpg"),
            desc: "图书查询"
        },
        {
            id: "5",
            image: require("./pages/home/homepic/cal.png"),
            desc: "重邮校历"
        },
        {
            id: "6",
            image: require("./pages/home/homepic/elec.png"),
            desc: "电费查询"
        },
        {
            id: "7",
            image: require("./pages/home/homepic/exam.png"),
            desc: "考试安排"
        },
        {
            id: "8",
            image: require("./pages/home/homepic/lf.png"),
            desc: "失物招领"
        }]
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [stuInfo, setStuInfo] = useState({ stuid: '', stuname: '', stucid: '', stupro: '', stuuni: '', stucla: '' });
    const handleStuInfo = (data) => {
        // console.log(data.stuinfo.stuid);
        // console.log(data.stuinfo.stuname);
        setStuInfo({ stucid: data.stuinfo.stucid, stuid: data.stuinfo.stuid, stuname: data.stuinfo.stuname, stupro: data.stuinfo.stupro, stuuni: data.stuinfo.stuuni, stucla: data.stuinfo.stucla, });
    };
    const handleLogin = () => {
        //setIsLoggedIn(true);
        if (isLoggedIn) {
            navigate("./home")
        }
    }
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route path="home" element={isLoggedIn ? <Home /> : <Navigate to="/load" />} ></Route> */}
                <Route path="/load" element={<LogIn onLogin={handleLogin} onStuInfo={handleStuInfo} />} ></Route>
                <Route path="/mine" element={<Mine tipsData={tipsData} stuInfo={stuInfo} />} ></Route>
                <Route path="/profile" element={<Profile stuInfo={stuInfo} />} ></Route>
                <Route path="/emptyclass" element={<Emptyclass />} ></Route>
                <Route path="/home" element={<Home homeData1={homeData1} />} ></Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App;
