const formNode = document.getElementById('main-form');
const nameNode = document.getElementById('name');
const phoneNode = document.getElementById('phone')
const comfortNode = document.getElementById('comfort');
const comfortFieldNode = document.getElementById('comfort-field');

comfortNode.addEventListener('change', function(){
    var messageSelector;
    let select = comfortNode.value;
    
    var rangeValue = comfortNode.value;
    console.log('comfort value', rangeValue);
    switch (select) {
        case '1': 
            messageSelector = 'I have a strong aversion to being incinerated.';
            break;
        case '2': 
            messageSelector = 'I am mildly averse to being burnt to a crisp.';
            break;
        case '3': 
            messageSelector = 'I am neither pleased nor displeased by my calories being released as thermal energy.';
            break;
        case '4': 
            messageSelector = 'I find the notion of becoming a smoking pile of ash acceptable.';
            break;
        case '5': 
            messageSelector = 'SACRIFICE ME TO THE LORD OF LIGHT, FOR THE NIGHT IS DARK AND FULL OF TERRORS!!!';
            break;
    }
    comfortFieldNode.textContent = messageSelector;
});

