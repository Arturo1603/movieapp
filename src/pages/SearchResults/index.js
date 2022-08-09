
import { useState, useEffect} from "react";
import { searchByText } from "../../services";
import { useParams, useNavigate } from "react-router-dom";
import {
	Box,
	Container,
    IconButton,
	Grid,
	Typography
} from "@mui/material";
import {CardMovie}  from "../../components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const SearchResults = () =>{

    const [movies, setMovies] = useState([]);
	const { searchText } = useParams();
	const history = useNavigate();

	async function getSearchResults() {
		const data = await searchByText(searchText);
		setMovies(data);
		console.log(data);
	}

	useEffect(() => {
		getSearchResults();
	}, []);

	function backButton() {
		history("/search");
	}

	return (
		<Box>
			<Container>
				<IconButton onClick={backButton}>
					<ArrowBackIcon color="success" />
				</IconButton>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<Typography 
							variant="h6"
							sx={{
								textTransform:"capitalize",	
							}}
						>Search / {searchText}
						</Typography>
					</Grid>
					{movies.length > 0 &&
						movies.map((movie, index) => (
							<CardMovie movie={movie} key={index} />
						))}
				</Grid>	
			</Container>
		</Box>
	);
}
export default SearchResults;