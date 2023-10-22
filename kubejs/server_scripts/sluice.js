onEvent('recipes', event => {

    {
        /**
         * 锤子
         * 输入1个，输出多个
         * 
         * 在每个逗号后添加新的json按照如上格式即可添加配方
         */
        let hammerrecipes = [
            {
                'input': '#forge:stone',
                'output': ['minecraft:netherite_scrap', 'minecraft:diamond_block']
            },
            {
                'input': 'minecraft:diamond_block',
                'output': ['minecraft:diamond_block']
            },
        ]

        for (let i of hammerrecipes) {
            event.recipes.ftbsluice.hammer(i.input, i.output)
        }
    }

    {
        /**秒 */
        const SECOND = 20
        /**分 */
        const MINUTE = 20 * 60
        /**桶 */
        const BUCKET = 1000
        /**
         * mesh为网的类型，只能使用以下值
         * 'cloth', - 布网
         * 'iron', - 铁网
         * 'gold', -金网
         * 'diamond', - 钻石网
         * 'blazing', - 烈焰网
         * 输入1个，输出多个，数组第1个表示输出物品，第2个表示概率
         * max表示最大产出种类，默认为3
         * fluid表示需要的流体，默认为水
         * mb表示需要的流体数量，单位为mb，默认为1000
         * 使用 4*BUCKET 表示4000mb，即4b
         * time表示处理时间，单位为tick，默认为100tick
         * 使用 3*SECOND 表示3秒，4*MINUTE 表示4分钟
         * 
         * 在每个逗号后添加新的json按照如上格式即可添加配方
         * 不要填空数组！！！比如 []
         */
        let sluicerecipes = [
            {
                'mesh': ['cloth', 'iron'],
                'input': 'minecraft:netherite_scrap',
                'output': [
                    ['minecraft:netherite_scrap', 1.0],
                    ['ctza:golden_pin', 0.7]
                ],
                'max': 3,
                'fluid': 'minecraft:water',
                'mb': 1000,
                'time': 100
            },
            {
                'mesh': ['diamond'],
                'input': 'thermal:apple_block',
                'output': [
                    ['thermal:enderium_block', 0.5],
                    ['ctza:golden_pin', 0.7]
                ],
                'max': 3,
                'fluid': 'minecraft:water',
                'mb': 1000,
                'time': 100
            },

        ]


        for (let sl of sluicerecipes) {
            event.recipes.ftbsluice.sluice(sl.mesh, sl.input, sl.output).max(sl.max).fluid(sl.fluid).mb(sl.mb).time(sl.time)

        }


    }


})