import { AdaptivePhotoLayout } from "../../components/AdaptivePhotoLayout/AdaptivePhotoLayout";
import './ArtPage.css';
export function ArtPage() {
    return (
        <>
            <div className="page-wrapper p-5 text-center">
                <h1>Art</h1>
                <h2 className="mb-5">Pen and Ink</h2>
                <AdaptivePhotoLayout/>
            </div>
        </>
    )
}