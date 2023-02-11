import { PhotoSlideShow } from "../PhotoSlideShow/PhotoSlideShow";
import "./Band.css"

export function Band(props: BandProps) {
	return (
		<div className="container p-5 rounded" style={{ backgroundColor: props.backgroundColor }}>
			<div className="col-12">
				<div className="row pb-5">
					<h2>{props.Name}</h2>
				</div>
				<div className="row align-items-center">
					<div className="col-6">
						<pre>
							{props.Bio}
						</pre>
					</div>
					<div className="col-6">
						<PhotoSlideShow
							googlePhotosAlbumId={props.PhotoLinkUrl}
							photoViewStyle={{
								width: '100%',
								height: '350px',
							}}
							AutoPlay={true}
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
	Releases?: string[],
	backgroundColor?: string
}