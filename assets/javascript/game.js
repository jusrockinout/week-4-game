var scorpion = {
	name: "scorpion",
	attack: 10,
	base: 10,
	health: 100,
	counter: 5
}

var subZero = {

	name: "subZero",
	attack: 10,
	base: 10,
	health: 100,
	counter: 5,
}

var raiden = {
	name: "raiden",
	attack: 10,
	base: 10,
	health: 100,
	counter: 5,
}

var kitana = {
	name: "kitana",
	attack: 10,
	base: 10,
	health: 100,
	counter: 5,	
}

var player;

var enemy; 

var enemiesDefeated = 0

$("#scorpion").data(scorpion);
$("#subZero").data(subZero);
$("#kitana").data(kitana);
$("#raiden").data(raiden);

// function chooseCharacter()

// {

// 	var $this = $(this);
// 	characters = $this;
// 	$("#yourCharacter").append($this.detach())
// }


// Moves selected character to your character div and the rest to enemies div; also sets classes

$( ".character" ).click(function(){
	$(this).removeClass("nonChosenCharacters")
	.appendTo('#yourCharacter');
	$(".nonChosenCharacters")
	.removeClass("chosenCharacters")
	.appendTo("#enemiesToAttack")
	.addClass("enemyCharacter");
	player = $(this);
	$("#chooseyourCharacter").remove();
	$(".character").off("click");



// Moves seelected characte to defender zone

$(".enemyCharacter").click(function() {
	$(this).appendTo($("#defender"));
	enemy = $(this);
	$("#enemiesToAttack").addClass('hidden');
	
});
});

$("#Attack").click(function() {

	var enemyCurrentHealth = (enemy.data("health")) - (player.data("attack"));
	console.log(enemy.children());
	enemy.data("health", enemyCurrentHealth);
	enemy.children(".health").text("Current HP: " + enemyCurrentHealth);	

	var attackPowerIncrease = (player.data('attack')) + (player.data('base'));
	player.data("attack", attackPowerIncrease);
	player.children(".attack").text("Attack Power: " + attackPowerIncrease);

	$(".attackDmgInfo").text($('#yourCharacter').data('name') + " has done " + attackPowerIncrease + " dmg to " + $('#defender').data('name'));
	$(".defenderDmgInfo").text($('#defender').data('name') + " has done " + $('.defenderCharacter').data('counterAttackPower') + " dmg to " + $('.chosenCharacters').attr('name'));


	if (enemyCurrentHealth <= 0){

		enemiesDefeated = enemiesDefeated + 1;
		$(".defeated").text("You have defeated " + enemy.data("name"));
		$(".defender").empty();
		$("#enemiesToAttack").removeClass('hidden');
	}

	if (enemyCurrentHealth > 0){
		var playerCurrentHealth = (player.data("health")) - (enemy.data("counter"));
		player.data("health", playerCurrentHealth);
		player.children(".health").text("Current HP: " + playerCurrentHealth);
	}

	if (enemiesDefeated == 3) {
		$("#enemiesToAttack").addClass('hidden');
		alert("You Win")

	}

	$(".defenderText h3").text($("#defender").data("name") + " win!")

	$(".attackButton").detach();

	// $(".fightInfo").html("<p class='defeated textHover'>You have lost, click me to try again.</p>");
	// $(".defeated").on("click", function(){
	// 	resetGame();
})
$("#yourCharacter").empty();	



	// if ($(".enemiesCharacters").is(":empty") && $(".defenderSection").is(":empty") &&
	// 	$("#yourCharacter").attr("healthPoints") > 0 && $(".johanna").attr("healthPoints") != 400){
	// 	$("#yourCharacter").appendTo(".defenderSection")
	// .removeId("#yourCharacter");












