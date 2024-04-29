import useGenres, { Genre } from '../hooks/useGenres';
import { Button, List, ListItem, Spinner } from '@chakra-ui/react';

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

    return (
        <List>
            {data.map((genre) => (
                <ListItem key={genre.id} paddingY="5px">
                    <Button
                        fontWeight={
                            genre.id === selectedGenre?.id ? 'bold' : 'normal'
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
    );
};

export default GenreList;
