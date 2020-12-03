import React from 'react'
import { useSelector } from 'react-redux'
import { TApp } from '../redux/store'
import { Alert } from './Alert/Alert'
import './App.scss'
import { Form } from './Form/Form'
import { ServerPosts } from './ServerPosts/ServerPosts'
import { StaticPosts } from './StaticPosts/StaticPosts'

const App: React.FC = () => {
  const { isOpen } = useSelector((state: TApp) => state.alert)

  return (
    <div className="wrapper">
      <main className="page">
        <section className="page__sc sc">
          <div className="sc__container _container">
            <div className="sc__body">
              {isOpen && <Alert/>}
              <Form />
              <div className="sc__posts">
                <StaticPosts />
                <ServerPosts />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
