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
	//粘液
	event.custom({
		"type": "thermal:tree_extractor",
		"trunk": "tconstruct:skyroot_log",
		"leaves": "tconstruct:sky_slime_leaves",
		"result": {
			"fluid": "tconstruct:sky_slime",
			"amount": 100
		}
	})
	event.custom({
		"type": "thermal:tree_extractor",
		"trunk": "tconstruct:greenheart_log",
		"leaves": "tconstruct:earth_slime_leaves",
		"result": {
			"fluid": "tconstruct:earth_slime",
			"amount": 100
		}
	})
	event.custom({
		"type": "thermal:tree_extractor",
		"trunk": "tconstruct:skyroot_log",
		"leaves": "tconstruct:ender_slime_leaves",
		"result": {
			"fluid": "tconstruct:ender_slime",
			"amount": 100
		}
	})
	event.custom({
		"type": "thermal:tree_extractor",
		"trunk": "tconstruct:bloodshroom_log",
		"leaves": "tconstruct:blood_slime_leaves",
		"result": {
			"fluid": "tconstruct:magma",
			"amount": 100
		}
	})
})