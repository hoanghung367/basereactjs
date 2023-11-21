import { Box } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import AssistantIcon from '@mui/icons-material/Assistant';
import PersonIcon from '@mui/icons-material/Person';
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import classNames from 'classnames/bind';
import styles from "./SideBar.module.scss";
const cx = classNames.bind(styles);

const SideBar = () => {
    const menu = [
        { name: 'Home', path: '/', icon: HomeRoundedIcon },
        { name: 'Learn', path: '/learn', icon: LightbulbIcon },
        { name: 'Chat', path: '/chat', icon: AssistantIcon },
        { name: 'Profile', path: '/profile', icon: PersonIcon },
    ]
    const { pathname } = useLocation();
    const [active, setActive] = useState(0)

    return <>
        <Box className={cx('box-icon-add')}>
            <AddIcon className={cx('addIcon')} />
        </Box>
        <Box className={cx('sidebar-list')}>
            {menu.map((item, index) => {
                const Icon = item.icon ?? HomeRoundedIcon
                return (
                    <Link onClick={() => setActive(index)} key={index} className={cx('menu-item')}
                        to={item.path} style={item.path === pathname ? { background: '#e8ebed' } : {}}>
                        <Icon className={cx('icon')} style={index === active ? { color: '#000' } : {}} />
                        <span className={cx('link')}>{item.name}</span>
                    </Link>
                )
            }
            )}
        </Box>
    </>
}

export default SideBar;