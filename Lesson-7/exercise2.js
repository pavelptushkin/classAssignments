var littleOne = [];
var i = 0;
littleOne[0] = "The little one stops to suck her thumb";
littleOne[1] = "The little one stops to tie his shoe";
littleOne[2] = "The little one stops to climb a tree";
littleOne[3] = "The little one stops to shut the door";
littleOne[4] = "The little one stops to take a dive";
littleOne[5] = "The little one stops to pick up sticks";
littleOne[6] = "The little one stops to pray to heaven";
littleOne[9] = "The little one stops to shut The End ";
littleOne[7] = "The little one stops to roll a skate";
littleOne[8] = "The little one stops to check the time";

var howTheyMarch = ["one by one", "two by two", "three by three", "four by four", "five by five", "six by six", "seven by seven", "eight by eight", "nine by nine", "ten by ten"];
function howManyByHowMany(number){
	
	var numbers = howTheyMarch[i];
	var hurrah = " hurrah, hurrah \n";
	var march = "The ants go marching " + numbers;
	console.log(march + hurrah + march + hurrah + march + '\n' + littleOne[i]);
	i++;
}

function theAntsGoMarching(){
	for (var i = 0; i < howTheyMarch.length; i++){
		howManyByHowMany();
		console.log("And they all go marching down to the ground" + "\n" + "To get out of the rain, BOOM! BOOM! BOOM! " );

	}
}
theAntsGoMarching();