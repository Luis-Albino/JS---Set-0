/// Equipment ///

const equipment = ["computer","printer","telephone","desktop","chair","gabinet"];
var equipmentInventory = {"computers":[],"printers":[],"telephones":[],"desktops":[],"chairs":[],"gabinets":[]};

/// Names ///

const firstName = ["Joe","Nicholas","Kevin","Brian","Bruno","Ana","Sophia","Sara","Marian","Julia"];
const middleName = ["A.","B.","C.","D.","E.","F.","G.","H.","I.","J."];
const lastName = ["Smith","Johnson","Williams","Brown","Jones","Garcia","Miller","Davis","Lanen","Fernandez"];

/// Users ///

var user =[];
const totalUsers = 50;
for (let i=0; i<totalUsers; i++) {
    let j = Math.floor(Math.random()*(firstName.length));
    let k = Math.floor(Math.random()*(middleName.length));
    let l = Math.floor(Math.random()*(lastName.length));
    user[i] = {
        "name": firstName[j] +" "+ middleName[k] +" "+ lastName[l]
    };
}

/// random function ///

function rndm (number) {
    return Math.floor(Math.random()*number)
};

/// Building ///

var floor = [];
const totalFloors = 4 + rndm(3); // aleatory number of floors: 4-6
for (let i =0; i<totalFloors; i++) {
    floor[i] = []; // array with rooms inside
    /// Rooms ///
    let rooms = 4 + rndm(3); // aleatory number of rooms: 4-6
    for (let j=0; j<rooms; j++) {
        let equipmentList = {};
        for (let k=0; k<equipment.length; k++) {
            equipmentList[equipment[k]] = 0;
;        };
        // console.log(equipmentList);
        floor[i][j]= { "persons": [], "equipment": equipmentList};
    };
};

/// equipment distribution ///

const totalEquipment = 300;
for (let i=0; i<totalEquipment; i++) {
    let floorNumber = rndm(totalFloors);
    let roomNumber = rndm(floor[floorNumber].length);
    let equipmentType = equipment[rndm(equipment.length)];
    floor[floorNumber][roomNumber]["equipment"][equipmentType] += 1;
    equipmentInventory[equipmentType+"s"].push({"floor":floorNumber,"room":roomNumber,"user":"none"});
};

/// Assign user's room ///

for (let i=0; i<totalUsers; i++) {
    /// Assigning room ///
    let floorNumber = rndm(totalFloors);
    let roomNumber = rndm(floor[floorNumber].length);
    user[i]["floor"] = floorNumber;
    user[i]["room"] = roomNumber;
    let personsInThisRoom = floor[floorNumber][roomNumber]["persons"].length;
    floor[floorNumber][roomNumber]["persons"][personsInThisRoom] = user[i]["name"];

   user[i]["computer"] = "required";
   user[i]["desktop"] = "required";
   user[i]["chair"] = "required";
};

/// Assign user's equipment ///

function assignEquipment (equip,toUser) {
    let list = equip+"s";
    for (let j=0; j<equipmentInventory[list].length; j++) {
        if (equipmentInventory[list][j]["floor"] === toUser["floor"] && equipmentInventory[list][j]["room"] === toUser["room"] && equipmentInventory[list][j]["user"] === "none") {
            toUser[equip] = "assigned";
            equipmentInventory[list][j]["user"] = toUser["name"];
            j = equipmentInventory[list].length;
        };
    };
}

for (let i=0; i<totalUsers; i++) {

    /// assigning computers ///
    assignEquipment("computer",user[i]);

    /// assigning desktops ///
    assignEquipment("desktop",user[i]);

    /// assigning chairs ///
    assignEquipment("chair",user[i]);
};

/// Common use equipment ///

function commonUse (list) {
    for (let i=0; i<equipmentInventory[list].length; i++) {
        let floorNumber = equipmentInventory[list][i]["floor"];
        let roomNumber = equipmentInventory[list][i]["room"];
        equipmentInventory[list][i]["user"] = floor[floorNumber][roomNumber]["persons"];
    };
};

commonUse ("printers");
commonUse ("telephones");
commonUse ("gabinets");


/// SEARCH ///

function find (something) {
    let survey;
    /// MEMOIZATION ///
    if (find.prototype[something]) {
        survey = find.prototype[something];
        console.log(something +" had already been requested");
        // console.log(survey);
    }
    else {
        let bool = false;
        for (let i=0; i<user.length; i++) {
            bool = bool || (user[i]["name"] === something);
            if (bool) {
                survey = user[i];
                i = user.length;
                console.log("Personal information:");
            };
        };
        if (!bool) {
            for (let i=0; i<equipment.length; i++) {
                bool = bool || (equipment[i] === something);
                if (bool) {
                    survey = equipmentInventory[something+"s"];
                    i = equipment.length;
                    // list = equipment;
                    console.log("Equipment information:");
                };
            };
        };
        if (bool) {
            find.prototype[something] = survey; /// MEMOIZATION ///
            console.log(survey);
        }
        else {
            console.log(something + " has not been found");
        };
        // if (!bool) {
        //     console.log(something + " has not been found");
        // };

    };

    // find.prototype[something] = survey; /// MEMOIZATION ///

    // return survey
};
var name1 = user[0]["name"];
find(name1);
find("computer");
find("strange thing");
console.log(name1);
find(name1)