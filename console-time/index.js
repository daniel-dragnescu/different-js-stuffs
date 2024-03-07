// starts a timer you can use to track how long an operation
// takes. Give each timer a unique name.
// Great for identifying performance "bottlenecks"


// start
console.time("Response time");

// alert("CLICK THE OK BUTTON");
setTimeout(() => {
  console.log("Hello")
}, 3000);

// end
console.timeEnd("Response time");

//-------------------------------------------
function loadData(){

  console.time("loadData");

  for(let i = 0; i < 1000000000; i++){
      //pretend to load some data
  }

  console.timeEnd("loadData");
}

function processData(){

  console.time("processData");

  for(let i = 0; i < 1000000; i++){
      //pretend to process some data
  }
  
  console.timeEnd("processData");
}

loadData();
processData();

