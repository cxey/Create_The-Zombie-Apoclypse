onEvent('recipes', event => {
	//移除id
	event.remove({ id: 'thermal:devices/tree_extractor/tree_extractor_dark_oak' })
	event.remove({ id: 'thermal:devices/tree_extractor/tree_extractor_jungle' })

	//树汁提取器
	
	//丛林
	event.custom({
		"type": "thermal:tree_extractor",
		"trunk": "minecraft:jungle_log",
		"leaves": "minecraft:jungle_leaves",
		"result": {
			"fluid": "thermal:resin",
			"amount": 50
		}
	})
	//深色橡树
	event.custom({
		"type": "thermal:tree_extractor",
		"trunk": "minecraft:dark_oak_log",
		"leaves": "minecraft:dark_oak_leaves",
		"result": {
			"fluid": "thermal:resin",
			"amount": 50
		}
	})
	//熔岩
	event.custom({
		"type": "thermal:tree_extractor",
		"trunk": "minecraft:crimson_stem",
		"leaves": "minecraft:nether_wart_block",
		"result": {
			"fluid": "minecraft:lava",
			"amount": 100
		}
	})
	event.custom({
		"type": "thermal:tree_extractor",
		"trunk": "minecraft:warped_stem",
		"leaves": "minecraft:warped_wart_block",
		"result": {
			"fluid": "minecraft:lava",
			"amount": 100
		}
	})
})