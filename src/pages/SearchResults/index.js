import { useState, useEffect} from "react";
import { searchByText } from "../../services";
import { useParams } from "react-router-dom";
import {
	Box,
	AppBar,
	Toolbar,
	Typography,
	Button,
	Container,
} from "@mui/material";
import {CardMovie, MenuBar}  from "../../components";

const SearchResults = () =>{


    const [movies, setMovies] = useState([]);
	const { searchText } = useParams();
	// const history = useNavigate();

	async function getSearchResults() {
		const data = await searchByText(searchText);
		setMovies(data);
		console.log(data);
	}

	useEffect(() => {
		getSearchResults();
	}, []);

	// function backButton() {
	// 	history("/search");
	// }

	return (
		<Box>
            <MenuBar/>
			<Container>
				{movies.length > 0 &&
					movies.map((movie, index) => (
						<CardMovie movie={movie} key={index} />
					))}
			</Container>
		</Box>
	);
}
export default SearchResults;