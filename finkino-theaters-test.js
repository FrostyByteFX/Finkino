var url ="https://www.finnkino.fi/xml/TheatreAreas/";
fetch(url).then((response) => {
return response.text();
})
.then((data) => {
    parser = new DOMParser();
    xmlDoc = parser.parseFromString(data, "text/xml");

    y = xmlDoc.getElementsByTagName("Name").length;
    /*const idJSON = [
        { id: "0" }, { id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }, { id: "5" }, { id: "6" }, { id: "7" }, 
        { id: "8" }, { id: "9" }, { id: "10" }, { id: "11" }, { id: "12" }, { id: "13" }, { id: "14" }, { id: "15" },
        { id: "16" }, { id: "17" }, { id: "18" }, { id: "19" }, { id: "20" }, { id: "21" }, { id: "22" }, { id: "23" },
      ];*/

    for (i = 0; i < y; i++) {
        document.getElementById(i).innerHTML =
        xmlDoc.getElementsByTagName("Name")[i].childNodes[0].nodeValue;
        }
});