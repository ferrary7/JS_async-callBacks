const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function getCookies() {
  let output = "";
  setTimeout(() => {
    cookies.forEach((cookie) => {
      output += `${cookie.name}<br>`;
    });
    document.write(output);
  }, 1000);
}
// Progression 2: using setTimeout()

//Progression 3: Create a function to creat cookies
function createCookies(newCookie, callback) {
  setTimeout(() => {
    cookies.push(newCookie);
    callback();
  }, 2000);
}
// Progression 5: calling function
createCookies(newCookie, getCookies);
