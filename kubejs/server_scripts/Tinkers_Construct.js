onEvent('recipes', event => {
	//小齿轮(半成品)
	event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
			"item": "tconstruct:gear_cast"
		},
		"cast_consumed": false,
		"fluid": {
			"tag": "tconstruct:molten_bronze",
			"amount": 144
		},
		"result": "create:incomplete_cogwheel",
		"cooling_time": 100
	})
	event.remove({ id: 'tconstruct:smeltery/casting/metal/bronze/gear_gold_cast' })

	//大齿轮(半成品)
	event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
			"item": "create:incomplete_cogwheel"
		},
		"cast_consumed": true,
		"fluid": {
			"tag": "tconstruct:molten_bronze",
			"amount": 288
		},
		"result": "create:incomplete_large_cogwheel",
		"cooling_time": 200
	})
	//强化黑曜石
	event.custom({
		"type": "tconstruct:casting_basin",
		"cast": {
			"item": "minecraft:obsidian"
		},
		"cast_consumed": true,
		"fluid": {
			"tag": "tconstruct:molten_netherite",
			"amount": 72
		},
		"result": "ctza:fortified_obsidian",
		"cooling_time": 200
	})
	//弹壳铸模
	event.custom({
		"type": "tconstruct:casting_table",
		"cast": {
			"item": "ctza:shell_case"
		},
		"cast_consumed": true,
		"fluid": {
			"tag": "tconstruct:molten_gold",
			"amount": 144
		},
		"result": Item.of('ctza:shell_cast', '{Damage:0}'),
		"cooling_time": 50
	})
})