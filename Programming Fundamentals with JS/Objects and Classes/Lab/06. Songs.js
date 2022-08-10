// function songs(input) {
//     class Song {
//         constructor(typeList, name, time) {
//             this.typeList = typeList;
//             this.name = name;
//             this.time = time;
//         }
//         typeSongs() {
//             console.log(this.name);
//         }
//     }
//     let songsNumber = input.shift();
//     let lastTypeList = input.pop();
    
//     if(lastTypeList == 'all') {
//         for(line of input) {
//          let [typeList, name, time] = line.split('_');
//          let allSongs = new Song(typeList, name, time);
//          allSongs.typeSongs();
//         }
       
//     }

//     for (let i = 0; i < songsNumber; i++) {
//         let [typeList, name, time] = input[i].split('_');
//         if (typeList == lastTypeList) {
//             let song = new Song(typeList, name, time);
//             song.typeSongs();
//         } 
//     }


// }


function songs(input) {
    class Song {
      constructor(type, name, time) {
        this.type = type,
        this.name = name,
        this.time = time
      }
    }
    let songs = [];
    let numSongs = input.shift();
    let typeSongs = input.pop();
    for(let i = 0; i < numSongs; i++) {
      let[type, name, time] = input[i].split('_');
      let song = new Song(type, name, time);
      songs.push(song);
 
     }
     if(typeSongs === 'all') {
       songs.forEach((i) => console.log(i.name));
      } else {
        let filtred = songs.filter((i) => i.type === typeSongs);
        filtred.forEach((i) => console.log(i.name));
      }
 }


songs([3, 'favourite_DownTown_3:14', 'favourite_Kiss_4:16', 'favourite_Smooth Criminal_4:01',
    'favourite']);

songs([4, 'favourite_DownTown_3:14', 'listenLater_Andalouse_3:24', 'favourite_In To The Night_3:58',
'favourite_Live It Up_3:48', 'listenLater']);

console.log('-----------------------------------');
songs([2, 'like_Replay_3:15', 'ban_Photoshop_3:48', 'all']);



