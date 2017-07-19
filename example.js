var scribblescripts = require('scribblescripts')

var pattern = scribblescripts.buildMelody('x_x-'.repeat(8))


var data = scribblescripts.buildHighhat(
	pattern[2],
	pattern[3],
	true)


scribblescripts.buildMidi(data,'hats.mid')

var data = scribblescripts.buildKick(
	pattern[3],
	pattern[2],
	true,
	['c4','d3'])


scribblescripts.buildMidi(data,'kick.mid')


var pattern2 = scribblescripts.buildMelody('x_x-x_x-xx___x--x-')

// main theme
var data = scribblescripts.buildChords(
	pattern2[1].repeat(4),
	['c4','c3','d3','d4'],
	true)

scribblescripts.buildMidi(data,'theme.mid')

var data = scribblescripts.buildChords(
	pattern2[3],
	['c4','c3','d3','d4'].reverse(),
	true)

scribblescripts.buildMidi(data,'bridge.mid')

