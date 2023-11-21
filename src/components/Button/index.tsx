import React, { MouseEventHandler } from "react";
import classNames from 'classnames/bind';
import styles from "./Button.module.scss";
import { Button } from 'antd';
import { CSSProperties } from "@mui/material/styles/createMixins";
const cx = classNames.bind(styles);

interface CustomButtonProps {
  type: 'primary' | 'default' | 'dashed' | 'link' | 'text' | undefined;
  text: string;
  style?: CSSProperties | undefined;
  onClick?: MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  className?: string | string[];
  icon?: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({ type, text, onClick, disabled, style, className, icon }) => {
  return (
    <Button icon={icon} className={cx(className)} style={style} type={type} onClick={onClick} disabled={disabled}>
      {text}
    </Button>
  );
};

export default CustomButton;
