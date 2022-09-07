import './Run.css'

export function Run(props: RunProps) {
    return (
        <>
            <div className="run-container">
                <h2 className="mb-3">{props.Name}</h2>
                <div className="text-left ">
                    <div>
                        <strong>Date: </strong>
                        {props.Date}
                    </div>
                    <div>
                        <strong>Location: </strong>
                        {props.Location}
                    </div>
                    <div>
                        <strong>Finish Time: </strong>
                        {props.Time}
                    </div>
                    <div>
                        <strong> Position: </strong>
                        {props.Position}/{props.TotalRunners}
                    </div>
                    <div>
                        <strong>Full Results: </strong>
                        <a href={props.ResultsLink}>{props.ResultsLink}</a>
                    </div>
                    <div>
                        <strong>Notes: </strong>
                        {props.Notes}
                    </div>
                </div>
                <div className="mb-">
                    {props.Photos?.map((photo, index) => {
                        return (<img src={photo} key={index} className='photo p-3' alt='' />)
                    })}
                </div>
                <hr></hr>
            </div>
        </>
    )
}

export interface RunProps {
    Name?: string;
    Date?: string;
    Position?: number;
    TotalRunners?: number;
    Location?: string;
    Time?: string;
    ResultsLink?: string;
    Notes?: string;
    Photos?: string[];
}