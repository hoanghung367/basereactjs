import { Link } from 'react-router-dom';
import images from '../../../asset/images';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import SideBar from '../../SideBar';
import classNames from 'classnames/bind';
import styles from "./DefaultLayout.module.scss";
import { setAuth } from '../../../redux/authSlice';

const cx = classNames.bind(styles);

function DefaultLayout(props: any) {
    const auth = useSelector((state: RootState) => state.auth);
    const dispath = useDispatch();
    const sigout = () => {
        dispath(setAuth(''))
        localStorage.removeItem('auth')
    }

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('content')}>
                    {props.children}
                    <div className={cx('bottom-padding')}></div>
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
