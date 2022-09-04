import PhotoViewer from 'photoviewer';
import { ImageManager } from '../utilities/ImageManager';
import './AdaptivePhotoLayout.css';
import '../../thirdParty/styleSheets/photoviewer.css';
export function AdaptivePhotoLayout() {

    const imagePaths = ImageManager.getArtPageImages();

    const photos: PhotoViewerImage[] = [];
    let photoViewer: PhotoViewer;

    const onImageClick = (index: number) => {
        displayPhotoViewer(index);
    }

    const displayPhotoViewer = (index: number)=>{
        if (photoViewer) {
            // @ts-ignore can this be resolved with a type declaration file?
            photoViewer.close();
        }
        photoViewer = new PhotoViewer(photos, { index: index });
    }

    const formatImageTitles = () => {
        imagePaths.forEach((path) => {
            const imageNameRegex = /[^\\/]+?(?=\.\w+$)/
            const fileName = path.match(imageNameRegex)?.toString() ?? "";
            console.log(fileName);
            photos.push({
                src: path,
                title: fileName.substring(0, fileName.indexOf('.'))
            })
        })
    }

    formatImageTitles();

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

export type PhotoViewerImage = {
    src: string,
    title: string
}