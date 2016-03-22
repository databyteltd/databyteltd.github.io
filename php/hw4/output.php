<?php 
	
	require_once('index.php');

	$word = strtolower($_POST['word']);
	$letter = $_GET['letter'];

	foreach ($fruit as $key => $value) {
		foreach ($fruit[$key] as $key => $value) {
			if($word == $key || $word == $value){
				echo '<h1>'.strtoupper(substr($key,0,1)).': </h1> <br>';
				echo $key.' : '.$value;
			}
		}
	}

	foreach ($fruit as $key => $value) {
		if($letter == $key){
			echo '<h1>'.strtoupper($key).': </h1><br>';
			foreach ($fruit[$key] as $key => $value) {
				echo $key.' : '.$value.'<br>';
			}
		}
	}

 ?>