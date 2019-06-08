import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

import styles from "./author-list.module.css";

function AuthorList({ items }) {
  return (
    <div className={styles.root}>
      <ul className={styles.list}>
        {items.map(({ author, _key }) => {
          const authorName = author && author.name;
          return (
            <li key={_key} className={styles.listItem}>
              <div>
                <div className={styles.avatar}>
                  {author && author.image && author.image.asset && (
                    <img
                      src={imageUrlFor(buildImageObj(author.image))
                        .width(100)
                        .height(100)
                        .auto("format")
                        .fit("crop")
                        .url()}
                      alt="Author's' image"
                    />
                  )}
                </div>
              </div>
              <div>
                <h4>{authorName || <em>Missing name</em>}</h4>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AuthorList;
