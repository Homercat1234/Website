import React from "react";
import "./Button.css";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

function Button({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonPosition,
  disabled,
  ...props
}) {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const checkButtonPostion = buttonPosition ? buttonPosition : "";
  return (
    <button
      className={
        "btn " + checkButtonStyle + " " + checkButtonSize + " " + checkButtonPostion
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
