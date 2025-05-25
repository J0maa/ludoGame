


function move(gridColumn, gridColumnStart, gridColumnEnd, gridRow, gridRowStart, gridRowEnd, target) {
     if (gridColumn === "7 / 8" &&
    (gridRow === "2 / 3" || gridRow === "3 / 4" || gridRow === "4 / 5" || gridRow === "5 / 6" || gridRow === "6 / 7")
   ) {
          incrementColumn(gridRowStart, gridRowEnd, target);
        }
  if (gridRow === "1 / 2" && (gridColumn === "7 / 8" || gridColumn === "8 / 9") ) {
          incrementRow(gridColumnStart, gridColumnEnd, target)
        }
  if (gridColumn === "9 / 10" && 
  (gridRow === "1 / 2" || gridRow === "2 / 3" || gridRow === "3 / 4" || gridRow === "4 / 5" || gridRow === "5 / 6") ) {
          decrementColumn(gridRowStart, gridRowEnd, target);
        }

  if (gridColumn === "9 / 10" && gridRow === "6 / 7") {
    decrementColumn(gridRowStart, gridRowEnd, target);
    // movedCircle.style.gridColumn = "10 / 11"
    incrementRow(gridColumnStart, gridColumnEnd, target); // modifie

  }

  if (gridRow === "7 / 8" && 
  (gridColumn === "10 / 11" || gridColumn === "11 / 12" || gridColumn === "12 / 13" || gridColumn === "13 / 14" || gridColumn === "14 / 15")) {
    incrementRow(gridColumnStart, gridColumnEnd, target);
  }

  if (gridColumn === "15 / 16" && (gridRow === "7 / 8" || gridRow === "8 / 9")) {
    decrementColumn(gridRowStart, gridRowEnd, target);
  }

  if (gridRow === "9 / 10" && 
  (gridColumn === "15 / 16" || gridColumn === "14 / 15" || gridColumn === "13 / 14" || gridColumn === "12 / 13" || gridColumn === "11 / 12")) {
    decrementRow(gridColumnStart, gridColumnEnd, target);
  }

  if (gridColumn === "10 / 11" && gridRow === "9 / 10") {
    // movedCircle.style.gridColumn = "9 / 10";
    decrementRow(gridColumnStart, gridColumnEnd, target); // modifie
    // movedCircle.style.gridRow = "10 / 11";
    decrementColumn(gridRowStart, gridRowEnd, target); // modifie
    // decrementColumn(gridRowStart, gridRowEnd);
  }

  if (gridColumn === "9 / 10" && 
  (gridRow === "10 / 11" || gridRow === "11 / 12" || gridRow === "12 / 13" || gridRow === "13 / 14" || gridRow === "14 / 15")) {
    decrementColumn(gridRowStart, gridRowEnd, target);
  }

  if (gridRow === "15 / 16" && (gridColumn === "9 / 10" || gridColumn === "8 / 9")) {
    decrementRow(gridColumnStart, gridColumnEnd, target);
  }

  if (gridColumn === "7 / 8" && 
  (gridRow === "15 / 16" || gridRow === "14 / 15" || gridRow === "13 / 14" || gridRow === "12 / 13" || gridRow === "11 / 12")) {
    incrementColumn(gridRowStart, gridRowEnd, target);
  }

  if (gridColumn === "7 / 8" && gridRow === "10 / 11") {
    // movedCircle.style.gridColumn = "6 / 7";
    decrementRow(gridColumnStart, gridColumnEnd, target); // modified
    // movedCircle.style.gridRow = "9 / 10";
    incrementColumn(gridRowStart, gridRowEnd, target); // modified
  }

  if (gridRow === "9 / 10" && 
    (gridColumn === "6 / 7" || gridColumn === "2 / 3" || gridColumn === "3 / 4" || gridColumn === "4 / 5" || gridColumn === "5 / 6")) {
    decrementRow(gridColumnStart, gridColumnEnd, target);
    }

  if (gridColumn === "1 / 2" && (gridRow === "9 / 10" || gridRow === "8 / 9")) {
    incrementColumn(gridRowStart, gridRowEnd, target);
  }

  if (gridRow === "7 / 8" &&
    (gridColumn === "1 / 2" || gridColumn === "2 / 3" || gridColumn === "3 / 4" || gridColumn === "4 / 5" || gridColumn === "5 / 6") ) {
    incrementRow(gridColumnStart, gridColumnEnd, target);
    }

  if (gridColumn === "6 / 7" && gridRow === "7 / 8") {
    // movedCircle.style.gridColumn = "7 / 8";
    incrementRow(gridColumnStart, gridColumnEnd, target); // modified
    // movedCircle.style.gridRow = "6 / 7";
    incrementColumn(gridRowStart, gridRowEnd, target); // nodified
  }
  }