document.addEventListener("DOMContentLoaded", () => {
  const output = document.getElementById("output");

  const showError = (message) => {
      output.innerHTML = `<span style="color: red;">${message}</span>`;
  };
});
  // Derivative calculation
  document.getElementById("calculate-derivative").addEventListener("click", () => {
      const expression = document.getElementById("expression").value;
      const variable = document.getElementById("variable").value;

      if (!expression || !variable) {
          showError("Please enter both a formula and variable.");
          return;
      }

      try {
          const derivative = nerdamer('diff(' + expression + ',' + variable + ')').toString();
          output.innerHTML = `<strong>Derivative:</strong> ${derivative}`;
      } catch (error) {
          showError("Invalid input for derivative calculation.");
      }
  });



  // Matrix operations
  document.getElementById("matrix-transpose").addEventListener("click", () => {
      const matrixInput = document.getElementById("matrix").value;

      try {
          const matrix = JSON.parse(matrixInput);
          const transpose = math.transpose(matrix);
          output.innerHTML = `<strong>Transpose:</strong> ${JSON.stringify(transpose)}`;
      } catch (error) {
          showError("Invalid matrix input for transpose calculation.");
      }
  });

  document.getElementById("matrix-determinant").addEventListener("click", () => {
      const matrixInput = document.getElementById("matrix").value;

      try {
          const matrix = JSON.parse(matrixInput);
          const determinant = math.det(matrix);
          output.innerHTML = `<strong>Determinant:</strong> ${determinant}`;
      } catch (error) {
          showError("Invalid matrix input for determinant calculation.");
      }
  });

  document.getElementById("matrix-inverse").addEventListener("click", () => {
      const matrixInput = document.getElementById("matrix").value;

      try {
          const matrix = JSON.parse(matrixInput);
          const inverse = math.inv(matrix);
          output.innerHTML = `<strong>Inverse:</strong> ${JSON.stringify(inverse)}`;
      } catch (error) {
          showError("Invalid matrix input for inverse calculation or non-invertible matrix.");
      }
  });
