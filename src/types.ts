import { StaticImageData } from 'next/image';

export interface Svg {
    width?: number;
    height?: number;
    color?: string;
}

export interface NewsCardType {
    title: string;
    subTitle: string;
    image: StaticImageData;
}

export interface NewsCard2Type {
    badgeText: string;
    title: string;
    image: StaticImageData;
}

export interface NewsCard3Type {
    category?: string;
    title: string;
    description: string;
    image: StaticImageData;
    author: string;
    timeStamp?: string;
    others: string[];
    badge?: string;
    divider?: boolean;
}

export interface Category {
    category_id: number;
    category_name: string;
    created_at: string;
    total_stories: number;
    updated_at: string;
}

export interface LatestStory {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    status: string;
    type: string;
    author: string;
    content: string;
    featured: string;
    views: number;
    editors_pick: null;
    top_story: null;
    category: {
        category_id: number;
        category_name: string;
        total_stories: null;
        created_at: string;
        updated_at: string;
    };
    banner_image: string;
    created_at: string;
    updated_at: string;
}

export interface TopStory {
    "id": number,
        "story": {
          "id": number,
          "title": string,
          "subtitle": string,
          "description": string,
          "status": string,
          "type": string,
          "author": string,
          "content": string
          "featured": string,
          "views": number,
          "editors_pick": null,
          "top_story": null,
          "category": {
            "category_id": number,
            "category_name": string,
            "total_stories": null,
            "created_at": string,
            "updated_at": string,
          },
          "banner_image": string,
          "created_at": string,
          "updated_at": string
        },
        "created_at": string,
        "updated_at": string
}

export interface MissedStory {
    "id": number,
        "title": string,
        "subtitle": string,
        "description": string,
        "status": string,
        "type": string,
        "author": string,
        "content": string,
        "featured": string,
        "views": number,
        "editors_pick": null,
        "top_story": null,
        "category": {
          "category_id": number,
          "category_name": string,
          "total_stories": null,
          "created_at": string,
          "updated_at": string
        },
        "banner_image": string,
        "created_at": string,
        "updated_at": string
}