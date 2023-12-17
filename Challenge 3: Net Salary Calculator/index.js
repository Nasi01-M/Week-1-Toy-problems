function calculateSalary() {
    // Get input values
    const basicSalary = parseFloat(prompt("Enter basic salary: "));
    const benefits = parseFloat(prompt("Enter benefits: "));
  
    // Calculate gross salary
    const grossSalary = basicSalary + benefits;
  
    // Define tax brackets and rates (modify these based on your tax system)
    const taxBrackets = [24000, 32000, 40000, 52000];
    const taxRates = [0.1, 0.25, 0.3, 0.35];
  
    // Calculate taxable income
    let taxableIncome = grossSalary - 24000;
  
    // Calculate payee (tax)
    let payee = 0;
    for (let i = 0; i < taxBrackets.length; i++) {
      if (taxableIncome > taxBrackets[i]) {
        payee += (taxBrackets[i] - taxBrackets[i - 1]) * taxRates[i - 1];
        taxableIncome -= taxBrackets[i];
      } else {
        payee += taxableIncome * taxRates[i - 1];
        break;
      }
    }
  
    // Calculate NHIF and NSSF deductions
    const nhifDeduction = grossSalary * 0.015;
    const nssfDeduction = grossSalary * 0.06;
  
    // Calculate net salary
    const netSalary = grossSalary - payee - nhifDeduction - nssfDeduction;
  
    // Display results using console.log and alert
    console.log(`Gross Salary: ${grossSalary.toFixed(2)}`);
    console.log(`Payee (Tax): ${payee.toFixed(2)}`);
    console.log(`NHIF Deductions: ${nhifDeduction.toFixed(2)}`);
    console.log(`NSSF Deductions: ${nssfDeduction.toFixed(2)}`);
    console.log(`Net Salary: ${netSalary.toFixed(2)}`);
    alert(`Your net salary is Ksh ${netSalary.toFixed(2)}`);
  }
  
  // Call the function
  calculateSalary();
  