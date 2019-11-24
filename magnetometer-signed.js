// A short program to read a number from the Magnetometer (Signed) 

basic.forever(function () {
    let value = pins.i2cReadNumber(0x1E, NumberFormat.Int8LE, false) // Address 0X1E, number format, false (repetition)
    basic.showNumber(value) // Display value
    basic.pause(200) // pause
})