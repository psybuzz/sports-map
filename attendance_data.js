var nfl = [
	{team: "Dallas", home: 91134, road: 65438, overall: 80121},
	{team: "Washington", home: 78839, road: 67501, overall: 73980},
	{team: "NY Giants", home: 78704, road: 76399, overall: 77387},
	{team: "NY Jets", home: 78160, road: 70089, overall: 74701},
	{team: "Green Bay", home: 78067, road: 65863, overall: 71093},
	{team: "Denver", home: 76945, road: 73303, overall: 75731},
	{team: "Kansas City", home: 75091, road: 70824, overall: 72531},
	{team: "Carolina", home: 73730, road: 67204, overall: 70001},
	{team: "New Orleans", home: 73004, road: 73140, overall: 73094},
	{team: "Houston", home: 71771, road: 74228, overall: 72999},
	{team: "Baltimore", home: 71127, road: 64235, overall: 68173},
	{team: "Miami", home: 70606, road: 66183, overall: 68837},
	{team: "Atlanta", home: 70578, road: 65559, overall: 67710},
	{team: "Philadelphia", home: 69596, road: 64871, overall: 68651},
	{team: "Buffalo", home: 69306, road: 65652, overall: 67740},
	{team: "Tennessee", home: 69143, road: 67574, overall: 68246},
	{team: "New England", home: 68756, road: 67444, overall: 68006},
	{team: "Seattle", home: 68434, road: 68431, overall: 68432},
	{team: "Cleveland", home: 67415, road: 65027, overall: 66221},
	{team: "Indianapolis", home: 65356, road: 69775, overall: 67250},
	{team: "Pittsburgh", home: 63754, road: 69688, overall: 67710},
	{team: "San Diego", home: 63300, road: 61077, overall: 62347},
	{team: "Detroit", home: 63216, road: 67986, overall: 65260},
	{team: "Jacksonville", home: 62713, road: 68832, overall: 66209},
	{team: "Chicago", home: 62191, road: 74177, overall: 68184},
	{team: "Arizona", home: 61334, road: 69113, overall: 65223},
	{team: "Tampa Bay", home: 60802, road: 68744, overall: 64773},
	{team: "Cincinnati", home: 57456, road: 68740, overall: 63098},
	{team: "St. Louis", home: 57341, road: 64759, overall: 59813},
	{team: "Oakland", home: 53164, road: 73458, overall: 61281},
	{team: "Minnesota", home: 52245, road: 68863, overall: 61741},
	{team: "San Francisco", home: -1, road: 71661, overall: 71661}
]

var mlb = [
	{team: "LA Dodgers", home: 46695, road: 33830, overall: 40262},
	{team: "St. Louis", home: 43711, road: 32022, overall: 37867},
	{team: "NY Yankees", home: 42520, road: 35512, overall: 38994},
	{team: "San Francisco", home: 41588, road: 32936, overall: 37262},
	{team: "LA Angels", home: 38221, road: 28174, overall: 33229},
	{team: "Boston", home: 36494, road: 31867, overall: 34181},
	{team: "Detroit", home: 36014, road: 28800, overall: 32407},
	{team: "Milwaukee", home: 34535, road: 32328, overall: 33432},
	{team: "Texas", home: 33564, road: 27155, overall: 30360},
	{team: "Colorado", home: 33090, road: 31659, overall: 32375},
	{team: "Chicago Cubs", home: 32742, road: 33096, overall: 32919},
	{team: "Washington", home: 31844, road: 29864, overall: 30854},
	{team: "Baltimore", home: 30805, road: 29671, overall: 30235},
	{team: "Cincinnati", home: 30576, road: 32140, overall: 31358},
	{team: "Pittsburgh", home: 30155, road: 33316, overall: 31715},
	{team: "Philadelphia", home: 29924, road: 31136, overall: 30530},
	{team: "Toronto", home: 29327, road: 29708, overall: 29518},
	{team: "Atlanta", home: 29065, road: 30804, overall: 29934},
	{team: "Minnesota", home: 27785, road: 26943, overall: 27369},
	{team: "San Diego", home: 27103, road: 32877, overall: 29972},
	{team: "NY Mets", home: 26860, road: 32217, overall: 29555},
	{team: "Arizona", home: 25601, road: 31481, overall: 28504},
	{team: "Seattle", home: 25485, road: 28158, overall: 26813},
	{team: "Oakland", home: 25045, road: 28757, overall: 26912},
	{team: "Kansas City", home: 24154, road: 26872, overall: 25513},
	{team: "Houston", home: 21627, road: 27191, overall: 24409},
	{team: "Miami", home: 21386, road: 28892, overall: 25139},
	{team: "Chicago White Sox", home: 20896, road: 28519, overall: 24755},
	{team: "Cleveland", home: 18428, road: 29107, overall: 23868},
	{team: "Tampa Bay", home: 17857, road: 28685, overall: 23271},
]

