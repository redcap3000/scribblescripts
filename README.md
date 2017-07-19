##scribblescripts

**Ronaldo Barbachano, 2017**

***Provided as is.***

***Disclaimer***
#I'm not a musician but I play one with javascript.


Helper functions to assist music composers with [scribbletune](https://github.com/walmik/scribbletune). Please see example.js for usage. Basically simplifies clip creation and is based off the provided examples from the original repository.


|Function name| parameters| purpose|
|-------------|--------|-----------|
| scribblescripts.**buildChords**| pattern, notes, *sizzle*| Creates chord style midi clip|
| scribblescripts.**buildMidi**|scribbleData, filename| Creates scribble midi from scribble file|
| scribblescripts.**buildHighhat**|accentMap, pattern, *sizzle, notes*| Basic clip with (usually one note)|
| scribblescripts.**buildKick**|accentMap, pattern, *sizzle,notes*|Like **buildHighhat** but with 'shuffle' set to true|
| scribblescripts.**buildMelody**|pattern|Variates a (even sized pattern 'x-_x-' string) using string/array functions. Returns a four element array.|

###What is buildMelody


I wrote it to simplify the process of creating variations to a songs loopable elements which can include bridges,baselines, chords etc. Returns the a string in ('x-x_xx' type format) which can be used as a pattern or accentmap.

```

[
	 <original pattern>,
	 <pattern reversed>,
	 <first half of pattern>,
	 <second half of pattern>
]
```

