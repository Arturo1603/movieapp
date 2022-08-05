import { Button, Box, Card, Container, Grid, TextField, Typography,
    Toolbar, AppBar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout'
const MenuBar = () =>{
    return (
        <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        style={{
                            flexGrow: 1,
                        }}
                    >
                        Arturo
                    </Typography>
                    <LogoutIcon color="red">
                        <Button color="red"></Button>
                    </LogoutIcon>
                </Toolbar>
        </AppBar>
    )
}
export default MenuBar;