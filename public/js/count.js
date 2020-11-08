const countHits = async () => {
  const response = await fetch("https://api.phocks.org/count");
  const json = await response.json();

  console.log(json);
};

countHits();
