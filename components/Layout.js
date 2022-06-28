import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title ? title + 'Bamazon' : 'Bamazon'}</title>
        <meta name="description" content="E-commerce website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col justify-between min-h-screen">
        <header>
          <nav className="flex h-12 justify-between shadow-md items-center px-4">
            <Link href="/">
              <a className="text-lg font-bold">Bamazon</a>
            </Link>
            <div>
              <Link href="/cart">
                <a className="p-2">Cart</a>
              </Link>
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            </div>
          </nav>
        </header>

        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 justify-center items-center shadow-inner">
          <p> Copyright &copy; 2022 Bamazon</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
