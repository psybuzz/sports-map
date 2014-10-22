var nfl = [
	{team: "Dallas", home: 91134, road: 65438, overall: 80121, lat: 32.7758, lon: 96.7967},
	{team: "Washington", home: 78839, road: 67501, overall: 73980, lat: 38.8951, lon: 77.0367},
	{team: "NY Giants", home: 78704, road: 76399, overall: 77387, lat: 40.7127, lon: 74.0059},
	{team: "NY Jets", home: 78160, road: 70089, overall: 74701, lat: 40.7127, lon: 74.0059},
	{team: "Green Bay", home: 78067, road: 65863, overall: 71093, lat: 44.5010, lon: 88.0620},
	{team: "Denver", home: 76945, road: 73303, overall: 75731, lat: 39.7392, lon: 104.9847},
	{team: "Kansas City", home: 75091, road: 70824, overall: 72531, lat: 39.0997, lon: 94.5783},
	{team: "Carolina", home: 73730, road: 67204, overall: 70001, lat: 35.2269, lon: 80.8433},
	{team: "New Orleans", home: 73004, road: 73140, overall: 73094, lat: 29.9667, lon: 90.0500},
	{team: "Houston", home: 71771, road: 74228, overall: 72999, lat: 29.7628, lon: 95.3831},
	{team: "Baltimore", home: 71127, road: 64235, overall: 68173, lat: 39.2833, lon: 76.6167},
	{team: "Miami", home: 70606, road: 66183, overall: 68837, lat: 25.7877, lon: 80.2241},
	{team: "Atlanta", home: 70578, road: 65559, overall: 67710, lat: 33.7550, lon: 84.3900},
	{team: "Philadelphia", home: 69596, road: 64871, overall: 68651, lat: 39.9500 , lon: 75.1667},
	{team: "Buffalo", home: 69306, road: 65652, overall: 67740, lat: 42.9047, lon: 78.8494},
	{team: "Tennessee", home: 69143, road: 67574, overall: 68246, lat: 36.1667, lon: 86.7833},
	{team: "New England", home: 68756, road: 67444, overall: 68006, lat: 42.3581, lon: 71.0636},
	{team: "Seattle", home: 68434, road: 68431, overall: 68432, lat: 47.6097, lon: 122.3331},
	{team: "Cleveland", home: 67415, road: 65027, overall: 66221, lat: 41.4822, lon: 81.6697},
	{team: "Indianapolis", home: 65356, road: 69775, overall: 67250, lat: 39.7910, lon: 86.1480},
	{team: "Pittsburgh", home: 63754, road: 69688, overall: 67710, lat: 40.4417 , lon: 80.0000},
	{team: "San Diego", home: 63300, road: 61077, overall: 62347, lat: 32.7150, lon: 117.1625},
	{team: "Detroit", home: 63216, road: 67986, overall: 65260, lat: 42.3314, lon: 83.0458},
	{team: "Jacksonville", home: 62713, road: 68832, overall: 66209, lat: 30.3369, lon: 81.6614},
	{team: "Chicago", home: 62191, road: 74177, overall: 68184, lat: 41.8369, lon: 87.6847},
	{team: "Arizona", home: 61334, road: 69113, overall: 65223, lat: 33.4500, lon: 112.0667},
	{team: "Tampa Bay", home: 60802, road: 68744, overall: 64773, lat: 27.7625, lon: 82.5458},
	{team: "Cincinnati", home: 57456, road: 68740, overall: 63098, lat: 39.1000, lon:84.5167},
	{team: "St. Louis", home: 57341, road: 64759, overall: 59813, lat:38.6272 , lon:90.1978},
	{team: "Oakland", home: 53164, road: 73458, overall: 61281, lat: 37.8044, lon:122.2708},
	{team: "Minnesota", home: 52245, road: 68863, overall: 61741, lat:44.9833 , lon:93.2667},
	{team: "San Francisco", home: -1, road: 71661, overall: 71661, lat: 37.7833, lon: 122.4167}
]

