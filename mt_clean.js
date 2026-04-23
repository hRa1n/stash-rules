function clean(o) {
  if (o && typeof o === 'object') {
    for (let k in o) {
      if (k.toLowerCase().includes('ad') || k.includes('广告')) {
        delete o[k];
      } else {
        clean(o[k]);
      }
    }
  }
}

try {
  let obj = JSON.parse($response.body);
  clean(obj);
  $done({ body: JSON.stringify(obj) });
} catch (e) {
  $done({});
}
