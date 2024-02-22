
//TASK 1

function consoleStyler(color, background, fontSize, txt) {
    // Create message variable
    const message = "%c" + txt;
    
    // Create style variable
    let style = `color: ${color};`;
    
    // Update style variable with background
    style += `background: ${background};`;

    // Update style variable with font size
    style += `font-size: ${fontSize};`;

    // Console log message and style
    console.log(message, style);
}

function celebrateStyler(reason) {
    // Define the fontStyle
    const fontStyle = "color: tomato; font-size: 50px";

    // Check the reason
    if (reason === "birthday") {
        console.log(`%cHappy birthday`, fontStyle);
    } else if (reason === "champions") {
        console.log(`%cCongrats on the title!`, fontStyle);
    } else {
        // Display a default message if reason is neither "birthday" nor "champions"
        console.log(message, style);
    }
}

// Invoke consoleStyler with given arguments
consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!');
// Invoke celebrateStyler with given argument
celebrateStyler('birthday');

// Define the styleAndCelebrate function
function styleAndCelebrate(color, background, fontSize, txt, reason) {
    // Invoke consoleStyler
    consoleStyler(color, background, fontSize, txt);

    // Invoke celebrateStyler
    celebrateStyler(reason);
}

// Invoke styleAndCelebrate with given arguments
styleAndCelebrate('ef7c8e', 'fae8e0', '30px', 'You made it!', 'champions');