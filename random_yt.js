const videos = ["https://www.youtube.com/embed/IWYImJiFHd4", "https://www.youtube.com/embed/ReBzqzztRNQ?start=44",
            "https://www.youtube.com/embed/am6ngIjzeao", "https://www.youtube.com/embed/09Jnd2VzN5c?start=58",
            "https://www.youtube.com/embed/64LlQau30tI", "https://www.youtube.com/embed/agzL-VwSJac",
            "https://www.youtube.com/embed/T-eVg4dZErI", "https://www.youtube.com/embed/dysOLygI8ZE",
            "https://www.youtube.com/embed/W55x5OmNDU4?start=98", "https://www.youtube.com/embed/68eue5cpbsE",
            "https://www.youtube.com/embed/NKoJDyKo1QQ", "https://www.youtube.com/embed/qfRlmwjD2Fs",
            "https://www.youtube.com/embed/BZGY81KJJPU?start=8", "https://www.youtube.com/embed/TB54dZkzZOY",
            "https://www.youtube.com/embed/9gF2UySGZAU", "https://www.youtube.com/embed/kW6z5TyU8QA",
            "https://www.youtube.com/embed/f2jqzVurDuY", "https://www.youtube.com/embed/XSHf4sivlWA",
            "https://www.youtube.com/embed/GB6BERGTTsA", "https://www.youtube.com/embed/wTndtUTFqb8",
            "https://www.youtube.com/embed/ODejBuFlY20", "https://youtu.be/e_PMcFjE9as"];

            window.onload = function () {
                const playerIframe = document.getElementById("player");
                const randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];
                playerIframe.setAttribute('src', randomVideoUrl);
           
            };
    