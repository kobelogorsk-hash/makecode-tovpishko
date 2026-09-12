controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    ran,
    [img`
        . . . . e e e e e . . . . . . . 
        . . . e 2 2 2 2 2 e e . . . . . 
        . . e 2 2 2 2 2 2 2 e e . . . . 
        . e b 4 2 2 2 2 2 4 9 e . . . . 
        e b 9 4 2 2 2 2 4 4 9 9 e e . . 
        e 9 9 4 2 2 2 4 4 4 9 9 2 2 e . 
        e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
        e 9 9 e e e e e e e 9 9 2 2 2 e 
        e 9 b e b e b b b e b 9 2 2 2 e 
        e b e b b e b b b b e e e e 2 e 
        e e e 2 2 e 2 2 2 2 e e 3 3 e e 
        e e e e e e e e e e e e e 3 3 e 
        e e e e e e e e e e e e e e e e 
        e e f f f e e e e f f f e e e e 
        . f c c b f e e f c c b f e e . 
        . . f b b . . . . f b b . . . . 
        `,img`
        . . . . e e e e e . . . . . . . 
        . . . e 2 2 2 2 2 e e . . . . . 
        . . e 2 2 2 2 2 2 2 e e . . . . 
        . e b 4 2 2 2 4 4 4 9 e . . . . 
        e b 9 4 2 2 4 4 4 4 9 9 e e . . 
        e 9 9 4 2 4 4 4 4 4 9 9 2 2 e . 
        e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
        e 9 9 e e e e e e e 9 9 2 2 2 e 
        e 9 b e b e b b b e b 9 2 2 2 e 
        e b e b b e b b b b e e e e 2 e 
        e e e 2 2 e 2 2 2 2 e e 3 3 e e 
        e e e e e e e e e e e e e 3 3 e 
        e e e e e e e e e e e e e e e e 
        e e f f f e e e e f f f e e e e 
        . f b f f f e e f b f f f e e . 
        . . b b c . . . . b b c . . . . 
        `,img`
        . . . . e e e e e . . . . . . . 
        . . . e 2 2 2 2 2 e e . . . . . 
        . . e 2 2 2 2 2 2 2 e e . . . . 
        . e b 4 4 4 2 2 2 4 9 e . . . . 
        e b 9 4 4 4 2 2 2 4 9 9 e e . . 
        e 9 9 4 4 2 2 2 4 4 9 9 2 2 e . 
        e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
        e 9 9 e e e e e e e 9 9 2 2 2 e 
        e 9 b e b e b b b e b 9 2 2 2 e 
        e b e b b e b b b b e e e e 2 e 
        e e e 2 2 e 2 2 2 2 e e 3 3 e e 
        e e e e e e e e e e e e e 3 3 e 
        e e e e e e e e e e e e e e e e 
        e e f f f e e e e f f f e e e e 
        . f b b c f e e f b b c f e e . 
        . . f f f . . . . f f f . . . . 
        `,img`
        . . . . e e e e e . . . . . . . 
        . . . e 2 2 2 2 2 e e . . . . . 
        . . e 2 2 2 2 2 2 2 e e . . . . 
        . e b 4 2 2 2 2 2 4 9 e . . . . 
        e b 9 4 2 2 2 2 2 4 9 9 e e . . 
        e 9 9 4 2 2 2 2 4 4 9 9 2 2 e . 
        e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
        e 9 9 e e e e e e e 9 9 2 2 2 e 
        e 9 b e b e b b b e b 9 2 2 2 e 
        e b e b b e b b b b e e e e 2 e 
        e e e 2 2 e 2 2 2 2 e e 3 3 e e 
        e e e e e e e e e e e e e 3 3 e 
        e e e e e e e e e e e e e e e e 
        e e f f f e e e e f f f e e e e 
        . f c b b f e e f c b b f e e . 
        . . f f c . . . . f f c . . . . 
        `],
    500,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    ran,
    [img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 2 2 4 b e . 
        . . e e 9 9 4 4 2 2 2 2 4 9 b e 
        . e 2 2 9 9 4 4 4 2 2 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f b c c f e e f b c c f . 
        . . . . b b f . . . . b b f . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 4 4 2 2 2 4 b e . 
        . . e e 9 9 4 4 4 4 2 2 4 9 b e 
        . e 2 2 9 9 4 4 4 4 4 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f f f b f e e f f f b f . 
        . . . . c b b . . . . c b b . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 4 4 4 b e . 
        . . e e 9 9 4 2 2 2 4 4 4 9 b e 
        . e 2 2 9 9 4 4 2 2 2 4 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f c b b f e e f c b b f . 
        . . . . f f f . . . . f f f . . 
        `,img`
        . . . . . . . e e e e e . . . . 
        . . . . . e e 2 2 2 2 2 e . . . 
        . . . . e e 2 2 2 2 2 2 2 e . . 
        . . . . e 9 4 2 2 2 2 2 4 b e . 
        . . e e 9 9 4 2 2 2 2 2 4 9 b e 
        . e 2 2 9 9 4 4 2 2 2 2 4 9 9 e 
        e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
        e 2 2 2 9 9 e e e e e e e 9 9 e 
        e 2 2 2 9 b e b b b e b e b 9 e 
        e 2 e e e e b b b b e b b e b e 
        e e 3 3 e e 2 2 2 2 e 2 2 e e e 
        e 3 3 e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e f f f e e e e f f f e e 
        . e e f b b c f e e f b b c f . 
        . . . . c f f . . . . c f f . . 
        `],
    500,
    true
    )
})
let ran: Sprite = null
tiles.setCurrentTilemap(tilemap`уровень1`)
ran = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 4 4 2 2 2 2 . . . 
    . . . . . c 4 2 2 2 2 2 c . . . 
    . . . . 2 c 4 2 2 2 2 2 c 2 . . 
    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
    . . . f 2 c 4 2 2 2 2 2 c 2 f . 
    . . . f e c 2 2 2 2 2 2 c e f . 
    . . . f 2 c 2 b b b b 2 c 2 f . 
    . . . e 2 2 b c c c c b 2 2 e . 
    . . . e e b c c c c c c b e e . 
    . . . f e 4 4 4 4 4 4 4 4 e f . 
    . . . f e d 2 2 2 2 2 2 d e f . 
    . . . . 2 d d 2 2 2 2 d d 2 f . 
    . . . . f 2 d 2 2 2 2 d 2 f . . 
    . . . . . e 2 2 2 2 2 2 e . . . 
    `, SpriteKind.Player)
controller.moveSprite(ran, 50, 60)
