import { Switch, Route } from 'wouter'
import { Header } from './components'

import { Authors, Categories, Main, ReadList } from './pages'

function App () {
  return (
    <>
      <Header />
      <main className='px-8 py-24 bg-primary'>
        <Switch>
          <Route path='/' component={Main} />
          <Route path='/lista-lectura' component={ReadList} />
          <Route path='/categorias' component={Categories} />
          <Route path='/autores' component={Authors} />
          <Route>404 Not found</Route>
        </Switch>
      </main>
    </>
  )
}

export default App
