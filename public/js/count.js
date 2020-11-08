const countHits = async () => {
  const response = await fetch("https://api.phocks.org/count");
  const json = await response.json();

  console.log(json);

  const hitCounter = document.querySelector(".hit-counter");

  hitCounter.innerHTML = `Hits: ${json.count}`;
};

countHits();
