var url ="https://www.finnkino.fi/xml/Events/";
fetch(url).then((response) => {
return response.text();
})
.then((data) => {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(data, "text/xml");

    const idJSON = [
        { id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }, { id: "7" }, 
        { id: "8" }, { id: "9" }, { id: "10" }, { id: "11" }, { id: "12" }, { id: "13" }, { id: "14" }, { id: "15" },
        { id: "16" }, { id: "17" }, { id: "18" }, { id: "19" }, { id: "20" }, { id: "21" }, { id: "22" }, { id: "23" },
        { id: "24" }, { id: "25" }, { id: "26" }, { id: "27" }, { id: "28" }, { id: "29" }, { id: "30" }, { id: "31" },
        { id: "32" }, { id: "33" }, { id: "34" }, { id: "35" }, { id: "36" }, { id: "37" }, { id: "38" }, { id: "39" },
        { id: "40" }, { id: "41" }, { id: "42" }, { id: "43" }, { id: "44" }, { id: "45" }, { id: "46" }, { id: "47" },
        { id: "48" }, { id: "49" }, { id: "50" }, { id: "51" }, { id: "52" }, { id: "53" }, { id: "54" }, { id: "55" },
      ];

    for (i = 0; i < 55; i++) {
        var div = document.createElement('div');
        div.id = "events-div" + idJSON[i].id;
        document.body.appendChild(div);
        document.getElementById("events-div" + idJSON[i].id).innerHTML =
        xmlDoc.getElementsByTagName("OriginalTitle")[i].childNodes[0].nodeValue;

        var image = document.createElement('img');
        image.id = "image-div" + idJSON[i].id;
        document.body.appendChild(image);
        document.getElementById("image-div" + idJSON[i].id).innerHTML =
        xmlDoc.getElementsByTagName("EventLargeImageLandscape")[i].childNodes[0].nodeValue;
        document.getElementById("image-div" + idJSON[i].id).src = 
        xmlDoc.getElementsByTagName("EventLargeImageLandscape")[i].childNodes[0].nodeValue;

        var ShortSynopsis = document.createElement('p');
        ShortSynopsis.id = "p-div" + idJSON[i].id;
        document.body.appendChild(ShortSynopsis);
        document.getElementById("p-div" + idJSON[i].id).innerHTML =
        xmlDoc.getElementsByTagName("ShortSynopsis")[i].childNodes[0].nodeValue;
        }
});