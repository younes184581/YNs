// Sample anime data with Google Drive video embed links
const animeData = [
    {
        id: 1,
        title: "Alya Sometimes Hides Her Feelings in Russian",
        description: "Alya, a cold and sharp-tongued girl, often hides her feelings by speaking in Russian.",
        episodes: [
            { number: 1,},
            { number: 2,},
            { number: 3,},
        ]
    },
    {
        id: 2,
        title: "Hazurewaku no Joutai Ijou Skill",
        description: "In this world, people rely on skills, but one young man defies the system.",
        episodes: [
            { number: 1, videoUrl: "https://drive.google.com/file/d/EXAMPLE_VIDEO_ID/preview" },
            { number: 2, videoUrl: "https://drive.google.com/file/d/EXAMPLE_VIDEO_ID/preview" },
        ]
    },
    // Add the remaining anime data similar to above
];

// Function to dynamically update the anime details on the page
function updateAnimeDetails(animeId) {
    const anime = animeData.find(anime => anime.id == animeId);

    // Update the title and description
    document.getElementById("anime-title").textContent = anime.title;
    document.getElementById("anime-description").textContent = anime.description;

    // Update the episodes list
    const episodeList = document.getElementById("episode-list");
    episodeList.innerHTML = "";  // Clear previous episodes

    anime.episodes.forEach((episode, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Episode ${episode.number}`;
        listItem.addEventListener("click", () => {
            window.location.href = `episodes.html?anime=${animeId}&episode=${index}`;
        });
        episodeList.appendChild(listItem);
    });
}

// Get the anime ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const animeId = urlParams.get('id');

// Update the page based on the selected anime
updateAnimeDetails(animeId);
