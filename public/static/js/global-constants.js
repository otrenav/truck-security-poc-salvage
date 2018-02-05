
var MAP;

var BOX_INTS = [
    new CountUp("box-int-one", 0, 23),
    new CountUp("box-int-two", 0, 169),
    new CountUp("box-int-three", 0, 157),
    new CountUp("box-int-four", 0, 431)
];

var initMap = function() {
    MAP = new google.maps.Map(document.getElementById('map-canvas'), {
        center: {lat: 19.432608, lng:-99.133209},
        zoom: 5,
        styles: [
            {elementType: 'geometry', stylers: [{color: '#59606B'}]},
            {elementType: 'labels.text.stroke', stylers: [{color: '#59606B'}]},
            {elementType: 'labels.text.fill', stylers: [{color: '#59606B'}]},
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{color: '#59606B'}]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#59606B'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{color: '#59606B'}]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill'
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#fb9678'}]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{color: '#fb9678'}]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{color: '#59606B'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#01c0c8'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#01c0c8'}]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{color: '#59606B'}]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{color: '#59606B'}]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{color: '#59606B'}]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{color: '#353c48'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#59606B'}]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#59606B'}]
            },
            {
                featureType: "all",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }
        ]
    });
};