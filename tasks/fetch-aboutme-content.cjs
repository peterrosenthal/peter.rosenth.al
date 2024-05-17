const CWD = process.cwd();

const fs = require('fs');
const archieml = require('archieml');
const fetch = require('node-fetch');

(async function() {
  console.log('fetching about me content from google docs');
  const url = 'https://docs.google.com/document/d/10z9dXxyMVSsPVYOk0Q1pGrYCERbiWRGlwsmXHpNVIpk/export?format=txt';
  try {
    const response = await fetch(url);
    const text = await response.text();
    const parsed = archieml.load(text);
    const parent = `${CWD}/src/data`;
    if (!fs.existsSync(parent)) {
      fs.mkdirSync(parent, { recursive: true });
    }
    const file = `${parent}/aboutme.json`;
    const json = JSON.stringify(parsed);
    fs.writeFileSync(file, json);
    console.log(`about me content retrieved from google docs and written to ${file}`);
  } catch (error) {
    throw new Error(error);
  }
})();
