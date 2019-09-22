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

const getUploadButton = (name, value, onChange) => {
  return (
    <React.Fragment>
      &nbsp;&nbsp;&nbsp;
      <input type="file" id={name} name={name} onChange={onChange} />
    </React.Fragment>
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

const getRadioButton = (name, value, onChange, list) => {
  const options = list.map(obj => {
    return (
      <React.Fragment>
        <input
          type="radio"
          name={name}
          value={obj.value}
          onClick={onChange}
          key={obj.value}
        />
        {obj.label} &nbsp;&nbsp;
      </React.Fragment>
    );
  });
  return (
    <React.Fragment>
      <br />
      {options}
    </React.Fragment>
  );
};

const getRangeInputType = (name, value, onChange, min, max, label) => {
  return (
    <React.Fragment>
      <br />
      <input
        type="range"
        min={min}
        max={max}
        className="slider"
        name={name}
        onChange={onChange}
        value={value}
        step="0.25"
      />
      <p>
        {label}: {value}
      </p>
    </React.Fragment>
  );
};

const InputFieldComponent = ({
  type,
  value,
  error,
  onChange,
  name,
  label,
  list = [],
  min = null,
  max = null
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
  } else if ("upload" === type) {
    inputField = getUploadButton(name, value, onChange);
  } else if ("radio" === type) {
    inputField = getRadioButton(name, value, onChange, list);
  } else if ("range" === type) {
    inputField = getRangeInputType(name, value, onChange, min, max, label);
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
