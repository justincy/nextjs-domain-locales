import Link from "next/link";

function GetStaticPathsIndexPage() {
  return (
    <ul>
      <li>
        <Link href="/gsp/1">
          <a>1</a>
        </Link>
      </li>
      <li>
        <Link href="/gsp/2">
          <a>2</a>
        </Link>
      </li>
    </ul>
  );
}

export default GetStaticPathsIndexPage;
