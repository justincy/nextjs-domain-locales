import { supportedLocales } from "../../../i18n";

function GetStaticPathsPage({ id }) {
  return <h1>ID {id}</h1>;
}

export default GetStaticPathsPage;

export async function getStaticPaths() {
  return {
    paths: supportedLocales.map((locale) => ({
      params: {
        id: "1",
        locale,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  return { props: { id: params.id, locale: params.locale } };
}
