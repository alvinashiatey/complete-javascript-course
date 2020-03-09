// forkify-api.herokuapp.com
import Search from "./model/Search";

//Global state of the app
const state = {};
const controlSearch = async () => {
  // Get query
  const query = "pizza";

  if (query) {
    state.search = new Search(query);
    await state.search.getResult();
    console.log(state.search.result);
  }
};

document.querySelector(".search").addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
