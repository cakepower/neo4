index3 = 0
index = 0
strip = neopixel.create(DigitalPin.P13, 24, NeoPixelMode.RGB)
strip.set_brightness(20)
strip.show_rainbow(1, 360)
strip.show()
basic.pause(300)

def on_forever():
    global index3
    for index2 in range(24):
        serial.write_number(index2)
        serial.write_line("")
        strip.set_pixel_color(index2, neopixel.colors(NeoPixelColors.BLACK))
        strip.show()
        basic.pause(300)
    basic.pause(300)
    index3 = 23
    while index3 >= 0:
        serial.write_number(index3)
        serial.write_line("")
        strip.set_pixel_color(index3, neopixel.colors(NeoPixelColors.WHITE))
        strip.show()
        basic.pause(100)
        index3 = index3 - 1
    strip.show_rainbow(1, 360)
    strip.show()
    basic.pause(300)
basic.forever(on_forever)
