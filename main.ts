namespace SpriteKind {
    export const Bonusfood = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, -50)
    mySprite.setImage(img`
        5 5 5 . . . . . 5 5 
        5 5 5 5 . . . 5 5 5 
        5 5 5 5 5 . 5 5 5 5 
        5 5 f 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        `)
})
function Enemy1 () {
    Putra_Melaka = sprites.create(img`
        6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 6 
        6 6 6 6 6 6 6 6 6 b 
        6 6 6 6 6 6 b b b b 
        6 6 6 6 6 b b 5 5 5 
        6 6 6 6 b b 5 d 1 f 
        6 6 6 6 b 5 5 1 f f 
        6 6 6 6 b 5 5 d f b 
        6 6 6 b d 5 5 5 5 4 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Putra_Melaka, tiles.getTileLocation(0, 0))
    Putra_Melaka.setVelocity(35, 50)
    Putra_Melaka.setBounceOnWall(true)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(-50, 0)
    mySprite.setImage(img`
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 f 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 5 
        . . . 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        `)
})
function Enemy2 () {
    Raja_Melayu = sprites.create(img`
        4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 4 
        4 4 4 4 4 4 4 4 4 b 
        4 4 4 4 4 4 b b b b 
        4 4 4 4 4 b b 5 5 5 
        4 4 4 4 b b 5 d 1 f 
        4 4 4 4 b 5 5 1 f f 
        4 4 4 4 b 5 5 d f b 
        4 4 4 b d 5 5 5 5 4 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(Raja_Melayu, tiles.getTileLocation(0, 0))
    Raja_Melayu.setVelocity(35, 50)
    Raja_Melayu.setBounceOnWall(true)
}
function WeakEnemy () {
    animation.runImageAnimation(
    Putra_Melaka,
    [img`
        f f f f f f f f f f 
        f f f f f f f f f f 
        f f f f f f f f f f 
        f f f f f f f f f b 
        f f f f f f b b b b 
        f f f f f b b 5 5 5 
        f f f f b b 5 d 1 f 
        f f f f b 5 5 1 f f 
        f f f f b 5 5 d f b 
        f f f b d 5 5 5 5 4 
        `],
    100,
    false
    )
    animation.runImageAnimation(
    Raja_Melayu,
    [img`
        f f f f f f f f f f 
        f f f f f f f f f f 
        f f f f f f f f f f 
        f f f f f f f f f b 
        f f f f f f b b b b 
        f f f f f b b 5 5 5 
        f f f f b b 5 d 1 f 
        f f f f b 5 5 1 f f 
        f f f f b 5 5 d f b 
        f f f b d 5 5 5 5 4 
        `],
    100,
    false
    )
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(50, 0)
    mySprite.setImage(img`
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 f 5 5 5 
        5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 . . . 
        5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(0, 50)
    mySprite.setImage(img`
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 f 5 5 
        5 5 5 5 . 5 5 5 5 5 
        5 5 5 . . . 5 5 5 5 
        5 5 . . . . . 5 5 5 
        `)
})
function Item () {
    for (let value of tiles.getTilesByType(assets.tile`transparency16`)) {
        mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 4 4 . . . . . . . 
            . . . . . . 4 5 5 4 . . . . . . 
            . . . . . . 2 5 5 2 . . . . . . 
            . . . . . . . 2 2 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Food)
        tiles.placeOnTile(mySprite2, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        FoodCount += 1
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeScoreBy(1)
    music.play(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
    FoodCount += 1
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite, assets.tile`transparency16`)
})
function GameSetup () {
    tiles.setCurrentTilemap(tilemap`level1`)
    mySprite = sprites.create(img`
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 f 5 5 5 
        5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 . . . 
        5 5 5 5 5 5 5 5 . . 
        5 5 5 5 5 5 5 5 5 . 
        5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 
        `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(0, 0))
    scene.cameraFollowSprite(mySprite)
    info.setLife(3)
}
function BonusFood () {
    for (let index = 0; index < 4; index++) {
        mySprite3 = sprites.create(img`
            .............beebbbb............
            ............eebbbb4bb...........
            ............eb344bb4bb..........
            ............e44334bb4bb.........
            ............eb433344b4be........
            ............4eb43344444be.......
            ...........bd4eb43333344bb......
            ..........b455d4443333444bb.....
            ..........4d5555d444333444bb....
            .........4555555dd4b4443444be...
            ........bd5555d555d4bb444444ee..
            ........b55ddd665555bb4b44444ee.
            .......bd5555677655554ebb44444eb
            .......43222558855555d4eeb44b4ee
            ......b422332ddd555222d4eebbb4be
            ......be22232ed55522332db4ebbbbe
            .....bde22222e555e22232edd4bbbbe
            .....b52e222e3555e22222eddd4ebee
            ....bd552eee355552e222e355544eee
            ....665dd5555555552eee355dd4deee
            ...6776555555555555555551554d4ee
            ...4885222555dddd6655551544d4eee
            ..b45522332555dd677611d444ddeee.
            ..4d5222232e55555881d44ddd4eee..
            .bdd5e22222e555115114d54d4ee....
            .b55d2e222e351144d1d55eeee......
            bd5ddd2eee3d444555dd4e..........
            b555115dddd55d544eede...........
            4511d444d5544ee...4de...........
            41d4555d4ee........44...........
            41554eede.......................
            44ee...4e.......................
            `, SpriteKind.Bonusfood)
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(0, 10), randint(0, 10)))
        if (mySprite3.tileKindAt(TileDirection.Center, assets.tile`transparency16`)) {
            sprites.destroy(mySprite3)
        }
    }
}
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let Raja_Melayu: Sprite = null
let Putra_Melaka: Sprite = null
let mySprite: Sprite = null
let FoodCount = 0
GameSetup()
Item()
info.setScore(FoodCount)
BonusFood()
Enemy1()
Enemy2()
game.onUpdate(function () {
    if (FoodCount == 55) {
        game.gameOver(true)
        game.setGameOverScoringType(game.ScoringType.HighScore)
    }
})
