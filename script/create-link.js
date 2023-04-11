const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const config = require('../blog.config.js')

const CONTEXT = config.context

const parseDoc = (content) => {
  const ret = /---\s([\s\S]+?)\s---/g.exec(content);
  if (ret && ret.length > 0) {
    const message = yaml.load(ret[1].trim());
    return {
      slug: message.slug || '',
      date: message.date || '',
      title: message.title || '',
      type: message.type || 'default'
    };
  }
  return {}
};

(async() => {
  const blogDir = path.join(CONTEXT, 'src/content')
  const targetDir = path.join(CONTEXT, 'src/pages/blog', 'link.json')

  const scanMap = {};
  const scanDir = (file, parent = CONTEXT) => {
    const parentDir = path.isAbsolute(parent) ? path.relative(CONTEXT, parent) : parent;

    const cur_absolute = file;
    const cur_relative = path.relative(CONTEXT, cur_absolute);
    console.log(`handle file : ${parentDir} -> ${file}`);
    if (fs.statSync(cur_absolute).isDirectory()) {
      const subFiles = fs.readdirSync(cur_absolute);
      subFiles.forEach((f) => scanDir(path.join(cur_absolute, f), cur_relative));
    } else if (/\.(md)$/.test(cur_absolute)) {
      const content = fs.readFileSync(cur_absolute, 'utf-8');
      const message = parseDoc(content);
      console.log(message)
      if(message.slug) {
        if(!scanMap[message.type] ){
          scanMap[message.type] = []
        }
        scanMap[message.type].push(message);
      }
    }
  };

  scanDir(blogDir);
  fs.writeFileSync(targetDir, JSON.stringify(scanMap, null, 2), 'utf-8');

  console.log('markdown file scan finished!');
  process.exit(0);
})()