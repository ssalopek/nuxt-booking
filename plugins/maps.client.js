export default function(context, inject) {
  let isLoaded = false;
  let waiting = [];

  addScript();
  inject("maps", {
    showMap,
    makeAutoComplete,
  });

  function addScript() {
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBL1pVkzgdRynrNNmx3qyNtmYU3lrRHDys&libraries=places&callback=initGoogleMaps";
    script.async = true;
    window.initGoogleMaps = initGoogleMaps;
    document.head.appendChild(script);
  }

  function initGoogleMaps() {
    isLoaded = true;
    waiting.forEach((item) => {
      if (typeof item.fn == "function") {
        item.fn(...item.arguments);
      }
    });
    waiting = [];
  }

  //https://developers.google.com/maps/documentation/javascript/places-autocomplete
  function makeAutoComplete(input) {
    if (!isLoaded) {
      waiting.push({ fn: makeAutoComplete, arguments });
      return;
    }

    const autoComplete = new window.google.maps.places.Autocomplete(input, {
      types: ["(cities)"],
    });
    autoComplete.addListener("place_changed", () => {
      const place = autoComplete.getPlace();
      input.dispatchEvent(new CustomEvent("changed", { detail: place }));
    });
  }

  function showMap(canvas, lat, lng, markers) {
    if (!isLoaded) {
      waiting.push({
        fn: showMap,
        arguments,
      });
      return;
    }
    const mapOptions = {
      zoom: 18,
      center: new window.google.maps.LatLng(lat, lng),
      zoomControl: true,
      fullscreenControl: false,
    };

    const map = new window.google.maps.Map(canvas, mapOptions);
    if (!markers) {
      const position = new window.google.maps.LatLng(lat, lng);
      const marker = new window.google.maps.Marker({ position });
      marker.setMap(map);
      return;
    }
    //https://developers.google.com/maps/documentation/javascript/reference/coordinates#LatLngBounds
    const bounds = new window.google.maps.LatLngBounds();
    markers.forEach((home) => {
      const position = new window.google.maps.LatLng(home.lat, home.lng);
      const marker = new window.google.maps.Marker({ position });
      marker.setMap(map);
      bounds.extend(position);
    });

    map.fitBounds(bounds);
  }
}
