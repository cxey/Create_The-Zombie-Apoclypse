onEvent('item.registry', event => {
	//异彩共振器
	event.create('ctza:chromatic_resonator')
		.maxDamage('2048')
	//锯子
	event.create('ctza:saw')
		.maxDamage('2048')
	//螺丝刀
	event.create('ctza:screwdriver')
		.maxDamage('2048')
})