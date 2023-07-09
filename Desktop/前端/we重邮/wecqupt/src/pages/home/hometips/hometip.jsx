import "./hometip.css"
const hometip=(props)=>{
    return (<div id="hometip">
    <div id="homepic"><img src={props.pic} id="homeimg"/></div>
    <div id="homedesc">{props.desc}</div>
</div>)
}
export default hometip;