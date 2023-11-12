/* eslint-disable react/prop-types */
import "./Input.scss";

const Input = ({
  type,
  className,
  name,
  label,
  id,
  required,
  ariaRequired,
  value,
  onChange,
  min,
  max,
  step,
  maxLength,
}) => {
  return (
    <div className={`formbuilder-text form-group field-${name}`}>
      <label htmlFor={id} className="formbuilder-text-label">
        {label}
        <span className="formbuilder-required">*</span>
      </label>
      <input
        type={type}
        className={className}
        name={name}
        id={id}
        required={required}
        aria-required={ariaRequired}
        value={value}
        onChange={onChange}
        min={type === "number" ? min : null}
        max={type === "number" ? max : null}
        step={type === "number" ? step : null}
        maxLength={type === "text" ? maxLength : null}
      />
    </div>
  );
};

export default Input;
