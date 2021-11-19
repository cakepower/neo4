let index3 = 0
let index = 0
let strip = neopixel.create(DigitalPin.P13, 24, NeoPixelMode.RGB)
strip.setBrightness(20)
strip.showRainbow(1, 360)
strip.show()
basic.pause(300)
basic.forever(function () {
    for (let index2 = 0; index2 <= 23; index2++) {
        serial.writeNumber(index2)
        serial.writeLine("")
        strip.setPixelColor(index2, neopixel.colors(NeoPixelColors.Black))
        strip.show()
        basic.pause(300)
    }
    basic.pause(300)
    index3 = 23
    while (index3 >= 0) {
        serial.writeNumber(index3)
        serial.writeLine("")
        strip.setPixelColor(index3, neopixel.colors(NeoPixelColors.White))
        strip.show()
        basic.pause(100)
        index3 = index3 - 1
    }
    strip.showRainbow(1, 360)
    strip.show()
    basic.pause(300)
})
