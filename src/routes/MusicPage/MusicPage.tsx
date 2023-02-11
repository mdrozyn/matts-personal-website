import { Band } from "../../components/Band/Band";

export function MusicPage() {
    const _evergreenDriveBio = "The Evergreen Drive grows from the earth and blooms from the help of the great outdoors. Originating in Philadelphia, the band has released two extended plays and performs across Pennsylvania. After forming in 2014, The Evergreen Drive released their debut ep, “Plans”, with four songs designed to present the band’s carefully crafted blend of acoustic and electric instrumentation. Their second ep “More Than This”, released in 2016, expanded on the band’s sound by adding soaring guitar leads, bombastic drumming and introspective lyrics. The band's latest, self-titled ep was released in 2018."
   
    return (
        <div className="page-wrapper p-5 text-center">
            <h1>Music</h1>
            <p>This is where Our Music page will go!</p>
            <Band
                Name="The Evergreen Drive"
                Bio={_evergreenDriveBio}
                PhotoLinkUrl="5GJTnHCXsdFRQMFbA"
            />
        </div>
    )
}