function GetStaticPropsPage({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default GetStaticPropsPage;

export async function getStaticProps() {
  return {
    props: {
      data: {
        date: new Date().toUTCString(),
        number: Math.random(),
      },
    },
  };
}