var mlb = [
	{team: "LA Dodgers", home: 46695, road: 33830, overall: 40262, lat:34.0500, lon:118.2500},
	{team: "St. Louis", home: 43711, road: 32022, overall: 37867, lat:38.6272 , lon:90.1978},
	{team: "NY Yankees", home: 42520, road: 35512, overall: 38994, lat: 40.7127, lon: 74.0059},
	{team: "San Francisco", home: 41588, road: 32936, overall: 37262, lat: 37.7833, lon: 122.4167},
	{team: "LA Angels", home: 38221, road: 28174, overall: 33229, lat:34.0500, lon:118.2500},
	{team: "Boston", home: 36494, road: 31867, overall: 34181, lat: 42.3581, lon: 71.0636},
	{team: "Detroit", home: 36014, road: 28800, overall: 32407, lat: 42.3314, lon: 83.0458},
	{team: "Milwaukee", home: 34535, road: 32328, overall: 33432, lat: 43.0500, lon: 87.9500},
	{team: "Texas", home: 33564, road: 27155, overall: 30360, lat: 32.7050, lon: 97.1228},
	{team: "Colorado", home: 33090, road: 31659, overall: 32375, lat: 39.7392, lon: 104.9847},
	{team: "Chicago Cubs", home: 32742, road: 33096, overall: 32919, lat: 41.8369, lon: 87.6847},
	{team: "Washington", home: 31844, road: 29864, overall: 30854, lat: 38.8951, lon: 77.0367},
	{team: "Baltimore", home: 30805, road: 29671, overall: 30235, lat: 39.2833, lon: 76.6167},
	{team: "Cincinnati", home: 30576, road: 32140, overall: 31358, lat: 39.1000, lon:84.5167},
	{team: "Pittsburgh", home: 30155, road: 33316, overall: 31715, lat: 40.4417 , lon: 80.0000},
	{team: "Philadelphia", home: 29924, road: 31136, overall: 30530, lat: 39.9500 , lon: 75.1667},
	{team: "Toronto", home: 29327, road: 29708, overall: 29518, lat: 43.7000, lon: 79.4000},
	{team: "Atlanta", home: 29065, road: 30804, overall: 29934, lat: 33.7550, lon: 84.3900},
	{team: "Minnesota", home: 27785, road: 26943, overall: 27369, lat:44.9833 , lon:93.2667},
	{team: "San Diego", home: 27103, road: 32877, overall: 29972, lat: 32.7150, lon: 117.1625},
	{team: "NY Mets", home: 26860, road: 32217, overall: 29555, lat: 40.7127, lon: 74.0059},
	{team: "Arizona", home: 25601, road: 31481, overall: 28504, lat: 33.4500, lon: 112.0667},
	{team: "Seattle", home: 25485, road: 28158, overall: 26813, lat: 47.6097, lon: 122.3331},
	{team: "Oakland", home: 25045, road: 28757, overall: 26912, lat: 37.8044, lon:122.2708},
	{team: "Kansas City", home: 24154, road: 26872, overall: 25513, lat: 39.0997, lon: 94.5783},
	{team: "Houston", home: 21627, road: 27191, overall: 24409, lat: 29.7628, lon: 95.3831},
	{team: "Miami", home: 21386, road: 28892, overall: 25139, lat: 25.7877, lon: 80.2241},
	{team: "Chicago White Sox", home: 20896, road: 28519, overall: 24755, lat: 41.8369, lon: 87.6847},
	{team: "Cleveland", home: 18428, road: 29107, overall: 23868, lat: 41.4822, lon: 81.6697},
	{team: "Tampa Bay", home: 17857, road: 28685, overall: 23271, lat: 27.7625, lon: 82.5458},
]

