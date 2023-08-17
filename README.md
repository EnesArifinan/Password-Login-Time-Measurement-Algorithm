
# Password Login Time Measurement Algorithm

This repository includes a JavaScript-based password login timing algorithm. The algorithm takes a user-provided password as input and calculates the password entry time in seconds based on certain criteria.

## Table of Contents

- [Introduction](#introduction)
- [Question](#Question)
- [Answer](#Answer)
- [Usage](#usage)
- [Algorithm Details](#algorithm-details)
- [How It Works](#how-it-works)
- [License](#license)

## Introduction

In this project, we developed a simple password login timer algorithm using JavaScript. The algorithm is designed to give users an idea of the password they choose.

## Question
- According to the button model on the screen, different step distances have been defined. Each of these steps corresponds to a button.
- You reach a location at a distance of 1 step, and this step takes 1 second to complete.
- To reach a location at a distance of 2 steps, it takes 2 seconds.
- When the same button is pressed again, 0 seconds are spent.
- You can design a JavaScript algorithm that performs this operation. This algorithm will calculate the time spent based on the step distance when a button is pressed.
- 
## Answer
1055![Ekran Görüntüsü (29)6](https://github.com/EnesArifinan/Paswort-Algorithm/assets/126265835/f2783e0e-4a08-49f3-adcf-2ac078d4d388)

## Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/EnesArifinan/Paswort-Algorithm.git
   ```
   
2. Open `index.html` in a web browser.

3. Enter your desired password in the input field and click the "Estimate" button.

4. The estimated time in seconds required to enter the password will be displayed on the screen.

## Algorithm Details

The algorithm is implemented using JavaScript and HTML. It evaluates the input password by comparing its characters with predefined reference values.

## How It Works

1. The user enters a password into the input field.

2. The password is split into an array of characters.

3. The algorithm iterates through the array of characters and compares each character with predefined reference values.

4. Based on comparisons, the algorithm calculates the estimated time in seconds required to enter the password.

5. The estimated time is then displayed to the user.


## License

This project is licensed under the [MIT License](LICENSE).







   


