import { Header } from "./componets/header"
import { MainArticle } from "./componets/MainArticle"
import { NewContainer } from "./componets/NewContainer"
import { ArticlesContainer } from "./componets/ArticlesContainer"

function App() {
  return (
    <main className="px-4 pt-6">
      <Header />
        <div className="sm:flex sm:gap-8 ">
          <MainArticle />
          <NewContainer />
        </div>
          <ArticlesContainer />
    </main>
  )
}

export default App