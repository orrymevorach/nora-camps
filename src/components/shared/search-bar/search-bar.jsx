import styles from "./search-bar.module.scss";
import { useState } from "react";
import Link from "next/link";

export default function SearchBar({
  setSearchBarView,
  paintingsAndCollections,
}) {
  const [searchResults, setSearchResults] = useState(paintingsAndCollections);
  const [searchMatch, setSearchMatch] = useState([]);
  console.log(searchResults);
  const handleChange = e => {
    const inputValue = e.target.value;
    const searchResult = searchResults.filter(item =>
      item.name.toLowerCase().includes(inputValue.toLowerCase())
    );

    if (inputValue === "") {
      setSearchMatch([]);
    } else {
      setSearchMatch(searchResult);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.spacing}>
        <input
          className={styles.input}
          autoFocus
          placeholder="Search for a painting or collection"
          onChange={e => handleChange(e)}
          type="search"
        />
        {searchMatch.length > 0 && (
          <ul className={styles.ul}>
            {searchMatch.map(({ __typename, name }) => {
              return (
                <li
                  className={styles.li}
                  onClick={() => setSearchBarView(false)}
                >
                  <Link
                    className={styles.link}
                    href={
                      __typename === "Collection"
                        ? `/paintings?collection=${name}`
                        : `/painting/${name}`
                    }
                  >
                    {name}
                    <p className={styles.typeText}>{__typename}</p>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
