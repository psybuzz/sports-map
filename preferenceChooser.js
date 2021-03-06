function submitRatings() {
	// Slide the choice view out of sight.
	$('#choiceView').show(0)
			.addClass('gone')
			.delay(600)
			.hide(600, function() {
				$('#mapView').fadeIn('fast');
			});

	var data = {}
	$('input:checked').each(function() {
		data[($(this).attr('id').slice(2))] = $(this).attr('id')[0];
	});
	console.log(data)
	var scores = calculateScores(data);
	console.log(scores)
	var topCities = calculateRanking(scores)
	console.log(topCities)

	var bestCity = topCities[0];
	loadSidebar(bestCity);
};
// submitRatings();


function calculateScores(data) {
	//var allSports = nfl.concat(mlb,nba,nhl)
	var scores = {}
	//add in football score
	var multiplier = 3 - data['football']
	nfl.map(function(curTeam){
		if (curTeam['place'] in scores) {
			scores[curTeam['place']] += curTeam['overall']*multiplier
		}
		else {
			scores[curTeam['place']] = curTeam['overall']
		}
	});

	var multiplier = 3 - data['baseball']
	mlb.map(function(curTeam){
		if (curTeam['place'] in scores) {
			scores[curTeam['place']] += curTeam['overall']*multiplier
		}
		else {
			scores[curTeam['place']] = curTeam['overall']
		}
	});

	var multiplier = 3 - data['basketball']
	nba.map(function(curTeam){
		if (curTeam['place'] in scores) {
			scores[curTeam['place']] += curTeam['overall']*multiplier
		}
		else {
			scores[curTeam['place']] = curTeam['overall']
		}
	});

	var multiplier = 3 - data['hockey']
	nhl.map(function(curTeam){
		if (curTeam['place'] in scores) {
			scores[curTeam['place']] += curTeam['overall']*multiplier
		}
		else {
			scores[curTeam['place']] = curTeam['overall']
		}
	});

	return scores
};

function calculateRanking(scores){
	var topCities = Object.keys(scores).sort(function(team1,team2){
		return scores[team2] - scores[team1]
	}).slice(0,5);
	return topCities
}
