import Link from "next/link";

function GetStaticPathsIndexPage() {
  return (
    <ul>
      <li>
        <Link href="/gspaths/1">
          <a>1</a>
        </Link>
      </li>
      <li>
        <Link href="/gspaths/2">
          <a>2</a>
        </Link>
      </li>
    </ul>
  );
}

export default GetStaticPathsIndexPage;
