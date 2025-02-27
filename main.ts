// Rock Paper Scissors
// 
// ---> User picks one of the three. Use the A button to scroll and the B button to select
// ---> Computer picks a random option. 
// ---> Compare. Say if you win, lose or tie.
input.onButtonPressed(Button.A, function () {
    User += 1
    if (User > 3) {
        User = 1
        if (User == 1) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
        } else if (User == 2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                . . . # #
                # . # # #
                . # . . .
                # . # # #
                . . . # #
                `)
        }
    }
})
let User = 0
User = 1
basic.showLeds(`
    . . . . .
    . # # # .
    . # . # .
    . # # # .
    . . . . .
    `)
basic.forever(function () {
	
})
