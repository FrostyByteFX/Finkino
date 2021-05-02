var url ="https://www.finnkino.fi/xml/Schedule/";
fetch(url).then((response) => {
return response.text();
})
.then((data) => {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(data, "text/xml");

    document.getElementById("schedule-div").innerHTML =
    xmlDoc.getElementsByTagName("PubDate")[0].childNodes[0].nodeValue;
});