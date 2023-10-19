onEvent('recipes', event => {
	//移除id
	event.remove({ id: 'create:crafting/kinetics/cogwheel' })
	event.remove({ id: 'create:sequenced_assembly/large_cogwheel' })
	event.remove({ id: 'create:sequenced_assembly/cogwheel' })
	event.remove({ id: 'create:crafting/kinetics/large_cogwheel' })
	event.remove({ id: 'create:mechanical_crafting/flywheel' })
	event.remove({ id: 'create:mechanical_crafting/furnace_engine' })
	event.remove({ id: 'tconstruct:smeltery/melting/soul/glass' })
	event.remove({ id: 'tconstruct:smeltery/melting/soul/pane' })
	event.remove({ id: 'tconstruct:smeltery/melting/soul/sand' })

	//机壳
	//安山
	event.shapeless(
		'2x create:andesite_casing',
		['create:andesite_alloy',
			'#minecraft:logs']
	).id('create:crafting/materials/andesite_casing')
	event.recipes.create.mechanical_crafting('6x create:andesite_casing', [
		' A ',
		'ALA',
		' A '
	], {
		A: 'create:andesite_alloy',
		L: '#minecraft:logs',
	}).id('create:crafting/materials/andesite_casing')

	//铁
	event.shapeless(
		'2x create:copper_casing',
		['#minecraft:logs',
			'#forge:plates/iron']
	).id('create:crafting/materials/copper_casing')
	event.recipes.create.mechanical_crafting('6x create:copper_casing', [
		' I ',
		'ILI',
		' I '
	], {
		I: '#forge:plates/iron',
		L: '#minecraft:logs'
	}).id('create:crafting/materials/copper_casing')

	//黄铜
	event.shapeless(
		'2x create:brass_casing',
		['#minecraft:logs',
			'#forge:plates/brass']
	).id('create:crafting/materials/brass_casing')
	event.recipes.create.mechanical_crafting('2x create:brass_casing', [
		' B ',
		'BLB',
		' B '
	], {
		B: '#forge:plates/brass',
		L: '#minecraft:logs'
	}).id('create:crafting/materials/brass_casing')

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

	//黑奴笼子(空)
	event.shaped('create:empty_blaze_burner', [
		'I I',
		'InI',
		'iii'
	], {
		i: '#forge:plates/iron',
		n: '#forge:netherrack',
		I: 'minecraft:iron_bars'
	}).id('create:crafting/kinetics/empty_blaze_burner')

	//黑奴笼子(有)
	event.shaped('create:blaze_burner', [
		'IHI',
		'InI',
		'iii'
	], {
		i: '#forge:plates/iron',
		n: '#forge:netherrack',
		I: 'minecraft:iron_bars',
		H: 'tconstruct:blaze_head'
	})
	event.shapeless(
		'create:blaze_burner', [
		'create:empty_blaze_burner',
		'tconstruct:blaze_head'
	])
	//传送带
	event.shaped('4x create:belt_connector', [
		'CCC',
		'CCC',
		'   '
	], {
		C: 'thermal:cured_rubber'
	})
		.id('create:crafting/kinetics/belt_connector')

	//粉碎轮
	event.recipes.create.mechanical_crafting('create:crushing_wheel', [
		' AAA ',
		'AAPAA',
		'APPPA',
		'AAPAA',
		' AAA '
	], {
		A: 'create:andesite_alloy',
		P: '#minecraft:planks'
	}).id('create:mechanical_crafting/crushing_wheel')
	//水车
	event.shaped('create:water_wheel', [
		' P ',
		'PAP',
		' P '
	], {
		P: '#minecraft:planks',
		A: 'create:shaft'
	}).id('create:crafting/kinetics/water_wheel')
	//动力合成
	event.recipes.create.mechanical_crafting('2x create:water_wheel', [
		' P ',
		'PAP',
		' P '
	], {
		P: '#minecraft:planks',
		A: 'create:shaft'
	})
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
	//光辉板
	event.recipes.createPressing('ctza:radiant_sheet', [
		'create:refined_radiance'
	])
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
	//光辉线圈

	//暗影钢+光辉板
	event.recipes.create.mechanical_crafting('2x ctza:radiant_coil',
		[
			'SRS'
		], {
		S: 'create:shadow_steel',
		R: 'ctza:radiant_sheet'
	})

	//光辉板x1
	event.recipes.create.mechanical_crafting('ctza:radiant_coil',
		[
			'R'
		], {
		R: 'ctza:radiant_sheet'
	})

	//燃烧室
	event.recipes.create.mechanical_crafting('3x steampowered:bronze_burner', [
		'BBBBB',
		'BILIB',
		'BLcLB',
		'MILIM',
		'MMMMM'
	], {
		B: '#forge:plates/bronze',
		M: 'tconstruct:mud_bricks',
		L: 'ctza:lava_mechanism',
		I: '#forge:ingots/bronze',
		c: 'ctza:burner_core'
	})
		.id('steampowered:bronze_burner')
	event.recipes.create.mechanical_crafting('3x steampowered:cast_iron_burner', [
		'CCCCC',
		'CILIC',
		'CLcLC',
		'SILIS',
		'SSSSS'
	], {
		C: 'steampowered:cast_iron_sheet',
		S: '#tconstruct:seared_blocks',
		L: 'ctza:lava_mechanism',
		I: '#steampowered:ingots/cast_iron',
		c: 'ctza:burner_core'
	})
		.id('steampowered:cast_iron_burner')
	event.recipes.create.mechanical_crafting('3x steampowered:steel_burner', [
		'SSSSS',
		'SILIS',
		'SLcLS',
		'SILIS',
		'BBBBB'
	], {
		S: '#forge:plates/steel',
		B: '#tconstruct:scorched_blocks',
		L: 'ctza:lava_mechanism',
		I: '#steampowered:ingots/steel',
		c: 'ctza:burner_core'
	})
		.id('steampowered:steel_burner')

	//钻石粉
	event.recipes.createMilling([
		Item.of('createaddition:diamond_grit')
			.withChance(0.5)
	], '#forge:gems/diamond')

	//锅炉
	event.shaped('steampowered:bronze_boiler', [
		'BBB',
		'BGB',
		'BBB'
	], {
		B: '#forge:plates/bronze',
		G: 'create:fluid_pipe'
	})
		.id('steampowered:bronze_boiler')
	event.shaped('steampowered:cast_iron_boiler', [
		'BBB',
		'BGB',
		'BBB'
	], {
		B: 'steampowered:cast_iron_sheet',
		G: 'create:fluid_pipe'
	})
		.id('steampowered:cast_iron_boiler')
	event.shaped('steampowered:steel_boiler', [
		'BBB',
		'BGB',
		'BBB'
	], {
		B: '#forge:plates/steel',
		G: 'create:fluid_pipe'
	})
		.id('steampowered:steel_boiler')

	//熔融黑曜石
	event.recipes.createMixing(Fluid.of('tconstruct:molten_obsidian', 10), [
		Fluid.of('minecraft:lava', 10),
		Fluid.of('minecraft:water', 10),
	])

	//岩浆
	//鹅卵石
	event.recipes.createMixing(Fluid.of('minecraft:lava', 100), [
		'64x #forge:cobblestone'
	]).heated()
		.id('create:mixing/lava_from_cobble')
	//地狱岩
	event.recipes.createCompacting(Fluid.of('minecraft:lava', 100), [
		'16x #forge:netherrack'
	]).superheated()

	//液态灵魂
	event.recipes.createMixing(
		Fluid.of('tconstruct:liquid_soul', 100), [
		'4x minecraft:weeping_vines',
		'4x minecraft:twisting_vines',
	]
	).heated()
	//熔岩构件
	let Ilm = 'ctza:incomplete_lava_mechanism'
	let Tls = 'tconstruct:liquid_soul'
	let ML = 'minecraft:lava'
	event.recipes.createSequencedAssembly([
		Item.of('ctza:lava_mechanism')],
		'create:precision_mechanism',
		[
			event.recipes.createFilling(Ilm, [Ilm, Fluid.of(Tls, 250)]),
			event.recipes.createFilling(Ilm, [Ilm, Fluid.of(ML, 1000)]),
			event.recipes.createPressing(Ilm, Ilm),
			event.recipes.createPressing(Ilm, Ilm)
		]
	).loops(1).transitionalItem(Ilm)

	//动力构件
	let Ikm = 'ctza:incomplete_kinetic_mechanism'
	let Mws = '#minecraft:wooden_slabs'
	let Caa = 'create:andesite_alloy'
	let saw = 'ctza:saw'
	event.recipes.createSequencedAssembly([
		Item.of('ctza:kinetic_mechanism')],
		Mws,
		[
			event.recipes.createDeploying(Ikm, [Ikm, saw]),
			event.recipes.createDeploying(Ikm, [Ikm, Caa]),
			event.recipes.createDeploying(Ikm, [Ikm, Caa])
		]
	).loops(1).transitionalItem(Ikm)

	//钻石块
	let hcb = 'ctza:heat_coal_block'
	let cb = 'minecraft:coal_block'
	let water = 'minecraft:water'
	let blood = 'tconstruct:blazing_blood'
	event.recipes.createSequencedAssembly([
		Item.of('minecraft:diamond_block')],
		cb,
		[
			event.recipes.createFilling(cb, [cb, Fluid.of(blood, 150)]),
			event.recipes.createPressing(cb, cb),
			event.recipes.createFilling(cb, [cb, Fluid.of(water, 250)]),
			event.recipes.createPressing(cb, cb)
		]).loops(10).transitionalItem(hcb)

	//弹壳
	let lava = 'minecraft:lava'
	let bs = 'create:brass_sheet'
	let Lava = Fluid.of(lava, 50)
	let sc = 'ctza:shell_cast'
	let Water = Fluid.of(water, 50)
	event.recipes.createSequencedAssembly([
		Item.of('4x ctza:shell_case')],
		bs,
		[
			event.recipes.createFilling(bs, [bs, Lava]),
			event.recipes.createDeploying(bs, [bs, sc]),
			event.recipes.createFilling(bs, [bs, Water])
		]
	).loops(1).transitionalItem(bs)
})