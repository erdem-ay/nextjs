import react from "react"
import HomeContainer from "@/containers/home"

import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"


export default function Home({ params }) {
  console.log(params.category)
  let selectedCategory;
  let movies = [];
  // if (params.category?.length > 0) {
  //   selectedCategory = true;
  // }

  if (params?.category) {

    selectedCategory = Genres.genres.find((item) => { return item.name.toLowerCase() === params.category[0] })
    movies = Movies.results.filter((item) => {

      console.log(item.genre_ids)
      return item.genre_ids.includes(selectedCategory.id)
    })
    console.log(movies)
  }
  console.log(selectedCategory)

  return (
    <HomeContainer movies={movies} selectedCategory={selectedCategory} />
  )
}
