import "./emptyclass.css"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useState } from 'react';

const emptyclass = () => {
    const navigate = useNavigate();
    const [activeBuilding, setActiveBuilding] = useState(null);
    const [activeTime, setActiveTime] = useState([]);
    const [buttonStyle, setButtonStyle] = useState({});
    const [activeDay, setActiveDay] = useState(null);
    const [activeWeek, setActiveWeek] = useState(null);
    const [building_num, setBuildingNum] = useState(null);
    const [class_nums, setClassNums] = useState([]);
    const [weekday, setWeekday] = useState(null);
    const [week_num, setWeekNum] = useState(null);
    const [b2f1, setB2f1] = useState([]);
    const [b2f2, setB2f2] = useState([]);
    const [b2f3, setB2f3] = useState([]);
    const [b2f4, setB2f4] = useState([]);
    const [b2f5, setB2f5] = useState([]);
    const [b3f1, setB3f1] = useState([]);
    const [b3f2, setB3f2] = useState([]);
    const [b3f3, setB3f3] = useState([]);
    const [b3f4, setB3f4] = useState([]);
    const [b3f5, setB3f5] = useState([]);
    const [b4f1, setB4f1] = useState([]);
    const [b4f2, setB4f2] = useState([]);
    const [b4f3, setB4f3] = useState([]);
    const [b4f4, setB4f4] = useState([]);
    const [b4f5, setB4f5] = useState([]);
    const [b4f6, setB4f6] = useState([]);
    const [b5f1, setB5f1] = useState([]);
    const [b5f2, setB5f2] = useState([]);
    const [b5f3, setB5f3] = useState([]);
    const [b5f4, setB5f4] = useState([]);
    const [b8f1, setB8f1] = useState([]);
    const [b8f2, setB8f2] = useState([]);

    function handleTimeClick(timeId) {
        setActiveTime(prevTimes => {
            if (prevTimes.includes(timeId)) {
                return prevTimes.filter(id => id !== timeId);
            } else {
                return [...prevTimes, timeId];
            }
        });
        setButtonStyle({
            backgroundColor: 'rgb(246,195,66)',
            color: 'white'
        });
    }
    function handleDayClick(dayId) {
        setActiveDay(dayId);
        setButtonStyle({
            backgroundColor: 'rgb(246,195,66)',
            color: 'white'
        });
    }
    function handleWeekClick(weekId) {
        setActiveWeek(weekId);
        setButtonStyle({
            backgroundColor: 'rgb(246,195,66)',
            color: 'white'
        });
    }
    function emptyHandler() {
        navigate("/home/")
    }
    function handleBuildingClick(buildingId) {
        setActiveBuilding(buildingId);
        setButtonStyle({
            backgroundColor: 'rgb(246,195,66)',
            color: 'white'
        });
    }
    function getemptyInfo(floor_rooms) {
        for (let i = 0; i < floor_rooms.length; i++) {
            if (activeBuilding === 'build2') {
                if (floor_rooms[i].floor === 1) setB2f1(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 2) setB2f2(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 3) setB2f3(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 4) setB2f4(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 5) setB2f5(floor_rooms[i].room.join(' '));
            } else if (activeBuilding === 'build3') {
                if (floor_rooms[i].floor === 1) setB3f1(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 2) setB3f2(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 3) setB3f3(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 4) setB3f4(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 5) setB3f5(floor_rooms[i].room.join(' '));
            } else if (activeBuilding === 'build4') {
                if (floor_rooms[i].floor === 1) setB4f1(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 2) setB4f2(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 3) setB4f3(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 4) setB4f4(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 5) setB4f5(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 6) setB4f6(floor_rooms[i].room.join(' '));
            } else if (activeBuilding === 'build5') {
                if (floor_rooms[i].floor === 1) setB5f1(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 2) setB5f2(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 3) setB5f3(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 4) setB5f4(floor_rooms[i].room.join(' '));
            } else if (activeBuilding === 'build8') {
                if (floor_rooms[i].floor === 1) setB8f1(floor_rooms[i].room.join(' '));
                else if (floor_rooms[i].floor === 2) setB8f2(floor_rooms[i].room.join(' '));
            }
        }
        return (floor_rooms)
    }

    function getemptyHandler(week_num, weekday, building_num, class_nums) {
        const class_nums_string = JSON.stringify(class_nums);
        axios({
            method: "get",
            url: '/api/empty_room',
            headers: {
                "Content-Type": 'application/form-data',
                "traefik": "jwzx",
            },
            params: {
                week_num,
                weekday,
                building_num,
                class_nums: class_nums_string
            }
        }).then(res => {
            //console.log(res);
            // console.log(res.data.data.room_list.floor_rooms[0]);
            const floor_rooms = res.data.data.room_list.floor_rooms;
            getemptyInfo(floor_rooms);
            // console.log(class_nums);
        }, err => {
            console.log(err)
        });
    }
    return (
        <div id="empty-bg" >
            <div id="emphead">
                <button id="empbtn" onClick={emptyHandler}><img src={require("./emptypic/returnarrow.png")} id="emparr" /></button>
                空闲教室
            </div>
            {activeBuilding && <div className="emptychoice" id={activeBuilding}>
                {Array.from({ length: activeBuilding === 'build4' ? 6 : activeBuilding === 'build5' ? 4 : 2 }, (_, i) => (
                    <div className="floordiv" id={`f${i + 1}div`}>
                        <img src={i < 5 ? require(`./emptypic/${i + 1}f.jpg`) : require(`./emptypic/5f.jpg`)} id={`f${i + 1}`} className="buildingpic" />
                        <div className="classNum">{eval(`b${activeBuilding.slice(-1)}f${i + 1}`)}</div>
                    </div>
                ))}
            </div>}
            <div id="classchoice">
                <div className="choicediv">
                    <div className="btndiv"><button id="btnbuild2" className="buildingbtn" onClick={() => { handleBuildingClick('build2'); setBuildingNum(2); }} style={activeBuilding === 'build2' ? buttonStyle : {}}>二教</button></div>
                    <div className="btndiv"><button id="btnbuild3" className="buildingbtn" onClick={() => { handleBuildingClick('build3'); setBuildingNum(3); }} style={activeBuilding === 'build3' ? buttonStyle : {}}>三教</button></div>
                    <div className="btndiv"><button id="btnbuild4" className="buildingbtn" onClick={() => { handleBuildingClick('build4'); setBuildingNum(4); }} style={activeBuilding === 'build4' ? buttonStyle : {}}>四教</button></div>
                    <div className="btndiv"><button id="btnbuild5" className="buildingbtn" onClick={() => { handleBuildingClick('build5'); setBuildingNum(5); }} style={activeBuilding === 'build5' ? buttonStyle : {}}>五教</button></div>
                    <div className="btndiv"><button id="btnbuild8" className="buildingbtn" onClick={() => { handleBuildingClick('build8'); setBuildingNum(8); }} style={activeBuilding === 'build8' ? buttonStyle : {}}>八教</button></div>
                    <div className="btndiv"><button id="btnbuild8" className="buildingbtn" onClick={() => handleBuildingClick('build8')} style={activeBuilding === 'build8' ? buttonStyle : {}}>八教</button></div>
                </div>
                <div className="choicediv">
                    <div className="btndiv"><button id="btn12" className="buildingbtn" onClick={() => { handleTimeClick('btn12'); if (!activeTime.includes('btn12')) { setClassNums(prevNums => [...prevNums, 1].sort((a, b) => a - b)); } else { setClassNums(prevNums => prevNums.filter(num => num !== 1)); } }} style={activeTime.includes('btn12') ? buttonStyle : {}}>1-2节</button></div>
                    <div className="btndiv"><button id="btn34" className="buildingbtn" onClick={() => { handleTimeClick('btn34'); if (!activeTime.includes('btn34')) { setClassNums(prevNums => [...prevNums, 2].sort((a, b) => a - b)); } else { setClassNums(prevNums => prevNums.filter(num => num !== 2)); } }} style={activeTime.includes('btn34') ? buttonStyle : {}}>3-4节</button></div>
                    <div className="btndiv"><button id="btn56" className="buildingbtn" onClick={() => { handleTimeClick('btn56'); if (!activeTime.includes('btn56')) { setClassNums(prevNums => [...prevNums, 3].sort((a, b) => a - b)); } else { setClassNums(prevNums => prevNums.filter(num => num !== 3)); } }} style={activeTime.includes('btn56') ? buttonStyle : {}}>5-6节</button></div>
                    <div className="btndiv"><button id="btn78" className="buildingbtn" onClick={() => { handleTimeClick('btn78'); if (!activeTime.includes('btn78')) { setClassNums(prevNums => [...prevNums, 4].sort((a, b) => a - b)); } else { setClassNums(prevNums => prevNums.filter(num => num !== 4)); } }} style={activeTime.includes('btn78') ? buttonStyle : {}}>7-8节</button></div>
                    <div className="btndiv"><button id="btn910" className="buildingbtn" onClick={() => { handleTimeClick('btn910'); if (!activeTime.includes('btn910')) { setClassNums(prevNums => [...prevNums, 5].sort((a, b) => a - b)); } else { setClassNums(prevNums => prevNums.filter(num => num !== 5)); } }} style={activeTime.includes('btn910') ? buttonStyle : {}}>9-10节</button></div>
                    <div className="btndiv"><button id="btn1112" className="buildingbtn" onClick={() => { handleTimeClick('btn1112'); if (!activeTime.includes('btn1112')) { setClassNums(prevNums => [...prevNums, 6].sort((a, b) => a - b)); } else { setClassNums(prevNums => prevNums.filter(num => num !== 6)); } }} style={activeTime.includes('btn1112') ? buttonStyle : {}}>11-12节</button></div>
                </div>
                <div className="choicediv">
                    <div className="btndiv"><button id="mon" className="buildingbtn" onClick={() => { handleDayClick('mon'); setWeekday(1); }} style={activeDay === 'mon' ? buttonStyle : {}}>周一</button></div>
                    <div className="btndiv"><button id="tes" className="buildingbtn" onClick={() => { handleDayClick('tes'); setWeekday(2); }} style={activeDay === 'tes' ? buttonStyle : {}}>周二</button></div>
                    <div className="btndiv"><button id="wed" className="buildingbtn" onClick={() => { handleDayClick('wed'); setWeekday(3); }} style={activeDay === 'wed' ? buttonStyle : {}}>周三</button></div>
                    <div className="btndiv"><button id="thr" className="buildingbtn" onClick={() => { handleDayClick('thr'); setWeekday(4); }} style={activeDay === 'thr' ? buttonStyle : {}}>周四</button></div>
                    <div className="btndiv"><button id="fri" className="buildingbtn" onClick={() => { handleDayClick('fri'); setWeekday(5); }} style={activeDay === 'fri' ? buttonStyle : {}}>周五</button></div>
                    <div className="btndiv"><button id="sat" className="buildingbtn" onClick={() => { handleDayClick('sat'); setWeekday(6); }} style={activeDay === 'sat' ? buttonStyle : {}}>周六</button></div>
                    <div className="btndiv"><button id="sun" className="buildingbtn" onClick={() => { handleDayClick('sun'); setWeekday(7); }} style={activeDay === 'sun' ? buttonStyle : {}}>周天</button></div>
                </div>
                <div className="choicediv">
                    <div className="btndiv"><button id="week15" className="weekbtn" onClick={() => { handleWeekClick('week15'); setWeekNum(15); }} style={activeWeek === 'week15' ? buttonStyle : {}}>第十五周</button></div>
                    <div className="btndiv"><button id="week16" className="weekbtn" onClick={() => { handleWeekClick('week16'); setWeekNum(16); }} style={activeWeek === 'week16' ? buttonStyle : {}}>第十六周</button></div>
                    <div className="btndiv"><button id="week17" className="weekbtn" onClick={() => { handleWeekClick('week17'); setWeekNum(17); }} style={activeWeek === 'week17' ? buttonStyle : {}}>第十七周</button></div>
                    <div className="btndiv"><button id="week18" className="weekbtn" onClick={() => { handleWeekClick('week18'); setWeekNum(18); }} style={activeWeek === 'week18' ? buttonStyle : {}}>第十八周</button></div>
                    <div className="btndiv"><button id="week19" className="weekbtn" onClick={() => { handleWeekClick('week19'); setWeekNum(19); }} style={activeWeek === 'week19' ? buttonStyle : {}}>第十九周</button></div>
                    <div className="btndiv"><button id="week20" className="weekbtn" onClick={() => { handleWeekClick('week20'); setWeekNum(20); }} style={activeWeek === 'week20' ? buttonStyle : {}}>第二十周</button></div>
                </div>
            </div>{building_num && class_nums.length > 0 && weekday && week_num && getemptyHandler(week_num, weekday, building_num, class_nums)}
        </div>)
}
export default emptyclass;