import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { useState } from "react";
import logo from "../assets/pti.png";
import {
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function ResponsiveAppBar() {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.8),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    color: "#FD6011",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "#A3A3A3",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
  }));

  // select menu start
  const [menuItemSel, setMenuItemSel] = useState("");
  const menuList = [
    "Home",
    "Details",
    "My Favorites",
    "Profile",
    "Log In/Sing Up",
  ];

  const handleChange = (event) => {
    console.log(event.target);
    console.log(menuItemSel);
    setMenuItemSel(event.target.value);
  };
  const BootstrapInput = styled(InputBase)(({ theme }) => ({
    "label + &": {
      marginTop: theme.spacing(0),
      // fontWeight: "bold",
      color: "#FD6011",
    },
    "& .MuiInputBase-input": {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",

      fontSize: 16,
      padding: "10px 26px 8px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.

      "&:focus": {
        borderRadius: 4,
      },
    },
    "& .MuiSelect-icon": {
      color: "#FD6011",
    },
  }));
  // select menu end

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "transparent",
        boxShadow: "none",
        width: { xs: "95%", sm: "80%" },
        margin: "0 auto",
        maxWidth: "lg",
      }}
    >
      <Container maxWidth="xl" sx={{ pt: 3, pb: 3, pr: "0 !important" }}>
        <Grid
          container
          // disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={2}>
            <Box
              component="img"
              sx={{
                height: 34,
                cursor: "pointer",
              }}
              alt="Your logo."
              src={logo}
            />
          </Grid>

          <Grid item xs={6} sm={5}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search Audiobook"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </Grid>
          {/* menu select starts */}
          <Grid item xs={3.5} sm={2}>
            <FormControl fullWidth sx={{}}>
              <InputLabel
                id="demo-simple-select-label"
                sx={{
                  fontWeight: "bold",
                  textAlign: "center",
                  lineHeight: 1,
                  color: "#000 !important",
                }}
              >
                MENU
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={menuItemSel}
                label="MENU"
                onChange={(e) => handleChange(e)}
                input={<BootstrapInput />}
              >
                {menuList.map((str, key) => (
                  <MenuItem
                    key={key}
                    value={str}
                    sx={{
                      "&:hover": {
                        color: "#FD6011",
                      },
                      "&:focus": {
                        color: "#FD6011",
                      },
                    }}
                  >
                    {str}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {/* profile icon starts */}
          <Grid
            item
            sm={1}
            xs={0}
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
            >
              <AccountCircleIcon
                sx={{
                  color: "#FD6011",
                  fontSize: 40,
                  padding: 0,
                  margin: 0,
                }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
