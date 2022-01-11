/** Task 1:
 * create 3 objects with the name movie1, movie2, movie3
 * Add 3 properties to it
 * - id -> just a unique id, you can start with 1
 * - name -> a movie name (e.g. COCO)
 * - image  -> an http link of the image on the internet
 * rating -> a rating number from 1 to 10
 *
 * After you create the movies, console log them.
 * Open the live server, and see the logs in the console of the browser
 *
 */

// add the movies variables here ....
 const movie1 = {
     id: 1,
     name: "Avatar", 
     image: "http://www.impawards.com/2009/posters/avatar_ver5.jpg",
     rating: 9, 
}; 
const movie2 = {
    id: 2,
    name: "The Unforgivable",    
    image:"https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/226423/UNFORGIVABLE_Main_Vertical_27x40_RGB_EN-GB.jpg ",
    rating: 8, 

};
const movie3 = {
    id: 3, 
    name: "Morbius",
    image: "https://media.news9live.com/h-upload/2021/12/06/89225-morbius.jpg",
    rating: 7.5, 

};
console.log(movie1);
console.log(movie2);
console.log(movie3);

/** Task 2:
 * Create an array `movies`
 * Add to it the movies that you created on top.
 * Once you add one movie,
 * you will see the movie card in the html page!
 *
 * Don't add to the array the movies variables,
 * just copy paste the content to be in the following format
 * [
 *    {
 *       prop: value,
 *       prop: value,
 *       prop: value,
 *    },
 * ]
 */
const movies = [
    {
         id: 1,
         name: "Avatar", 
         image: "https://i.pinimg.com/originals/e8/e7/a2/e8e7a2ab4bbd0a540d21dc52da2a540f.jpg",
        rating: 9, 
    },

    {
        id: 2,
        name: "The Unforgivable",    
        image: "https://images.fandango.com/ImageRenderer/820/0/redesign/static/img/default_poster.png/0/images/masterrepository/fandango/226423/UNFORGIVABLE_Main_Vertical_27x40_RGB_EN-GB.jpg",
       rating: 8, 
    
    },

    {
        id: 3, 
        name: "Morbius",
        image: "https://media.news9live.com/h-upload/2021/12/06/89225-morbius.jpg",
        rating: 7.5, 
    },


];
console.log(movies);

/** TASK 3:
 * Create a new file call it `movies.json`
 * Copy paste the content of the array inside the json file
 * Make sure it's a json format.
 */
