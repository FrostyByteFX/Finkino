var url ="https://www.finnkino.fi/xml/Events/";
fetch(url).then((response) => {
return response.text();
})
.then((data) => {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(data, "text/xml");

    for (i = 0; i < 100; i++) {   
    var div = document.createElement('div');
        div.id = "events-div";
        document.body.appendChild(div);
        document.getElementById("events-div").innerHTML =
        xmlDoc.getElementsByTagName("OriginalTitle")[i].childNodes[0].nodeValue;

        var image = document.createElement('img');
        image.id = "image-div";
        document.body.appendChild(image);
        document.getElementById("image-div").innerHTML =
        xmlDoc.getElementsByTagName("EventLargeImageLandscape")[i].childNodes[0].nodeValue;
        document.getElementById("image-div").src = 
        xmlDoc.getElementsByTagName("EventLargeImageLandscape")[i].childNodes[0].nodeValue;

        var ShortSynopsis = document.createElement('p');
        ShortSynopsis.id = "p-div";
        document.body.appendChild(ShortSynopsis);
        document.getElementById("p-div").innerHTML =
        xmlDoc.getElementsByTagName("ShortSynopsis")[i].childNodes[0].nodeValue;
}
});