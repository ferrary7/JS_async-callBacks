![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

<details>
  <summary>Hint 1 (withoutCallback)</summary>

  ```js

  function getCookies(){
  setTimeout(()=>{
    let output = ""; // create a variable to store all the cookies
    // add your logic here to loop over all the cookies and store it in output variable.
    document.body.innerHTML = output;
  },1000);
};

  ```
  
</details>


<details>
  <summary>Hint 2 (callback)</summary>

  ```js

  function createCookie(newCookie,callback){
  setTimeout(()=>{
    cookies.push(newCookie);
    callback();
  },2000);
}

  ```
  
</details>

<details>
  <summary>Hint 3 </summary>

  The reason, why for the first case, third cookie is not being displayed on the web, is that -- by the time you call createCookie function (which takes 2000 ms to render), getCookie function (which takes 1000 ms) loads up the page -- hence giving no chance to getCookie, to display the newly added cookie.

  Wheareas, for the 2nd case, we see all the three cookies are being displayed -- because, we are using a callback function, just after we push the third cookie to our cookies list. This make sures, that until that callback function is executed and gives some result, nothing else is done.

  ```
  
</details>