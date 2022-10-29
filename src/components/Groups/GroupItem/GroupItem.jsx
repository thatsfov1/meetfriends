import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./../Groups.module.css";

const GroupItem = (props) => {
    
    let path = /groups/ + props.id;
    return <div className={classes.group + ' ' + classes.active}>
        <div className={classes.avatar}>
            <img src={props.avatar} />

        </div>
        <NavLink to={path}  >{props.name}</NavLink>
        <div className={classes.info}>
            {props.info}
        </div>
        
        {props.followed ? <button onClick={()=>{props.unfollow(props.id)}} >UnFollow</button> : <button onClick={()=>{props.follow(props.id)}} >Follow</button>}
        
  
    </div>
}



export default GroupItem;