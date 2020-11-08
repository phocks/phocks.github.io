const countHits = async () => {
  const response = await fetch("http://localhost:65000/count");
  const json = await response.json();

  console.log(json);
};

countHits();
