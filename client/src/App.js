import React from 'react'
import Home from './components/views/Home'
import Recipe from './components/views/Recipe'
import RecipeSearchResult from './components/views/RecipeSearchResult'
import { RecipeProvider } from './contexts/Recipe'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import JoinLogin from './components/views/JoinLogin'

const App = () => {
    return (
        <Router>
            <RecipeProvider>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/recipes/search/:page" exact component={RecipeSearchResult}/>
                    <Route path="/recipes/:id" exact component={Recipe}/>
                    <Route path="/joinLogin" exact component={JoinLogin}/>
                </Switch>
            </RecipeProvider>
        </Router>
    )
}

export default App
