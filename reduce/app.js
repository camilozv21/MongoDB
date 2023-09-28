const texto = document.querySelector('.container')
const users = [{
    "id": {
        "$oid": "6514d188fc13ae1072fd5412"
    },
    "first_name": "Josephine",
    "last_name": "Pouton",
    "email": "jpouton0@comsenz.com",
    "gender": "Female",
    "money": "3630"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5413"
    },
    "first_name": "Charleen",
    "last_name": "Langeley",
    "email": "clangeley1@theglobeandmail.com",
    "gender": "Female",
    "money": "17"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5414"
    },
    "first_name": "Taddeo",
    "last_name": "Jorio",
    "email": "tjorio2@amazon.co.jp",
    "gender": "Male",
    "money": "3990"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5415"
    },
    "first_name": "Afton",
    "last_name": "Tarplee",
    "email": "atarplee3@cnet.com",
    "gender": "Female",
    "money": "5213"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5416"
    },
    "first_name": "Hube",
    "last_name": "Cuddihy",
    "email": "hcuddihy4@theglobeandmail.com",
    "gender": "Male",
    "money": "26"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5417"
    },
    "first_name": "Augustine",
    "last_name": "Laraway",
    "email": "alaraway5@slate.com",
    "gender": "Male",
    "money": "20"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5418"
    },
    "first_name": "Orin",
    "last_name": "Warrender",
    "email": "owarrender6@cornell.edu",
    "gender": "Male",
    "money": "279"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5419"
    },
    "first_name": "De witt",
    "last_name": "Feria",
    "email": "dferia7@yellowpages.com",
    "gender": "Male",
    "money": "171"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd541a"
    },
    "first_name": "Randolph",
    "last_name": "Bellino",
    "email": "rbellino8@w3.org",
    "gender": "Genderqueer",
    "money": "9"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd541b"
    },
    "first_name": "Magdaia",
    "last_name": "Grishelyov",
    "email": "mgrishelyov9@addtoany.com",
    "gender": "Female",
    "money": "980"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd541c"
    },
    "first_name": "Karlie",
    "last_name": "Greenroyd",
    "email": "kgreenroyda@jimdo.com",
    "gender": "Female",
    "money": "280"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd541d"
    },
    "first_name": "Kylynn",
    "last_name": "Agronski",
    "email": "kagronskib@addthis.com",
    "gender": "Female",
    "money": "1930"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd541e"
    },
    "first_name": "Marika",
    "last_name": "Presman",
    "email": "mpresmanc@people.com.cn",
    "gender": "Female",
    "money": "20"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd541f"
    },
    "first_name": "Griswold",
    "last_name": "McGoldrick",
    "email": "gmcgoldrickd@cam.ac.uk",
    "gender": "Male",
    "money": "10"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5420"
    },
    "first_name": "Ayn",
    "last_name": "Frodsam",
    "email": "afrodsame@cnn.com",
    "gender": "Female",
    "money": "362"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5421"
    },
    "first_name": "Benito",
    "last_name": "Maryman",
    "email": "bmarymanf@ed.gov",
    "gender": "Male",
    "money": "95"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5422"
    },
    "first_name": "Perrine",
    "last_name": "Orts",
    "email": "portsg@mac.com",
    "gender": "Genderqueer",
    "money": "1266"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5423"
    },
    "first_name": "Livvyy",
    "last_name": "Carvil",
    "email": "lcarvilh@facebook.com",
    "gender": "Female",
    "money": "56"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5424"
    },
    "first_name": "Aura",
    "last_name": "Coolbear",
    "email": "acoolbeari@craigslist.org",
    "gender": "Female",
    "money": "400"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5425"
    },
    "first_name": "Ernest",
    "last_name": "Gellett",
    "email": "egellettj@example.com",
    "gender": "Male",
    "money": "6415"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5426"
    },
    "first_name": "Lil",
    "last_name": "Horick",
    "email": "lhorickk@csmonitor.com",
    "gender": "Female",
    "money": "6644"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5427"
    },
    "first_name": "Waly",
    "last_name": "Brookhouse",
    "email": "wbrookhousel@hhs.gov",
    "gender": "Female",
    "money": "963"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5428"
    },
    "first_name": "Derrek",
    "last_name": "Lionel",
    "email": "dlionelm@blogspot.com",
    "gender": "Male",
    "money": "20"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5429"
    },
    "first_name": "Almire",
    "last_name": "Gerge",
    "email": "agergen@macromedia.com",
    "gender": "Female",
    "money": "1667"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd542a"
    },
    "first_name": "Tomaso",
    "last_name": "Kemmer",
    "email": "tkemmero@google.co.jp",
    "gender": "Male",
    "money": "4227"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd542b"
    },
    "first_name": "Jamison",
    "last_name": "O' Scallan",
    "email": "joscallanp@auda.org.au",
    "gender": "Male",
    "money": "712"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd542c"
    },
    "first_name": "Alica",
    "last_name": "Biaggi",
    "email": "abiaggiq@imageshack.us",
    "gender": "Female",
    "money": "705"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd542d"
    },
    "first_name": "Rollins",
    "last_name": "Swallow",
    "email": "rswallowr@google.es",
    "gender": "Male",
    "money": "5150"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd542e"
    },
    "first_name": "Bella",
    "last_name": "Zorzini",
    "email": "bzorzinis@soundcloud.com",
    "gender": "Female",
    "money": "4"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd542f"
    },
    "first_name": "Vinni",
    "last_name": "Domaschke",
    "email": "vdomaschket@blogs.com",
    "gender": "Female",
    "money": "30"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5430"
    },
    "first_name": "Terrance",
    "last_name": "Doxsey",
    "email": "tdoxseyu@rambler.ru",
    "gender": "Male",
    "money": "1378"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5431"
    },
    "first_name": "Zarah",
    "last_name": "Varker",
    "email": "zvarkerv@nymag.com",
    "gender": "Female",
    "money": "13"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5432"
    },
    "first_name": "Constantia",
    "last_name": "Koppeck",
    "email": "ckoppeckw@hp.com",
    "gender": "Female",
    "money": "5932"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5433"
    },
    "first_name": "Matthus",
    "last_name": "Kenningham",
    "email": "mkenninghamx@nytimes.com",
    "gender": "Male",
    "money": "1026"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5434"
    },
    "first_name": "Ashly",
    "last_name": "Tender",
    "email": "atendery@omniture.com",
    "gender": "Female",
    "money": "4170"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5435"
    },
    "first_name": "Cornelia",
    "last_name": "Lempertz",
    "email": "clempertzz@cbc.ca",
    "gender": "Female",
    "money": "120"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5436"
    },
    "first_name": "Margy",
    "last_name": "Copsey",
    "email": "mcopsey10@google.co.jp",
    "gender": "Female",
    "money": "30"
}, {
    "id": {
        "$oid": "6514d188fc13ae1072fd5437"
    },
    "first_name": "Hobart",
    "last_name": "Kettoe",
    "email": "hkettoe11@taobao.com",
    "gender": "Male",
    "money": "118"
}]

const total = users.reduce((acum, el) => (
    acum + parseFloat(el.money)
), 0)

texto.innerHTML += total
