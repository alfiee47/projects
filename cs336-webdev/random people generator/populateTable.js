async function addDataRows() {
    dataservice = new DataService();

    await dataservice.fetchData();
    arrayofobject = dataservice.getData();
    table = document.getElementById("rows");
    arrayofobject.forEach(Object => {
        createRow(table, Object);
    })

}

function createRow(parentElem, rowData) {

    //creates a new row
    newrow = parentElem.insertRow(-1);

    //iterates throughs the objects,creates a new cell and populates it with the value 
    Object.values(rowData).forEach(Objectvalue => {
            //creates a newcell
            let newdata = newrow.insertCell(-1)
                //changes the object into a text
            TextNode = document.createTextNode(Objectvalue);
            // populates the cell with the data
            newdata.appendChild(TextNode);
        })
        // deletes  last cell and replaces it with the image element 
    newrow.deleteCell(-1)
    let lastcell = newrow.insertCell(-1);
    let img = document.createElement('img');
    img.src = rowData.picture
    lastcell.appendChild(img);



}