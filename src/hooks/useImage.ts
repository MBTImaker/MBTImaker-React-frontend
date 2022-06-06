import { useEffect, useState } from 'react'
import { SocialMedia, Image } from '../types';


const useImage = (id?: number, media?: SocialMedia) => {
    const [image, setImage] = useState<Image>("");

    useEffect(() => {
        const fetchImage = async () => {
            try {
                if (id == null && media == null) throw new Error("There is no properties in useImage.");
                const response = id ? await import(`../assets/images/text/id/${id}.png`) : await import(`../assets/images/share/${media}.png`);
                setImage(response.default);
                console.log(typeof response.default);
            } catch (e) {
                console.error(e);
            }
        }

        fetchImage();
    }, [id, media]);

    return { image }
}

export default useImage;