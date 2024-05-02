import useGenres, { Genre } from '../hooks/useGenres';
import { Button, Heading, List, ListItem, Spinner } from '@chakra-ui/react';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}

const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
    const { data, isLoading, error } = useGenres();

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
                            onClick={() => onSelectGenre(genre)}
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