var nba = [
	{team: "Bulls", home: 21716, road: 17551, overall: 19634, lat: 41.8369, lon: 87.6847},
	{team: "Mavericks", home: 19950, road: 17268, overall: 18609, lat: 32.7758, lon: 96.7967},
	{team: "NY Knicks", home: 19812, road: 17422, overall: 18617, lat: 40.7127, lon: 74.0059},
	{team: "Heat", home: 19781, road: 19190, overall: 19486, lat: 25.7877, lon: 80.2241},
	{team: "Trail Blazers", home: 19746, road: 17312, overall: 18529, lat: 45.5200, lon: 122.6819},
	{team: "Warriors", home: 19596, road: 17526, overall: 18561, lat: 37.7833, lon: 122.4167},
	{team: "Clippers", home: 19212, road: 17218, overall: 18215, lat:34.0500, lon:118.2500},
	{team: "Lakers", home: 18828, road: 17845, overall: 18337, lat:34.0500, lon:118.2500},
	{team: "Spurs", home: 18415, road: 17627, overall: 18021, lat:29.4167, lon:98.5000},
	{team: "Raptors", home: 18252, road: 16702, overall: 17477, lat: 43.7000, lon: 79.4000},
	{team: "Thunder", home: 18203, road: 18170, overall: 18186, lat: 35.5000, lon: 98.0000},
	{team: "Jazz", home: 18175, road: 17295, overall: 17735, lat: 40.7500, lon: 111.8833},
	{team: "Rockets", home: 18123, road: 17427, overall: 17775, lat: 29.7628, lon: 95.3831},
	{team: "Celtics", home: 18107, road: 17484, overall: 17796, lat: 42.3581, lon: 71.0636},
	{team: "Pacers", home: 17501, road: 17872, overall: 17686, lat: 39.7910, lon: 86.1480},
	{team: "Cavaliers", home: 17329, road: 17388, overall: 17358, lat: 41.4822, lon: 81.6697},
	{team: "Nets", home: 17251, road: 17528, overall: 17390, lat: 40.7127, lon: 74.0059},
	{team: "Wizards", home: 17026, road: 17183, overall: 17104, lat: 38.8951, lon: 77.0367},
	{team: "Nuggets", home: 16899, road: 17211, overall: 17055, lat: 39.7392, lon: 104.9847},
	{team: "Grizzlies", home: 16718, road: 17269, overall: 16993, lat: 36.1667, lon: 86.7833},
	{team: "Pelicans", home: 16390, road: 17397, overall: 16894, lat: 29.9667, lon: 90.0500},
	{team: "Kings", home: 16291, road: 16859, overall: 16575, lat: 38.5556, lon: 121.4689},
	{team: "Magic", home: 16245, road: 16583, overall: 16414, lat: 28.4158, lon: 81.2989},
	{team: "Suns", home: 15871, road: 17250, overall: 16560, lat: 33.4500, lon: 112.0667},
	{team: "Hornets", home: 15518, road: 17026, overall: 16272, lat: 35.2269, lon: 80.8433},
	{team: "Pistons", home: 15005, road: 17280, overall: 16143, lat: 42.3314, lon: 83.0458},
	{team: "Timberwolves", home: 14564, road: 17605, overall: 16085, lat:44.9833 , lon:93.2667},
	{team: "Hawks", home: 14339, road: 17274, overall: 15807, lat: 33.7550, lon: 84.3900},
	{team: "76ers", home: 13869, road: 17441, overall: 15655, lat: 39.9500 , lon: 75.1667},
	{team: "Bucks", home: 13487, road: 17013, overall: 15250, lat: 43.0500, lon: 87.9500}
]

