const fs = require('fs')
f_readdir(__dirname)

function f_readdir(j_url) {
    fs.readdir(j_url, function (error, file) {
        if (error) {
            console.log(error)
            return;
        }
        file.forEach((val, index) => {
            // console.log(val);
            if('abc.js'==val){
                return ;
            }
            var s_new_file_name = val.match(/-\d{1,10}\+\d{1,10}/)[0]
            s_new_file_name = val.replace(s_new_file_name,'');            


            fs.rename('./'+val, './'+s_new_file_name, function(err) {
                if (err) {
                    console.error(err);
                };
            });
        })
    })
}