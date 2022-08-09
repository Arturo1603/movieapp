import { Button, Box, Card, Container, Grid, TextField, Typography,
    Toolbar, AppBar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout'
const MenuBar = ({text, children}) =>{
    return (
        <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        style={{
                            flexGrow: 1,
                        }}
                    >
                        {text}
                    </Typography>
                    {children}
                </Toolbar>
        </AppBar>
    )
}
export default MenuBar;