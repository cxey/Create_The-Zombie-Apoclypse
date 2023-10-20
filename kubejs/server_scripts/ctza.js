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
	//锯子
	event.shaped(Item.of('ctza:saw', '{Damage:0}'), [
		'  I',
		' I ',
		'T  '
	], {
		I: '#forge:ingots/iron',
		T: '#forge:rods/wooden'
	})
	//铸铁块
	event.shapeless('ctza:cast_iron_block', [
		'9x steampowered:cast_iron_ingot'
	])
	event.shapeless('9x steampowered:cast_iron_ingot', [
		'ctza:cast_iron_block'
	])
	//钻石黑曜石
	event.recipes.createMixing('ctza:diamond_obsidian', [
		'4x #forge:dusts/diamond',
		'#forge:obsidian',
		'#forge:dusts/redstone'
	]).heated()
	//磨制
	event.recipes.createSandpaperPolishing('ctza:polished_apatite',
		'#forge:gems/apatite')
	event.recipes.createSandpaperPolishing('ctza:polished_cinnabar',
		'#forge:gems/cinnabar')
})