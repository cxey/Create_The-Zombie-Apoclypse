onEvent('recipes', event => {
	//移除id
	event.remove({ id: 'create:crafting/kinetics/cogwheel' })
	event.remove({ id: 'create:sequenced_assembly/large_cogwheel' })
	event.remove({ id: 'create:sequenced_assembly/cogwheel' })
	event.remove({ id: 'create:crafting/kinetics/large_cogwheel' })
	event.remove({ id: 'create:mechanical_crafting/flywheel' })
	event.remove({ id: 'create:mechanical_crafting/furnace_engine' })
	//橡胶手部零件
	event.shaped('create:brass_hand', [
		' A ',
		'CCC',
		' C '
	], {
		A: 'create:andesite_alloy',
		C: 'thermal:cured_rubber'
	})
		.id('create:crafting/kinetics/brass_hand')

	//传送带
	event.shaped('create:belt_connector', [
		'CCC',
		'CCC',
		'   '
	], {
		C: 'thermal:cured_rubber'
	})
		.id('create:crafting/kinetics/belt_connector')

	//水车
	event.shaped('create:water_wheel', [
		' P ',
		'PAP',
		' P '
	], {
		P: '#minecraft:planks',
		A: 'create:shaft'
	})
		.id('create:crafting/kinetics/water_wheel')

	//机械手
	event.shaped('create:deployer', [
		' A ',
		' E ',
		' B '
	], {
		A: 'create:andesite_casing',
		E: 'create:electron_tube',
		B: 'create:brass_hand'
	})
		.id('create:crafting/kinetics/deployer')

	//小齿轮
	event.smithing(
		'2x create:cogwheel',
		'alloyed:bronze_sheet',
		'create:andesite_alloy'
	)

	event.recipes.createDeploying(
		'2x create:cogwheel',
		['alloyed:bronze_sheet',
			'create:andesite_alloy']
	)
		.id('create:deploying/cogwheel')

	event.recipes.createDeploying(
		'2x create:cogwheel',
		['create:incomplete_cogwheel',
			'create:shaft']
	)

	//大齿轮
	event.smithing(
		'create:large_cogwheel',
		'create:cogwheel',
		'alloyed:bronze_sheet'
	)
	event.smithing(
		'2x create:large_cogwheel',
		'create:cogwheel',
		'create:andesite_alloy'
	)
	event.recipes.createDeploying(
		'2x create:large_cogwheel',
		['create:cogwheel',
			'create:andesite_alloy']
	)
	event.recipes.createDeploying(
		'create:large_cogwheel',
		['create:cogwheel',
			'alloyed:bronze_sheet']
	)
	event.recipes.createDeploying(
		'2x create:large_cogwheel',
		['create:incomplete_large_cogwheel',
			'create:shaft']
	)
	//燃烧室
	event.recipes.create.mechanical_crafting('steampowered:bronze_burner', [
		'BBB',
		'B B',
		'MMM'
	], {
		B: '#forge:plates/bronze',
		M: 'tconstruct:mud_bricks'
	})
		.id('steampowered:bronze_burner')
	event.recipes.create.mechanical_crafting('steampowered:cast_iron_burner', [
		'CCC',
		'C C',
		'SSS'
	], {
		C: 'steampowered:cast_iron_sheet',
		S: '#tconstruct:seared_blocks'
	})
		.id('steampowered:cast_iron_burner')
	event.recipes.create.mechanical_crafting('steampowered:steel_burner', [
		'SSS',
		'S S',
		'BBB'
	], {
		S: '#forge:plates/steel',
		B: '#tconstruct:scorched_blocks'
	})
		.id('steampowered:steel_burner')

	//光辉线圈

	//暗影钢+光辉板
	event.recipes.create.mechanical_crafting('2x ctza:radiant_coil',
		[
			'SRS'
		], {
		S: 'create:shadow_steel',
		R: 'ctza:radiant_sheet'
	})

	//光辉板x2
	event.recipes.create.mechanical_crafting('ctza:radiant_coil',
		[
			'RR'
		], {
		R: 'ctza:radiant_sheet'
	})
	//流体管道
	event.shaped('16x create:fluid_pipe', [
		'iIi'
	], {
		i: '#forge:plates/iron',
		I: '#forge:ingots/iron'
	})
		.id('create:crafting/kinetics/fluid_pipe')

	//烈焰蛋糕(500mb烈焰血)
	event.recipes.createFilling('create:blaze_cake',
		['create:blaze_cake_base',
			Fluid.of('tconstruct:blazing_blood', 500)])

		.id('create:filling/blaze_cake')

	//橡胶
	event.recipes.createCompacting('thermal:rubber', [
		Fluid.of('thermal:resin', 250)
	])
})