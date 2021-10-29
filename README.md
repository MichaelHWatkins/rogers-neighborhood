# _Mr. Roger's Neighborhood_

#### By: _**Mike Watkins**_

#### _A counter that replaces some numbers with words._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _GitHub repositories_

## Description

_Users will enter a number and an array is returned._

## Specs
#### _Takes a number from the user and returns a range of numbers from 0 to the user inputted number with the following substitutions made within the returned range:_
* _Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
* _Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
* _Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"_
#### These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third.

## Tests
Describe: beepBoop(value)

Test: "It should return an array with a 0 if the number 0 is inputted"
Code: beepBoop(0, name);
Expected Output: 0

Test: "It should return an array with 0, Beep! if the number inputted is 1"
Code: beepBoop(1, name);
Expected Output: 0, Beep!

Test: "It should return an array with 0, Beep!, Boop! if the number inputted is 2!"
Code: beepBoop(2, name);
Expected Output: 0, Beep!, Boop!

Test: "It should return an array with 0, Beep!, Boop!, Won't you be my neighbor, name? if the number inputted is 3!"
Code: beepBoop(3, name);
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor, name?

Test: "It should retunr an array with 0, Beep!, Boop!, Won't you be my neighbor, name?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, 
Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Wont you be my neighboor, name? if the number 23 is inputted!"
Code: beepBoop(23), name;
Expected Output: 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6, 7, 8, 9, Beep!, Beep!, Boop!, 
Won't you be my neighbor?, Beep!, Beep!, Beep!, Beep!, Beep!, Beep!, Boop!, Boop!, Boop!, Wont you be my neighboor?

Test: "It should return a string saying: Error please input an integer! if something other than an integer is inputted.
Code: beepBoop("error")
Expected Output: "Error please input an integer!" 

Test: "It should return a string saying: Error please input a positive integer! if a negative integer is inputted.
Code: beepBoop(-1)
Expected Output: "Error please input a positive integer!"

## Setup/Installation Requirements

* _Navigate to https://github.com/MichaelHWatkins/rogers-neighborhood_
* _Click on the green "Code" button and copy the repository URL or click on the copy button_
* _Open the terminal on your desktop_
* _Once in the terminal, use it to navigate to your desktop folder_
* _Once inside your desktop folder, use the command "git clone https://github.com/MichaelHWatkins/rogers-neighborhood"_
* _After cloning the project, navigate into it using the command "cd rogers-neighborhood"_
* _Use the command "git remote" to confirm the creation of the new local repository_
* _Open the project with the code editor of your choice_

_Note: when using the commands listed above, do not include the quotation marks. They are used here for readability._

## Known Bugs

* _No known bugs_

## Contact Information
_Mike Watkins, michaelhugheswatkins@gmail.com_


## License

_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2021_ _Mike Watkins_