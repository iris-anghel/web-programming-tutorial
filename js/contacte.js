function getRow(contact) {
    var id = contact.id;
    var phone = contact.phone || '';
    var lastName = contact.lastName || '';
    var firstName = contact.firstName || '';
    
//    if(phone == undefined) {
//        phone = '';
//    }
//    if(typeof lastName == 'undefined') {
//        lastName = '';
//    }
//    firstName = firstName || '---';  
    
    var row = '<tr><td>' + lastName + '</td><td>' + firstName + '</td><td>' + phone + '</td>' + 
        '<td class="actions">' +
            '<span>[<a href="date/remove-db.php?id' + id + '">&#x2716;</a>]</span>' +
            '<span><a href="#" class="edit" data-id="' + id + '">&#x270E;</a></span>' +
        
        '</td>' + 
        '</tr>';
    return row;
}

//var contacte = [];

var tableContent = '';

function createRow(contact) {
    tableContent += getRow(contact);
}

$.ajax('date/list.php', {
    cache: false,
    dataType: 'json'
}).done(function(contacte) {
    console.info("contacts loaded ", contacte);
    contacte.forEach(createRow)
    $('#contacts-list tbody').html(tableContent);

    $('#contacts-list a.edit').click(function() {
        var id = $(this).data('id');
        var contact = contacte.find(function(c) {
            return c.id == id;
        });

        console.debug('edit', id, contact, this);

        $('input[name=id]').val(contact.id);
        $('input[name=firstName]').val(contact.firstName);
        $('input[name=lastName]').val(contact.lastName);
        $('input[name=phone]').val(contact.phone);

    });
});

// function editContact(firstName, lastName, phone) {
//     $('input[name=id]').val(contact.id);
//     $('input[name=firstName]').val(contact.firstName);
//     $('input[name=lastName]').val(contact.lastName);
//     $('input[name=phone]').val(contact.phone);
// }
//
// $('.edit').click(function () {
//   editContact('Iris', 'b', '333');
// });

// create forEach
//function callContact(contact) {
//    console.info("calling... " , contact.firstName);
//}
//
//function feedContact(contact) {
//    console.info("feeding... " , contact.firstName);
//}
//function pentruToateContactele(action) {
//    console.info("actiune: ", action);
//    for(var i = 0; i < contacte.length; i++) {
//    action(contacte[i]);
//    }
//}
// pentruToateContactele(callContact);
// pentruToateContactele(feedContact);
//
//contacte.forEach(callContact);
//contacte.forEach(feedContact);



