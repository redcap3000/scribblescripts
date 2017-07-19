var exports = module.exports = {};
const scribble = require('scribbletune');
var buildClip = function(accentMap,patternMap,notes,sizzle,shuffle){
	if(typeof notes == 'undefined'){
		notes = ['c4'];
	}
	if(typeof accentMap == 'undefined'){
		scribble.clip({
		    notes: notes,
		    pattern: patternMap,
		    sizzle: sizzle
		});  
	}

	if(typeof sizzle == 'undefined'){
		sizzle = false;
	}
	if(typeof shuffle == 'undefined'){
		return scribble.clip({
	    	notes: notes,
		    pattern: patternMap,
		    accentMap: accentMap,
		    sizzle : sizzle
		});
	}else{
		// these are for drum bass loops
		return scribble.clip({
	    	notes: notes,
		    pattern: patternMap,
		    accentMap: accentMap,
		    sizzle : sizzle,
		    shuffle:shuffle
		});
	}

};
/*
	write midi to file .... 
	todo - show error if file exists, or allow option to overwrite.
*/
exports.buildMidi = function(data,filename){
	scribble.midi(data, filename);
}
// usually for the base theme with importance on notes; no accent map.
exports.buildChords = function(pattern,notes,sizzle){
	return buildClip(undefined,pattern,notes,sizzle)
};

// highhat + kick are usually single notes
exports.buildHighhat = function(accentMap,pattern,sizzle,notes){
	return buildClip(accentMap,pattern,notes,sizzle)
}
exports.buildKick = function(accentMap,pattern,sizzle,notes){
	// setting shuffle to true as per 'kick' example
	return buildClip(accentMap,pattern,notes,sizzle,true)
}
exports.melody = [];

exports.buildMelody = function(base){
	/*
		Basic variation to help modify a passed note map string
		'x-_x-x-'
		Please use even values! Or not. Do what you want.
	*/
	baseReverse = base.split('').reverse().join('');
	// for some pattern maps first half may be same as second half... dont be that guy!
	baseFirstHalf = base.slice(0,(baseReverse.length/2)-1);
	baseSecondHalf = base.slice((baseReverse.length/2),base.length-1);
	melody = [base,baseReverse,baseFirstHalf,baseSecondHalf]
	return melody
}