var nhl = [
	{team: "Chicago", home: 22623, road: 17811, overall: 20217, lat: 41.8369, lon: 87.6847},
	{team: "Detroit", home: 22149, road: 17837, overall: 19993, lat: 42.3314, lon: 83.0458},
	{team: "Montreal", home: 21273, road: 17893, overall: 19583, lat: 45.5000, lon: 73.5667},
	{team: "Philadelphia", home: 19839, road: 17037, overall: 18438, lat: 39.9500 , lon: 75.1667},
	{team: "Vancouver", home: 19770, road: 17058, overall: 18414, lat: 49.2500, lon: 123.1000},
	{team: "Toronto", home: 19446, road: 19950, overall: 19698, lat: 43.7000, lon: 79.4000},
	{team: "Calgary", home: 19302, road: 16864, overall: 18083, lat: 51.0500, lon: 114.0667},
	{team: "Los Angeles", home: 19017, road: 16887, overall: 17952, lat:34.0500, lon:118.2500},
	{team: "Pittsburgh", home: 18618, road: 19166, overall: 18892, lat: 40.4417 , lon: 80.0000},
	{team: "Tampa Bay", home: 18612, road: 17367, overall: 17989, lat: 27.7625, lon: 82.5458},
	{team: "Buffalo", home: 18579, road: 17405, overall: 17992, lat: 42.9047, lon: 78.8494},
	{team: "Minnesota", home: 18505, road: 16899, overall: 17702, lat:44.9833 , lon:93.2667},
	{team: "Ottawa", home: 18108, road: 17392, overall: 17750, lat: 45.4214, lon: 75.6919},
	{team: "Washington", home: 18054, road: 17372, overall: 17713, lat: 38.8951, lon: 77.0367},
	{team: "NY Rangers", home: 18006, road: 19572, overall: 18789, lat: 40.7127, lon: 74.0059},
	{team: "Boston", home: 17565, road: 18106, overall: 17835, lat: 42.3581, lon: 71.0636},
	{team: "San Jose", home: 17133, road: 17518, overall: 17325, lat: 37.3333, lon: 121.9000},
	{team: "St. Louis", home: 17025, road: 17445, overall: 17235, lat:38.6272 , lon:90.1978},
	{team: "Edmonton", home: 16828, road: 17253, overall: 17040, lat:53.5333, lon:113.5000},
	{team: "Nashville", home: 16600, road: 17265, overall: 16932, lat: 36.1667, lon: 86.7833},
	{team: "Anaheim", home: 16469, road: 18404, overall: 17436, lat:33.8361, lon: 117.8897},
	{team: "Colorado", home: 16295, road: 17222, overall: 16759, lat: 39.7392, lon: 104.9847},
	{team: "Carolina", home: 15483, road: 17185, overall: 16334, lat: 35.2269, lon: 80.8433},
	{team: "New Jersey", home: 15257, road: 17507, overall: 16382, lat:40.0000, lon: 74.5000},
	{team: "Winnipeg", home: 15004, road: 17048, overall: 16026, lat:49.8994, lon: 97.1392},
	{team: "NY Islanders", home: 14740, road: 17346, overall: 16043, lat: 40.7127, lon: 74.0059},
	{team: "Columbus", home: 14698, road: 17256, overall: 15977, lat: 39.9833, lon: 82.9833},
	{team: "Dallas", home: 14658, road: 17219, overall: 15939, lat: 32.7758, lon: 96.7967},
	{team: "Florida", home: 14177, road: 17476, overall: 15827, lat: 25.7877, lon: 80.2241},
	{team: "Arizona", home: 13775, road: 16847, overall: 15311, lat: 33.4500, lon: 112.0667}
]

