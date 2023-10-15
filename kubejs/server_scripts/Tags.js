onEvent('item.tags', event => {
	//钢板
	event.add('forge:plates/steel', ['steampowered:steel_sheet'])
	//钢锭
	event.add('forge:ingots/steel',['steampowered:steel_ingot'])
	//青铜板
	event.add('forge:plates/bronze',['steampowered:bronze_sheet'])
})