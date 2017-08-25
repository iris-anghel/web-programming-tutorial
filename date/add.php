<html>
<head>
    <meta http-equiv="refresh" content="0;url='../contacte.html'" />
</head>
<body> 
    <div id="contact-id">

    </div>

    <?php

function getNextId() {                                   // de verificat
    $idString = file_get_contents("last.contact.id.json");
    $id = intval($idString);
    $id++;
    file_put_contents("last.contact.id.json", $id);
    return $id;
}

$contentString = file_get_contents("contacte.json");    //citire contacte.json ca string
$contacte = json_decode($contentString, true);

$id = getNextId();

    $newPerson = array(
        "id" => $id,
        "firstName" => $_GET['firstName'],    // citire paramentru form
        "lastName" => $_GET['lastName'],
        "phone" => $_GET['phone']
    );

    $contacte[] = $newPerson;    // add new person into array
    $contentString = json_encode($contacte, true);    // salvare inapoi in fisier
    file_put_contents("contacte.json", $contentString);

    header('Location: ../contacte.html');

    ?>

    contact added


<!--    <script>-->
<!--    var parameters = location.search.substr(1);-->
<!--    var paramArray = parameters.split('&');-->
<!--    console.info(paramArray);-->
<!--        -->
<!--    document.getElementById('contact-id').innerHTML = paramArray.join('; <br>') + ';';-->
<!--    </script>-->
</body>
</html>


