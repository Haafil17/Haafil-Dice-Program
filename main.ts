input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("- - - F - - - - ", 120), music.PlaybackMode.InBackground)
    basic.showNumber(randint(1, 6))
})
