function getRow(lastName, firstName, phone) {
    if(phone == undefined) {
        phone = '';
    }
    if(typeof lastName == 'undefined') {
        lastName = '';
    }
    firstName = firstName || '---';  //daca am first name, se pune automat, daca e nedefinit sau fals, se pune --- sau direct jos
    var row ='<tr><td>' + lastName + '</td><td>' + (firstName || '---') + '</td><td>' + phone + '</td></tr>';
    return row;
}

var tableContent = '';

function createRow(contact) {
    tableContent += getRow(contact.firstName, contact.lastName, contact.phone);
}

$.ajax('date/contacte.json').done(function(contacte) {
    console.info("contacte", contacte);
    contacte.forEach(createRow);
    $('#contacts-list tbody').html(tableContent);
});


//1 convert contacts from array to json
//2 load contacts from json file with ajax
//3 remove contacts  (UI)
//4 edit contacts (UI)


// create forEach
function callContact(contact) {
    console.info("calling... " , contact.firstName);
}

function feedContact(contact) {
    console.info("feeding... " , contact.firstName);
}
function pentruToateContactele(action) {
    console.info("actiune: ", action);
    for(var i = 0; i < contacte.length; i++) {
    action(contacte[i]);
    }
}
 pentruToateContactele(callContact);
 pentruToateContactele(feedContact);

contacte.forEach(callContact);
contacte.forEach(feedContact);




