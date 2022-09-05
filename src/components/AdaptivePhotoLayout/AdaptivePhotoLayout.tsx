import PhotoViewer from 'photoviewer';
import { ImageManager } from '../utilities/ImageManager';
import './AdaptivePhotoLayout.css';
import '../../thirdParty/styleSheets/photoviewer.css';

export function AdaptivePhotoLayout() {

    const onImageClick = (index: number) => {
        displayPhotoViewer(index);
    }

    const displayPhotoViewer = (index: number) => {

        const photoViewerOptions: PhotoViewer.Options = {
            index: index,
            draggable: false,
            resizable: false,
            movable: false,
            modalHeight: window.innerHeight,
            modalWidth: window.innerWidth - 280,
            fixedModalPos: true,
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
                changed: () => { }
            },
            headerToolbar: ['close'],
            footerToolbar: ['zoomIn', 'zoomOut', 'prev', 'next']
        }

        new PhotoViewer(photos, photoViewerOptions);

        document.body.style.overflow = 'hidden';

        addClosePhotoViewerOnStageClickEvent();
    }

    const addClosePhotoViewerOnStageClickEvent = () => {
        const photoViewerElem = document.getElementsByClassName('photoviewer-stage');
        let photoViewer = photoViewerElem[0];
        if (photoViewer instanceof HTMLElement) {
            photoViewer.onclick = function () {
                closePhotoViewer();
            }
        }
    }

    const closePhotoViewer = () => {
        const closeButton = document.getElementsByClassName("photoviewer-button-close");
        if (closeButton[0] instanceof HTMLButtonElement) {
            closeButton[0].click();
        }
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

    const imagePaths = ImageManager.getArtPageImages();
    const photos: PhotoViewerImage[] = [];

    window.addEventListener('popstate', closePhotoViewer);
    window.addEventListener('resize', closePhotoViewer);

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