import React from "react";
// import { Button } from '@material-ui/core';
import { useFormikContext } from "formik";
import Button from "@mui/material/Button";
import { alpha } from "@mui/material";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: "contained",

    fullWidth: true,
    onClick: handleSubmit,
  };

  return (
    <Button
      {...configButton}
      sx={{
        bgcolor: "#FD6011",
        "&:hover": {
          bgcolor: alpha("#fe6011", 0.8),
        },
      }}
    >
      {children}
    </Button>
  );
};

export default ButtonWrapper;
