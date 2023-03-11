import Head from 'next/head';
import ContactView from '@/src/pages/Contact/ContactView';

function Index() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me your messages" />
      </Head>
      <ContactView />
    </>
  );
}

export default Index;
