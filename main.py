def on_overlap_tile(sprite, location):
    sprites.destroy(ran, effects.trail, 2000)
    game.reset()
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
        """),
    on_overlap_tile)

def on_right_pressed():
    animation.run_image_animation(ran,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        500,
        True)
controller.right.on_event(ControllerButtonEvent.PRESSED, on_right_pressed)

def on_left_pressed():
    animation.run_image_animation(ran,
        [img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """),
            img("""
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
                """)],
        500,
        True)
controller.left.on_event(ControllerButtonEvent.PRESSED, on_left_pressed)

def on_down_pressed():
    animation.run_image_animation(ran,
        [img("""
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
            """)],
        500,
        True)
controller.down.on_event(ControllerButtonEvent.PRESSED, on_down_pressed)

def on_up_pressed():
    animation.run_image_animation(ran,
        [img("""
            . . . . . . e e c c e e . . . .
            . . . . . e 2 2 2 2 2 2 e . . .
            . . . . 2 c 2 2 2 2 2 2 c 2 . .
            . . . e 2 c 4 2 2 2 2 2 c 2 e .
            . . . f 2 2 4 2 2 2 2 2 c 2 f .
            . . . f 2 2 4 2 2 2 2 2 2 2 f .
            . . . f 2 2 4 2 2 2 2 2 2 2 f .
            . . . f 2 c 2 4 4 2 2 2 c 2 f .
            . . . e 2 c e c c c c e c 2 e .
            . . . e 2 e c b b b b c e 2 e .
            . . . e 2 e b b b b b b e 2 e .
            . . . e e e e e e e e e e e e .
            . . . f e d e e e e e e d e f .
            . . . f e 2 d e e e e d 2 e f .
            . . . f f e e e e e e e e f f .
            . . . . f f . . . . . . f f . .
            """)],
        500,
        True)
controller.up.on_event(ControllerButtonEvent.PRESSED, on_up_pressed)

ran: Sprite = None
tiles.set_current_tilemap(tilemap("""
    уровень1
    """))
ran = sprites.create(img("""
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
        """),
    SpriteKind.player)
controller.move_sprite(ran, 50, 60)
scene.camera_follow_sprite(ran)
music.play(music.create_song(hex("""
        0078000408020100001c00010a006400f4016400000400000000000000000000000000050000044e0004000800012908000c0001250c001000012210001400011e14001800011b1c002000031b1e22200024000129240028000222252c003000021d2434003800012038003c0001243c004000031e2229
        """)),
    music.PlaybackMode.UNTIL_DONE)
ran.set_bounce_on_wall(True)