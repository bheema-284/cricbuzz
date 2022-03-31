const { mongoose } = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://Vijay:Vijay_123@cluster0.iuezz.mongodb.net/Cricbuzz",
  );
};

//mongodb+srv://Vijay:Vijay_123@cluster0.iuezz.mongodb.net/Cricbuzz

// let rankings = [

//   {
//     "position": 1,
//     "player": [
//       {"name" : "Marnus Labuschagne" ,
//       "country" : "AUSTRALIA" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c184115/marnus-labuschagne.jpg"}
//     ],
//     "rating": 892
//   }

//   {
//     "position": 2,
//     "player": [
//       {"name" : "Steven Smith" ,
//       "country" : "AUSTRALIA" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c170624/steven-smith.jpg"}
//     ],
//     "rating": 845
//   }

//   {
//     "position": 3,
//     "player": [
//       {"name" : "Kane Williamson" ,
//       "country" : "NEW ZEALAND" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c170733/kane-williamson.jpg"}
//     ],
//     "rating": 844
//   }

//   {
//     "position": 4,
//     "player": [
//       {"name" : "Joe Root" ,
//       "country" : "ENGLAND" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c170942/joe-root.jpg"}
//     ],
//     "rating": 843
//   }

//   {
//     "position": 5,
//     "player": [
//       {"name" : "Babar Azam" ,
//       "country" : "PAKISTAN" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c170768/babar-azam.jpg"}
//     ],
//     "rating": 815
//   }

//   {
//     "position": 6,
//     "player": [
//       {"name" : "Dimuth Karunaratne" ,
//       "country" : "SRI LANKA" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c170700/dimuth-karunaratne.jpg"}
//     ],
//     "rating": 781
//   }

//   {
//     "position": 7,
//     "player": [
//       {"name" : "Usman Khawaja" ,
//       "country" : "AUSTRALIA" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c170640/usman-khawaja.jpg"}
//     ],
//     "rating": 757
//   }

//   {
//     "position": 8,
//     "player": [
//       {"name" : "Rohit Sharma" ,
//       "country" : "INDIA" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c170658/rohit-sharma.jpg"}
//     ],
//     "rating": 754
//   }

//   {
//     "position": 9,
//     "player": [
//       {"name" : "Travis Head" ,
//       "country" : "AUSTRALIA" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c147703/travis-head.jpg"}
//     ],
//     "rating": 744
//   }

//   {
//     "position": 10,
//     "player": [
//       {"name" : "Virat Kohli" ,
//       "country" : "INDIA" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c170661/virat-kohli.jpg"}
//     ],
//     "rating": 742
//   }

//   {
//     "position": 11,
//     "player": [
//       {"name" : "Rishabh Pant" ,
//       "country" : "INDIA" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c171010/rishabh-pant.jpg"}
//     ],
//     "rating": 738
//   }

//   {
//     "position": 12,
//     "player": [
//       {"name" : "David Warner" ,
//       "country" : "AUSTRALIA" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c170635/david-warner.jpg"}
//     ],
//     "rating": 691
//   }

//   {
//     "position": 13,
//     "player": [
//       {"name" : "Liton Das" ,
//       "country" : "BANGLADESH" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c170914/liton-das.jpg"}
//     ],
//     "rating": 683
//   }

//   {
//     "position": 14,
//     "player": [
//       {"name" : "Tom Latham" ,
//       "country" : "NEW ZEALAND" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c170743/tom-latham.jpg"}
//     ],
//     "rating": 679
//   }

//   {
//     "position": 15,
//     "player": [
//       {"name" : "Henry Nicholls" ,
//       "country" : "NEW ZEALAND" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c170745/henry-nicholls.jpg"}
//     ],
//     "rating": 675
//   }

//   {
//     "position": 16,
//     "player": [
//       {"name" : "Dean Elgar" ,
//       "country" : "SOUTH AFRICA" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c157353/dean-elgar.jpg"}
//     ],
//     "rating": 672
//   }

//   {
//     "position": 17,
//     "player": [
//       {"name" : "Azhar Ali" ,
//       "country" : "PAKISTAN" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c155814/azhar-ali.jpg"}
//     ],
//     "rating": 666
//   }

//   {
//     "position": 18,
//     "player": [
//       {"name" : "Devon Conway" ,
//       "country" : "NEW ZEALAND" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c207888/devon-conway.jpg"}
//     ],
//     "rating": 661
//   }

//   {
//     "position": 19,
//     "player": [
//       {"name" : "Mohammad Rizwan" ,
//       "country" : "PAKISTAN" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c202222/mohammad-rizwan.jpg"}
//     ],
//     "rating": 655
//   }

//   {
//     "position": 20,
//     "player": [
//       {"name" : "Mayank Agarwal" ,
//       "country" : "INDIA" ,
//       "img" : "https://www.cricbuzz.com/a/img/v1/50x50/i1/c171091/mayank-agarwal.jpg"}
//     ],
//     "rating": 650
//   }

// ]
