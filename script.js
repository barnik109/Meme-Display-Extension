fetch(" https://meme-api.com/gimme")
    .then(data => data.json())
    .then(jokeData => {
        const jokeText = jokeData.url;
        const jokeEle = document.getElementById("jokeEle")
        var img = new Image();
        img.src = jokeText;
        document.body.appendChild(img);
})