import "./tip.css";
const tips = (props) => {

    return (<div id="tip">
        <div id="tippic"><img src={props.pic} id="tipimg" /></div>
        <div id="desc">{props.desc}</div>
        <div id="tip-arrow"></div>
    </div>)
}
export default tips