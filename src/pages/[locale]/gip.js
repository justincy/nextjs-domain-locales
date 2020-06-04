function GetInitialPropsPage({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}

GetInitialPropsPage.getInitialProps = async () => {
  return {
    data: {
      date: new Date(),
      number: Math.random(),
    },
  };
};

export default GetInitialPropsPage;
