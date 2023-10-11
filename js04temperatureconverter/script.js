const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    
    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}Celsius`;
    }else{
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}Celsius`;
    }
}