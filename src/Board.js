import React from "react";
import StickyNote from "./StickyNote";

class Board extends React.Component {

    render () {
        
        return (<div>{
            Array.apply(null, {length: this.props.count}).map((e, i) => <StickyNote index={i} key={i}/>)
           // new Array(this.props.count).map((i, e) => <StickyNote index={i} />)
        } </div>);
    }
}
export default Board;
