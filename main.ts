namespace SpriteKind {
    export const Object = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    roboboy.setImage(img`
. . . . . . f f f f f . . . . . 
. . . . . f 6 1 1 1 1 f . . . . 
. . f f f 5 1 1 1 1 1 f f f . . 
. f 6 6 f 5 1 1 f 1 f f 6 6 f . 
. f 6 6 f 4 1 1 f 1 f f 6 6 f . 
. . f 6 6 f 6 1 1 1 6 f 6 f . . 
. . . f 6 f f f f f f f f . . . 
. . . . f 6 1 1 1 f 1 f . . . . 
. . . . . f 1 1 6 6 f . . . . . 
. . . . . f 6 6 1 1 f . . . . . 
. . . . . f 1 1 f f f . . . . . 
. . . . . . f f f 6 f . . . . . 
. . . . . . f 6 6 f 6 f . . . . 
. . . . . . f 6 6 f f f . . . . 
. . . . . . f 6 6 6 f f . . . . 
. . . . . . . f f f f . . . . . 
`)
    roboboy.vy = 120
    roboboy.startEffect(effects.fire)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    roboboy.vy = -120
    trampoline.setKind(SpriteKind.Object)
    trampoline.x += Math.randomRange(-70, 70)
    trampoline.y += Math.randomRange(-50, -60)
    roboboy.setImage(img`
. . . . . . f f f f f . . . . . 
. . . . . f 6 1 f 1 f f . . . . 
. . . . f 5 1 1 f 1 f f . . . . 
. . . . f 5 1 1 1 1 1 f . . . . 
. . . . f 4 1 1 1 1 1 f . . . . 
. . . . . f 6 1 1 1 6 f . . . . 
. . . . . f f f f f f . . . . . 
. . . f f 6 1 1 1 f 1 f f . . . 
. . f 6 6 f 1 1 6 6 f 6 6 f . . 
. . f 6 6 f 6 6 1 1 f 6 6 f . . 
. . . f f f 1 1 f f f f f . . . 
. . . . . f f f 6 6 f . . . . . 
. . . . . f 6 f 6 6 f . . . . . 
. . . . f 6 6 f f f . . . . . . 
. . . . f 6 6 f . . . . . . . . 
. . . . . f f f . . . . . . . . 
`)
    effects.clearParticles(roboboy)
    music.baDing.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    badguy.x += Math.randomRange(-100, 100)
    badguy.y += 59
    projectile.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    roboboy.setImage(img`
. . . . . . . . . f f f f . . . 
. . . . . . f f f f f 6 6 f . . 
. . . . . f 6 1 1 1 6 f 6 f . . 
. . . . f 5 1 1 1 1 1 f f . . . 
. . . . f 5 1 1 1 1 1 f . . . . 
. . . . f 4 1 1 f 1 f f . . . . 
. . . . . f 6 1 f 1 f f . . . . 
. . . . . f f f f f f . . . . . 
. . . . . f 1 1 6 6 f . . . . . 
. . . . . f 1 f 1 1 f . . . . . 
. . . . f 6 6 6 f f f . . . . . 
. . . . f 6 6 6 f 6 f . . . . . 
. . . . f 6 6 6 f 6 f . . . . . 
. . . . f f 6 f f f . . . . . . 
. . . . f 6 f f . . . . . . . . 
. . . . . f f f . . . . . . . . 
`)
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . f . . . . . 
. f 5 f . . . . 
. f 5 f . . . . 
. f 5 f . . . . 
. . f . . . . . 
`, roboboy, 0, 180)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let badguy: Sprite = null
let trampoline: Sprite = null
let roboboy: Sprite = null
scene.setBackgroundColor(12)
effects.starField.startScreenEffect()
roboboy = sprites.create(img`
. . . . . . f f f f f . . . . . 
. . . . . f 6 1 f 1 f f . . . . 
. . . . f 5 1 1 f 1 f f . . . . 
. . . . f 5 1 1 1 1 1 f . . . . 
. . . . f 4 1 1 1 1 1 f . . . . 
. . . . . f 6 1 1 1 6 f . . . . 
. . . . . f f f f f f . . . . . 
. . . f f 6 1 1 1 f 1 f f . . . 
. . f 6 6 f 1 1 6 6 f 6 6 f . . 
. . f 6 6 f 6 6 1 1 f 6 6 f . . 
. . . f f f 1 1 f f f f f . . . 
. . . . . f f f 6 6 f . . . . . 
. . . . . f 6 f 6 6 f . . . . . 
. . . . f 6 6 f f f . . . . . . 
. . . . f 6 6 f . . . . . . . . 
. . . . . f f f . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(roboboy, 80, 0)
roboboy.setPosition(80, 25)
roboboy.ay = 100
trampoline = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. f f f f f f f f f f f f f f . 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
. f f f f f f f f f f f f f f . 
`, SpriteKind.Object)
scene.cameraFollowSprite(roboboy)
game.splash("Press down to fast fall.", "Press A to shoot.")
game.splash("Watch out for the ghosts.", "Get 100 points to win.")
badguy = sprites.create(img`
. . . . . f f f f f f . . . . . 
. . . f f 3 1 1 1 1 3 f . . . . 
. . f 3 1 1 1 1 1 1 f 3 f . . . 
. f 3 f 1 1 1 1 1 f 1 1 f . . . 
. f 1 1 f 1 1 1 f 1 1 1 f . . . 
. f f f f f 1 f f f f f f . . . 
. f 1 1 1 1 1 1 1 1 1 1 f . . . 
. f f 1 1 1 1 1 1 1 f 1 f . . . 
. f 1 f f f f f f f 1 1 f . . . 
. f f 3 f 3 3 3 f 1 1 1 f . . f 
. f f 3 3 3 3 f 1 1 1 1 3 f f f 
. f 3 f f f f 1 1 1 1 1 1 1 3 f 
. . f 3 1 1 1 1 1 1 1 1 1 1 1 f 
. . . f 3 1 1 1 1 1 1 1 1 1 f . 
. . . . f f 3 1 1 1 1 1 f f . . 
. . . . . . f f f f f f . . . . 
`, SpriteKind.Enemy)
badguy.setPosition(76, 220)
badguy.follow(roboboy, 90)
projectile = sprites.create(img`
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . . . . . . . 
. . f . . . . . 
. f 5 f . . . . 
. f 5 f . . . . 
. f 5 f . . . . 
. . f . . . . . 
`, SpriteKind.Projectile)
projectile.setPosition(360, 121)
forever(function () {
    if (info.score() == 100) {
        game.over(true)
    }
    if (roboboy.vy > 200) {
        roboboy.setImage(img`
. . . . . . f f f f f . . . . . 
. . . . . f 6 1 1 1 6 f . . . . 
. . . . f 5 1 1 1 1 1 f . . . . 
. . . . f 5 1 f 1 1 f f . . . . 
. . f f f 4 1 1 1 1 1 f f f . . 
. f 6 6 6 f 6 1 1 1 6 f 6 6 f . 
. f 6 6 f 1 f f f f f f 6 6 f . 
. . f f . f 1 1 1 f . . f f . . 
. . . . . f 1 1 1 6 f . . . . . 
. . . . . f 6 6 6 1 f . . . . . 
. . . . . f 1 1 1 f f f . . . . 
. . . . . f f f f f 6 6 f . . . 
. . . . . f 6 6 f f 6 6 f . . . 
. . . . f 6 6 6 f f 6 6 6 f . . 
. . . . f 6 6 f . . f f f f . . 
. . . . . f f f . . . . . . . . 
`)
    }
    if (roboboy.vy > 280) {
        game.over(false)
    }
})
