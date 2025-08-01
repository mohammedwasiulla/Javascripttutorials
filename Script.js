 const output = document.getElementById("output");

    function log(msg) {
      output.textContent += msg + "\n";
    }

    function clearLog() {
      output.textContent = "";
    }

    function testVar() {
      clearLog();
      log("Inside testVar()");

      var x = 10;
      log("Outside block, x = " + x); // 10

      {
        var x = 20;
        log("Inside block, x = " + x); // 20
      }

      log("After block, x = " + x); // 20 (No block scope)

      // Re-declaration is allowed
      var x = 50;
      log("Re-declared x = " + x);
    }

    function testLet() {
      clearLog();
      log("Inside testLet()");

      let y = 10;
      log("Outside block, y = " + y); // 10

      {
        let y = 20;
        log("Inside block, y = " + y); // 20
      }

      log("After block, y = " + y); // 10 (Block-scoped)

      try {
        let y = 30; // Re-declaration in same scope not allowed
        log("Re-declared y = " + y);
      } catch (err) {
        log("Error re-declaring y: " + err.message);
      }
    }

    function testConst() {
      clearLog();
      log("Inside testConst()");

      const z = 10;
      log("z = " + z);

      {
        const z = 99;
        log("Inside block, z = " + z); // 99
      }

      try {
        z = 20; // Assignment not allowed
      } catch (err) {
        log("Error changing const z: " + err.message);
      }

      try {
        const z = 100; // Re-declaring const in same scope
      } catch (err) {
        log("Error re-declaring const z: " + err.message);
      }
    }