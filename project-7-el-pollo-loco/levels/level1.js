let level1;

function createLevel1() {

    level1 = new Level(
        [
            new ChickenSmall(720 * Math.random(), 0.5),
            new ChickenSmall(720 * Math.random(), 0.6),
            new ChickenSmall(720 * Math.random(), 0.3),
            new Chicken(720 + 720 * Math.random(), 0.5),
            new ChickenSmall(720 + 720 * Math.random(), 0.7),
            new Chicken(720 + 720 * Math.random(), 0.5),
            new ChickenSmall(720 + 720 * Math.random(), 0.5),
            new Chicken(720 * 2 + (720 * Math.random()), 1),
            new Chicken(720 * 2 + (720 * Math.random()), 0.5),
            new ChickenSmall(720 * 2 + (720 * Math.random()), 1),
            new Chicken(720 * 2 + (720 * Math.random()), 1),
            new ChickenSmall(720 * 2 + (720 * Math.random()), 1),
            new Chicken(720 * 3 + (720 * Math.random()), 1),
            new Chicken(720 * 3 + (720 * Math.random()), 0.5),
            new ChickenSmall(720 * 3 + (720 * Math.random()), 1),
            new Chicken(720 * 3 + (720 * Math.random()), 1),
            new ChickenSmall(720 * 3 + (720 * Math.random()), 1),
            new Chicken(720 * 3 + (720 * Math.random()), 0.5), 
            new Endboss()
        ],
        [
            new Cloud(-720 * Math.random()),
            new Cloud(720 * Math.random()),
            new Cloud(720 + (720 * Math.random())),
            new Cloud((720 * 2) + (720 * Math.random())),
            new Cloud((720 * 3) + (720 * Math.random()))
        ],
        [
            new BackgroundObject('img/5_background/layers/air.png', -719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', -719),
            new BackgroundObject('img/5_background/layers/air.png', 0),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 0),
            new BackgroundObject('img/5_background/layers/air.png', 719),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/3_third_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/2_second_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/1_first_layer/1.png', 719 * 2),
            new BackgroundObject('img/5_background/layers/air.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/3_third_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/2_second_layer/2.png', 719 * 3),
            new BackgroundObject('img/5_background/layers/1_first_layer/2.png', 719 * 3)
        ],
        [
            new BottleOnGround(-500 + 200 * Math.random(), 331, Math.random()),
            new BottleOnGround(-300 + 200 * Math.random(), 331, Math.random()),
            new BottleOnGround(-100 + 200 * Math.random(), 331, Math.random()),
            new BottleOnGround(100 + 200 * Math.random(), 331, Math.random()),
            new BottleOnGround(500 + 200 * Math.random(), 331, Math.random()),
            new BottleOnGround(700 + 200 * Math.random(), 331, Math.random()),
            new BottleOnGround(900 + 200 * Math.random(), 331, Math.random()),
            new BottleOnGround(1100 + 200 * Math.random(), 331, Math.random()),
            new BottleOnGround(1500 + 200 * Math.random(), 331, Math.random()),
            new BottleOnGround(1700 + 200 * Math.random(), 331, Math.random()),
            new BottleOnGround(2100 + 200 * Math.random(), 331, Math.random()),
            new BottleOnGround(2300 + 200 * Math.random(), 331, Math.random()),
        ],
        [
            new Coin(-700 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(-500 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(-300 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(-100 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(100 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(300 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(500 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(700 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(900 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(1100 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(1300 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(1500 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(1700 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(1900 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(2100 + 200 * Math.random(), 72 + 100 * Math.random()),
            new Coin(2300 + 200 * Math.random(), 72 + 100 * Math.random())
        ]
    );

}