var nba = [
	{team: "Bulls", home: 21716, road: 17551, overall: 19634},
	{team: "Mavericks", home: 19950, road: 17268, overall: 18609},
	{team: "NY Knicks", home: 19812, road: 17422, overall: 18617},
	{team: "Heat", home: 19781, road: 19190, overall: 19486},
	{team: "Trail Blazers", home: 19746, road: 17312, overall: 18529},
	{team: "Warriors", home: 19596, road: 17526, overall: 18561},
	{team: "Clippers", home: 19212, road: 17218, overall: 18215},
	{team: "Lakers", home: 18828, road: 17845, overall: 18337},
	{team: "Spurs", home: 18415, road: 17627, overall: 18021},
	{team: "Raptors", home: 18252, road: 16702, overall: 17477},
	{team: "Thunder", home: 18203, road: 18170, overall: 18186},
	{team: "Jazz", home: 18175, road: 17295, overall: 17735},
	{team: "Rockets", home: 18123, road: 17427, overall: 17775},
	{team: "Celtics", home: 18107, road: 17484, overall: 17796},
	{team: "Pacers", home: 17501, road: 17872, overall: 17686},
	{team: "Cavaliers", home: 17329, road: 17388, overall: 17358},
	{team: "Nets", home: 17251, road: 17528, overall: 17390},
	{team: "Wizards", home: 17026, road: 17183, overall: 17104},
	{team: "Nuggets", home: 16899, road: 17211, overall: 17055},
	{team: "Grizzlies", home: 16718, road: 17269, overall: 16993},
	{team: "Pelicans", home: 16390, road: 17397, overall: 16894},
	{team: "Kings", home: 16291, road: 16859, overall: 16575},
	{team: "Magic", home: 16245, road: 16583, overall: 16414},
	{team: "Suns", home: 15871, road: 17250, overall: 16560},
	{team: "Hornets", home: 15518, road: 17026, overall: 16272},
	{team: "Pistons", home: 15005, road: 17280, overall: 16143},
	{team: "Timberwolves", home: 14564, road: 17605, overall: 16085},
	{team: "Hawks", home: 14339, road: 17274, overall: 15807},
	{team: "76ers", home: 13869, road: 17441, overall: 15655},
	{team: "Bucks", home: 13487, road: 17013, overall: 15250}
]

var nhl = [
	{team: "Chicago", home: 22623, road: 17811, overall: 20217},
	{team: "Detroit", home: 22149, road: 17837, overall: 19993},
	{team: "Montreal", home: 21273, road: 17893, overall: 19583},
	{team: "Philadelphia", home: 19839, road: 17037, overall: 18438},
	{team: "Vancouver", home: 19770, road: 17058, overall: 18414},
	{team: "Toronto", home: 19446, road: 19950, overall: 19698},
	{team: "Calgary", home: 19302, road: 16864, overall: 18083},
	{team: "Los Angeles", home: 19017, road: 16887, overall: 17952},
	{team: "Pittsburgh", home: 18618, road: 19166, overall: 18892},
	{team: "Tampa Bay", home: 18612, road: 17367, overall: 17989},
	{team: "Buffalo", home: 18579, road: 17405, overall: 17992},
	{team: "Minnesota", home: 18505, road: 16899, overall: 17702},
	{team: "Ottawa", home: 18108, road: 17392, overall: 17750},
	{team: "Washington", home: 18054, road: 17372, overall: 17713},
	{team: "NY Rangers", home: 18006, road: 19572, overall: 18789},
	{team: "Boston", home: 17565, road: 18106, overall: 17835},
	{team: "San Jose", home: 17133, road: 17518, overall: 17325},
	{team: "St. Louis", home: 17025, road: 17445, overall: 17235},
	{team: "Edmonton", home: 16828, road: 17253, overall: 17040},
	{team: "Nashville", home: 16600, road: 17265, overall: 16932},
	{team: "Anaheim", home: 16469, road: 18404, overall: 17436},
	{team: "Colorado", home: 16295, road: 17222, overall: 16759},
	{team: "Carolina", home: 15483, road: 17185, overall: 16334},
	{team: "New Jersey", home: 15257, road: 17507, overall: 16382},
	{team: "Winnipeg", home: 15004, road: 17048, overall: 16026},
	{team: "NY Islanders", home: 14740, road: 17346, overall: 16043},
	{team: "Columbus", home: 14698, road: 17256, overall: 15977},
	{team: "Dallas", home: 14658, road: 17219, overall: 15939},
	{team: "Florida", home: 14177, road: 17476, overall: 15827},
	{team: "Arizona", home: 13775, road: 16847, overall: 15311}
]

