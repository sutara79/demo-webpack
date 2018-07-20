<?php
// Ajax
require_once('DbController.php');
use myapp\DbController;

$obj = new DbController();

// delay
for ($i = 0, $j = 0; $i < 100000; $i++) {
    $j++;
}


echo $obj->getInfo($_GET['q']);