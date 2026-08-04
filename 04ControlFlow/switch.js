// switch (key) {  // syntax of switch
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 3          // const accept every type of variable

switch (month) {
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");   // when it matches the case further cases will run...except default case..........  
                                   
        break;
    case 4:
        console.log("april");
        break;            
    default:
        console.log("default case match");
        break;
}

