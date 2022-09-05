import { AdaptivePhotoLayout } from "../../components/AdaptivePhotoLayout/AdaptivePhotoLayout";
import "./ArtPage.css"
export function ArtPage() {
    return (
        <>
            <div className="page-wrapper p-5 text-center">
                <h1 className="mb-3">Art</h1>
                <p className="mb-3">All designs are avalible for purchase through my&nbsp;
                    <a href="https://www.redbubble.com/people/aliveinecho/shop?artistUserName=aliveinecho&iaCode=u-clothing">Redbubble Shop</a>
                </p>

                <AdaptivePhotoLayout />
            </div>
        </>
    )
}