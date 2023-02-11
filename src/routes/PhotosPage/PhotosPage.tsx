import "react-image-gallery/styles/css/image-gallery.css";
import {OregonSlideShow } from "../../images/PhotosPage/PhotoSlideShows/OregonSlideShow";


export function PhotosPage() {
    return (
        <div className="page-wrapper p-5 text-center">
            <h1>Photos Page</h1>
            <p>This is where Our Photos page will go!</p>
            <OregonSlideShow/>
        </div>
    )
}