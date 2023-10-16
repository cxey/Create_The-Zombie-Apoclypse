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
	//铸铁块
	event.shapeless('ctza:cast_iron_block',[
		'9x steampowered:cast_iron_ingot'
	])
})