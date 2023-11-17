/*
the process() function started before the download() function completed. 
The behavior that you want is for the code to wait for the download to complete, 
then call the process() function.
*/
// function download(url) {
/*
To fix this problem, pass the process() function to the download() 
function as a callback, as shown below. When the download() function is complete, 
it will call the callback() function, passing in the filename.
*/
function download (url, callback) {
    console.log(`Start downloading video from ${url} ...`);
  
    setTimeout(() => {
      const fileName = url.split("/").pop();
      console.log(`Video downloaded from ${url} to ${fileName}.`);
      callback(fileName) //add as part of fix

    }, 2000);
  }
  
  function process(videoFile) {
    console.log(`Start processing ${videoFile} ...`);
  
    setTimeout(() => {
      console.log(`Video processing complete: ${videoFile}.`);
    }, 4000);
  }
  
  const url = "https://www.thinkful.com/sync-and-async.mov";
  
//   const fileName = download(url);
download(url, process); //add as part of fix
//   process(fileName);

/*
Although it may seem like the code is blocked while it is waiting for the download, 
the code is able to execute other commands while waiting for the download. 
Add the following code to the end of the file to see that other commands are 
still processed while waiting for the download.
*/
setInterval(() => console.log("some other work is happening here"), 500);
