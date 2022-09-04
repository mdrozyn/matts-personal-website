import { ImageManager } from '../utilities/ImageManager';
import './AdaptivePhotoLayout.css';

export function AdaptivePhotoLayout() {

    const imagePaths = ImageManager.getArtPageImages();

    return (
        <div className="adaptive-photo-layout">
            <ul>
                {imagePaths.map((imageUrl, index) => {
                    return (
                        <li key={index}>
                            <img className='zoom' src={imageUrl} alt="" />
                        </li>
                    )
                })}
                <li></li>
            </ul>
        </div>
    )
}
