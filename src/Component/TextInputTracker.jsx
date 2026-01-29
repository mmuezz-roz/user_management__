import React from 'react'

function TextInputTracker() {
  return (
    <div>
        <form action="">
            <input type="text" />
        </form>
    </div>
  )
}

export default TextInputTracker 

// // Create a component TextInputTracker that tracks and displays how many characters the
// user has typed in an input box.

// Requirements:
// Use useState to manage the input text.
// Display the number of characters typed below the input.
// If the user clears the input, the character count should show 0.