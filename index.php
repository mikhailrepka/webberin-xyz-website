<?php
if (isset($_GET['act'])) $act = $_GET['act'];
else if (isset($_POST['act'])) $act = $_POST['act'];

define('DIR', $_SERVER['DOCUMENT_ROOT']);

switch ($act) {
	case '':
		$html = file_get_contents(DIR."/html/index.html");
	break;
	default:
		$act = str_replace("..","",$act);
		$act = str_replace("http","",$act);
		$act = str_replace(".html","",$act);
		if ($act[strlen($act)-1] == '/') $act[strlen($act)-1] = '|';
		$act = str_replace("|","",$act);
		$html = file_get_contents(DIR."/html/404.html");
		if (file_exists(DIR."/html/{$act}.html")) $html = file_get_contents(DIR."/html/{$act}.html");
	break;
}

$request_id = uniqid();
$html = str_replace("%request-id%",$request_id,$html);

echo $html;