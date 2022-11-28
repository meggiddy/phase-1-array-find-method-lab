// code your solution here
var superbowlWin= (gameList)=>{
    const winYear = gameList.find(win => win.result === "W");

        if(winYear){
            return winYear.year;
       } else {
            return undefined;
    }
}


