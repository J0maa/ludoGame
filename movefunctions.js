    function decrementColumn(gRs, gRe, target) {
      let gridRowStart = +gRs + 1;
      let gridRowEnd = +gRe + 1;
      target.style.gridRow = `${gridRowStart} / ${gridRowEnd}`;
    }

    function incrementColumn(gRs, gRe, target) {
      let gridRowStart = +gRs - 1;
      let gridRowEnd = +gRe - 1;
      target.style.gridRow = `${gridRowStart} / ${gridRowEnd}`;
    }

    function incrementRow(gCs, gCe, target) {
      let gridColumnStart = +gCs + 1;
      let gridColumnEnd = +gCe + 1;
      target.style.gridColumn = `${gridColumnStart} / ${gridColumnEnd}`;
    }

    function decrementRow(gCs, gCe, target) {
      let gridColumnStart = +gCs - 1;
      let gridColumnEnd = +gCe - 1;
      target.style.gridColumn = `${gridColumnStart} / ${gridColumnEnd}`;
    }