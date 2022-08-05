import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CurrencyRupeeIcon />
            <span style={{ marginLeft: "0.5em" }}>Cash Register</span>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
