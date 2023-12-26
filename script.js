let height = 5; 
let width = 10; 

let rectangle = '';

for (let i = 0; i < height; i++) { 
    for (let j = 0; j < width; j++) { 
        if (i === 0 || i === height - 1 || j === 0 || j === width - 1) {
            rectangle += '*';
        } else {   
            rectangle += ' ';
        }
    }
    rectangle += '\n'; 
}

console.log(rectangle);