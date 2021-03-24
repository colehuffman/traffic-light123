input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 1; index++) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.setAudioPin(AnalogPin.P2)
        music.playMelody("C5 B A G F E D C ", 120)
        basic.pause(5000)
    }
    pins.digitalWritePin(DigitalPin.P0, 0)
    for (let index = 0; index < 10; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(500)
    }
})
