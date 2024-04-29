function sumRevenue()
{
    let salary = document.getElementById('salary').value
    let bonus = document.getElementById('bonus').value
    let overtime = document.getElementById('overtime').value
    let freelance = document.getElementById('freelance').value
    let dividend = document.getElementById('dividend').value
    let other = document.getElementById('other').value
    var  sumRevenue = salary*1+bonus*1+overtime*1+freelance*1+dividend*1+other*1
    document.getElementById("sumRevenue").innerHTML = "รวมรายรับ = "+sumRevenue+" บาท"
    return sumRevenue
}

function taxDeduction()
{
    var inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(function(input) {
        var maxValue = parseInt(input.getAttribute('max'));
        if (parseInt(input.value) > maxValue) {
            input.value = maxValue;
        }
    })

    let sso = document.getElementById('sso').value
    let life_insurance = document.getElementById('life insurance').value
    let health_insurance = document.getElementById('health insurance').value
    let esg = document.getElementById('esg').value
    let ssf = document.getElementById('ssf').value
    let rmf = document.getElementById('rmf').value
    let pvd = document.getElementById('pvd').value
    let shopdee = document.getElementById('shopdee').value

    var  taxDeduction = 160000+sso*1+life_insurance*1+health_insurance*1+esg*1+ssf*1+rmf*1+pvd*1+shopdee*1
    document.getElementById("taxDeduction").innerHTML = "รวมรายการลดหย่อน = "+taxDeduction+" บาท"

    return taxDeduction
}

function settomax() 
{
    var inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(function(input) {
        var maxValue = parseInt(input.getAttribute('max'));
        if (parseInt(input.value) > maxValue) {
            input.value = maxValue;
        }
    })
}

function calculateTax() 
{
    let calculateTax = sumRevenue() - taxDeduction()
    let range1 = 150000
    let range2 = 300000
    let range3 = 500000
    let range4 = 750000
    let range5 = 1000000
    let range6 = 2000000
    let range7 = 5000000
    var tax1 = 0
    var tax2 = 0
    var tax3 = 0
    var tax4 = 0
    var tax5 = 0
    var tax6 = 0
    var tax7 = 0
    let calculateTaxOG = calculateTax
    if (calculateTax > range7){
        var income7 = calculateTax - range7
        tax7 = income7*0.05*7
        calculateTax = calculateTax - (income7)
    }
    if (calculateTax > range6){
        var income6 = calculateTax - range6
        tax6 = income6*0.05*6
        calculateTax = calculateTax - (income6)
    }
    if (calculateTax > range5){
        var income5 = calculateTax - range5
        tax5 = income5*0.05*5
        calculateTax = calculateTax - (income5)
    }
    if (calculateTax > range4){
        var income4 = calculateTax - range4
        tax4 = income4*0.05*4
        calculateTax = calculateTax - (income4)
    }
    if (calculateTax > range3){
        var income3 = calculateTax - range3
        tax3 = income3*0.05*3
        calculateTax = calculateTax - (income3)
    }
    if (calculateTax > range2){
        var income2 = calculateTax - range2
        tax2 = income2*0.05*2
        calculateTax = calculateTax - (income2)
    }
    if (calculateTax > range1){
        var income1 = calculateTax - range1
        tax1 = income1*0.05*1
        calculateTax = calculateTax - (income1)
    }
    var sumtax = tax1+tax2+tax3+tax4+tax5+tax6+tax7
   
    document.getElementById("NetRevenue").innerHTML = "รายได้สุทธิ - รวมลดหย่อน = "+calculateTaxOG+" บาท<br>"
    +"สรุปยอดภาษี = "+sumtax+" บาท<br>"
    +"Income1 = "+income1+" | Tax1 = "+tax1+"<br>"
    +"Income2 = "+income2+" | Tax2 = "+tax2+"<br>"
    +"Income3 = "+income3+" | Tax3 = "+tax3+"<br>"
    +"Income4 = "+income4+" | Tax4 = "+tax4+"<br>"
    +"Income5 = "+income5+" | Tax5 = "+tax5+"<br>"
    +"Income6 = "+income6+" | Tax6 = "+tax6+"<br>"
    +"Income7 = "+income7+" | Tax7 = "+tax7+"<br>"
}