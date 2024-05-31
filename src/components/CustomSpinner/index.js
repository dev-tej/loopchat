import PropTypes from "prop-types";
import { Triangle } from "react-loader-spinner";
import "./index.css";

function CustomSpinner({ loading, helperText }) {
  return (
    <div className="custom-spinner-container">
      <Triangle visible={loading} height="80" width="80" color="#000" ariaLabel="triangle-loading" />
      {helperText && <p className="secondary-header">{helperText}</p>}
    </div>
  );
}

export default CustomSpinner;

CustomSpinner.propTypes = {
  loading: PropTypes.bool.isRequired,
  helperText: PropTypes.string,
};
