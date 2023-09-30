const reduce = document.querySelector('.container1')
const map = document.querySelector('.container2')
const filter = document.querySelector('.container3')
const find = document.querySelector('.container4')
const sort = document.querySelector('.container5')

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
        "$oid": "6514d188fc13ae1072fd5437"
    },
    "first_name": "Hobart",
    "last_name": "Kettoe",
    "email": "hkettoe11@taobao.com",
    "gender": "Male",
    "money": "118"
}]

reduce.innerHTML += users.reduce((acum, el) => (acum + parseFloat(el.money)), 0)
map.innerHTML += users.map(el => (el.money / 2)).reduce((acum, el) => (acum + parseFloat(el)), 0)
users.filter(el => (el.gender === 'Male')).forEach(el => (filter.innerHTML += el.first_name + ', '))
find.innerHTML += users.find(el => (el.email === 'kagronskib@addthis.com')).first_name
users.sort(users.money).forEach(el => (sort.innerHTML += el.first_name + ', '))
