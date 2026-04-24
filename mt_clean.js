/**
 * 美团去广告 - Stash版
 * 原作者 fmz200（已适配Stash）
 */

try {
  let obj = JSON.parse($response.body);

  if (obj?.data?.partnerData) {
    obj.data.partnerData.poiStatus = 0;
  }

  $done({ body: JSON.stringify(obj) });

} catch (e) {
  console.log("美团脚本解析失败:", e);
  $done({});
}
