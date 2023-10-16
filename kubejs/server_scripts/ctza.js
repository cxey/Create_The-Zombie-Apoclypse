onEvent('recipes', event => {
	//异彩共振器
	event.shaped(Item.of('ctza:chromatic_resonator', '{Damage:0}'), [
		'C A',
		'I I',
		'III'
	], {
		A: 'ctza:polished_apatite',
		C: 'ctza:polished_cinnabar',
		I: '#forge:plates/iron'
	})
})