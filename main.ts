input.onButtonPressed(Button.A, function () {
    bird.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    bird.change(LedSpriteProperty.Y, 1)
})
let p = 0
let ticks = 0
let bird: game.LedSprite = null
let index = 0
bird = game.createSprite(0, 2)
let przeszkody: game.LedSprite[] = []
bird.set(LedSpriteProperty.Blink, 300)
basic.forever(function () {
    while (przeszkody.length > 0 && przeszkody[0].get(LedSpriteProperty.X) == 0) {
        przeszkody.removeAt(0).delete()
    }
    for (let przeszkoda of przeszkody) {
        przeszkoda.change(LedSpriteProperty.X, -1)
    }
    if (ticks % 3 == 0) {
        p = randint(0, 4)
        for (let indeks2 = 0; indeks2 <= 4; indeks2++) {
            if (indeks2 != p) {
                przeszkody.push(game.createSprite(4, indeks2))
            }
        }
    }
    for (let przeszkoda2 of przeszkody) {
        if (przeszkoda2.get(LedSpriteProperty.X) == bird.get(LedSpriteProperty.X) && przeszkoda2.get(LedSpriteProperty.Y) == bird.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
    }
    ticks += 1
    basic.pause(1000)
})
