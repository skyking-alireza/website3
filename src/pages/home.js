import React from "react";
import Main from "../component/main";
import Row from "../component/row";
import Requests from "../config/requests";
class Home extends React.Component{
    render() {
        return(
            <div>
                <Main />
                {Requests.map((e,index)=> <Row rowID={index} title={e[0]} fetchurl={e[1]} />)}
            </div>
        )
    }
}
export default Home