let subPageLinks = document.querySelectorAll(".subPageLink");
document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop();

    subPageLinks.forEach((link) => {
        let linkText = link.querySelector(".linkLine");

        if (link.getAttribute("href") === currentPage) {
            if (linkText) linkText.innerText = "/";
        } else {
            link.addEventListener("mouseover", () => {
                if (linkText) linkText.innerText = "/";
            });
            link.addEventListener("mouseout", () => {
                if (linkText) linkText.innerText = "|";
            });
        }
    });
});

let events = [
    {
        title: "House Openning",
        date: "Wednesday, September 19, 2017",
        location: "HIZZ, Cairo",
        poster: "House Openning Poster.jpg"
    },
    {
        title: "Khaleet 001 / خليط ٠٠١",
        date: "Wednesday, December 13, 2017",
        location: "HIZZ, Cairo",
        poster: "44.jpg" // Assigned from existing
    },
    {
        title: "Khaleet 002 / خليط ٠٠٢",
        date: "Friday, December 29, 2017",
        location: "HIZZ, Cairo",
        poster: "Weight of the Heart  Bana Kabalan.jpg" // Assigned from existing
    },
    {
        title: "Khaleet 003 / خليط ٠٠٣",
        date: "Saturday, January 13, 2018",
        location: "HIZZ, Cairo",
        poster: "Shake and Destroy  DJ Haram x Drummer B x Bashar Suleiman.jpg" // Assigned from existing
    },
    {
        title: "Thursday Night Beat Down feat. R A G E H",
        date: "Thursday, January 18, 2018",
        location: "HIZZ, Cairo",
        poster: "BEATDOWN.jpg"
    },
    {
        title: "Khaleet 004 / خليط ٠٠٤",
        date: "Friday, January 26, 2018",
        location: "Uncle Sam Pub, Amman",
        poster: "Record Store Day OPEN HOUSE.jpg" // Assigned from existing
    },
    {
        title: "Drummer B x ONSY x Bashar Suleiman",
        date: "Wednesday, March 14, 2018",
        location: "Zigzag, Cairo",
        poster: "Open House.jpg" // Assigned from existing
    },
    {
        title: "Khaleet 005 / خليط ٠٠٥",
        date: "Wednesday, April 25, 2018",
        location: "HIZZ, Cairo",
        poster: "hizz open house.jpg" // Assigned from existing
    },
    {
        title: "Khaleet 006 / خليط ٠٠٦",
        date: "Sunday, May 27, 2018",
        location: "Kiesling, Detroit",
        poster: "Kafr El-Dauwar Records.jpg" // Assigned from existing
    },
    {
        title: "Livestream w Youssef Abouzeid X Bashar Suleiman X Torkhy",
        date: "Friday, July 20, 2018",
        location: "HIZZ, Cairo",
        poster: "Livestream.jpg"
    },
    {
        title: "INSIN - Livestream",
        date: "Wednesday, August 8, 2018",
        location: "HIZZ, Cairo",
        poster: "Freya Edmondes-Livestream.jpg"
    },
    {
        title: "Youssef Abouzeid 'Captain Solo' Release Party",
        date: "Wednesday, August 29, 2018",
        location: "Bardo Clubhouse, Maadi",
        poster: "HIZZ Detroit Black Friday Grand Opening.jpg" // Assigned from existing
    },
    {
        title: "assembli X Hizz present Cairo Invasion",
        date: "Friday, November 16, 2018",
        location: "MENA Tyche Hotel, Amman",
        poster: "JessicaSligter + OwenGardner LIVE.jpg" // Assigned from existing
    },
    {
        title: "IV IV أربعة أربعة",
        date: "Sunday, February 3, 2019",
        location: "HIZZ, Cairo",
        poster: "44.jpg"
    },
    {
        title: "Weight of the Heart :: Bana Kabalan",
        date: "Thursday, March 21, 2019",
        location: "HIZZ, Cairo",
        poster: "Weight of the Heart  Bana Kabalan.jpg"
    },
    {
        title: "Shake and Destroy :: DJ Haram x Drummer B x Bashar Suleiman",
        date: "Thursday, March 28, 2019",
        location: "Unicorn Garden, Cairo",
        poster: "Shake and Destroy  DJ Haram x Drummer B x Bashar Suleiman.jpg"
    },
    {
        title: "Record Store Day OPEN HOUSE",
        date: "Saturday, April 13, 2019",
        location: "HIZZ, Cairo",
        poster: "Record Store Day OPEN HOUSE.jpg"
    },
    {
        title: "Open House",
        date: "Saturday, July 27, 2019",
        location: "HIZZ, Cairo",
        poster: "Open House.jpg"
    },
    {
        title: "Kafr El-Dauwar Records X HIZZ (Open House)",
        date: "Saturday, August 10, 2019",
        location: "HIZZ, Cairo",
        poster: "hizz open house.jpg"
    },
    {
        title: "J!N Album Release",
        date: "Saturday, September 14, 2019",
        location: "HIZZ, Cairo",
        poster: "slovvdk.jpg" // Assigned from existing
    },
    {
        title: "Ya Khal Album Release",
        date: "Thursday, October 17, 2019",
        location: "HIZZ, Cairo",
        poster: "Kafr El-Dauwar Records.jpg"
    },
    {
        title: "Fuzzylittlebrain Album Release",
        date: "Friday, November 15, 2019",
        location: "HIZZ, Cairo",
        poster: "MAURICEMAXTON.jpg" // Assigned from existing
    },
    {
        title: "HIZZ Detroit Black Friday Grand Opening",
        date: "Friday, November 29, 2019",
        location: "HIZZ, Cairo",
        poster: "HIZZ Detroit Black Friday Grand Opening.jpg"
    },
    {
        title: "JessicaSligter + OwenGardner LIVE",
        date: "Friday, November 29, 2019",
        location: "HIZZ, Cairo",
        poster: "JessicaSligter + OwenGardner LIVE.jpg"
    },
    {
        title: "TAKH Album Release",
        date: "Thursday, December 5, 2019",
        location: "HIZZ, Cairo",
        poster: "amélie legrand.jpg" // Assigned from existing
    },
    {
        title: "Slovvdk سلوديكاي",
        date: "Friday, December 13, 2019",
        location: "HIZZ, Cairo",
        poster: "slovvdk.jpg"
    },
    {
        title: "MauriceLouca + MaxtonFort",
        date: "Friday, January 10, 2020",
        location: "HIZZ, Cairo",
        poster: "MAURICEMAXTON.jpg"
    },
    {
        title: "amélie legrand ft Alan Bishop + mmmalak",
        date: "Friday, January 10, 2020",
        location: "HIZZ, Cairo",
        poster: "amélie legrand.jpg"
    },
    {
        title: "FredericOberland + GregoryDargent + guests",
        date: "Thursday, January 16, 2020",
        location: "HIZZ, Cairo",
        poster: "FREDERIC.jpg"
    },
    {
        title: "TURQUOISE DESERT RESEARCH PROGRAMME PRESENTATIONS + AFTERPARTY",
        date: "Monday, January 20, 2020",
        location: "HIZZ, Cairo",
        poster: "TURQUOISE DESERT RESEARCH PROGRAMME PRESENTATIONS + AFTERPARTY.jpg"
    },
    {
        title: "Juliana Huxtable X Nadah El Shazly X KZLK",
        date: "Tuesday, January 21, 2020",
        location: "HIZZ, Cairo",
        poster: "XXXXXXXXXXXX.jpg"
    },
    {
        title: "Kid Fourteen + Prof.k",
        date: "Friday, January 24, 2020",
        location: "HIZZ, Cairo",
        poster: "KID FOURTEEN.jpg"
    },
    {
        title: "الشُك",
        date: "Saturday, February 15, 2020",
        location: "HIZZ, Cairo",
        poster: "shk.jpg"
    },
    {
        title: "25 Maadi",
        date: "Friday, February 25, 2022",
        location: "Maadi, Cairo",
        poster: "Weight of the Heart  Bana Kabalan.jpg" // Assigned from existing
    },
    {
        title: "Abosahar at CJC Cairo",
        date: "Saturday, July 20, 2024",
        location: "Cairo Jazz Club (CJC), Cairo, Egypt",
        poster: "Shake and Destroy  DJ Haram x Drummer B x Bashar Suleiman.jpg" // Assigned from existing
    },
    {
        title: "HIZZ Tour: Yverdon",
        date: "Saturday, August 10, 2024",
        location: "Festival Le Castrum, Yverdon, Switzerland",
        poster: "Record Store Day OPEN HOUSE.jpg" // Assigned from existing
    },
    {
        title: "HIZZ Tour: Montpellier",
        date: "Monday, August 12, 2024",
        location: "Montpellier, France",
        poster: "Open House.jpg" // Assigned from existing
    },
    {
        title: "HIZZ Tour: Toulouse",
        date: "Tuesday, August 13, 2024",
        location: "Troisième Loutre, Toulouse",
        poster: "hizz open house.jpg" // Assigned from existing
    },
    {
        title: "HIZZ Tour: Pau",
        date: "Wednesday, August 14, 2024",
        location: "Galaxie 23 x Live, Pau, France",
        poster: "Kafr El-Dauwar Records.jpg" // Assigned from existing
    },
    {
        title: "HIZZ Tour: Geneva",
        date: "Friday, August 16, 2024",
        location: "Théâtre de l’Orangerie, Geneva, Switzerland",
        poster: "JessicaSligter + OwenGardner LIVE.jpg" // Assigned from existing
    },
    {
        title: "Abosahar at Chilloposite Festival",
        date: "Saturday, October 5, 2024",
        location: "Dahab, EG",
        poster: "amélie legrand.jpg" // Assigned from existing
    },
    {
        title: "HIZZ Tour: Rotterdam",
        date: "Friday, October 11, 2024",
        location: "Radicalisms Festival, Rotterdam, Netherlands",
        poster: "MAURICEMAXTON.jpg" // Assigned from existing
    },
    {
        title: "HIZZ",
        date: "Thursday, October 17, 2024",
        location: "La Chaux d’Ouvron, Geneva, Switzerland",
        poster: "slovvdk.jpg" // Assigned from existing
    },
    {
        title: "HIZZ Tour: Lyon",
        date: "Friday, October 18, 2024",
        location: "Sonic 10, Lyon, France",
        poster: "FREDERIC.jpg" // Assigned from existing
    },
    {
        title: "HIZZ Tour: Amsterdam",
        date: "Saturday, October 19, 2024",
        location: "Garage Noord, Amsterdam, Netherlands",
        poster: "TURQUOISE DESERT RESEARCH PROGRAMME PRESENTATIONS + AFTERPARTY.jpg" // Assigned from existing
    },
    {
        title: "Abosahar at CJC",
        date: "Saturday, October 26, 2024",
        location: "Cairo Jazz Club (CJC), Cairo, Egypt",
        poster: "KID FOURTEEN.jpg" // Assigned from existing
    },
    {
        title: "Abosahar at CJC Cairo",
        date: "Saturday, December 21, 2024",
        location: "Cairo Jazz Club (CJC), Cairo, Egypt",
        poster: "shk.jpg" // Assigned from existing
    }
];
function reformatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

