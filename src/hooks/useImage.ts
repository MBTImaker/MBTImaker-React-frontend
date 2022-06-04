import { useEffect, useState } from 'react'

const useImage = (id: string) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>();
    const [image, setImage] = useState(null);

    useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(`../assets/images/text/id/${id}.png`);
                setImage(response.default);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }

        fetchImage();
    }, [id])

    return {
        loading,
        error,
        image,
    }
}

export default useImage;