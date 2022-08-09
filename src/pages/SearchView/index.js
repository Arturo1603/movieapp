import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, Container, Grid, TextField, Typography } from "@mui/material";

const SearchView = () => {
    const [searchText, setSearchText] = useState("");

    // desestructuramos la funcion logout para el deslogueo
    const history = useNavigate();

    // const handleInputChange = (event) =>{
    //     setSearchText(event.target.value);
    // };
    function handleInputChange(event) {
        setSearchText(event.target.value);
    }

    const handleSearchButton = () => {
        if(searchText === "") return;
        history(`/search/${searchText}`);
    }
    return (
        <Box>
            <Container
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100vh",

                }}>
                <Card
                    sx={{
                        width: "100wh",
                        padding: "20px",
                    }}
                >
                    <Typography variant="h1">
                        OMDB Search</Typography>
                    <Grid container>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label={`Movie or tv show`}
                                onChange={handleInputChange}
                                value={searchText}>
                            </TextField>
                        </Grid>
                        <Grid item xs={6}>
                            {/* <Link to={`/search/${searchText}`} style={{ textDecoration: "none" }}>    
                                <Button
                                fullWidth 
                                    variant="contained" 
                                    size="large"
                                >    
                                    Search
                                </Button>
                            </Link>    */}
                            <Button
                                onClick={handleSearchButton}
                                fullWidth
                                variant="contained"
                                size="large"
                            >
                                Search
                            </Button>
                        </Grid>
                    </Grid>
                </Card>
            </Container>
        </Box>
    )
}
export default SearchView;