<?php 
if (isset($_POST["list"])){
    $content = $_POST["list"];
    $fp=fopen("list.html","w");
    fwrite($fp,$content);
    fclose($fp);
}
?>
