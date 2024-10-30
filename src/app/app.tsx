// pages/index.js
import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Main from '../components/Main'
import styles from ''


export default function app() {
  return (
    <div>
      <Head>
        <title>Minha Aplicação</title>
        <meta name="description" content="Descrição da minha aplicação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Main />
    </div>
  );
}