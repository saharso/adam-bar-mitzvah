const { readdir } = require('fs')
const fs = require('fs');

const getDirectories = (source, callback) =>
    readdir(source, { withFileTypes: true }, (err, files) => {
        if (err) {
            callback(err)
        } else {
            callback(
                files
                    .filter(dirent => dirent.isDirectory())
                    .map(dirent => dirent.name)
            )
        }
    })
const root = './src/images'
getDirectories(root, (dirs)=>{

    const start = `
    
    export interface Image {
        url: string;
        category: string;
    }
    export const images: Image[] = []`

    ;
    const content = [];
    const content2 = [];
    dirs.forEach((dir)=>{
        const files = fs.readdirSync(`${root}/${dir}`);


            let importName = '';
            files.forEach(file => {
                importName = `${dir}_${file.split('.')[0].replace(/-/g,'_').replace(/JPG/, 'jpg')}`;
                content.push( `import ${importName} from "./${dir}/${file}";`);
                content2.push( `images.push({
                    url: ${importName},\n
                    category: "${dir}",\n
                })`);

            });
        console.log(content);

    });
    setTimeout(()=>{
        console.log(content);
    fs.writeFile(`${root}/index.ts`, [content.join('\n'),start, content2.join('\n')].join('\n'), err => {
        if (err) {
            console.error(err)
            return
        }
    })
    },500)
})

