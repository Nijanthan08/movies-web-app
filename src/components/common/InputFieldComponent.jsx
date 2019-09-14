import React from "react";
import YearPicker from "react-year-picker";

const getTextBox = (type, name, value, onChange) => {
  return (
    <input
      className="form-control"
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

const getTextArea = (name, value, onChange) => {
  return (
    <textarea
      className="form-control"
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      width="100%"
      rows="3"
    />
  );
};

const getDropdownField = (name, value, list, onChange) => {
  return (
    <select id={name} name={name} onChange={onChange} className="form-control">
      <option value=""></option>
      {list.map(obj => {
        return (
          <option key={obj.id} value={obj.id}>
            {obj.name}
          </option>
        );
      })}
    </select>
  );
};

const getYearlyCalendar = (name, value, onChange) => {
  const onDateSelect = year => {
    const element = {
      currentTarget: {
        id: name,
        value: year,
        name
      }
    };
    onChange(element);
  };
  return (
    <YearPicker id={name} name={name} onChange={onDateSelect} width="100%" />
  );
};

const InputFieldComponent = ({
  type,
  value,
  error,
  onChange,
  name,
  label,
  list = []
}) => {
  let inputField;

  if ("text" === type) {
    inputField = getTextBox(type, name, value, onChange);
  } else if ("drop-down" === type) {
    inputField = getDropdownField(name, value, list, onChange);
  } else if ("textarea" === type) {
    inputField = getTextArea(name, value, onChange);
  } else if ("yearly-calendar" === type) {
    inputField = getYearlyCalendar(name, value, onChange);
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {inputField}
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default InputFieldComponent;
