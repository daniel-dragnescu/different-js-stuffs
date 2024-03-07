async function loadFile() {

  let fileLoaded = true;

  if(fileLoaded) {
    return "File loaded";
  } else {
    throw "File not loaded";
  }
}

async function startProcess() {

  try{
    let message = await loadFile();
    console.log(message);
  }
  catch(error) {
    console.error(error);
  }
}
startProcess();


// loadFile().then(value => console.log(value))
//           .catch(error => console.error(error));

