    // nird 

    const nird = document.querySelector(".nird");
    const computerCell = document.querySelector(".computer-cell");
    const movedCircle = document.querySelector('.moved-circle');

    nird.addEventListener("click", () => {
      turn(movedCircle);
    })

    function toMove(times, userORcomputr) {

      let count = 1;
      let ourInt = setInterval( () => {
        if (count > times) {
          clearInterval(ourInt);
           setTimeout(computerPlay, 100);
        //   computerPlay();
        } else {
          getValues(userORcomputr)
          count++
        }
      }, 200);
    }

    function getValues(userORcomputr) {
      let movedCircleObj = window.getComputedStyle(userORcomputr);
      let gridColumn = movedCircleObj.gridColumn;
      let gridRow = movedCircleObj.gridRow;
      let regEx = /^([0-9]+) \/ ([0-9]+)$/;
      let gridRowStart = +(gridRow.match(regEx)[1]);
      let gridRowEnd = +(gridRow.match(regEx)[2]);
      let gridColumnStart = +(gridColumn.match(regEx)[1]);
      let gridColumnEnd = +(gridColumn.match(regEx)[2]);
      move(gridColumn, gridColumnStart, gridColumnEnd, gridRow, gridRowStart, gridRowEnd, userORcomputr);
    }


    
    function computerPlay() {
      turn(computerCell)
    }

    function turn(userORcomputr) {

      let randomNum = Math.floor(Math.random() * 6) + 1;
      nird.innerHTML = randomNum;
      nird.classList.add("rotate");
      setTimeout(() => {
        nird.classList.remove("rotate");
      }, 100);

      setTimeout( () => {
        if (userORcomputr === computerCell) {
            toMoveComputer(randomNum, userORcomputr);
        } else {
            toMove(randomNum, userORcomputr);
        }
      }, 300)
    };

    function toMoveComputer(times, userORcomputr) {
      let count = 1;
      let ourInt = setInterval( () => {
        if (count > times) {
          clearInterval(ourInt);
        } else {
          getValues(userORcomputr)
          count++
        }
      }, 200);
    }