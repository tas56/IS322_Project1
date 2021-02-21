(function (){

    let mockDatabase = [
        {id: 1, name: "Tree Of Life", category: "silver", price: 48.50, sale: false, description:"Super cool space pendant", image: "img/treeOfLife.jpg"},
        {id: 2, name: "Peace", category: "gold", price: 28.50, sale: false, description:"", image: "img/peace.jpg"},
        {id: 3, name: "Milky Way", category: "glass",  price: 18.50, sale: false, description:"", image: "img/space.jpg"},
        {id: 4, name: "Dark Gems", category: "glass", price: 99.50, sale: false, description:"", image: "img/darkgems.jpg"},
        {id: 5, name: "Purple Heart", category: "glass", price: 75.50, sale: true, description:"", image: "img/purpleheart.jpg"},
        {id: 6, name: "Gold Heart", category: "gold", price: 48.50, sale: true, description:"", image: "img/goldheart.jpg"},
        {id: 7, name: "Anchor", category: "gold", price: 46.50, sale: false, description:"", image: "img/anchor.jpg"},
        {id: 8, name: "White Marble", category: "glass", price: 43.50, sale: false, description:"", image: "img/marble.jpg"},
        {id: 9, name: "Shamrock", category: "silver", price: 49.50, sale: false, description:"", image: "img/shamrock.jpg"},
    ];

    function renderList(results){
        let productSection = document.querySelector('#products');

        productSection.innerHTML = '';

        let productList = results.map( result => {
            return '<div class="card">' +
                '  <img src=" ' + result.image + ' " alt="">' +
                '  <div class="card-container">' +
                '    <h4><b> ' + result.name + ' </b></h4>' +
                '    <p>$' + result.price.toFixed(2) + '<a href="#">learn more</a></p>' +
                '  </div>' +
                '</div>'
        });

        productList.forEach( row => { productSection.innerHTML += row; });
    }

    renderList(mockDatabase);


    document.querySelector('#orderBy').addEventListener('change',  (event) => {
        orderBy(event.target.value);
    });

    function orderBy(sortValue){

        let cloneDb = [...mockDatabase];

        switch (sortValue) {
            case 'name':
                cloneDb.sort((a,b) =>{
                    let nameA = a.name.toUpperCase();
                    let nameB = b.name.toUpperCase();
                    if (nameA < nameB ){
                        return -1;
                    } else return 1;
                });
                break;
            case 'lowPrice':
                cloneDb.sort( (a,b) =>{
                    if(a.price > b.price){
                        return 1;
                    } else return -1;
                });
                break;
            case 'highPrice':
                cloneDb.sort( (a,b) =>{
                    if(b.price > a.price){
                        return 1;
                    } else return -1;
                });
                break;
            default:
                cloneDb = [...mockDatabase];
        }
        renderList(cloneDb);
    }

    document.querySelector('#category').addEventListener('change',  (event) => {
        category(event.target.value);
    });

    function category(category) {
        switch (category) {
            case 'glass':
                renderList(mockDatabase.filter(db => db.category === 'glass'));
                break;
            case 'silver':
                renderList(mockDatabase.filter(db => db.category === 'silver'));
                break;
            case 'gold':
                renderList(mockDatabase.filter(db => db.category === 'gold'));
                break;
            default:
                renderList(mockDatabase);
        }
    }

    document.querySelector('#priceRange').addEventListener('change',  (event) => {
        priceRange(event.target.value);
    });

    function priceRange(priceRange) {
        switch (priceRange) {
            case 'belowTwenty':
                renderList(mockDatabase.filter(db => db.price < 20));
                break;
            case 'twenty':
                renderList(mockDatabase.filter(db => db.price >= 20 && db.price < 30));
                break;
            case 'thirty':
                renderList(mockDatabase.filter(db => db.price >= 30 && db.price < 40));
                break;
            case 'forty':
                renderList(mockDatabase.filter(db => db.price >= 40 && db.price < 50));
                break;
            case 'aboveFifty':
                renderList(mockDatabase.filter(db => db.price >= 50));
                break;
            default:
                renderList(mockDatabase);
        }
    }

})();