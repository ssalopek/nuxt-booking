<template>
  <div>
    {{ lat }} / {{ lng }} / {{ label }}<br />
    <div v-for="home in homes" :key="home.objectID">{{ home.title }}</div>
  </div>
</template>

<script>
export default {
  //execute search input on change. Otherwise, lat/lng/label will not update on next search input
  //https://nuxtjs.org/docs/components-glossary/watchquery/
  watchQuery: ["lat", "lng", "label"],

  async asyncData({ query, $dataApi }) {
    const data = await $dataApi.getHomesByLocation(query.lat, query.lng);
    return {
      homes: data.json.hits,
      label: query.label,
      lat: query.lat,
      lng: query.lng,
    };
  },
};
</script>