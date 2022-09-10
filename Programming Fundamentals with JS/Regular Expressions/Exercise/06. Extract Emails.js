function extractEmails(input) {
  let pattern = /(?<!\S)[a-zA-Z]+([\.\-\_]*[A-Za-z]+)*@[a-zA-Z]+([\.\-]*[A-Za-z]+)*(\.[A-Za-z]+)/g;
  let matches = input.match(pattern);

  for(let line of matches) {
     console.log(line);
  }
}

extractEmails('Please contact us at: support@github.com.');
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');