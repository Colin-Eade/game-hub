import useGenres from '../hooks/useGenres';
import { Button, Heading, List, ListItem, Spinner } from '@chakra-ui/react';
import useGameQueryStore from '../store';

const GenreList = () => {
    const { data, isLoading, error } = useGenres();
    const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
    const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <>
            <Heading fontSize="2xl" marginBottom={3}>
                Genres
            </Heading>
            <List>
                {data?.results.map((genre) => (
                    <ListItem key={genre.id} paddingY="5px">
                        <Button
                            whiteSpace="normal"
                            textAlign="left"
                            fontWeight={
                                genre.id === selectedGenreId ? 'bold' : 'normal'
                            }
                            onClick={() => setSelectedGenreId(genre.id)}
                            fontSize="lg"
                            variant="link"
                        >
                            {genre.name}
                        </Button>
                    </ListItem>
                ))}
            </List>
        </>
    );
};

export default GenreList;
