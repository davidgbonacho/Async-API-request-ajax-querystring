<?php

/**
 * PHP as a service - retreive data as querystring
 * @author Tizedit - David G. bonacho
 */

// retreive params (they come as querystring)
$params = $_POST;

// your code here

// your response
$response = $params;

// convert to JSON
$encoded = json_encode($response, JSON_PRETTY_PRINT); // , JSON_FORCE_OBJECT   , JSON_PRETTY_PRINT
header('Content-type: application/json');

exit($encoded);
