function GetServerSideProps({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

export default GetServerSideProps;

export async function getServerSideProps() {
  return {
    props: {
      data: {
        date: new Date().toDateString(),
        number: Math.random(),
      },
    },
  };
}
