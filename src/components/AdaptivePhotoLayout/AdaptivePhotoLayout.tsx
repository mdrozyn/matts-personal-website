import PhotoViewer from 'photoviewer';
import { ImageManager } from '../utilities/ImageManager';
import './AdaptivePhotoLayout.css';
import '../../thirdParty/styleSheets/photoviewer.css';
export function AdaptivePhotoLayout() {

    const imagePaths = ImageManager.getArtPageImages();
    const photos: Photo[] = [];
    let photoViewer: PhotoViewer;
    imagePaths.forEach((path) => {
        photos.push({
            src: path,
            title: "Test Title"
        })
    })

    const onImageClick = (index: number) => {

        if (photoViewer) {
            // @ts-ignore can this be resolved with a type declaration file?
            photoViewer.close();
        }
        photoViewer = new PhotoViewer(photos, { index: index });
    }

    return (
        <div className="adaptive-photo-layout">
            <ul>
                {imagePaths.map((imageUrl, index) => {
                    return (
                        <li key={index}>
                            <img className='zoom' onClick={() => { onImageClick(index) }} src={imageUrl} alt="" />
                        </li>
                    )
                })}
                <li></li>
            </ul>
        </div>
    )
}

export type Photo = {
    src: string,
    title: string
}