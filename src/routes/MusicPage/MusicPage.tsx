import { Band } from "../../components/Band/Band";

export function MusicPage() {
    const _evergreenDriveBio = "The Evergreen Drive grows from the earth and blooms from the help of the great outdoors. Originating in Philadelphia, the band has released two extended plays and performs across Pennsylvania. After forming in 2014, The Evergreen Drive released their debut ep, “Plans”, with four songs designed to present the band’s carefully crafted blend of acoustic and electric instrumentation. Their second ep “More Than This”, released in 2016, expanded on the band’s sound by adding soaring guitar leads, bombastic drumming and introspective lyrics. The band's latest, self-titled ep was released in 2018."
    const _badSleeperBio = "Founded in the early months of 2019, Bad Sleeper have been discovering their own personal blend of alternative rock through harmonized guitar riffs, textured synth layers, soaring vocals and heavy drumming. After almost a of playing in basements and venues around the Philadelphia PA area, the band released their first singles, \"Can't Describe It\" and \"You Are That Sky\"; two tracks packed with angst, philosophy and love.\n\nBad Sleeper crafted their next single \"Storm\" via zoom calls and sending recordings back and forth during the quarantined early months of 2020. \"Storm\" paints a picture of the inner storm we all experience inside. The band's second single of the year, \“Empty Room\” is a \“dark-pop\” song written by Marcelyn and Bad Sleeper’s Juliet Eve. Both bands recorded a version of the song in their own styles, with one being described as \"slinky neo-noir synth-pop\" and the other as \"heavy and riff-laden\" by The Philadelphia Globe. \n\n Bad Sleeper kicked off 2021 with another single titled \"Take it Back\". Described as \"a riff heavy, melodious powerhouse of a song\" by My Little Underground, \"Take It Back\" explores the band's classic hard rock and metal influences, often drawing comparisons to bands such as Black Sabbath and Tool. The track's progressive songwriting also gave  the honor of being called a \"Thinking person's band\" by Indie Pulse Music Magazine, who went on to describe the band as \"lyrically thoughtful and a seriously wicked talent\"."
  
    return (
        <div className="page-wrapper p-5 text-center">
            <h1>Music</h1>
            <p>The chronological list of all of the bands and recording projects I have participated in</p>
            <Band
                Name="Bad Sleeper"
                Bio={_badSleeperBio}
                PhotoLinkUrl="xndppyZZgJpPt55K8"
                backgroundColor="cornflowerblue"
            />
            <br/>
            <Band
                Name="The Evergreen Drive"
                Bio={_evergreenDriveBio}
                PhotoLinkUrl="5GJTnHCXsdFRQMFbA"
                backgroundColor="darkseagreen"
            />
        </div>
    )
}