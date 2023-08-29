import react from "react"
import HomeContainer from "@/containers/home"

import Movies from "@/mocks/movies.json"
import Genres from "@/mocks/genres.json"


export default function Home({ params }) {
  let selectedCategory;
  let movies = [];

  if (params?.category) {
    selectedCategory = Genres.genres.find((item) => item.name.toLowerCase() === params.category[0] )
    movies = Movies.results.filter((item) => {
      return item.genre_ids.includes(selectedCategory.id)
    })
  }

  return (
    <HomeContainer movies={movies} selectedCategory={selectedCategory} />
  )
}
