function GetServerSidePropsPage({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default GetServerSidePropsPage;

export async function getServerSideProps() {
  return {
    props: {
      data: {
        date: new Date().toUTCString(),
        number: Math.random(),
      },
    },
  };
}
