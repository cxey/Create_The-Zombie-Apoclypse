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