function sumArray(arr) {
      let sum = 0;
      for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
    }

    // Callback function
    function processArray(arr, callback) {
      return callback(arr);
    }

    // Arrow function 
    const calculate = () => {
      const input = document.getElementById("numbers").value;
      const arr = input.split(',').map(Number);
      const result = processArray(arr, sumArray);
      document.getElementById("result").textContent = "Sum: " + result;
    };