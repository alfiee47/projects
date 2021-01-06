class DataService {



    // data = [

    //     {
    //         "gender": "female",
    //         "name": { "title": "Ms", "first": "Juliette", "last": "Fortin" },
    //         "location": { "street": { "number": 8069, "name": "Alfred St" }, "city": "Oakville", "state": "Northwest Territories", "country": "Canada", "postcode": "R8M 5M7", "coordinates": { "latitude": "-58.9666", "longitude": "123.0717" }, "timezone": { "offset": "-12:00", "description": "Eniwetok, Kwajalein" } },
    //         "email": "juliette.fortin@example.com",
    //         "login": { "uuid": "94c0c2a6-c869-46bd-b89a-bb43ac27c8d3", "username": "redostrich727", "password": "melissa", "salt": "GxJAQ1SH", "md5": "321bb4d0133ba989f854d7a2d89abb10", "sha1": "26934b47ff89a43e83ec7890dc56e9f688bea1d9", "sha256": "ad617d3028bd51b28150eb4048b2a0b8ef7a01c66eb770205d197818d999a000" },
    //         "dob": { "date": "1960-02-11T15:42:59.984Z", "age": 60 },
    //         "registered": { "date": "2005-12-05T05:05:29.952Z", "age": 15 },
    //         "phone": "714-758-1647",
    //         "cell": "660-179-5312",
    //         "id": { "name": "", "value": null },
    //         "picture": { "large": "https://randomuser.me/api/portraits/women/66.jpg", "medium": "https://randomuser.me/api/portraits/med/women/66.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/women/66.jpg" },
    //         "nat": "CA"
    //     }

    // ];
    constructor() {
        this.data = [];
    };


    getData(numRecords) {
        return (numRecords == null) ? this.data : this.data[numRecords]

    }

    async fetchData() {

        try {
            const response = await fetch('https://randomuser.me/api/?results=10')

            if (!response.ok) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
                return;
            } else {
                const data = await response.json();
                console.log(data.results);
                data.results.forEach(results => {
                    let name = results.name.first + ' ' + results.name.last
                    let gender = results.gender;
                    let address = results.location;


                    console.log(gender)
                    this.data[0] = name
                });






            }

        } catch (err) {
            console.log('Fetch Error :-S', err);
        }


    };


}














// mycar = new DataService().fetchData();
// console.log(mycar);