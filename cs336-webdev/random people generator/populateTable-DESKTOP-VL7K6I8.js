function addDataRows() {
    dataservicec = new DataService();
    dataservicec.fetchData()

    arrayofobject = dataservicec.getData();
    // var order = _.pick(arrayofobject, ['name',
    //     "gender", "location", "dob", "phone"
    // ]);


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


}