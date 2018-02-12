var Promise = require('bluebird');

module.exports = {
    searchHotels: function (destination, checkInDate, checkOutDate) {
        return new Promise(function (resolve) {

            // Filling the hotels results manually just for demo purposes
            var hotels = [];
            for (var i = 1; i <= 6; i++) {
                hotels.push({
                    name: 'Semester Books ' + i,
                    location: destination,
                    rating: Math.ceil(Math.random() * 5),
                    numberOfReviews: Math.floor(Math.random() * 5000) + 1,
                    priceStarting: Math.floor(Math.random() * 450) + 80,
                    image: 'https://image.flaticon.com/icons/png/512/528/528144.png/~text?txtsize=35&txt=Hotel+' + i + '&w=500&h=260',
                    moreImages: [
                        'http://www.gatecounsellor.com/books/images/artificial-intelligence-a-modern-approach-2-edition-9788177583670.jpg',
                        'https://www.meripustak.com/MeripustakStatic/FullImage/Computer-System-Architecture,-3rd-Edition_120981.jpg',
                        'https://images-na.ssl-images-amazon.com/images/I/51HUrwWODkL._SX322_BO1,204,203,200_.jpg',
                        'http://freescience.info/copertine/graph.jpg'
                    ]
                });
            }

            hotels.sort(function (a, b) { return a.priceStarting - b.priceStarting; });

            // complete promise with a timer to simulate async response
            setTimeout(function () { resolve(hotels); }, 1000);
        });
    }
};