function submitRatings() {
	var data = {}
	$('input:checked').each(function() {
		data[($(this).attr('id').slice(2))] = $(this).attr('id')[0];
	});
	console.log(data)
	calculateScores(data);
};

function calculateScores(data) {
	//var allSports = nfl.concat(mlb,nba,nhl)
	var scores = {}
	//add in football score
	var multiplier = 6 - data['football']
	nfl.map(function(curTeam){
		if (curTeam['team'] in scores) {
			scores[curTeam['team']] += curTeam['overall']*multiplier
		}
		else {
			scores[curTeam['team']] = curTeam['overall']
		}
	});

	var multiplier = 6 - data['baseball']
	mlb.map(function(curTeam){
		if (curTeam['team'] in scores) {
			scores[curTeam['team']] += curTeam['overall']*multiplier
		}
		else {
			scores[curTeam['team']] = curTeam['overall']
		}
	});

	var multiplier = 6 - data['basketball']
	nba.map(function(curTeam){
		if (curTeam['team'] in scores) {
			scores[curTeam['team']] += curTeam['overall']*multiplier
		}
		else {
			scores[curTeam['team']] = curTeam['overall']
		}
	});

	var multiplier = 6 - data['hockey']
	nhl.map(function(curTeam){
		if (curTeam['team'] in scores) {
			scores[curTeam['team']] += curTeam['overall']*multiplier
		}
		else {
			scores[curTeam['team']] = curTeam['overall']
		}
	});





	console.log(scores);
};