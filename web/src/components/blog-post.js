import { format, distanceInWords, differenceInDays } from "date-fns";
import React, { memo } from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import PortableText from "./portableText";
import Container from "./container";
import TimeToRead from "./time-read";

import styles from "./blog-post.module.css";

const AuthoredBy = memo(({ author }) => {
  return <p> {author.author.name}</p>;
});

const BlogPost = memo(props => {
  const { _rawBody, authors, title, mainImage, publishedAt } = props;
  return (
    <article>
      {mainImage && mainImage.asset && (
        <div
          className={styles.mainImage}
          style={
            props.mainImage.asset.metadata && {
              backgroundImage: `url(${mainImage.asset.metadata.lqip})`
            }
          }
        >
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1400)
              .height(Math.floor((9 / 16) * 1400))
              .fit("crop")
              .auto("format")
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
      <Container>
        <div className={styles.mainContent}>
          <h1 className={styles.title}>{title}</h1>
          {publishedAt && (
            <div className={styles.publishedAt}>
              {authors && <AuthoredBy author={authors[0]} />}
              {differenceInDays(new Date(publishedAt), new Date()) > 3
                ? distanceInWords(new Date(publishedAt), new Date())
                : format(new Date(publishedAt), "MMMM Do, YYYY")}{" "}
              <TimeToRead body={_rawBody} />
            </div>
          )}
          {_rawBody && <PortableText blocks={_rawBody} />}
        </div>
      </Container>
    </article>
  );
});

export default BlogPost;
