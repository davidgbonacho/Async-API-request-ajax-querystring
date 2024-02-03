function makeCall() {

    let params = 'param1=value1&param2=value2';
    /* this is the same as
    let params = new URLSearchParams();
    params.append("param1", "value1");
    params.append("param2", "value2");*/

    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "php/service.php", true);
    xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhttp.onreadystatechange = runObject;
    xhttp.send(params);
}






function runObject() {

    if (this.readyState == 4 && this.status == 200) {
        let object = JSON.parse(this.responseText);

        let content = '';
        for (var key in object) content += key + ' ' + object[key] + ' ';

        document.getElementById("res").innerHTML = content;
    }
}


