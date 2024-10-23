const button = document.querySelector('button') as HTMLButtonElement;
const showResults = document.querySelector('#showResults') as HTMLElement;

const tipCalculator = (billValue: string, peopleAmount: string, serviceQuality: string) => {
    const result = {
        billValue: Number(billValue),
        peopleAmount: Number(peopleAmount),
        serviceQuality: serviceQuality,
        tip: 0,
        pricePerPerson: 0
    }
    switch(true) {
        case (result.serviceQuality === 'bad'): 
            result.tip = result.billValue * 0.02
            break;
        case (result.serviceQuality === 'ok'):
            result.tip = result.billValue * 0.1
            break;
        case (result.serviceQuality === 'super'):
            result.tip = result.billValue * 0.2
            break;
    }
    result.pricePerPerson = (result.billValue + result.tip) / result.peopleAmount;

    return result;
}

button.addEventListener('click', () => {
    const inputBill = document.querySelector('#inputBill') as HTMLInputElement;
    const inputPersonNum = document.querySelector('#inputPersonNum') as HTMLInputElement;
    const serviceQuality = document.querySelector('#qualityService') as HTMLSelectElement;

    const result = tipCalculator(inputBill.value, inputPersonNum.value, serviceQuality.value);

    showResults.innerHTML = `
    <p>Das Trinkgeld ist: ${result.tip.toFixed(2)} €</p> 
    <p>Die Gesammtsumme beträgt: ${(result.billValue + result.tip).toFixed(2)} €</p> 
    <p>Der Preis pro Person ist: ${result.pricePerPerson.toFixed(2)} €</p>
    `;
})