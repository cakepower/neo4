let strip = neopixel.create(DigitalPin.P13, 24, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
basic.forever(function () {
    serial.writeNumber(pins.analogReadPin(AnalogPin.P3))
    serial.writeLine("")
    if (pins.analogReadPin(AnalogPin.P3) > 1000) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(200)
    } else if (pins.analogReadPin(AnalogPin.P3) > 800) {
        strip.showRainbow(1, 360)
        strip.rotate(1)
        strip.show()
        basic.pause(200)
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        strip.clear()
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    }
})
