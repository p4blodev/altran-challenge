# Altran challenge

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

## Description

See all characters of Brastlewark Fellowship only scrolling.

### I have used

- Custom hooks
- useRef hook api
- just-debounce-it api
- IntersectionObserver api
- fetch api

### How to run

> You must have Nodejs installed on your computer (14 or higher)

1. Clone repository
2. Run `npm install` command.
3. Run `npm start` command.

### Cached images feature

During the construction I had `Cors` problems when trying to access images. So, If you want to test this feature you must:

1. Open `src\components\Gnome.js` file
2. Change import at line 2. Change `import Image from 'components/Image'`  by `Change import Image from 'components/ImageWithCache'`
3. Save file.
4. Running browser without security policies. For this you must (on windows):
   1. Open the start menu
   2. Type `windows` + `R` or open "Run"
   3. Execute the following command: `chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security`
5. Enter `http://localhost:3000/` at browser

> For disable Cors in others SO look at https://stackoverflow.com/questions/3102819/disable-same-origin-policy-in-chrome

