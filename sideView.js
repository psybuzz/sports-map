/**
 * This file contains logic related to the side pane view, including bars
 * and the infobox.
 */

function loadSidebar (place) {
	state.currentCity = place;

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

		console.log(team, bestWidth)
	}

	$('#city-name').text(place);
	$('#scoreList').html(scoreHTML);
	$('#infobox').hide();
}

function loadInfobox (team) {
	$('#team-name').text(team.name);
	$('#info-attendance').text(team.attendance);
	$('#info-championships').text(team.championships);
	$('#info-founded').text(team.founded);
	$('#info-retired').text(team.retired);
	$('#info-arena').text(team.arena);
	$('#info-owner').text(team.owner);

	var sport = getSportFromTeam(team.name);
	var sportData = allData[sport];
	var bestTeamIndex = sportData.map(function (t){ return t.team; })
			.indexOf(team.name);
	$('#info-description').text((bestTeamIndex+1) + ' in ' + sport.toUpperCase());
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

$('#scoreList').mousemove(function (e) {
	$('#infobox').show();
	var box = e.target;
	if (box && (box.classList.contains('scoreBox') ||
				box.classList.contains('scoreValue'))){
		box = box.classList.contains('scoreValue') ? box.parentElement : box;
		var boxIndex = $(box).index();
		var bestTeams = teams.filter(function (team){
			return team.place == state.currentCity;
		});

		loadInfobox(bestTeams[boxIndex]);
	}
}).mouseout(function () {
	$('#infobox').hide();
});
