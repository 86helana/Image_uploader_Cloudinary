import React, { useEffect, useState } from 'react';
import { Image } from 'cloudinary-react';

export default function Home() {
    const [imageIds, setImageIds] = useState();
    const loadImages = async () => {
        try {
            const res = await fetch('/api/images');
            const data = await res.json();
            setImageIds(data);
        } catch (err) {
            console.error(err);
        }
    };
    useEffect(() => {
        loadImages();
    }, []);
    return (
        <div>
            <div className="gallery">
                {imageIds &&
                    imageIds.map((imageId, index) => (
                        <Image
                            key={index}
                            cloudName="dofu0qeua"
                            publicId={imageId}
                            width="300"
                            crop="scale"
                        />
                    ))}
            </div>
        </div>
    );
}
