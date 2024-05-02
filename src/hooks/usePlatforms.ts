import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api-client';
import ms from 'ms';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new ApiClient<Platform>('/platforms/lists/parents');

const usePlatform = () =>
    useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: ms('24h'),
    });

export default usePlatform;
