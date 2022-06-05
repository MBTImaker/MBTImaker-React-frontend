import { useEffect, useState } from 'react'

const useImage = (id: number) => {
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/images/text/id/${id}.png`);
                setImage(response.default);
            } catch (e) {
                console.error(e);
            }
        }

        fetchImage();
    }, [id])

    return { image }
}

export default useImage;