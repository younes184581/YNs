// Retrieve anime and episode indices from the URL
const urlParams = new URLSearchParams(window.location.search);
const animeId = urlParams.get('anime');
const episodeIndex = urlParams.get('episode');

// Same anime data from AnimeDescription.js for consistency
const animeData = [
    {
        id: 1,
        title: "Alya Sometimes Hides Her Feelings in Russian",
        description: "Alya, a cold and sharp-tongued girl...",
        episodes: [
            { number: 1, videoUrl: "https://drive.google.com/file/d/1JQX-vqXHvtGSUdrepyG3oCY14I78J7nf/preview" },
            { number: 2, videoUrl: "https://drive.google.com/file/d/EXAMPLE_VIDEO_ID/preview" },
            { number: 3, videoUrl: "https://drive.google.com/file/d/1JQX-vqXHvtGSUdrepyG3oCY14I78J7nf/preview" },
            
        ]
    },
    {
        id: 2,
        title: "Hazurewaku no Joutai Ijou Skill",
        description: "In this world...",
        episodes: [
            { number: 1, videoUrl: "https://drive.google.com/file/d/EXAMPLE_VIDEO_ID/preview" },
            { number: 2, videoUrl: "https://drive.google.com/file/d/EXAMPLE_VIDEO_ID/preview" }
        ]
    },
    // Add the remaining anime data similar to above
];

// Find the selected anime and episode
const anime = animeData.find(anime => anime.id == animeId);
const episode = anime.episodes[episodeIndex];

// Update the episode title and embed the video
document.getElementById("episode-title").textContent = `${anime.title} - Episode ${episode.number}`;
document.getElementById("episode-video").src = episode.videoUrl;
