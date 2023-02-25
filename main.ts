DFRobotMaqueenPlusV2.init()
basic.showIcon(IconNames.Yes)
let P = true
basic.forever(function () {
    if (input.soundLevel() > 100) {
        P = !(P)
        if (P == true) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eBackward, 100)
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eOpen)
        } else {
            DFRobotMaqueenPlusV2.controlMotorStop(MyEnumMotor.eAllMotor)
            DFRobotMaqueenPlusV2.controlLED(MyEnumLed.eAllLed, MyEnumSwitch.eClose)
        }
    }
})