var teams = [
	{name: "Bulls", founded: 1966, championships: 6, retired: [4, 10, 23, 33], owner: 'Jerry Reinsdorf', arena: 'United Center'},
	{name: "Mavericks", founded: 1980, championships: 1, retired: [15, 22], owner: 'Mark Cuban', arena: 'Reunion Arena'},
	{name: "NY Knicks", founded: 1946, championships: 2, retired: [10, 12, 15, 15, 19, 22, 24, 33, 613], owner: 'The Madison Square Garden Company', arena: 'Madison Square Garden'},
	{name: "Heat", founded: 1988, championships: 3, retired: [10, 23, 33], owner: 'Micky Arison', arena: 'Miami Arena'},
	{name: "Trail Blazers", founded: 1970, championships: 1, retired: [1, 13, 14, 15, 20, 22, 30, 30, 32, 36, 45, 77], owner: 'Paul Allen', arena: 'Moda Center'},
	{name: "Warriors", founded: 1946, championships: 3, retired: [13, 14, 16, 17, 24, 42], owner: 'Joe Lacob', arena: 'Oracle Arena'},
	{name: "Clippers", founded: 1970, championships: 0, retired: [], owner: 'Steve Ballmer', arena: 'Staples Center'},
	{name: "Lakers", founded: 1947, championships: 16, retired: [13, 22, 25, 32, 33, 34, 42, 44, 52], owner: 'Jerry Buss family trust', arena: 'Staples Center'},
	{name: "Spurs", founded: 1967, championships: 5, retired: [00, 6, 12, 13, 32, 44, 50], owner: 'Peter Holt', arena: 'AT&T Center'},
	{name: "Raptors", founded: 1995, championships: 0, retired: [], owner: 'Maple Leaf Sports & Entertainment', arena: 'Air Canada Centre'},
	{name: "Thunder", founded: 1967, championships: 1, owner: 'Professional Basketball Club LLC', arena: 'New Old Arena'},
	{name: "Jazz", founded: 1974, championships: 0, retired: [1, 4, 7, 9, 12, 14, 32, 35, 53], owner: 'Gail Miller', arena: 'New Old Arena'},
	{name: "Rockets", founded: 1967, championships: 2, retired: [22, 23, 24, 34, 45], owner: 'Leslie Alexander', arena: 'New Old Arena'},
	{name: "Celtics", founded: 1946, championships: 17, retired: [00, 1, 2, 3, 6, 10, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 31, 32, 33, 35], owner: 'Boston Basketball Partners', arena: 'New Old Arena'},
	{name: "Pacers", founded: 1967, championships: 3, retired: [30, 31, 34, 35, 529], owner: 'Herb Simon', arena: 'New Old Arena'},
	{name: "Cavaliers", founded: 1970, championships: 0, retired: [7, 11, 22, 25, 34, 42, 43], owner: 'Dan Gilbert', arena: 'New Old Arena'},
	{name: "Nets", founded: 1967, championships: 2, retired: [3, 4, 5, 23, 25, 32, 52], owner: 'Mikhail Prokhorov', arena: 'New Old Arena'},
	{name: "Wizards", founded: 1961, championships: 1, retired: [10, 11, 25, 41], owner: 'Ted Leonsis', arena: 'New Old Arena'},
	{name: "Nuggets", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Grizzlies", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Pelicans", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Kings", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Magic", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Suns", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Hornets", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Pistons", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Timberwolves", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Hawks", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "76ers", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Bucks", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Dallas", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Washington", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "NY Giants", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "NY Jets", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Green Bay", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Denver", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Kansas City", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Carolina", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "New Orleans", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Houston", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Baltimore", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Miami", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Atlanta", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Philadelphia", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Buffalo", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Tennessee", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "New England", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Seattle", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Cleveland", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Indianapolis", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Pittsburgh", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "San Diego", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Detroit", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Jacksonville", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Chicago", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Arizona", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Tampa Bay", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Cincinnati", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "St. Louis", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Oakland", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Minnesota", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "San Francisco", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Montreal", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Vancouver", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Toronto", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Calgary", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Los Angeles", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Ottawa", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "NY Rangers", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Boston", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "San Jose", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Edmonton", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Nashville", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Anaheim", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Colorado", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "New Jersey", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Winnipeg", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "NY Islanders", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Columbus", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Florida", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "LA Dodgers", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "NY Yankees", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "LA Angels", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Milwaukee", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Texas", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Chicago Cubs", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "NY Mets", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
	{name: "Chicago White Sox", founded: 1900, championships: 5, retired: [2, 3, 5, 8, 17], owner: 'John "Sports" Doe', arena: 'New Old Arena'},
];

