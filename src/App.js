import { useEffect } from 'react';
import clienteAxios from './config/axios';
import Layout from './components/UI/Layout'
import Header from './components/UI/Header'
import Main from './components/UI/Main'
import Footer from './components/UI/Footer'
import { useDispatch } from 'react-redux';
import { moviesActions } from './store/movies';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const getMovies = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
          Authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
        }
      }

      try {
        const {data} = await clienteAxios('/discover/movie?sort_by=popularity.desc', config)

        const {results} = data;

        
        dispatch(moviesActions.addMovies(results))
      } catch(error) {
        console.log(error)
      }
    }

    getMovies()
  }, [dispatch])

  return (
    <Layout>
      <Header/>
      <Main />
      <Footer />
    </Layout>
  );
}

export default App;
