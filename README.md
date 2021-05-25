# Lyrics Reader Project

## Overview:

In this unit, coders will use a [lyrics API](https://lyricsovh.docs.apiary.io/#) to create an app that will allow the user to input a musical artist and song title, and play audio that reads out the lyrics of the song. Playlist. To create this project, coders will utilize loops..... TBD

## Day 1

### Day 1 Goal 1: Set Up

#### Planning

- [ ] Complete the project planning document.

#### GitHub Set-Up

- [x] Go to the repository
- [ ] Fork this repository to your github account and import to a new workspace
- [ ] Submit your website using the link on the Agenda

#### Starter Code

- [ ] Read through the HTML starter code to understand the organization and class names given.
- [ ] Read through the `script.js` starter code to determine what global variables are declared, and what the two declared functions do.
- [ ] Go to the API documentation [here](https://lyricsovh.docs.apiary.io/#reference/0/lyrics-of-a-song/search) to see how the API request is set up.

### Day 1 Goal 2: Write a fetch request to the API to return the song lyrics

- [ ] Using the documentation, determine the request URL needed to return the lyrics of your favorite song
- [ ] Write the fetch request that logs the lyrics to your favorite song to the console
- [ ] Update the fetch request so the lyrics display on the screen in the correct div

#### Wrap

- [ ] Push your changes!

## Day 2

### Day 2 Goal 1: Add a click handler so the API request can use inputted data

- [ ] Write a click handler for the "Get Lyrics" button and move your fetch request into the body
- [ ] Declare the variables needed, and save the user's artist name and song title to the variables
- [ ] Use template literals to update the request URL in your fetch request so the user's song lyrics display when the button is clicked

### Day 2 Goal 2: Implement the speech functionality for the song lyrics

- [ ] Call the `speak` function inside your fetch request so that the lyrics displayed on the screen are spoken aloud

### Day 2 Goal 3: Display a 'Loading' screen before the API fetch request is complete

- [ ] Add a jQuery `.text()` method before your fetch request so that your screen displays a 'Loading' message when the button is clicked, before your API fetch request is complete

### Day 2 Goal 4: Disable the "Get Lyrics" button so the user can't click it while the API request is working

- [ ] Use the jQuery `prop()` method [(documentation here)](https://api.jquery.com/prop/) to set "disabled" to `true` while the lyrics are loading
- [ ] Use the jQuery `prop()` method to set "disabled" to `false` once the lyrics have finished loading

#### Wrap

- [ ] Push your changes!

## Day 3 (Extension: Add functionality to change the voice of your lyrics reader)

### Day 3 Goal 1:

- [ ]

### Day 3 Goal 2:

- [ ]

#### Wrap

- [ ] Push your changes!

## Project Extensions:

- [ ] Add in your own CSS to personalize your project

## References/Tools -->

- [Advanced Reference Table](https://docs.google.com/document/d/1SElvLDvtVOoYZJyR5XbCQJWbSTxyChDiQkz7n3c63Go/preview)
- [How Jquery Works](http://learn.jquery.com/about-jquery/how-jquery-works/)
- [JQuery Events](http://api.jquery.com/category/events/)
