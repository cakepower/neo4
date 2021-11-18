strip = neopixel.create(DigitalPin.P13, 24, NeoPixelMode.RGB)
strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.BLACK))

def on_forever():
    serial.write_number(pins.analog_read_pin(AnalogPin.P11))
    serial.write_line("")
    if input.light_level() > 220:
        strip.rotate(1)
        basic.pause(500)
        strip.show()
    elif input.light_level() > 210:
        strip.show_rainbow(1, 360)
        strip.show()
        strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.BLACK))
    else:
        strip.show_color(neopixel.colors(NeoPixelColors.BLACK))
        strip.clear()
        strip.set_pixel_color(0, neopixel.colors(NeoPixelColors.BLACK))
basic.forever(on_forever)
