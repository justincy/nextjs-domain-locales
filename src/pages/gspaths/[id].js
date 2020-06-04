function GetStaticPathsPage({ id }) {
  return <h1>ID {id}</h1>;
}

export default GetStaticPathsPage;

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }],
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return { props: { id: params.id } };
}
