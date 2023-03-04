import { Band } from "../../components/Band/Band";

export function MusicPage() {
    const _evergreenDriveBio = "The Evergreen Drive grows from the earth and blooms from the help of the great outdoors. Originating in Philadelphia, the band has released two extended plays and performs across Pennsylvania. After forming in 2014, The Evergreen Drive released their debut ep, “Plans”, with four songs designed to present the band’s carefully crafted blend of acoustic and electric instrumentation. Their second ep “More Than This”, released in 2016, expanded on the band’s sound by adding soaring guitar leads, bombastic drumming and introspective lyrics. The band's latest, self-titled ep was released in 2018."
    const _badSleeperBio = "Founded in the early months of 2019, Bad Sleeper have been discovering their own personal blend of alternative rock through harmonized guitar riffs, textured synth layers, soaring vocals and heavy drumming. After almost a of playing in basements and venues around the Philadelphia PA area, the band released their first singles, \"Can't Describe It\" and \"You Are That Sky\"; two tracks packed with angst, philosophy and love.\n\nBad Sleeper crafted their next single \"Storm\" via zoom calls and sending recordings back and forth during the quarantined early months of 2020. \"Storm\" paints a picture of the inner storm we all experience inside. The band's second single of the year, \“Empty Room\” is a \“dark-pop\” song written by Marcelyn and Bad Sleeper’s Juliet Eve. Both bands recorded a version of the song in their own styles, with one being described as \"slinky neo-noir synth-pop\" and the other as \"heavy and riff-laden\" by The Philadelphia Globe. \n\n Bad Sleeper kicked off 2021 with another single titled \"Take it Back\". Described as \"a riff heavy, melodious powerhouse of a song\" by My Little Underground, \"Take It Back\" explores the band's classic hard rock and metal influences, often drawing comparisons to bands such as Black Sabbath and Tool. The track's progressive songwriting also gave  the honor of being called a \"Thinking person's band\" by Indie Pulse Music Magazine, who went on to describe the band as \"lyrically thoughtful and a seriously wicked talent\"."
    const _cbkBio = "Philly kids just playing pop-punk music!";
    const _kolideBio = "Kolide paints a picture of our natural world using the kaleidescopic brush of digital instruments. From subtle, floating dreamscapes to head-nodding incantations of psychedelic house, Kolide's diverse collection of music explores what it means to live in a world where inspiration lays hidden in the the grooves of each river, and the leaves of every tree.";
    const _theBlowmenBio = "The Blowmen were formed in a smoky bar in Bradford, England in 1982, when a failed speed-dating enterprise left guitarist Joe Canterbury, bassist Robert Meadows and drummer Phil York lovelorn, high and dry. It was there that they penned the first draft of their song \"High Street.\" The Blowmen were determined to carry the faltering torch of punk rock into the mid-80s and out the other side. Playing underground gigs in West Yorkshire, North Yorkshire and East Riding of Yorkshire soon grew tiresome, and The Blowmen sought an opportunity, on a wish and a prayer, to tour with their greatest influence: Johnny Cash. Attempting to meet him at a Louisiana State Fair in the summer of 1984, they were dismayed to discover that Cash would not be in attendance. Frantic event planners were seeking a band in desperation, and The Blowmen, sensing opportunity, stepped up to play. The set they played resulted in the only known recording of their music, a live track exemplifying a rare and unique style and attitude of punk that pierces even the soul of a contemporary listener. Some speculated that their concert would catapult them to fame in the States, but, alas it was not to be. The same evening of the performance, Meadows and Canterbury died of a massive heroin overdose. They are survived by York, who is best known today for his solo career and his brief stint off-Broadway starring in a one-man show called The Blown Man.";
    const _highGravityBio = "High Gravity is an instrumental rock duo founded by Matt Drozynski and Ronnie Duriske.";
    const _chameleonTwistBio = "Chameleon Twist may have only played one gig, but Matt Scott and Ronnnie pushed the limits and wrote some crazy riffs.";
    const _LowLettersBio = "Low Letters was Peter and Jamie's band, and I filled in on bass for one gig.";
    const _theBrothershoodBio = "Mechanicsburg: A good place to live";
    const _inPlainViewBio = "In Plain View is a rock band that formed in August 2011 making their debut performance at Hammond Farm Jam 3. Their three song demo \"Let's Live Tonight\" was completed in January 2012. The band plans to record a second demo summer 2012, as well as play more shows! ";
    const _8ShadesOfGrayBio = "8 Shades of Gray was the first band that I ever sang in. We recorded a few songs and played a handle of gigs.";
    const _TheAtomicFuryBio = "An album I playe bass on. The Atomic Fury was a strange experience. Defcon One was born out of a weekend of chaos ";
    const _soloElectronicBio = "If life is a flow of experience and perception, art is like a net. It allows us to capture a feeling, a thought, an idea, and immortalize it within our works. For me, writing music has been my way of freeze-framing my life. Ever since I started playing guitar in 8th grade, I became obsessed with using it as a way to convey my ideas and emotions. I enjoy playing in bands, but I certainly feel the most natural working on my own. There is something about taking an idea from start to finish yourself that is immensely satisfying. Musically, I tend to be all over the place. I am a fan of many different styles, but I tend to write the most on acoustic guitar. Many of my big electric guitar songs end up being played with one of my bands, and this page will mostly be used for my electronic productions. While it may turn out being a huge cornucopia of sounds, this page will be the most accurate representation of me as a musician that I could possibly put together.";
    const _pauseRewindBio = "Pause rewind's biggest gig was playing live at The Rotting Premeir party. This band had alot of different personalities and they managed to come through the few songs we recorded. ";
    const _keystoneFreewayBio = "My first band. Keystone Freeway started as and english project that I did to help a friend. I experimented with recording my guitar and then we found other friends to join in, creating the band.";

    return (
        <div className="page-wrapper p-5 text-center">
            <h1>Music</h1>
            <p>The chronological list of all of the bands and recording projects I have participated in</p>
            <Band
                Name="Bad Sleeper"
                Bio={_badSleeperBio}
                PhotoLinkUrl="xndppyZZgJpPt55K8"
                backgroundColor="powderblue"
            />
            <br />
            <Band
                Name="The Evergreen Drive"
                Bio={_evergreenDriveBio}
                PhotoLinkUrl="5GJTnHCXsdFRQMFbA"
                backgroundColor="darkseagreen"
            />
            <br />
            <Band
                Name="Could've Been Kings"
                Bio={_cbkBio}
                PhotoLinkUrl="XiSpJLy8pguLmgjN9"
                backgroundColor="lightgoldenrodyellow"
            />
            <br />
            <Band
                Name="Kolide"
                Bio={_kolideBio}
                PhotoLinkUrl="CMEinH1pw2yukrpw8"
                backgroundColor="linen"
            />
            <br />
            <Band
                Name="High Gravity"
                Bio={_highGravityBio}
                PhotoLinkUrl="faZsEWC8upJRC7vz8"
                backgroundColor="lavender"
            />
            <br />
            <Band
                Name="The Blowmen"
                Bio={_theBlowmenBio}
                PhotoLinkUrl="XraQ6YuuZPEujvv29"
                backgroundColor="gainsboro"
            />
            <br />
            <Band
                Name="Chameleon Twist"
                Bio={_chameleonTwistBio}
                PhotoLinkUrl="kxkBXZDdvoAuiXwU7"
                backgroundColor="darkseagreen"
            />
            <br />
            <Band
                Name="Low Letters"
                Bio={_LowLettersBio}
                PhotoLinkUrl="aCGbJqju5i5o9UPU8"
                backgroundColor="darkseagreen"
            />
            <br />
            <Band
                Name="The Brother's Hood"
                Bio={_theBrothershoodBio}
                PhotoLinkUrl="Tsky35BMPndkAM768"
                backgroundColor="darkseagreen"
            />
            <br />
            <Band
                Name="In Plain View"
                Bio={_inPlainViewBio}
                PhotoLinkUrl="FzjWjKt9X6vxTZNw8"
                backgroundColor="darkseagreen"
            />
            <br />
            <Band
                Name="8 Shades of Gray"
                Bio={_8ShadesOfGrayBio}
                PhotoLinkUrl="3JwLBCyVJtzuPc5UA"
                backgroundColor="darkseagreen"
            />
            <br />
            <Band
                Name="The Atomic Fury"
                Bio={_TheAtomicFuryBio}
                PhotoLinkUrl="sus8eWVKrJX4QzEe9"
                backgroundColor="darkseagreen"
            />
            <br />
            <Band
                Name="Matt Drozynski Music"
                Bio={_soloElectronicBio}
                PhotoLinkUrl="tXEhjNUF5J3AyMsQ8"
                backgroundColor="darkseagreen"
            />
            <br /> 
            <Band
                Name="Pause Rewind"
                Bio={_pauseRewindBio}
                PhotoLinkUrl="49L5WNzNbTky6N4u9"
                backgroundColor="darkseagreen"
            />
            <br />
            <Band
                Name="Keystone Freeway"
                Bio={_keystoneFreewayBio}
                PhotoLinkUrl="GnjpVzpLS3hvJPZk8"
                backgroundColor="darkseagreen"
            />
        </div>
    )
}