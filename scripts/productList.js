(function (){

    var mockDatabase = [
        {id: 1, name: "Tree Of Life", category: "silver", price: "$48.50", description:"Super cool space pendant", image: "img/treeOfLife.jpg"},
        {id: 2, name: "Peace", category: "gold", price: "$28.50", description:"", image: "img/peace.jpg"},
        {id: 3, name: "Milky Way", category: "glass", price: "$18.50", description:"", image: "img/space.jpg"},
        {id: 4, name: "Dark Gems", category: "glass", price: "$99.50", description:"", image: "img/darkgems.jpg"},
        {id: 5, name: "Purple Heart", category: "glass", price: "$75.50", description:"", image: "img/purpleheart.jpg"},
        {id: 6, name: "Gold Heart", category: "gold", price: "$48.50", description:"", image: "img/goldheart.jpg"},
        {id: 7, name: "Anchor", category: "gold", price: "$46.50", description:"", image: "img/anchor.jpg"},
        {id: 8, name: "White Marble", category: "glass", price: "$43.50", description:"", image: "img/marble.jpg"},
        {id: 9, name: "Shamrock", category: "silver", price: "$49.50", description:"", image: "img/shamrock.jpg"},
    ];

    function renderList(results){
        var productSection = document.querySelector('#products');

        productSection.innerHTML = '';

        var productList = results.map(function (result) {
            return '<div class="card">' +
                '  <img src=" ' + result.image + ' " alt="">' +
                '  <div class="card-container">' +
                '    <h4><b> ' + result.name + ' </b></h4>' +
                '    <p> ' + result.price + '<a href="#">learn more</a></p>' +
                '  </div>' +
                '</div>'
        });

        productList.forEach(function (row) {
           productSection.innerHTML += row;
        });
    }

    renderList(mockDatabase);

    function orderBy(sortValue) {
        var sortedResults = (sortValue === 'name') ?
            mockDatabase.sort( function (a,b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();

                if (nameA < nameB ){
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
            }) :
            mockDatabase.sort(function (a,b) {
                return a[sortValue] - b[sortValue];
            });
        renderList(sortedResults);
    };

    document.querySelector('#orderBy').addEventListener('change', function (event){
        orderBy(event.target.value);
    });


})();