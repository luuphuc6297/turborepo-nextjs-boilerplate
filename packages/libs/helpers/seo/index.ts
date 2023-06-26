import { AppImageProps, GenericImageProps } from "@mgslab/libs/interfaces";

/**
 * Test url:
 * http://localhost:3000/api/social/og/image?type=app&name=Huddle01&slug=/api/app-store/huddle01video/icon.svg&description=Huddle01%20is%20a%20new%20video%20conferencing%20software%20native%20to%20Web3%20and%20is%20comparable%20to%20a%20decentralized%20version%20of%20Zoom.%20It%20supports%20conversations%20for...
 */
export const constructAppImage = ({ name, slug, description }: AppImageProps, encodeUri = true): string => {
    const url = [
        `?type=app`,
        `&name=${encodeURIComponent(name)}`,
        `&slug=${encodeURIComponent(slug)}`,
        `&description=${encodeURIComponent(description)}`,
        // Joining a multiline string for readability.
    ].join("");

    return encodeUri ? encodeURIComponent(url) : url;
};

export const constructGenericImage = ({ title, description }: GenericImageProps, encodeUri = true) => {
    const url = [
        `?type=generic`,
        `&title=${encodeURIComponent(title)}`,
        `&description=${encodeURIComponent(description)}`,
        // Joining a multiline string for readability.
    ].join("");

    return encodeUri ? encodeURIComponent(url) : url;
};