<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>title</title>
</head>
<body>
	<form action="output.php" method="POST">
		<h1>簡易字典查詢系統</h1>
		<p>請輸入要查詢的中/英文單字：<input type="text" name="word"></p>
		<input type="submit" value="送出查詢">
		<p>或直接瀏覽單字列表
			<?php 
				require_once('index.php');
				foreach (range('a', 'z') as $letter) {
				    foreach ($fruit as $key => $value) {
				    	if($letter == $key){
				    		echo '<a href="output.php?letter='.$letter.'">'.$letter.'</a>';
				    		echo ' ';
				    	}
				    }
				}
			?>
		</p>
	</form>
</body>
</html>