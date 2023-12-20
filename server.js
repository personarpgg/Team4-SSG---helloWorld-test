// static-site-generator.js

const fs = require('fs');

const content = '<h1>안녕 세계</h1>';

fs.writeFileSync('index.html', `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>SSG Hello World</title></head><body>${content}</body></html>`);
