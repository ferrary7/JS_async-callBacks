const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
// Progression 2: using setTimeout() - use 1000 units for time parameter
function getCookies() {
  let output = '';
  setTimeout(() => {
    cookies.forEach((cookie) => {
      output += `${cookie.name}<br>`;
    });
    document.write(output);
  }, 1000);
}
//Progression 3: Create a function to creat cookies\
// use setTimeout() -- use 2000 units for time parameter
function createCookies(newCookie) {
  setTimeout(() => {
    cookies.push(newCookie);
  }, 2000);
}

// Progression 4: calling functions
getCookies();
createCookies(newCookie);
