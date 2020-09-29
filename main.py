bird: game.LedSprite = None

def on_forever():
    global bird
    bird = game.create_sprite(0, 2)
basic.forever(on_forever)
