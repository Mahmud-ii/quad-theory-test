import React, { useEffect, useState } from "react";
import { MenuItem } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Icon from "@mui/material/Icon";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../store/slices/modalSlice";
import { addItem } from "../store/slices/cardSlice";
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import SelectWrapper from "./FormsUI/Select";
import TextfieldWrapper from "./FormsUI/Textfield";
import SelectWrapper from "./FormsUI/Select";
import ButtonWrapper from "./FormsUI/Button";
const countries = [
  {
    value: "USA",
    label: "USA",
  },
  {
    value: "EUR",
    label: "EUR",
  },
  {
    value: "BTC",
    label: "BTC",
  },
  {
    value: "JPY",
    label: "JPY",
  },
];
const FormModal = (props) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.modal);

  const INITIAL_FORM_STATE = {
    imageUrl: "",
    popular: true,
    recommended: true,
    price: 0,
    name: "",
  };

  const FORM_VALIDATION = Yup.object().shape({
    imageUrl: Yup.string().required("Required"),
    popular: Yup.boolean().required(
      "The popularity category must be selected."
    ),
    recommended: Yup.boolean().required(
      "The recommended category must be selected."
    ),
    price: Yup.number()
      .integer()
      .typeError("Please enter a valid number")
      .required("Required"),
    name: Yup.string().required("Required"),
  });

  return (
    <Dialog fullWidth maxWidth="sm" open={isOpen}>
      <DialogContent>
        <Grid container>
          <Grid item xs={12}>
            <Grid container direction="row">
              <Grid item xs={8}>
                <Typography variant="h5">Add a new product</Typography>
              </Grid>

              <Grid item xs={4} align="right">
                <IconButton
                  edge="start"
                  align="right"
                  color="inherit"
                  aria-label="Close"
                  style={{ padding: 8 }}
                  onClick={() => {
                    dispatch(closeModal());
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Formik
              initialValues={{
                ...INITIAL_FORM_STATE,
              }}
              validationSchema={FORM_VALIDATION}
              onSubmit={(values) => {
                dispatch(addItem(values));
                dispatch(closeModal());
              }}
            >
              <Form>
                <Grid container direction="row" spacing={1}>
                  <Grid item xs={12}>
                    <TextfieldWrapper name="imageUrl" label="Image Url" />
                  </Grid>
                  <Grid item xs={6}>
                    <SelectWrapper name="popular" label="Popularity" />
                  </Grid>

                  <Grid item xs={6}>
                    <SelectWrapper name="recommended" label="Recommendation" />
                  </Grid>
                  <Grid item xs={6}>
                    <TextfieldWrapper name="name" label="Product title" />
                  </Grid>

                  <Grid item xs={6}>
                    <TextfieldWrapper name="price" label="Price" />
                  </Grid>

                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container>
                      <Grid item container>
                        <Grid item xs={6}>
                          <Button
                            sx={{ color: "#FD6011" }}
                            onClick={() => {
                              dispatch(closeModal());
                            }}
                          >
                            Cancel
                          </Button>
                        </Grid>
                        <Grid item xs={6}>
                          <ButtonWrapper>SAVE</ButtonWrapper>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            </Formik>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
