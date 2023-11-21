import { Fragment, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { publicRoutes } from './routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import { getData } from './services';
import { useDispatch } from 'react-redux';
import { setAuth } from './redux/authSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const authLocal: any = localStorage.getItem('auth')
    if (authLocal) {
      const auth = JSON.parse(authLocal)
      getData('auth/me?token=' + auth.token).then((value) => {
        dispatch(setAuth(value.data.data))
      }).catch((err) => console.log(err))
    }

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        {publicRoutes.map((route: any, index: number) => {
          const Page = route.component;
          let Layout: any = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
