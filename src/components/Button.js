import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];
const STICK = ["btn--stick"];

function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  stick,
  disabled,
  ...props
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkStick = STICK.includes(stick) ? stick : STICK[0];
  return (
    <button
      className={
        "btn " + checkButtonStyle + " " + checkStick + " " + checkButtonSize
      }
      type={type}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
