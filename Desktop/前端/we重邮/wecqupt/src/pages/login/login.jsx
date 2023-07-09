import "./login.css";
import Input from "./components/input/input";
const login = (props) => {
    const handleStuInfo = (stuinfo) => {
        props.onStuInfo({stuinfo});
        console.log(stuinfo);
        return {stuinfo};
    };
    return (
        <div className="login-bg">
            <Input onStuInfo={handleStuInfo}/>
        </div>
    )
}
export default login;