let eventsContiner = document.querySelector(".events");
if (eventsContiner) {
    events.forEach((event, index) => {
        event.id = index + 1
        event.date = reformatDate(event.date);
    })
    events = events.reverse()

    let eventsHTML = ``;
    events.forEach((event, index) => {
        eventsHTML += `
    <div class="event" id="event${event.id}" data-id="${event.id}">
        <span class="eventDate">${event.date}</span>
        <span class="eventTitle">${event.title}</span>
        <span class="eventLocation">${event.location}</span>
    </div>`
    })
    eventsContiner.innerHTML += eventsHTML

    let eventElements = document.querySelectorAll(".event");
    let posterElement = document.querySelector("#poster");

    document.addEventListener("mousemove", (event) => {
        posterElement.style.left = `${event.clientX + 10}px`;

        let posterHeight = parseFloat(window.getComputedStyle(posterElement).height);
        if (event.clientY > window.innerHeight * 0.5) {
            posterElement.style.top = `${event.clientY - posterHeight}px`;
        } else {
            posterElement.style.top = `${event.clientY + 10}px`;
        }
    });

    eventElements.forEach(eventElement => {
        eventElement.addEventListener("mouseover", () => {
            let eventId = eventElement.dataset.id;
            let selectedEvent = events.find(event => event.id === Number(eventId));
            if (selectedEvent) {
                posterElement.src = '/assets/imgs/eventcovers/' + selectedEvent.poster;
                posterElement.style.visibility = "visible";
            }
        });

        eventElement.addEventListener("mouseleave", () => {
            posterElement.style.visibility = "hidden";
        });
    });
}

