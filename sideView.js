/**
 * This file contains logic related to the side pane view, including bars
 * and the infobox.
 */

var state = {
	currentCity: null
}

function loadSidebar (place) {
	state.currentCity = place;

	var bestTeams = teams.filter(function (team){
		return team.place == place;
	});

	var scoreHTML = '';
	var bestWidths = [];
	for (var i = 0; i < bestTeams.length; i++) {
		var team = bestTeams[i];
		var sport = getSportFromTeam(team.name);
		var sportData = allData[sport];
		var bestTeamIndex = sportData.map(function (t){ return t.team; })
				.indexOf(team.name);
		var bestWidth = 100 - (100 * bestTeamIndex / sportData.length);
		bestWidths[i] = bestWidth;
		scoreHTML += '<li class="team-entry">'
		if (team.place == 'New York'){
			scoreHTML += '<img class="team-icon" src="'+nyIcons[team.name]+'">';
		} else {
			scoreHTML += '<img class="team-icon" src="'+sportIcons[getSportFromTeam(team.name)]+'">';
		}
		scoreHTML += '<div class="scoreBox">' +
							'<span class="scoreValue" style="width:1%">' +
							'</span>' +
						'</div>' +
					'</li>';
					console.log(scoreHTML)

		console.log(team, bestWidth)
	}

	$('#city-name').text(place);
	$('#scoreList').html(scoreHTML);
	$('#infobox').hide();

	// Animate the widths.
	setTimeout(function () {
		for (var i = 0; i < bestWidths.length; i++) {
			$('.scoreValue')[i].style.width = bestWidths[i]+'%';
		}
	}, 1);
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
	$('#info-description').text((bestTeamIndex+1 || 1) + ' in ' + sport.toUpperCase());
	$('#league-icon').attr('src', getSportFromTeam(team.name)+'.png');
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
	if (box && (box.classList.contains('teamEntry') ||
				box.classList.contains('scoreValue') ||
				box.classList.contains('scoreBox') ||
				box.classList.contains('team-icon'))){
		box = box.classList.contains('scoreValue') ? box.parentElement.parentElement : box;
		box = box.classList.contains('scoreBox') ? box.parentElement : box;
		box = box.classList.contains('team-icon') ? box.parentElement : box;
		var boxIndex = $(box).index();
		var bestTeams = teams.filter(function (team){
			return team.place == state.currentCity;
		});
		$('#infobox')[0].style.top = (e.pageY-120) + 'px';
		$('.team-icon').addClass('lighter');
		$(box).find('.team-icon').removeClass('lighter');

		loadInfobox(bestTeams[boxIndex]);
	}
}).mouseout(function () {
	$('#infobox').hide();
});

$('#infobox').mouseout(function (e) {
	$('.team-icon').removeClass('lighter');
});
