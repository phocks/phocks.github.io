const countHits = async () => {
  // const response = await fetch("http://localhost:65000/count", {
  const response = await fetch("https://api.phocks.org/count", {
    method: "POST",
    body: JSON.stringify({ referer: window.location.href }),
  });

  if (!response.ok) return;

  const json = await response.json();

  console.log(json);

  const hitCounter = document.querySelector(".hit-counter");

  hitCounter.innerHTML = `Hits: ${json.count}`;
};

countHits();
