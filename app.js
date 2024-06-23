// select html elements
const searchbar = document.getElementById('searchbar');
const suggestions = document.querySelector('#suggestions ul');

// define fruit array
const fruit = [
    'Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'
];

// add eventlistener to searchbar
searchbar.addEventListener("input", function() {

    // get search value lowercased and save to variable
    const searchVal = searchbar.value.toLowerCase();
    let result = [];

    // Clear previous suggestions
    suggestions.innerHTML = '';

    // if search val is not empty, filter through array
    if (searchVal.length) {

        // include only names that match the search value
        result = fruit.filter(word => word.toLowerCase().includes(searchVal));
    }

    // loop through and create li for each suggestion
    result.forEach(item => {
        const li = document.createElement("li");
        // match value to item 
        li.innerText = item;

        // add eventlistener to item, when clicked, the value becomes item
        li.addEventListener('click', function() {
            searchbar.value = item;
            suggestions.innerHTML = '';
        });
        suggestions.appendChild(li);
    });
});
