import Head from 'next/head';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import TechStack from '../components/TechStack';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

export default function Index() {
  return (
    <>
      <Head>
        <title>Ayush Gupta</title>
        <meta name="description" content="Ayush Gupta's Portfolio" />
        <link rel="icon" href="/favicon/site.webmanifest" />
        <script src="/script.js" defer></script>
      </Head>
      <Header />
      <Home />
      <About />
      <TechStack />
      <Portfolio />
      <Contact />
    </>
  );
}