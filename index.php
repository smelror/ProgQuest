<?php
define("VERSION", 0.2);
define("TITLE", "Adventures in Rudevalley");

?>
<!DOCTYPE html>
<html>
<head>
	<title>
		<?php echo TITLE." ".VERSION; ?>
	</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<script src="http://code.jquery.com/jquery-1.10.2.min.js" type="text/javascript"></script>
	<script src="game.js" type="text/javascript"></script>
</head>
<body>
	<div id="wrapper">
		<h1><?php echo TITLE." ".VERSION; ?></h1>
		<div id="main">
			<div id="textWindowOuter">
				<div id="textWindow">
					<p>Welcome to this game!</p>
					<p>Some text should be here...</p>
					<p class="actionLine"><span class="attack">attack</span> <span class="heal">heal</span> <span class="flee">run away</a>
				</div>
			</div>
			<div id="playerWindow">
				<div class="pull-left statsBox">
					<h2 class="noMargins">Level <span id="level">1</span></h2>
					<p><span class="statName">STR</span> <span id="stStr">1</span><button class="btn-grey btn-small statbutton" id="str">+</button></p>
					<p><span class="statName">DEX</span> <span id="stDex">1</span><button class="btn-grey btn-small statbutton" id="dex">+</button></p>
					<p><span class="statName">INT</span> <span id="stInt">1</span><button class="btn-grey btn-small statbutton" id="int">+</button></p>
					<p><span class="statName">Available</span> <span id="stPoints">3</span></p>
				</div>
				<div class="pull-left progress-status full noMarginRight">
					<p>Asdasdas, the Drunk Warrior</p>
				</div>
				<div class="pull-right align-right statsBox">
					<p><span id="expCur">0</span> / <span id="expMax">100</span></p>
					<p><span id="totalExp">0</span> total</p>
				</div>
				<div class="pull-left progress-status half">
					<p class="pull-left monod" title="Hit points">HP</p>
					<div class="progress-container pull-left">
						<p><span id="hpCur">10</span> / <span id="hpMax">10</span></p>
						<div class="progress-bar" role="progressbar" style="width: 100%;" id="hpBar"></div>
					</div>
				</div><!-- HP -->
				<div class="pull-left progress-status half">
					<p class="pull-left monod" title="Mana points">MP</p>
					<div class="progress-container pull-left">
						<p><span id="mpCur">10</span> / <span id="mpMax">10</span></p>
						<div class="progress-bar" role="progressbar" style="width: 100%;" id="mpBar"></div>
					</div>
				</div><!-- MP -->
				<div class="pull-left progress-status full noMarginRight">
					<p class="pull-left monod" title="Experience points">XP</p>
					<div class="progress-container pull-left">
						<div class="progress-bar" role="progressbar" style="width: 0%;" id="expBar"></div>
					</div>
				</div><!-- XP -->
			</div><!-- playerWindow -->
		</div><!-- main -->
		<div id="side">
			<p><button class="btn-green" id="gameState">Start level</button></p>
		</div><!-- side -->
	</div><!-- wrapper -->
</body>
</html>