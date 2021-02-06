(function (){

    var mockDatabase = [
        {id: 1, name: "Apacey Pendant", price: "$48.50", description:"Super cool space pendant", image: "img/space.jpg"},
        {id: 2, name: "Dpacey Pendant", price: "$28.50", description:"", image: "img/space.jpg"},
        {id: 3, name: "Fpacey Pendant", price: "$18.50", description:"", image: "img/space.jpg"},
        {id: 4, name: "Gpacey Pendant", price: "$99.50", description:"", image: "img/space.jpg"},
        {id: 5, name: "Hpacey Pendant", price: "$75.50", description:"", image: "img/space.jpg"},
        {id: 6, name: "Ppacey Pendant", price: "$48.50", description:"", image: "img/space.jpg"},
        {id: 7, name: "Apacey Pendant", price: "$46.50", description:"", image: "img/space.jpg"},
        {id: 8, name: "Dpacey Pendant", price: "$43.50", description:"", image: "img/space.jpg"},
        {id: 9, name: "Kpacey Pendant", price: "$49.50", description:"", image: "img/space.jpg"},
        {id: 10, name: "Spacey Pendant", price: "$58.50", description:"", image: "img/space.jpg"},
    ];

    function renderList(results){
        var productSection = document.querySelector('#products');

        productSection.innerHTML = '';

        var productList = results.map(function (result) {
            return '<div class="card">' +
                '  <img src=" ' + result.image + ' " alt="">' +
                '  <div class="card-container">' +
                '    <h4><b> ' + result.name + ' </b></h4>' +
                '    <p> ' + result.price + '</p>' +
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