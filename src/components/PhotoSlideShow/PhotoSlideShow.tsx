import { useEffect, useRef, useState } from "react";
import { getAlbum } from "../../services/google-photos.js/google-photos";
import "./PhotoSlideShow.css"
export const PhotoSlideShow = (props: PhotoSlideShowProps) => {

	let [slideIndex, setSlideIndex] = useState(0);
	let [photoLinkUrls, setPhotoLinkUrls] = useState<string[]>([]);

	const nextBtnRef = useRef<HTMLAnchorElement>(null);
	let thisContainer = useRef<HTMLDivElement>(null);

	useEffect(() => {

		async function loadAlbum(id: string) {
			let photoLinks: string[] = await getAlbum(id);
			return photoLinks;
		}

		async function autoPlay() {
			await new Promise(resolve => setTimeout(() => {
				if (nextBtnRef.current)
					nextBtnRef.current.click();
				autoPlay();
			}, 5000));
		}

		if (photoLinkUrls.length === 0) {
			loadAlbum(props.googlePhotosAlbumId).then((data) => {
				setPhotoLinkUrls([...data]);
			})
		}
		else {
			showSlides(slideIndex);
		}

		if (props.AutoPlay) {
			autoPlay();
		}

	}, []);

	return (
		<>
			<div className="slideshow-container" style={props.photoViewStyle} ref={thisContainer}>
				{
					photoLinkUrls.map((value, index) => {
						return (
							<div className="mySlides fade" style={{ display: index === slideIndex ? 'flex' : 'none' }} key={index}>
								<img alt="" referrerPolicy="no-referrer" src={value} />
							</div>
						)
					})
				}
			</div>
			<div style={{ textAlign: 'center' }}>
				<a className="prev" onClick={() => plusSlides(-1)}>❮</a>
				<div className="numbertext">{photoLinkUrls.length > 0 ? `${slideIndex + 1} / ${photoLinkUrls.length}` : ''}</div>
				<a ref={nextBtnRef} className="next" onClick={() => plusSlides(1)}>❯</a>
			</div>
		</>
	)

	function plusSlides(n: number) {
		showSlides(slideIndex += n);
	}

	function showSlides(n: number) {
		if (!thisContainer.current) { return; }
		let slides = thisContainer.current.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
		if (slides.length === 1) {
			slideIndex = 0;
		}
		if (n === slides.length) { slideIndex = 0 }
		if (n < 1) { slideIndex = slides.length - 1 }
		setSlideIndex(slideIndex);
	}
}

export interface PhotoSlideShowProps {
	googlePhotosAlbumId: string,
	photoViewStyle: PhotoViewStyle,
	AutoPlay?: boolean;
}

export interface PhotoViewStyle {
	width: string,
	height: string,
	backgroundColor?: string;
}