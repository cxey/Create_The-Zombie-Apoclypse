//注册方块
onEvent('block.registry', event => {
	//强化黑曜石
	event.create('ctza:fortified_obsidian')
		.hardness(350)
		.resistance(200)
		.material('stone')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('forge:needs_netherite_tool')
		.requiresTool(true)
})
onEvent('block.registry', event => {
	//铸铁块
	event.create('ctza:cast_iron_block')
		.hardness(3)
		.resistance(3)
		.material('metal')
		.tagBlock('minecraft:mineable/pickaxe')
		.tagBlock('minecraft:needs_iron_tool')
		.requiresTool(true)
})
//加工煤炭块
onEvent('block.registry', event => {
	event.create('ctza:heat_coal_block')
})