/**
 * This file contains logic related to the side pane view, including bars
 * and the infobox.
 */

function loadSidebar (place) {
	var bestTeams = teams.filter(function (team){
		return team.place == place;
	});

	var scoreHTML = '';
	for (var i = 0; i < bestTeams.length; i++) {
		var team = bestTeams[i];
		var sport = getSportFromTeam(team.name);
		var sportData = allData[sport];
		var bestTeamIndex = sportData.map(function (t){ return t.team; })
				.indexOf(team.name);
		var bestWidth = 100 - (100 * bestTeamIndex / sportData.length);
		scoreHTML += '<li class="scoreBox">' +
					'<span class="scoreValue" style="width:'+bestWidth+'%">' +
					'</span>' +
				'</li>';
	}

	$('#city-name').text(place);
	$('#scoreList').html(scoreHTML);

	$('#team-name').text(bestTeams[0].name);
	$('#info-attendance').text(bestTeams[0].attendance);
	$('#info-championships').text(bestTeams[0].championships);
	$('#info-founded').text(bestTeams[0].founded);
	$('#info-retired').text(bestTeams[0].retired);
	$('#info-arena').text(bestTeams[0].arena);
	$('#info-owner').text(bestTeams[0].owner);

}

function getSportFromTeam (team) {
	var sport = null;
	if (nfl.filter(function (e){ return e.team == team }).length > 0){
		sport = 'nfl';
	} else if (mlb.filter(function (e){ return e.team == team }).length > 0){
		sport = 'mlb';
	} else if (nba.filter(function (e){ return e.team == team }).length > 0){
		sport = 'nba';
	} else {
		sport = 'nhl';
	}

	return sport;
}