var teams = [
	{name: "Bulls", founded: 1966, championships: 6, retired: [4, 10, 23, 33], owner: 'Jerry Reinsdorf'},
	{name: "Mavericks", founded: 1980, championships: 1, retired: [15, 22], owner: 'Mark Cuban'},
	{name: "NY Knicks", founded: 1946, championships: 2, retired: [10, 12, 15, 15, 19, 22, 24, 33, 613], owner: 'The Madison Square Garden Company'},
	{name: "Heat", founded: 1988, championships: 3, retired: [10, 23, 33], owner: 'Micky Arison'},
	{name: "Trail Blazers", founded: 1970, championships: 1, retired: [1, 13, 14, 15, 20, 22, 30, 30, 32, 36, 45, 77], owner: 'Paul Allen'},
	{name: "Warriors", founded: 1946, championships: 3, retired: [13, 14, 16, 17, 24, 42], owner: 'Joe Lacob'},
	{name: "Clippers", founded: 1970, championships: 0, retired: [], owner: 'Steve Ballmer'},
	{name: "Lakers", founded: 1947, championships: 16, retired: [13, 22, 25, 32, 33, 34, 42, 44, 52], owner: 'Jerry Buss family trust'},
	{name: "Spurs", founded: 1967, championships: 5, retired: [00, 6, 12, 13, 32, 44, 50], owner: 'Peter Holt'},
	{name: "Raptors", founded: 1995, championships: 0, retired: [], owner: 'Maple Leaf Sports & Entertainment'},
	{name: "Thunder", founded: 1967, championships: 1, owner: 'Professional Basketball Club LLC'},
	{name: "Jazz", founded: 1974, championships: 0, retired: [1, 4, 7, 9, 12, 14, 32, 35, 53], owner: 'Gail Miller'},
	{name: "Rockets", founded: 1967, championships: 2, retired: [22, 23, 24, 34, 45], owner: 'Leslie Alexander'},
	{name: "Celtics", founded: 1946, championships: 17, retired: [00, 1, 2, 3, 6, 10, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 31, 32, 33, 35], owner: 'Boston Basketball Partners'},
	{name: "Pacers", founded: 1967, championships: 3, retired: [30, 31, 34, 35, 529], owner: 'Herb Simon'},
	{name: "Cavaliers", founded: 1970, championships: 0, retired: [7, 11, 22, 25, 34, 42, 43], owner: 'Dan Gilbert'},
	{name: "Nets", founded: 1967, championships: 2, retired: [3, 4, 5, 23, 25, 32, 52], owner: 'Mikhail Prokhorov'},
	{name: "Wizards", founded: 1961, championships: 1, retired: [10, 11, 25, 41], owner: 'Ted Leonsis'},
	{name: "Nuggets", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Grizzlies", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Pelicans", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Kings", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Magic", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Suns", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Hornets", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Pistons", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Timberwolves", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Hawks", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "76ers", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Bucks", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Dallas", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Washington", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "NY Giants", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "NY Jets", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Green Bay", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Denver", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Kansas City", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Carolina", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "New Orleans", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Houston", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Baltimore", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Miami", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Atlanta", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Philadelphia", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Buffalo", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Tennessee", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "New England", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Seattle", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Cleveland", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Indianapolis", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Pittsburgh", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "San Diego", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Detroit", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Jacksonville", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Chicago", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Arizona", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Tampa Bay", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Cincinnati", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "St. Louis", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Oakland", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Minnesota", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "San Francisco", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Montreal", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Vancouver", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Toronto", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Calgary", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Los Angeles", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Ottawa", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "NY Rangers", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Boston", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "San Jose", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Edmonton", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Nashville", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Anaheim", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Colorado", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "New Jersey", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Winnipeg", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "NY Islanders", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Columbus", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Florida", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "LA Dodgers", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "NY Yankees", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "LA Angels", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Milwaukee", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Texas", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Chicago Cubs", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "NY Mets", founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
	{name: "Chicago White Sox" founded: 1900, championships: 5, retired: [2, 3, 5, 8 17], owner: 'John "Sports" Doe'},
];

