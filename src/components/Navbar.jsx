"use client";
import {
  AppBar,
  Avatar,
  Badge,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { grey, orange } from "@mui/material/colors";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
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
      <AppBar color="default" position="sticky">
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
                  <Link
                    href={"/"}
                    className={pathName === "/" ? "text-orange-500" : ""}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/about"}
                    className={pathName === "/about" ? "text-orange-500" : ""}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/menu"}
                    className={pathName === "/menu" ? "text-orange-500" : ""}
                  >
                    Menu
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="success">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
              <IconButton onClick={() => setMenuOpen(!menuOpen)}>
                <Avatar {...stringAvatar("Rofikul resan")} />
              </IconButton>
              <Menu
                variant="menu"
                elevation={1}
                sx={{ top: "45px", left: "calc(100% - 300px)" }}
                open={menuOpen}
                onClick={() => setMenuOpen(false)}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                className="mr-24"
              >
                <Typography variant="p" className="font-semibold ml-3">
                  User Name
                </Typography>
                <MenuItem>
                  <Link href={"/deshBoard/profile"}>Profile</Link>
                </MenuItem>
                <MenuItem>
                  <Link href={"/dashboard/profile"}>Dashboard</Link>
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
