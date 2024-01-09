import React from "react";
// import { TextField, MenuItem } from "@material-ui/core";
import { useField, useFormikContext } from "formik";
import { MenuItem, TextField } from "@mui/material";

const selectOptions = [
  { id: true, text: "Yes" },
  { id: false, text: "No" },
];

const SelectWrapper = ({ name, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { value } = evt.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helperText = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {selectOptions.map(({ id, text }) => (
        <MenuItem key={text} value={id}>
          {text}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default SelectWrapper;
