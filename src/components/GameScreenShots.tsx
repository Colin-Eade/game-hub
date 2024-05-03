import useScreenShots from '../hooks/useScreenShots';
import { SimpleGrid, Image } from '@chakra-ui/react';

interface Props {
    gameId: number;
}

const GameScreenShots = ({ gameId }: Props) => {
    const { data: screenshots, isLoading, error } = useScreenShots(gameId);

    if (isLoading) return null;
    if (error) throw error;

    return (
        <SimpleGrid
            columns={{
                base: 1,
                md: 2,
            }}
            spacing={2}
        >
            {screenshots?.results.map((screenshot) => (
                <Image key={screenshot.id} src={screenshot.image} />
            ))}
        </SimpleGrid>
    );
};

export default GameScreenShots;
