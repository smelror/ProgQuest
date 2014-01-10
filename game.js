// http://net.tutsplus.com/tutorials/javascript-ajax/the-basics-of-object-oriented-javascript/
// http://www.thinkful.com/learn/intro-to-jquery
var gameTimer = {
	timer: null,
	start: function() {
		timer = setInterval(LevelGame.grantExp, 350);
	},
	stop: function() {
		clearInterval(timer);
	}
};

QuestWindow = {
	win: "#textWindow",
	post: function( line ) {
		$(this.win).append("<p>"+line+"</p>");
		$(this.win).scrollTop( $(this.win).height() );
	}
};

// Player object
function Player(name, pclass) {

	this.playerName = name;
	this.playerClass = pclass;
	this._str = 1;
	this._dex = 1;
	this._int = 1;

	// Public methods
	this.getName = function() {
		return this.playerName;
	};

	this.getClass = function() {
		return this.playerClass;
	};

	this.testThis = function() {
		console.log("Hei " + this.playerName + ", som er en " + this.playerClass);
	};
	
}; // Player()


function Enemy() {

	// Constructor
	this.init = function() {};


}; // Enemy()

function Battle() {

	this.init = function() {

	};

}; // Battle()

// Literal type
LevelGame = {
	self: "LevelGame",
	level: 1,

	// ========================================
	// 				EXPERIENCE
	// ========================================
	currentExp: 0,
	currentMax: 100,
	maxIncrease: 155,
	totalExp: 0,

	grantExp: function() {
		var grant = 1 + Math.floor(Math.random() * 12);
		var cur = LevelGame.currentExp;
		if( (cur + grant) > LevelGame.currentMax) {
			LevelGame.levelUp(grant);
		} else {
			LevelGame.updateExp(grant);
		}
	},

	levelUp: function(grant) {
		LevelGame.level += 1;
		LevelGame.currentExp = 0;
		LevelGame.totalExp += grant;
		LevelGame.addPoints();
		LevelGame.increaseMax();
		$("#expBar").css('width', LevelGame.currentExp+"%");
		$("#expCur").text(LevelGame.currentExp);
		$("#expMax").text(LevelGame.currentMax);
		$("#level").text(LevelGame.level);
		$("#totalExp").text( LevelGame.totalExp );
		QuestWindow.post("You leveled up!");
	},

	// Updates the exp and visual style
	// grant: the experience to be granted
	updateExp: function(grant) {
		var barWidth = Math.floor( (grant + LevelGame.currentExp) / LevelGame.currentMax * 100 );
		LevelGame.currentExp += grant;
		LevelGame.totalExp += grant;
		$("#expBar").css('width', barWidth+"%");
		$("#expCur").text( LevelGame.currentExp );
		$("#totalExp").text( LevelGame.totalExp );
	},

	increaseMax: function() {
		LevelGame.currentMax = LevelGame.currentMax + Math.floor(Math.random() * LevelGame.maxIncrease);
	},

	// ========================================
	// 				STAT POINTS
	// ========================================
	strength: 1,
	dexterity: 1,
	intelligence: 1,
	points: 3,

	addPoints: function() {
		LevelGame.points += 3;
		$("#stPoints").text(LevelGame.points);
		LevelGame.toggleStatButtons();
	},

	addStat: function(stat) {
		if(LevelGame.points <= 0) {
			console.log("Cannot add non-existing points!");
			return;
		}
		switch(stat) {
			case "str": LevelGame.strength++; break;
			case "dex":	LevelGame.dexterity++; break;
			case "int":	LevelGame.intelligence++; break;
			default: break;
		}
		LevelGame.points--;
		LevelGame.updateStats();
	},

	updateStats: function() {
		$("#stStr").text(LevelGame.strength);
		$("#stDex").text(LevelGame.dexterity);
		$("#stInt").text(LevelGame.intelligence);
		$("#stPoints").text(LevelGame.points);
		if(LevelGame.points == 0) {
			LevelGame.toggleStatButtons();
		}
	},

	toggleStatButtons: function() {
		if(LevelGame.points == 0) {
			$(".statbutton").hide();
			$("#stPoints").css('color', '#8A8A8A');
		} else {
			$(".statbutton").show();
			$("#stPoints").css('color', '#47BE5A');
		}
	}

}; // LevelGame

$(function() {
	$("button#gameState").on("click", function() {
		if( $(this).hasClass('btn-green') ) {
			$(this).removeClass('btn-green');
			$(this).addClass('btn-red');
			$(this).text("STOPP");
			gameTimer.start();
		} else {
			$(this).removeClass('btn-red');
			$(this).addClass('btn-green');
			$(this).text("Start level");
			gameTimer.stop();
		}
	});

	$("button.statbutton").on("click", function() {
		LevelGame.addStat(this.id);
	});

	var p = new Player("Vegard", "Tulling");
	// p.testThis();
});