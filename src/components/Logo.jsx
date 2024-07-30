// components
import {NavLink} from 'react-router-dom';

// hooks
import {useTheme} from '../contexts/themeContext';

// utils
import {memo} from 'react';

// assets
import logo from '../assets/logo.png';

const Logo = ({imgClass, textClass}) => {
    const {theme} = useTheme();

    return (
        <NavLink className="logo" to="/">
            <span className={`logo_img relative ${imgClass || ''}`}>
                <img src={logo} alt="ShopPoint" />
                {/* <img className={`absolute top-0 left-0 ${theme === 'light' ? 'hidden' : ''}`}
                     src={dark}
                     alt="ShopPoint" /> */}
            </span>
            <h4 className={`logo_text ${textClass || ''}`}>VHT</h4>
        </NavLink>
    )
}

export default memo(Logo)