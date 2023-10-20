onEvent('recipes', event => {
	event.custom({
		"type": "createaddition:rolling",
		"input": {
			"tag": "forge:ingots/gold"
		},
		"result": {
			"item": "ctza:golden_pin",
			"count": 4
		}
	})
})