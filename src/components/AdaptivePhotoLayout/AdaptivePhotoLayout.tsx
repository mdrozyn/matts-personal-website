import PhotoViewer from 'photoviewer';
import { ImageManager } from '../utilities/ImageManager';
import './AdaptivePhotoLayout.css';
import '../../thirdParty/styleSheets/photoviewer.css';
export function AdaptivePhotoLayout() {

    const imagePaths = ImageManager.getArtPageImages();

    let photoViewer: PhotoViewer;
    const photos: PhotoViewerImage[] = [];

    const onImageClick = (index: number) => {
        displayPhotoViewer(index);
    }

    const displayPhotoViewer = (index: number) => {

        if (photoViewer) {
            closePhotoViewer();
        }

        const photoViewerOptions: PhotoViewer.Options = {
            index: index,
            draggable: false,
            resizable: false,
            movable: false,
            modalHeight: window.innerHeight,
            modalWidth: window.innerWidth - 280,
            initModalPos: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 280
            },
            callbacks: {
                closed: () => {
                    document.body.style.overflow = 'visible';
                },
                changed: () => { } // I think this parameter should be optional?
            },
            headerToolbar: ['close'],
            footerToolbar: ['zoomIn', 'zoomOut', 'prev', 'next']
        }

        photoViewer = new PhotoViewer(photos, photoViewerOptions);

        window.addEventListener('resize', closePhotoViewer)
        document.body.style.overflow = 'hidden';
    }

    const closePhotoViewer = () => {
        // @ts-ignore can this be resolved with a type declaration file?
        photoViewer.close();
        document.body.style.overflow = 'visible';
    }

    const formatImageTitles = () => {
        imagePaths.forEach((path) => {
            const imageNameRegex = /[^\\/]+?(?=\.\w+$)/
            const fileName = path.match(imageNameRegex)?.toString() ?? "";

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