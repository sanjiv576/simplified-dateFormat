# simplified-dateFormat

A package that converts default date format into a specific language.

***

## Installation
```
npm i simplified-dateformat
```

***

## Usage
Pass the name of a language as an argument by invoking *getDate()* function and returns date in **weekday, month day, year** format.
```
const dateFormat = require('simplified-dateformat');


console.log(dateFormat.getDate('English'));   // --> Fri, September 9, 2022
console.log(dateFormat.getDate('JapAneSe'));    // --> 2022年9月9日(金)

console.log(dateFormat.getDate('Hindi'));   // --> शुक्र, 9 सितंबर 2022
console.log(dateFormat.getDate('telugu'));  // --> 9, సెప్టెంబర్ 2022, శుక్ర

console.log(dateFormat.getDate('chiNese'));   // --> 2022年9月9日周五
console.log(dateFormat.getDate('Vietnamese'));   // --> Th 6, 9 tháng 9, 2022

console.log(dateFormat.getDate('Nepali'));    // --> २०२२ सेप्टेम्बर ९, शुक्र

```

***

> Note: accepts the argument in lowercase, uppercase or both without any special characters.

***

## For Contribution

1. Fork the repo: 
https://github.com/sanjiv576/simplified-dateFormat

2. Clone the forked repo link:

3. Install dependencies
```
npm i
```

4. Test the code
```
cd test-folder/
node test.js
```

5. Create your own branch
```
git checkout -b <your_branch>
```

6. Add and Push your contributions
```
git add <your_files>
git commit -m <your_contribute_message>
git push -u origin <your_branch>
```


7. Create your pull request

***

> Note: create your issues at [here](https://github.com/sanjiv576/simplified-dateFormat/issues).

*** 

### *Thanks for reading !!*
