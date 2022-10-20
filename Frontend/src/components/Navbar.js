import { Box, AppBar, Toolbar, IconButton, Typography, Button, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from "react";
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";



const Navbar = () => {

    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Stack direction="row" spacing={3} flexGrow={3}>
              <Typography variant="h6">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Insider
                </Link>
              </Typography>

            </Stack>
            <Link to="/Add" style={{ textDecoration: "none", color: "white" }}>
                  Add User
                </Link>
          </Toolbar>
        </AppBar>
      </Box>
    )
  
  }

export default Navbar