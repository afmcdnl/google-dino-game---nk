/**
 * Pseudocode:
 * 
 * First, the micro bit creats two variables on the side of the screen.
 * 
 * The micro bit is constantly checking to see if the T-rex variable is touching one of these variables. If it is, one life is removed, and it is game over.
 * 
 * These variables are constantly moving to the left.
 * 
 * If the x value of one of the variables is 0, then your score is increased, and the variables are deleted.
 * 
 * For variation, the micro bit pauses for 0 to 5 seconds before sending the cactus again. That way, the game isn't predictable.
 * 
 * After you die, your score is shown.
 */
/**
 * my plan is to create a randomly generated version of the google dinosaur game.
 */
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        trex.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
    basic.pause(500)
    for (let index = 0; index < 2; index++) {
        trex.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
})
let trex: game.LedSprite = null
let cactus = game.createSprite(4, 4)
let Cactus_2 = game.createSprite(4, 3)
game.setLife(1)
trex = game.createSprite(1, 4)
basic.pause(5000)
basic.forever(function () {
    if (cactus.get(LedSpriteProperty.X) == 0) {
        game.addScore(1)
        cactus.delete()
        Cactus_2.delete()
    }
    cactus.change(LedSpriteProperty.X, -1)
    Cactus_2.change(LedSpriteProperty.X, -1)
    basic.pause(300)
    if (cactus.isDeleted()) {
        basic.pause(randint(0, 5000))
        cactus = game.createSprite(4, 4)
        Cactus_2 = game.createSprite(4, 3)
    }
    if (trex.isTouching(cactus)) {
        game.removeLife(1)
    } else if (trex.isTouching(Cactus_2)) {
        game.removeLife(1)
    }
})
