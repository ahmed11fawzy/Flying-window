const LaunchBtn=document.querySelector('#launch');
let newWindow;
let x_Coordinate=0;
let y_Coordinate=0;
let moveInterval, checkInterval;
LaunchBtn.addEventListener('click', (e) => {
    newWindow=window.open('./second.html', '_blank', 'width=200,height=200');
    
    moveInterval = setInterval(() => {
        x_Coordinate += 100;
        y_Coordinate += 100;

        
        if (y_Coordinate >= 500) {
            clearInterval(moveInterval);
            checkYPosition(); 
        }

        newWindow.moveTo(x_Coordinate, y_Coordinate);
        console.log(`Moved to: (${x_Coordinate}, ${y_Coordinate})`);
    }, 1000);
})
    
    
 


function checkYPosition(){
    checkInterval = setInterval(() => {
        if (y_Coordinate > 0) {
            x_Coordinate -= 100;
            y_Coordinate -= 100;
            newWindow.moveTo(x_Coordinate, y_Coordinate);
            console.log(`Reversed to: (${x_Coordinate}, ${y_Coordinate})`);
        } else {
            clearInterval(checkInterval); 
        }
    }, 1000);
}

console.log(screen.height);