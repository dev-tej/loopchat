import "./index.css";

function CustomButton({ text, onClick, disabled }) {
  return (
    <div className={"fixed-btn-section"}>
      <button
        className={disabled ? "disabled-custom-btn" : "custom-btn"}
        onClick={onClick}
        disabled={disabled}
      >
        <p>{text}</p>
      </button>
    </div>
  );
}

export default CustomButton;
