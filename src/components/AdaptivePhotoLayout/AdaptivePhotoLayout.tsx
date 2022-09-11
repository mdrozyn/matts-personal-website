import PhotoViewer from 'photoviewer';
import { ImageManager } from '../../ultilities/ImageManager';
import './AdaptivePhotoLayout.css';
import '../../thirdParty/styleSheets/photoviewer.css';

export function AdaptivePhotoLayout() {

    const onImageClick = (index: number) => {
        displayPhotoViewer(index);
    }

    const displayPhotoViewer = (index: number, pushNewState: boolean = true) => {

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
                changed: (context, index) => { window.history.pushState({}, '', `#/art?viewPhoto=${index}`) }
            },
            headerToolbar: ['close'],
            footerToolbar: ['zoomIn', 'zoomOut', 'prev', 'next']
        }

        new PhotoViewer(photos, photoViewerOptions);

        document.body.style.overflow = 'hidden';

        addClosePhotoViewerOnStageClickEvent();

        if (pushNewState) {
            window.history.pushState({}, '', `#/art?viewPhoto=${index}`);
        }
    }

    const closePhotoViewer = () => {
        const closeButton = document.getElementsByClassName("photoviewer-button-close");
        if (closeButton[0] instanceof HTMLButtonElement) {
            closeButton[0].click();
        }
        document.body.style.overflow = 'visible';
    }

    const addClosePhotoViewerOnStageClickEvent = () => {
        const photoViewerElem = document.getElementsByClassName('photoviewer-stage');
        let photoViewer = photoViewerElem[0];

        if (photoViewer instanceof HTMLElement) {
            photoViewer.onclick = function () {
                closePhotoViewer();
            }
        }
        
        const sideBarNavs = document.getElementsByClassName('side-bar-nav');
        let sideBarNav = sideBarNavs[0];
        if (sideBarNav instanceof HTMLElement) {
            sideBarNav.onclick = function () {
                closePhotoViewer();
            }
        }
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

    const processQueryParams = () => {
        const [hash, query] = window.location.hash?.split('?');
        const params = Object.fromEntries(new URLSearchParams(query));

        closePhotoViewer();

        if (params.viewPhoto !== undefined) {
            displayPhotoViewer(Number(params.viewPhoto), false);
        }
    }

    const imagePaths = ImageManager.getArtPageImages();
    const photos: PhotoViewerImage[] = [];

    window.addEventListener('resize', closePhotoViewer);

    formatImageTitles();
    processQueryParams();

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