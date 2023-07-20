import { Switch, Route } from 'wouter'
import { Header } from './components'

import { Authors, Genres, Home, ReadList } from './pages'

function App () {
  return (
    <>
      <Header />
      <main className='min-h-screen px-4 py-24 bg-primary'>
        <Switch>
          <Route path='/' component={Home} />
          <Route path='/lista-lectura' component={ReadList} />
          <Route path='/generos' component={Genres} />
          <Route path='/autores' component={Authors} />
          <Route>404 Not found</Route>
        </Switch>
      </main>
    </>
  )
}

export default App
