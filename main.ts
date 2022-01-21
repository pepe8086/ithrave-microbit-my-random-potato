let counter = 0
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Ghost)
    counter = randint(0, 100)
    while (counter >= 0) {
        basic.pause(200)
        counter += -1
        basic.showNumber(counter)
        if (input.isGesture(Gesture.ThreeG)) {
            counter = 0
        }
    }
    music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
    basic.showIcon(IconNames.Chessboard)
    basic.pause(500)
    basic.showIcon(IconNames.No)
})
basic.forever(function () {
	
})
