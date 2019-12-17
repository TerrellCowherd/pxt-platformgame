namespace SpriteKind {
    export const Object = SpriteKind.create()
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
. . . . . . f f 6 6 f . . . . . 
. . . . . . f 6 f 6 6 f . . . . 
. . . . . . f 6 6 f f f . . . . 
. . . . . . f 6 6 6 f f . . . . 
. . . . . . . f f f f . . . . . 
`)
    roboboy.vy = 120
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Object, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    roboboy.vy = -120
    trampoline.setKind(SpriteKind.Object)
    trampoline.x += Math.randomRange(-70, 70)
    trampoline.y += Math.randomRange(-50, -60)
    animation.stopAnimation(animation.AnimationTypes.All, roboboy)
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
    music.pewPew.play()
})
let trampoline: Sprite = null
let roboboy: Sprite = null
scene.setBackgroundColor(9)
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
