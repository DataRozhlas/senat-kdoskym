import "./byeie"; // loučíme se s IE

fetch("https://dev.datarozhlas.cz/senat-kdoskym/grafy/koalice.csv")
.then(response => response.text())
.then(textkoal => {

fetch("https://dev.datarozhlas.cz/senat-kdoskym/grafy/opozice.csv")
.then(response => response.text())
.then(textopoz => {

fetch("https://dev.datarozhlas.cz/senat-kdoskym/grafy/tooltipy.csv")
.then(response => response.text())
.then(tooltipy => {

var datakoal = JSON.parse("[" + textkoal + "]");

var dataopoz = JSON.parse("[" + textopoz + "]");

var tooltipy = tooltipy.split('\n');

var datatt = [];
var headers = tooltipy[0].split('|');

for (var i = 1; i < tooltipy.length; i++) {

	var datatemp = tooltipy[i].split('|');
	var objtemp = {};

	for (var j = 0; j < datatemp.length; j++) {

		objtemp[headers[j].trim()] = datatemp[j].trim();

	}

	datatt.push(objtemp);

}

datatt.pop();

var square = 8;

var config = {
	width: 81 * square,
	height: 589 * square,
	title: 30,
	grid: {
		width: square,
		height: square
	},
	diff: 1,
	// 1 STAN, 2 ODS, 3 KDU-ČSL + nez., 4 ČSSD, 5 ANO, 6 Senátor 21, 7 nezařazení
	colors: ['#FFFFFF', '#A8CB4A', '#009BD5', '#FFDA05', '#F29400', '#272660', '#CB2D42', '#A0A0A0']
};

function getPosition(dataIndex) {

	if(!dataIndex) return {x: 5, y: config.title + 5};

	var nthColumn = dataIndex % (config.width / config.grid.width),
		  nthRow = Math.floor(dataIndex / (config.height / config.grid.height / (config.height / config.width)));

	var columnWidth = config.grid.width,
		rowHeight = config.grid.height;

		return {
			x: columnWidth * nthColumn + 5,
			y: rowHeight * nthRow + config.title + 5
		};

}

function renderSVG(data, tooltip, box) {

	var svg = d3.select('#koberec1')
				.append('svg')
				.attr({
					width: config.width + 5,
					height: config.height + config.title + 5
				})

	var div = d3.select('#koberec1').append('div')
				.attr('class', 'tooltip')
				.style('opacity', 0);

	svg.selectAll('rect').data(data).enter().append('rect').attr({
		width: config.grid.width - 2,
		height: config.grid.height - 2,
		x: function(d, i) { return getPosition(i).x; },
		y: function(d, i) { return getPosition(i).y; },
		fill: function(d) { return config.colors[d]; }
	})

	var row = svg.selectAll('row').data(tooltip).enter().append('rect').attr({
		width: 81 * square + 2,
		height: 10,
		x: 3,
		y: function(d, i) { return (config.grid.height * i) + config.title + 3; },
		fill: '#fff'
	}).style('fill-opacity', 0)
		.style('opacity', 0)
		.style('stroke', 'black')
		.style('stroke-width', 1)

	row.on('mouseover', function(d) {

		div.transition()
			.duration(200)
			.style('opacity', .9);

		var vysledek;

		if(d.vysledek == 'Přijato') {
			vysledek = '<div class="ttcajk">Schváleno</div>';
		} else if (d.vysledek == 'Zamítnuto') {
			vysledek = '<div class="ttnecajk">Zamítnuto</div>';
		} else {
			vysledek = '<div class="ttborcus">Zmatečné</div>';
		}

		var nazev;

		if(d.nazev.length < 150) {
			nazev = '<div class="ttheader">' + d.nazev + '</div>'
		} else {
			nazev = '<div class="ttheader">' + d.nazev.substring(0, 150).split(' ').slice(0, -1).join(' ') + '…</div>'
		}

		div.html(nazev + vysledek +
				'<div class="ttvotes">' + d.kvorum + ' hlasů ke schválení</div>' +
				'<div class="ttvotes">' + d.pro + ' pro — ' +
				d.proti + ' proti — ' +
				d.zdrzeli + ' se zdrželo — ' +
				d.absence + ' nepřítomných</div>')
			.style('left', (d3.event.pageX + 20) + 'px')
			.style('top', (d3.event.pageY + 30) + 'px');

		d3.select(this)
			.style('fill-opacity', 0.5)
			.style('opacity', 1)
			.transition()
			.duration(200)
		}).on('mouseout', function(d) {

		div.transition()
			.duration(500)
			.style('opacity', 0);

		d3.select(this)
			.style('opacity', 0)
		});

		var text = svg.append("text")
						.attr("x", config.width/2)
						.attr("y", 20)
						.attr("text-anchor", "middle")
						.attr("class", "title")
						.text(box);

}

renderSVG(datakoal, datatt, 'VÍTĚZOVÉ HLASOVÁNÍ');

renderSVG(dataopoz, datatt, 'PORAŽENÍ');

});

});

});