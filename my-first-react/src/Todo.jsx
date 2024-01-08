// export default function Todo({task,isDone}){
//         return (
//                 <li>Task : {task}</li>
                
//         )
// }
// // conditional rendering option 1:
// export default function Todo({task,isDone}){
//         if(isDone){
//                 return <li>Finished: {task}</li>
//         }
//         else{
//                 return <li>Work On: {task}</li> 
//         }
// }

// // conditional rendering option 2:
// export default function Todo({task,isDone}){
//         if(isDone){
//                 return <li>Finished: {task}</li>
//         }
//         return <li>Work On: {task}</li> 

// }

// conditional rendering option 3: Ternary operator
// export default function Todo({task,isDone}){
//        return(
//         <li> {isDone? 'Finished': 'Work On'} : {task}</li>
//        )
         

// }

// // conditional rendering option 4: &&
// export default function Todo({task,isDone}){
//         return(
//          <li> {task} {isDone && ':Done'}</li>
//         )          
//  }

// // conditional rendering option 5: ||
// export default function Todo({task,isDone}){
//         return(
//          <li> {task} {isDone || ':Do It'}</li>
//         )          
//  }

// conditional rendering option 6: 
export default function Todo({task,isDone}){
        let listItem;
        if(isDone){
                listItem = <li>Finished : {task}</li>
        }
        else{
                listItem = <li>Work On : {task}</li>
        }
         return listItem;        
 }