import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_characters } from '../actions/charactersActions';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({ children }) => {
  const characters = useSelector(state => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_characters());
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout;