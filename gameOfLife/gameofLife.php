

<!DOCTYPE html>
<html>
<head>
	<meta charset=utf-8>
	<link rel="stylesheet" type="text/css" href="game.css">
	<title>Game of Life</title>
	<script type="text/javascript" src="game.js"></script>
    <script type="text/javascript">
		function load(){
			setup(50, 50);
			glider();
		}
    </script>
</head>
<body onload="load()">

<?php

$Color = "white";
$Text = $_POST['username'];
  echo '<div style="Color:'.$Color.'">user: '.$Text.'</div>'
?>

<div class="bg">


	<h1>Game of Life</h1>
	<br>
	<br>
		<div class = "grid" style= "height: 500px; width: 500px;">
			<table id="grid" class="board">
				<tr>
					<td id="TestCell" class="boardcell" onclick="Test()">
						&nbsp;
					</td>
				</tr>
			</table>
		</div>
		<br>
		<br>
		<br>
		<br>
		<br>
		<div class = "iterations">
			<span>Generations per run: &nbsp;</span>
			<input id="IterCount" size="7" type="text" value="23">
		</div>
		<br>
		<div class = "buttons">
			<input id="next" onclick="next()" type="button" value="Step"/>
			<input id="start" onclick="start()" type="button" value="Run"/>
			<input id="stop" onclick="stop()" type="button" value="Stop"/>
			<input id="clear" onclick="commandClear()" type = "button" value = "Clear"/>
		</div>
		<br>
		<div class = "patterns">
			<p>Patterns</p>
			<input id = "glider" onclick="glider()" type = "button" value = "Glider">
			<input id = "loaf" onclick="loaf()" type = "button" value = "Loaf">
			<input id = "blinker" onclick="patternBlinker()" type = "button" value = "Blinker">
			<input id = "randomGrid" onclick="randomGrid()" type = "button" value="Random">
		</div>

			<br>
	    <div id="DivStatus" class="StatusNormal"></div>
	    <div id="LogDiv" style="visibility: hidden">Log:</div>
	</div>
</body>
</html>
