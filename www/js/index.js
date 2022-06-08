document.addEventListener('deviceready', onDeviceReady, false);
// onDeviceReady();

async function onDeviceReady() {
  let clickedCount = 0;
  let my_media = null;

  document.getElementById('loadData').addEventListener('click', function () {
    //status
    document.querySelector('.data').innerHTML = `Data loading...`;
    if (clickedCount == 80) {
      clickedCount = 0;
    }
    clickedCount++;

    // Make a API call
    fetch(`https://swapi.dev/api/people/${clickedCount}/`)
      .then((e) => e.json())
      .then((data) => {
        // Display the content of the API
        document.querySelector('.data').innerHTML = `
            <strong>Name</strong>: <span>${data.name}</span><br>
            <strong>Height</strong>: <span>${data.height}</span><br>
            <strong>Mass</strong>: <span>${data.mass}</span><br>
            <strong>Hair Color</strong>: <span>${data.hair_color}</span><br>
            <strong>Skin Color</strong>: <span>${data.skin_color}</span><br>
            <strong>Eye Color</strong>: <span>${data.eye_color}</span><br>
            <strong>Birth Year</strong>: <span>${data.birth_year}</span><br>
            <strong>Gender</strong>: <span>${data.gender}</span><br>
        `;

        //Play a sound
        let SOUND = getMediaURL('audio/swvader01.mp3');
        my_media = new Media(SOUND, null, mediaError);

        // audio is playing then stop
        if (my_media.isPlaying) {
          my_media.stop();
        }
        my_media.play();
      });
  });

  function mediaError(e) {
    console.log('Media error ' + e);
  }

  function getMediaURL(s) {
    if (device.platform.toLowerCase() === 'android')
      return '/android_asset/www/' + s;
    return s;
  }
}

// document.addEventListener('deviceready', onDeviceReady, false);

// function onDeviceReady() {
//   // Cordova is now initialized. Have fun!

//   console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
//   document.getElementById('deviceready').classList.add('ready');
// }

// let clickedCount = 1;

// function countClick() {
//   clickedCount++;
// }

// document.getElementById('loadData').addEventListener('click', function () {
//   //status
//   document.querySelector('.data').innerHTML = `Data loading...`;

//   // Make a API call
//   fetch(`https://swapi.dev/api/people/${clickedCount}/`)
//     .then((e) => e.json())
//     .then((data) => {
//       // Display the content of the API
//       document.querySelector('.data').innerHTML = `
//                     <strong>Name</strong>: <span>${data.name}</span><br>
//                     <strong>Height</strong>: <span>${data.height}</span><br>
//                     <strong>Mass</strong>: <span>${data.mass}</span><br>
//                     <strong>Hair Color</strong>: <span>${data.hair_color}</span><br>
//                     <strong>Skin Color</strong>: <span>${data.skin_color}</span><br>
//                     <strong>Eye Color</strong>: <span>${data.eye_color}</span><br>
//                     <strong>Birth Year</strong>: <span>${data.birth_year}</span><br>
//                     <strong>Gender</strong>: <span>${data.gender}</span><br>
//                 `;
//     });
// });

// let request = 'https://swapi.dev/api/people/1';

// fetch(request)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     document.querySelector('.data').innerHTML = `
//     <strong>Name</strong>: <span>${data.name}</span><br>
//     <strong>Height</strong>: <span>${data.height}</span><br>
//     <strong>Mass</strong>: <span>${data.mass}</span><br>
//     <strong>Hair Color</strong>: <span>${data.hair_color}</span><br>
//     <strong>Skin Color</strong>: <span>${data.skin_color}</span><br>
//     <strong>Eye Color</strong>: <span>${data.eye_color}</span><br>
//     <strong>Birth Year</strong>: <span>${data.birth_year}</span><br>
//     <strong>Gender</strong>: <span>${data.gender}</span><br>
//     `;
//   });

// //DISPLAY ONE OBJECT IN THE ARRAY
// then((data) => {
//   let p = document.getElementById('text');
//   console.log(data);
//   p.innerHTML = JSON.stringify(data.name);
// });
