onEvent('recipes', event => {
	//工作台合成&直接合成

	//羊毛
	event.shapeless(
		'4x minecraft:string',
		['#minecraft:wool'])

	//锻造台合成
	//金苹果
	event.smithing(
		'minecraft:golden_apple',
		'minecraft:apple',
		'minecraft:gold_ingot'
	)
		.id('minecraft:golden_apple')
	//附魔金苹果
	event.smithing(
		'minecraft:enchanted_golden_apple',
		'minecraft:apple',
		'minecraft:diamond_block'
	)
		//添加配方id
		.id('minecraft:enchanted_golden_apple')

	//金萝卜
	event.smithing(
		'minecraft:golden_carrot',
		'minecraft:carrot',
		'minecraft:gold_nugget'
	)
		//替换默认配方
		.id('minecraft:golden_carrot')

	//闪烁的西瓜
	event.smithing(
		'minecraft:glistering_melon_slice',
		'minecraft:melon_slice',
		'minecraft:gold_nugget'
	)
		//替换默认配方
		.id('minecraft:glistering_melon_slice')
})