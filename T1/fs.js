var ps = require("fs");

// Step 1: Create folder
// ps.mkdirSync("Node");

// Step 2: Create file
ps.writeFileSync("Node/Hello.txt","Hello World");

// Step 3: Append some data
ps.appendFileSync("Node/Hello.txt"," This is my node example");

// Step 4: Read data from that file
data = ps.readFileSync("Node/Hello.txt");
console.log(data);

// Step 5: Read that file  
data = ps.readFileSync("Node/Hello.txt","utf8");
console.log(data);

//--or--  Step 5: Read that file
console.log(data.toString());

// Step 6: file rename
ps.renameSync("Node/Hello.txt","Node/Shivam.txt");

// Step 7: Delete that file
ps.unlinkSync("Node/Shivam.txt");
