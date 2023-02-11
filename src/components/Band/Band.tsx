import { ReactElement } from "react";
import { PhotoSlideShow, PhotoSlideShowProps } from "../PhotoSlideShow/PhotoSlideShow";

export function Band(props: BandProps) {
	return (
		<div className="container">
			<div className="col-12">
				<div className="row pb-3">
					<h2>{props.Name}</h2>
				</div>
				<div className="row align-items-center">
					<div className="col-6">
						<p>
							{props.Bio}
						</p>
					</div>
					<div className="col-6">
						<PhotoSlideShow
							googlePhotosAlbumId={props.PhotoLinkUrl}
							photoViewStyle={{
								width: '100%',
								height: '350px',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export interface BandProps {
	Name: string;
	Bio: string;
	PhotoLinkUrl: string
	Releases?: string[]
}