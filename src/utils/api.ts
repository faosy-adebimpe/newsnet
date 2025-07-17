import { Category, LatestStory, MissedStory, TopStory } from '@/types';
import axios from 'axios';

export const fetchCategories = async (): Promise<Category[]> => {
    const response = await axios.get(
        'https://api.agcnewsnet.com/api/general/categories'
    );
    return response.data.data.data;
};

export const fetchTopStories = async (): Promise<TopStory[]> => {
    const response = await axios.get(
        'https://api.agcnewsnet.com/api/general/top-stories'
    );
    return response.data.data.data;
};
export const fetchEditorPicks = async (): Promise<Category[]> => {
    const response = await axios.get(
        'https://api.agcnewsnet.com/api/general/editor-picks?page=1&per_page=15'
    );
    return response.data.data.data;
};
export const fetchFeaturedStories = async (): Promise<Category[]> => {
    const response = await axios.get(
        'https://api.agcnewsnet.com/api/general/stories/featured-stories?page=1&per_page=15'
    );
    return response.data.data.data;
};

export const fetchLatestStories = async (): Promise<LatestStory[]> => {
    const response = await axios.get(
        'https://api.agcnewsnet.com/api/general/stories/latest-stories?page=1&per_page=7'
    );
    return response.data.data.data;
};

export const fetchMissedStories = async (): Promise<MissedStory[]> => {
    const response = await axios.get(
        'https://api.agcnewsnet.com/api/general/stories/missed-stories?page=1&per_page=4'
    );
    return response.data.data.data;
};

export const fetchCategoryStories = async (): Promise<Category[]> => {
    const response = await axios.get(
        'https://api.agcnewsnet.com/api/general/categories/%7bcategoryId%7d/stories?page=1&per_page=15'
    );
    return response.data.data.data;
};

export const fetchSingleStory = async (): Promise<Category[]> => {
    const response = await axios.get(
        'https://api.agcnewsnet.com/api/general/stories/%7bstoryId%7d'
    );
    return response.data.data.data;
};
