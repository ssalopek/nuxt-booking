export default function(context, inject) {
  const appId = "IYLSKHWLS7";
  const apikey = "3213e09fa4947abaa9ead95dde3753cf";

  inject("dataApi", { getHome });

  async function getHome(homeId) {
    const response = await fetch(
      `https://${appId}-dsn.algolia.net/1/indexes/homes/${homeId}`,
      {
        headers: {
          "X-Algolia-API-Key": apikey,
          "X-Algolia-Application-Id": appId,
        },
      }
    );
    const json = await response.json();
    return json;
  }
}
