const videos = ["https://www.youtube.com/embed/IWYImJiFHd4", "https://www.youtube.com/embed/ReBzqzztRNQ?start=44",
            "https://www.youtube.com/embed/am6ngIjzeao", "https://www.youtube.com/embed/09Jnd2VzN5c?start=58",
            "https://www.youtube.com/embed/64LlQau30tI", "https://www.youtube.com/embed/agzL-VwSJac",
            "https://www.youtube.com/embed/T-eVg4dZErI", "https://www.youtube.com/embed/dysOLygI8ZE",
            "https://www.youtube.com/embed/W55x5OmNDU4?start=98", "https://www.youtube.com/embed/68eue5cpbsE",
            "https://www.youtube.com/embed/NKoJDyKo1QQ", "https://www.youtube.com/embed/qfRlmwjD2Fs",
            "https://www.youtube.com/embed/BZGY81KJJPU?start=98", "https://www.youtube.com/embed/TB54dZkzZOY";];

window.onload = function () {
    const playerDiv = document.getElementById("random_player");
    const player = document.createElement("IFRAME");
    const randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];
    player.setAttribute('width', '90%');
    player.setAttribute('height', '640');
    player.setAttribute('src', randomVideoUrl);

    playerDiv.appendChild(player);
        };
