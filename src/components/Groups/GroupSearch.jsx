import classes from './GroupSearch.module.css'
import React from 'react';

const GroupSearch = () => {
    return <div>
    <textarea className={classes.area} name="Search" id="" cols="30" rows="2" placeholder='Search...'></textarea>
    <button className={classes.button} onClick={()=>alert("Coming soon...")}>Search</button></div>
}

export default GroupSearch;