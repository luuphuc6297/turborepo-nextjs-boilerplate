
export interface AppImageProps {
    name: string;
    description: string;
    slug: string;
}

export interface GenericImageProps {
    title: string;
    description: string;
}


export interface ScreenshotImageProps {
    image: string;
    /**
     * Fallback image to use if the image prop fails to load.
     */
    fallbackImage: string;
}


export interface MeetingImageProps {
    title: string;
    profile: { name: string; image?: string | null };
    users?: { name: string; username: string }[];
}
