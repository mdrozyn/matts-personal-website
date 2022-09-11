import { Run, RunProps } from "./components/Run"
import IMG_3336 from '../../images/RunningPage/TheCharcoalChallange/IMG_3336.jpg'
import IMG_6365 from '../../images/RunningPage/TheCharcoalChallange/IMG_6365.jpg'
import IMG_4524 from '../../images/RunningPage/ArtsAndParks/IMG_4524.jpg'
import IMG_7037 from '../../images/RunningPage/TroegsRuggedTrail5KRunforConservation/IMG_7037.jpg'
import IMG_7034 from '../../images/RunningPage/TroegsRuggedTrail5KRunforConservation/IMG_7034.jpg'
import IMG_7031 from '../../images/RunningPage/TroegsRuggedTrail5KRunforConservation/IMG_7031.jpg'
import IMG_5601 from '../../images/RunningPage/TroegsRuggedTrail5KRunforConservation/IMG_5601.jpg'
import IMG_3447 from '../../images/RunningPage/TroegsRuggedTrail5KRunforConservation/IMG_3447.jpg'

export function RunningPage() {

    const runs: RunProps[] = [{
        Name: "The Charcoal Challange 5k",
        Date: "June 11th 2022",
        Location: "Pine Grove Furnace State Park",
        Time: "26:39",
        Position: 6,
        TotalRunners: 65,
        Notes: "This was my first 5k!",
        ResultsLink: "https://my.raceresult.com/204361",
        Photos: [
            IMG_3336,
            IMG_6365
        ]
    },
    {
        Name: "Arts and Parks 5k",
        Date: "July 16th 2022",
        Location: "Harrisburg Pa",
        Time: "23:32",
        Position: 8,
        TotalRunners: 40,
        Notes: "I got first place for my age group, 20-29!",
        ResultsLink: "https://www.secondwindtiming.com/result-page/?id=212163#0_3EF1B7",
        Photos: [
            IMG_4524
        ]
    },
    {
        Name: "Tröegs Rugged Trail 5K Run for Conservation",
        Date: "9/11/2022",
        Location: "Millersburg PA",
        Time: "36:35",
        Position: 45,
        TotalRunners: 114,
        Notes: "The Ned Smith Center was awesome! Live music from Steal Your Face, good beer and pizza. Running up the hill was challanging, but it was a fun run!",
        ResultsLink: "https://runsignup.com/Race/Results/60901#resultSetId-337381;perpage:100",
        Photos: [
            IMG_7037,
            IMG_5601,
            IMG_7031,
            IMG_7034,
            IMG_3447
        ]
    },
]

    return (
        <>
            <div className="page-wrapper p-5 text-center">
                <h1 className="mb-3">Running</h1>
                <p className="mb-5">A running list of all of the races that I have participated in.
                </p>
                <div className="mb-5">
                    {runs.map((run, index) => {
                        return (<Run
                            key={index}
                            Name={run.Name}
                            Date={run.Date}
                            Location={run.Location}
                            Time={run.Time}
                            Position={run.Position}
                            TotalRunners={run.TotalRunners}
                            Notes={run.Notes}
                            ResultsLink={run.ResultsLink}
                            Photos={run.Photos} />);
                    })}
                </div>
            </div>
        </>
    )
}

