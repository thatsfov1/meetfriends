import s from './Header.module.css'
import React, {useState} from 'react';
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {SiReactos} from "react-icons/si";
import {BsBell, BsChatDots, BsHouseDoor, BsSearch} from "react-icons/bs";
import {BiLogIn, FiMoreVertical} from "react-icons/all";


const Header = ({isAuth, login, notifications}) => {

    const [showNotifications, setShowNotifications] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const navigate = useNavigate()

    return <header className={s.container}>
        <div onClick={() => navigate('/')} className={s.logo}>
            <SiReactos color='#ADD9E5' size={30}/>
            <span className={s.logo_text}>MeetFriend</span>
        </div>
        <div onClick={()=> setShowNav(!showNav)} className={s.more}>
            <FiMoreVertical size={25}/>
            {showNav && <div className={s.navbar}>
                <NavLink to='/groups'>
                    Groups
                </NavLink>
                <NavLink to='/profile/26582'>
                    Profile
                </NavLink>
                <NavLink to="/users">
                    Users
                </NavLink>
                <NavLink to="/settings">
                    Settings
                </NavLink>
            </div>}
        </div>
        <div style={{display:"flex" ,gap:10, padding:'10px'}}>
            <div className={s.input_container}>
                <BsSearch className={s.input_icon} size={25} />
                <input placeholder='Start typing to search...' className={s.input}/>
            </div>
            {isAuth && <Link to='/' className={s.icon}>
                <BsHouseDoor size={20} />
            </Link>}
        </div>
        {isAuth ? <div className={s.icons}>
            <Link to='dialogs' className={s.icon}>
                <BsChatDots size={20}/>
            </Link>
            <div className={s.icon} onClick={() => setShowNotifications(!showNotifications)}>
                <BsBell size={20} />
                {showNotifications &&
                    <div className={s.not_container}>
                        <span className={s.not_title}>Notifications</span>
                        {notifications ? notifications : <span className={s.not_none}>No Notifications yet</span>}
                    </div>}
            </div>
            <Link className={s.account_container}  to='/settings'>
                <span className={s.account}>{login}</span>
            </Link>
        </div> : <div>
            <button onClick={() => navigate('/login')} className={s.login}>
                <BiLogIn size={20}/> Log in
            </button>
        </div>}
    </header>;
}


export default Header;