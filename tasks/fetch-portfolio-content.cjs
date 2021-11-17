const CWD = process.cwd();

const fs = require('fs');
const archieml = require('archieml');
const fetch = require('node-fetch');

function getUrl(id) {
  return `https://docs.google.com/document/d/${id}/export?format=txt`;
}

async function fetchList(parent) {
  console.log(`fetching list of portfolio entries`);
  const list = [];
  const files = [];
  const id = '1ClXruC-rmLh2iCEpRHa1kG_6X4FSh935Zo6nCDPuWCI';
  const url = getUrl(id);
  try {
    const response = await fetch(url);
    const text = await response.text();
    const parsed = archieml.load(text);
    for (let slug in parsed) {
      list.push({ slug, id: parsed[slug] });
      files.push(`${slug}.json`);
    }
    const json = JSON.stringify(files);
    const file = `${parent}/entries.json`;
    fs.writeFileSync(file, json);
    console.log(`list of portfolio entries retrieved and written to ${file}`);
  } catch (error) {
    throw new Error(error);
  }
  return list;
}

async function fetchEntry({ slug, id }, parent) {
  console.log(`fetching ${slug} portfolio entry`);
  const url = getUrl(id);
  try {
    const response = await fetch(url);
    const text = await response.text();
    const parsed = archieml.load(text);
    const json = JSON.stringify(parsed);
    const file = `${parent}/${slug}.json`;
    fs.writeFileSync(file, json);
    console.log(`${slug} retrieved and written to ${file}`);
  } catch (error) {
    throw new Error(error);
  }
}

(async function(){
  const parent = `${CWD}/src/routes/portfolio`;
  try {
    if (!fs.existsSync(parent)) {
      fs.mkdirSync(parent, { recursive: true });
    }
  } catch (error) {
    throw new Error(error);
  }
  const entries = await fetchList(parent);
  for (let entry of entries) {
    fetchEntry(entry, parent);
  }
})();
