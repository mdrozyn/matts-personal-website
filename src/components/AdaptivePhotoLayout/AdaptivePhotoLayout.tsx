import './AdaptivePhotoLayout.css';

export function AdaptivePhotoLayout() {

    function importAll(r: any) {
        return r.keys().map(r);
    }

    const images: [] = importAll(require.context('./../../images/artPage', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="adaptive-photo-layout">
            <ul>
                {images.map((imageUrl) => {
                    return(
                    <li>
                        <img src={imageUrl} alt="" />
                    </li>
                    )
                })}
            </ul>

        </div>
    )
}