// albums // albums // albums // albums
let albums = [
    {
        id: 1,
        title: "Inside the Blue",
        artist: "RAGEH",
        link: "https://hizzme.bandcamp.com/album/inside-the-blue"
    },
    {
        id: 2,
        title: "Shway Trooby",
        artist: "ABOsahar",
        link: "https://hizzme.bandcamp.com/album/shway-trooby"
    },
    {
        id: 3,
        title: "Pink Tape",
        artist: "Bashar Suliman X Drummer B",
        link: "https://hizzme.bandcamp.com/album/pink-tape"
    },
    {
        id: 4,
        title: "captain solo",
        artist: "youssef abouzeid",
        link: "https://hizzme.bandcamp.com/album/captain-solo"
    },
    {
        id: 5,
        title: "Throwbacks",
        artist: "Bashar Suleiman",
        link: "https://hizzme.bandcamp.com/album/throwbacks"
    },
    {
        id: 6,
        title: "KOMBILE 001",
        artist: "HIZZ",
        link: "https://hizzme.bandcamp.com/album/kombile-001"
    },
    {
        id: 7,
        title: "LSTEFA",
        artist: "KZLK",
        link: "https://hizzme.bandcamp.com/album/lstefa"
    },
    {
        id: 8,
        title: "SADSUN",
        artist: "INSIN",
        link: "https://hizzme.bandcamp.com/album/sadsun"
    },
    {
        id: 9,
        title: "∞σ",
        artist: "DG Hadi",
        link: "https://hizzme.bandcamp.com/album/-"
    },
    {
        id: 10,
        title: "The Caveman",
        artist: "ABOsahar",
        link: "https://hizzme.bandcamp.com/album/the-caveman"
    },
    {
        id: 11,
        title: "pink stm & wite ptl",
        artist: "J!N",
        link: "https://hizzme.bandcamp.com/album/pink-stm-wite-ptl-2"
    },
    {
        id: 12,
        title: "KOMBILE 002",
        artist: "HIZZ",
        link: "https://hizzme.bandcamp.com/album/kombile-002"
    },
    {
        id: 13,
        title: "fuzzylittlebrain",
        artist: "fuzzylittlebrain",
        link: "https://hizzme.bandcamp.com/album/fuzzylittlebrain"
    },
    {
        id: 14,
        title: "aho",
        artist: "youssef abouzeid",
        link: "https://hizzme.bandcamp.com/album/aho"
    },
    {
        id: 15,
        title: "Foreigner",
        artist: "JIN",
        link: "https://hizzme.bandcamp.com/album/foreigner"
    },
    {
        id: 16,
        title: "Attraction",
        artist: "DAHB",
        link: "https://hizzme.bandcamp.com/album/attraction"
    },
    {
        id: 17,
        title: "Anterior",
        artist: "Timmy Mowafi",
        link: "https://hizzme.bandcamp.com/album/anterior"
    },
    {
        id: 18,
        title: "BAD SECTOR",
        artist: "[machine.condition]",
        link: "https://hizzme.bandcamp.com/album/bad-sector"
    },
    {
        id: 19,
        title: "Entity",
        artist: "Gast",
        link: "https://hizzme.bandcamp.com/album/entity"
    },
    {
        id: 20,
        title: "Shuttle Juice",
        artist: "Hebatallah",
        link: "https://hizzme.bandcamp.com/album/shuttle-juice"
    },
    {
        id: 21,
        title: "Ma2ali",
        artist: "ARRAKK",
        link: "https://hizzme.bandcamp.com/album/ma2ali"
    },
    {
        id: 22,
        title: "many sins, mini synths",
        artist: "Centum/ˈsɛntəm/",
        link: "https://hizzme.bandcamp.com/album/many-sins-mini-synths"
    },
    {
        id: 23,
        title: "Mechanical Love",
        artist: "J!N",
        link: "https://hizzme.bandcamp.com/album/mechanical-love"
    },
    {
        id: 24,
        title: "Electric*té Du Liban",
        artist: "Baytee Baytak",
        link: "https://hizzme.bandcamp.com/album/electric-t-du-liban"
    },
    {
        id: 25,
        title: "MoultingKICK_23652",
        artist: "Centum/ˈsɛntəm/",
        link: "https://hizzme.bandcamp.com/album/moultingkick-23652"
    },
    {
        id: 26,
        title: "KOMBILE 003",
        artist: "HIZZ",
        link: "https://hizzme.bandcamp.com/album/kombile-003"
    },
    {
        id: 27,
        title: "تلاته",
        artist: "Lotfy",
        link: "https://hizzme.bandcamp.com/album/--2"
    },
    {
        id: 28,
        title: "bb",
        artist: "DG Hadi",
        link: "https://hizzme.bandcamp.com/album/bb"
    },
    {
        id: 29,
        title: "TassTooz",
        artist: "Baytee Baytak",
        link: "https://hizzme.bandcamp.com/album/tasstooz"
    },
    {
        id: 30,
        title: "باندا",
        artist: "سته ستميه باند",
        link: "https://hizzme.bandcamp.com/album/--4"
    }
];

let albumsContiner = document.querySelector(".albums");
if (albumsContiner) {
    let albumsHTML = ``;
    albums.forEach(album => {
        albumsHTML += `
                    <a class="album" id="album${album.id}" href="${album.link}">
                        <img src="assets/imgs/albumcovers/${album.title}.webp" alt="${album.title} cover">
                        <div class="albumInfo">
                        <span class="albumTitle">${album.title}</span>
                        <span class="albumArtist">${album.artist}</span>
                        </div>
                        </a>`
    })
    albumsContiner.innerHTML = albumsHTML
}


// gallery // gallery // gallery // gallery 
let galleryContiner = document.querySelector(".gallery");
if (galleryContiner) {
    for (let index = 0; index < 68; index++) {
        let img = document.createElement("img");
        img.src = `assets/imgs/photos/hizzGlry${index + 1}.jpg`;
        img.loading = "lazy";
        img.style.width = "70vw";
        galleryContiner.appendChild(img);
    }
}