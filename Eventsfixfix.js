var url ="https://www.finnkino.fi/xml/Events/";
fetch(url).then((response) => {
return response.text();
})
.then((data) => {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(data, "text/xml");

    y = xmlDoc.getElementsByTagName("OriginalTitle").length;

    for (i = 0; i < y; i++) {
    var location = document.getElementById('events-divc');

        var Bg = document.createElement('div');
        Bg.id = "Bg" + i;
        location.appendChild(Bg);
            Bg.classList.add("Bg-style");
        
        var ID = document.createElement('p');
        ID.id = "ID-div" + i;
        Bg.appendChild(ID);
            ID.classList.add("ID-style");
        document.getElementById("ID-div" + i).innerHTML =
        xmlDoc.getElementsByTagName("ID")[i].childNodes[0].nodeValue;

        var Title = document.createElement('p');
        Title.id = "Title-div" + i;
        ID.appendChild(Title);
            Title.classList.add("Title-style");
        document.getElementById("Title-div" + i).innerHTML =
        xmlDoc.getElementsByTagName("OriginalTitle")[i].childNodes[0].nodeValue;

        var image = document.createElement('img');
        image.id = "image-div" + i;
        Bg.appendChild(image);
            image.classList.add("img-style");
        document.getElementById("image-div" + i).innerHTML =
        xmlDoc.getElementsByTagName("EventLargeImagePortrait")[i].childNodes[0].nodeValue;
        document.getElementById("image-div" + i).src = 
        xmlDoc.getElementsByTagName("EventLargeImagePortrait")[i].childNodes[0].nodeValue;

        var ShortSynopsis = document.createElement('p');
        ShortSynopsis.id = "p-div" + i;
        Bg.appendChild(ShortSynopsis);
            ShortSynopsis.classList.add("p-style");
        document.getElementById("p-div" + i).innerHTML =
        xmlDoc.getElementsByTagName("ShortSynopsis")[i].childNodes[0].nodeValue;

        var year = document.createElement('p');
        year.id = "year-div" + i;
        Bg.appendChild(year);
            year.classList.add("year-style");
        document.getElementById("year-div" + i).innerHTML =
        xmlDoc.getElementsByTagName("ProductionYear")[i].childNodes[0].nodeValue;

        var genre = document.createElement('p');
        genre.id = "genre-div" + i;
        Bg.appendChild(genre);
            genre.classList.add("genre-style");
        document.getElementById("genre-div" + i).innerHTML =
        xmlDoc.getElementsByTagName("Genres")[i].childNodes[0].nodeValue;

        /*var video = document.createElement('iframe'); Toimii mutta selain valitaa CORS ongelmista.
        var Youtube = "https://www.youtube.com/embed/";
        video.id = "player" + i;
        Bg.appendChild(video);
            video.classList.add("video-div")
        video.src= Youtube + xmlDoc.getElementsByTagName("Location")[i].childNodes[0].nodeValue;*/
        }

});