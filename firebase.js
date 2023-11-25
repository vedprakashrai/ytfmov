//export GOOGLE_APPLICATION_CREDENTIALS="/home/ved/git/ytmov/ytfmov-firebase-adminsdk-m5gwf-30dde49d91.json"

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');


initializeApp({
    credential:cert("/home/ved/git/ytmov/ytfmov-firebase-adminsdk-m5gwf-30dde49d91.json"),
    databaseURL: 'https://ytfmov.firebaseio.com'
});
var gov2 =[
{
    "title_x": "Dulhe Raja",
    "imdb_id": "tt0210659",
    "poster_path": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1d/Dulhe_Raja.jpg/220px-Dulhe_Raja.jpg",
    "wiki_link": "https://en.wikipedia.org/wiki/Dulhe_Raja",
    "title_y": "Dulhe Raja",
    "original_title": "Dulhe Raja",
    "is_adult": 0,
    "year_of_release": 1998,
    "runtime": 143,
    "genres": "Comedy",
    "imdb_rating": 6.6,
    "imdb_votes": 2072,
    "story": "Poor Raja opens a fast food restaurant right opposite a five star hotel run by it's owner Singhania  earning his wrath. The wealthy hotel owner uses all his influence to remove Raja  but in vain. Things get worse for the wealthy man  when his daughter Kiran wants to marry the poor hotelier. The wealthy man refuses  leading to a confrontation and a condition - which Raja fulfills  he becomes rich virtually overnight  and proposes for the hand of Kiran. The wealthy hotelier reluctantly accepts him as his son-in-law  only to have Kiran elope with a man named Rahul.",
    "summary": "Poor Raja opens a fast food restaurant right opposite a five star hotel run by it's owner Singhania  earning his wrath. The wealthy hotel owner uses all his influence to remove Raja  but in...",
    "tagline": "",
    "actors": "Govinda|Raveena Tandon|Kader Khan|Prem Chopra|Mohnish Bahl|Johnny Lever|Asrani|Anjana Mumtaz|Guddi Maruti|Sudhir|Anil Nagrath|Anil Verma|Suresh Malhotra|Rana Jung Bahadur|",
    "wins_nominations": "1 win & 1 nomination",
    "release_date": "10 July 1998 (India)",
    "yt":"Lt4jNSiCV48",
    "tplus":150
  },
  {
    "title_x": "Rajaji (film)",
    "imdb_id": "tt0286910",
    "poster_path": "",
    "wiki_link": "https://en.wikipedia.org/wiki/Rajaji_(film)",
    "title_y": "Rajaji",
    "original_title": "Rajaji",
    "is_adult": 0,
    "year_of_release": 1999,
    "runtime": 150,
    "genres": "Comedy|Romance",
    "imdb_rating": 4.6,
    "imdb_votes": 275,
    "story": "Raja is a lazy slacker  who wants to have an easy life. He figures that if he gets married to a rich woman  then he will not have to work. So he meets with multi-millionaire Payal  impresses her  and both fall in love. With the blessings of their respective parents' both get married. After the marrige Raja finds out that Payal is the daughter of the multi-millionaire's gardner  and soon leaves her. Fortune visits Payal and her father  when they win a lottery  and themselves become wealthy beyond their imagination. When Raja comes to know about their new-found wealth  he tries to come back into their lives  but the question is will they accept him back?",
    "summary": "Raja is a lazy slacker  who wants to have an easy life. He figures that if he gets married to a rich woman  then he will not have to work. So he meets with multi-millionaire Payal  ...",
    "tagline": "",
    "actors": "Govinda|Raveena Tandon|Satish Kaushik|Shakti Kapoor|Mohan Joshi|Ranjeet|Aruna Irani|Kader Khan|Divya Dutta|Dinesh Hingoo|Mushtaq Khan|Guddi Maruti|Rajendra Agarwal|Shagufta Ali|",
    "wins_nominations": "",
    "release_date": "21 May 1999 (India)",
    "yt":"MfWv8pNAakA",
    "tplus":85
  },
  {
    "title_x": "Banarasi Babu (1997 film)",
    "imdb_id": "tt0118680",
    "poster_path": "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Banarasi_Babu_%281997%29.jpg/220px-Banarasi_Babu_%281997%29.jpg",
    "wiki_link": "https://en.wikipedia.org/wiki/Banarasi_Babu_(1997_film)",
    "title_y": "Banarasi Babu",
    "original_title": "Banarasi Babu",
    "is_adult": 0,
    "year_of_release": 1997,
    "runtime": 126,
    "genres": "Comedy",
    "imdb_rating": 4.4,
    "imdb_votes": 192,
    "story": "Wealthy business  Chaubey  his wife  Lily  and daughter  Madhubala  return from Britain in order to visit India and find a suitable groom for Madhubala. They are met at the airport by Vikram  who would like to marry Madhubala. Though Lily fully approves of Vikram  Chaubey dislikes him instantly. They travel to the small town where Chaubey was born  and meet with Gopi. Gopi and Madhubala take an instant liking to each other  and get married. While Chaubey approves of this marriage  Lily does not. Lily gets together with Vikram and sets about to plot separating the newly married couple. She may not ply her skills as they are incompatible in every possible way  and may not need any help from anyone outside in order to break up this marriage.",
    "summary": "Wealthy business  Chaubey  his wife  Lily  and daughter  Madhubala  return from Britain in order to visit India and find a suitable groom for Madhubala. They are met at the airport by ...",
    "tagline": "",
    "actors": "Govinda|Ramya Krishnan|Kader Khan|Shakti Kapoor|Bindu|Reema Lagoo|Shagufta Ali|Sanam|Shashi Kiran|Bablu Verma|",
    "wins_nominations": "",
    "release_date": "8 May 1997 (India)",
    "yt":"KOgVstovt40",
    "tplus":60
  },
  {
    "title_x": "Joru Ka Ghulam",
    "imdb_id": "tt0250452",
    "poster_path": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Joru_Ka_Ghulam.jpg/220px-Joru_Ka_Ghulam.jpg",
    "wiki_link": "https://en.wikipedia.org/wiki/Joru_Ka_Ghulam",
    "title_y": "Joru Ka Ghulam",
    "original_title": "Joru Ka Ghulam",
    "is_adult": 0,
    "year_of_release": 2000,
    "runtime": 169,
    "genres": "Comedy|Drama|Romance",
    "imdb_rating": 5.1,
    "imdb_votes": 858,
    "story": "Dhaneshwar Pitamber  has four daughters. All the four daughters are not ready to marry  each one having their own reason. The daughters always play mischievous tricks on the one coming with a proposal of marriage  and their gang leader is the youngest daughter Durga. Kader Khan is so desperate to get his daughters married that he is ready to give a dowry of five crores to each son-in-law. Raja and Kanahaiya are small time con men at the airport. Raju Patel is an NRI from America who comes to India to get married to one of the daughters of Dhaneshwar. Raja and Dhaneshwar mistake Raja as Raju Patel and take him home. In order to get five crores Raja solves the problems of the daughters and makes them ready for getting married. How Raja solves the daughter's problems forms the crux of the story. Ashish Vidyarthi as a don obsessed in becoming a villain in films  plays a key character in the whole story.",
    "summary": "A conman disguises himself as a groom in order to con a wealthy yet a troubled businessman  later reforms his criminal ways to win his ladylove.",
    "tagline": "",
    "actors": "Govinda|Twinkle Khanna|Kader Khan|Ashok Saraf|Ashish Vidyarthi|Ali Asgar|Johnny Lever|Razak Khan|Sonu Sagar|Rushika Reikhi|Rajshree Solanki|Ghanshyam Rohera|Moses|Rakhi Sawant|",
    "wins_nominations": "",
    "release_date": "16 June 2000 (India)",
    "yt":"htv1aH0uQmk",
    "tplus":25
  }];
const db = getFirestore();
//console.log(db);

async function setDocument(db,doc) {
    const res = await db.collection('ytfmov').doc(doc.imdb_id).set(doc);
    // [END firestore_data_set_from_map]
  
    console.log('Set: ', res);
  }

  gov2.map((doc)=>setDocument(db,doc));

