// step -1
let fs = require("fs");
let path = require("path");
let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
let input = process.argv.slice(2);
let toOrganizeDirPath = input[0];
let organizedFilesPath = path.join(toOrganizeDirPath, "organized_files");
//  1. create a directory inside the given path
// subdirectory
function dirCreator(dirpath) {
    if (fs.existsSync(dirpath) == false) {
        fs.mkdirSync(dirpath);
    }
}
function isFilorNot(dirpath) {
    // check extension
    return fs.lstatSync(dirpath).isFile();
}
function getContent(dirpath) {
    // content
    return fs.readdirSync(dirpath);
}
dirCreator(organizedFilesPath);
// organizedFile-> sub directory 
for (let key in types) {
    let innerDirPath = path.join(organizedFilesPath, key);
    dirCreator(innerDirPath);
}
let otherPath = path.join(organizedFilesPath, "others");
dirCreator(otherPath);
// console.log(toOrganizeDirPath);
// Step -2
orgFiles(toOrganizeDirPath);

function orgFiles(dirpath) {
    let isFile = isFilorNot(dirpath);
    if (isFile == true) {
        //   identify dest folder
        console.log(dirpath);
        // copy
    } else {
        let content = getContent(dirpath);
        for (let i = 0; i < content.length; i++) {
            let childPath = path.join(dirpath, content[i])
            orgFiles(childPath);
        }
    }
    // file -> dest folder name 
}
