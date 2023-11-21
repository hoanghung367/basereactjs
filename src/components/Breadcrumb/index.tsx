import { useNavigate } from "react-router-dom";
import styles from "./Breadcrumb.module.scss";
import classNames from 'classnames/bind';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';

const cx = classNames.bind(styles);

const Breadcrumb = () => {
    const navigate = useNavigate()
    return <>
        <div className={cx('breadcrumb')} onClick={() => navigate(-1)} >
            <KeyboardDoubleArrowLeftIcon />
            <span>Trở lại</span>
        </div>
    </>
}
export default Breadcrumb;