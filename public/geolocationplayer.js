if ('geolocation' in navigator) {
    console.log('great');
    navigator.geolocation.watchPosition(position => {
        console.log(position);
        var lat = position.coords.latitude;
        document.getElementById('latitude').textContent = lat;
        var lon = position.coords.longitude;
        document.getElementById('longitude').textContent = lon;
        function distance(lat1, lon1, lat2, lon2, unit) { //unit is for kilometers miles etc function pou ypologizei apostash
            if ((lat1 == lat2) && (lon1 == lon2)) {
                return 0;
            }
            else {
                var radlat1 = Math.PI * lat1 / 180;
                var radlat2 = Math.PI * lat2 / 180;
                var theta = lon1 - lon2;
                var radtheta = Math.PI * theta / 180;
                var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
                if (dist > 1) {
                    dist = 1;
                }
                dist = Math.acos(dist);
                dist = dist * 180 / Math.PI;
                dist = dist * 60 * 1.1515;
                if (unit == "K") { dist = dist * 1.609344 }// calculates in kilometers
                if (unit == "M") { dist = dist * 0.8684 }// calculates in miles will remove later
                return dist;
            }
        }
        var oneAM = new Howl({
            src: ['1AM Rain - AC.mp3']
        });
        var twoAM = new Howl({
            src: ['2AM Rain- AC.mp3']
        });
        var threeAM = new Howl({
            src: ['3AM Rain- AC.mp3']
        });
        var fourAM = new Howl({
            src: ['4AM Rain - AC.mp3']
        });
        var isPlaying = new Boolean(true);
        /*const playlist = [oneAM, twoAM, threeAM, fourAM];*/
        const x = [1, 37, 3, 90];
        const y = [1, 23, 6, 98];
        const rows = 3;
        const playlist = [oneAM, twoAM, threeAM, fourAM]
        function playSound(isPlaying, audioinput) {
            //check if sound is null, if not stop previous sound and unload it
            if (isPlaying == true) {
                Howler.stop();
                console.log('music already playing');
                var audio = new Microne(document.getElementById('audioinpuut'))
                audio.source('./geolocationplayer.js')
                setTimeout(function () {
                    audio.play()
                }, 2000)
            } else {
                console.log('music not playing yet');
                var audio = new Microne(document.getElementById('audioinpuut'))
                audio.source('./geolocationplayer.js')
                setTimeout(function () {
                    audio.play()
                }, 2000)
            }
        }
        for (var i = 0; i < rows; i++) {
            d = distance(lat, lon, x[i], y[i], "K");
            console.log(d);
            if (d > 3000) {
                var audioinput = playlist[i];
                console.log('music');
                playSound(isPlaying, audioinput);
                isPlaying = new Boolean(true);

            } else {
                if (isPlaying = true) {
                    Howler.stop();
                }
                console.log('no music');

            };
        }
    });




} else {
    console.log('uuuuuugh, no geolocation here');
}

const errorCallback = (error) => {
    console.error(error);
};
