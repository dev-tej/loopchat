import React, { useEffect } from "react";
import PropTypes from "prop-types";
import useInput from "hooks/useInput";
import "./index.css";

const CustomInput = ({
  icon: Icon,
  placeholder,
  initialValue,
  onInputChange,
  ...rest
}) => {
  const inputProps = useInput(initialValue);

  useEffect(() => {
    onInputChange(inputProps.value);
  }, [inputProps.value, onInputChange]);

  return (
    <div className="input-container">
      {Icon && <Icon className="icon" />}
      <input
        type="text"
        placeholder={placeholder}
        {...inputProps}
        {...rest}
        className={Icon ? "custom-input-with-icon" : "custom-input"}
      />
    </div>
  );
};

CustomInput.propTypes = {
  icon: PropTypes.elementType,
  placeholder: PropTypes.string,
  initialValue: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
};

export default CustomInput;
