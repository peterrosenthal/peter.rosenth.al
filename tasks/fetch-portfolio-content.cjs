const CWD = process.cwd();

const fs = require('fs');
const archieml = require('archieml');
const fetch = require('node-fetch');

function getUrl(id) {
  return `https://docs.google.com/document/d/${id}/export?format=txt`;
}

async function fetchList() {
  console.log(`fetching list of portfolio entries`);
  const list = [];
  const id = '1ClXruC-rmLh2iCEpRHa1kG_6X4FSh935Zo6nCDPuWCI';
  const url = getUrl(id);
  try {
    const response = await fetch(url);
    const text = await response.text();
    const parsed = archieml.load(text);
    for (let slug in parsed) {
      list.push({ slug, id: parsed[slug] });
    }
    console.log(`list of portfolio entries retrieved`);
  } catch (error) {
    throw new Error(error);
  }
  return list;
}

async function fetchEntry({ slug, id }) {
  console.log(`fetching ${slug} portfolio entry`);
  const url = getUrl(id);
  try {
    const response = await fetch(url);
    const text = await response.text();
    const entry = archieml.load(text);
    console.log(`${slug} retrieved`);
    return { slug, entry };
  } catch (error) {
    throw new Error(error);
  }
}

(async function(){
  const entries = await fetchList();
  const list = [];
  for (let entry of entries) {
    list.push(await fetchEntry(entry));
  }
  const parent = `${CWD}/src/data`;
  const file = `${parent}/portfolio.json`;
  const json = JSON.stringify(list);
  try {
    if (!fs.existsSync(parent)) {
      fs.mkdirSync(parent, { recursive: true });
    }
    fs.writeFileSync(file, json);
    console.log(`all portfolio entries retrieved and written to ${file}`);
  } catch (error) {
    throw new Error(error);
  }
})();
