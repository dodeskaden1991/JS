let snake = {
    body : ['10-7','10-6','10-5'],
    position : 'right',
    // do : (x) => {
    //         for(let i of snake.body){
    //             snaked = document.getElementById(i);
    //             snaked.classList = "snakeMove"
    //             }
    //         }
}

function move(){
   

    let copySnake = snake.body;

    console.log(copySnake)

    let trash = copySnake.pop();

    console.log(copySnake)
    // let snaked = document.getElementById(trash);
    // snaked.classList = "snake"
    
            let newSnake = copySnake[0].split("-");

            console.log(newSnake)

            newSnake[1] ++;
           
            newSnake = newSnake.join("-");

            console.log(newSnake)

            copySnake.unshift(newSnake);
            console.log(copySnake)
            snake.body = copySnake;
            console.log(snake.body)
            //snake.do();

    // switch (snake.position){
    //     case "left":
    //         newSnake = game.body[0].split('-').map(Number);
    //         newSnake[1] --;
    //         newSnake.join("-");
    //         break;
    //     case "right":
    //         newSnake = newSnake.split('-').map(Number);
    //         newSnake[1] ++;
    //         newSnake.join("-");
    //         copySnake.unshift(newSnake);
    //         snake.body = copySnake;
    //         snake.do(trash);
    //         break;
    //     case "up":
    //         newSnake = game.body[0].split('-').map(Number);
    //         newSnake[0] --;
    //         newSnake.join("-");
    //         break;
    //     case "down":
    //         newSnake = game.body[0].split('-').map(Number);
    //         newSnake[0] ++;
    //         newSnake.join("-");
    //         break;
    // }
}

move();