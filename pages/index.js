import Head from "next/head";
import Image from "next/image";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google Next.js Clone</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col items-center justify-center h-screen'>
        <Header />
        <Form />
        <Footer />
      </div>
    </div>
  );
}
