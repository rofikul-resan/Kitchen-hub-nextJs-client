"use client";
import {
  AppBar,
  Avatar,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { grey, orange } from "@mui/material/colors";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: orange["700"],
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <div>
      <AppBar color="default">
        <Container sx={{ padding: "10px" }}>
          <div className="flex justify-between items-center ">
            <IconButton
              sx={{
                borderRadius: "5px",
                "&:hover": {
                  background: grey["200"],
                },
              }}
            >
              <Typography variant="h5" color={"black"} sx={{ fontWeight: 700 }}>
                Kitchen-Hub
              </Typography>
            </IconButton>
            <div>
              <ul className="flex items-center gap-6 font-semibold ">
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>
                  <Link href={"/about"}>About</Link>
                </li>
                <li>
                  <Link href={"/menu"}>Menu</Link>
                </li>
              </ul>
            </div>
            <div>
              <IconButton onClick={() => setMenuOpen(!menuOpen)}>
                <Avatar {...stringAvatar("Rofikul resan")} />
              </IconButton>
              <Menu
                sx={{ top: "25px", borderRadius: "5px" }}
                open={menuOpen}
                onClick={() => setMenuOpen(false)}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <MenuItem>
                  <Link href={"/deshBoard/profile"}>Profile</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/dashboard/profile"}>Dashboard</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/dashboard/setting"}>Setting</Link>
                </MenuItem>
                <MenuItem>
                  <Button
                    variant="contained"
                    color="primary"
                    className="bg-purple-500"
                  >
                    log Out
                  </Button>
                </MenuItem>
              </Menu>
            </div>
          </div>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
