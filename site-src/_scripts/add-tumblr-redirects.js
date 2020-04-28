// Quick and dirty hack to add static redirects from previous Tumblr URL format
//
fs = require('fs');
fs.readdir('.', 'utf-8', function processFiles(err, files) {
  if (err) {
    console.log(err);
    return;
  }

  files.forEach(function(file) {
    fs.readFile(file, 'utf-8', function processFile(err, contents) {
      if (err) {
        console.log(err);
        return;
      }

      tumblrID = contents.match(/tumblr_id\: (.*)\n/);
      if (tumblrID) {
        var filenameWithoutDate = file.substring(11);
        filenameWithoutDate = filenameWithoutDate.replace(".md", "");
        var redirect = "redirect_from:\n - /post/" + tumblrID[1] + "/" + filenameWithoutDate + "\n";
        var newContents = contents.substring(0, tumblrID.index) + redirect + contents.substring(tumblrID.index);

        fs.writeFile(file, newContents, (err) => {
          if (err) {
            console.log(err);
          }
        });
      }
    });
  });
});
