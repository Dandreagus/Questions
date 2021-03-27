export default {
  call: () =>
    fetch("https://opentdb.com/api.php?amount=10")
      .then((res) => res.json())
      .then((res) => res.results),
};
