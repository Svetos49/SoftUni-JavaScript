function oldBooks(input) {
  let favoriteBook = input[0];
  let index = 1;
  let books = input[index];
  
  let booksIsFound = false;
  while(books != 'No More Books') {
    
    if(books === favoriteBook) {
     console.log(`You checked ${index - 1} books and found it.`);
     booksIsFound = true;
     break;
    }
      
      index++;
      books = input[index];
}
    
   if(booksIsFound == false) {
       console.log('The book you search is not here!');
       console.log(`You checked ${index - 1} books.`);
   }
}

 oldBooks(['Troy', 'Stronger', 'Life Style', 'Troy']);

oldBooks([
    'The Spot',
    'Hunger Games',
    'Harry Potter',
    'Torronto',
    'Spotify',
    'No More Books'
  ]);

  oldBooks([
    'Bourne',     'True Story',
    'Forever',    'More Space',
    'The Girl',   'Spaceship',
    'Strongest',  'Profit',
    'Tripple',    'Stella',
    'The Matrix', 'Bourne'
  ]);