import { useQuery } from '@tanstack/react-query';
import ApiClient from '../services/api-client';

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const apiClient = new ApiClient<Platform>('/platforms/list/parents');

const usePlatform = () =>
    useQuery({
        queryKey: ['platforms'],
        queryFn: apiClient.getAll,
        staleTime: 24 * 60 * 60 * 1000,
    });

export default usePlatform;
