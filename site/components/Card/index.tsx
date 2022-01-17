import React from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "./index.module.css";
import { PostDetails } from "lib/queries";

interface CardProps {
  post: PostDetails;
}

export function Card(props: CardProps) {
  const date = new Date(props.post.publishedAt).toLocaleDateString();
  return (
    <Link href={`/blog/${props.post.slug}`}>
      <a className={styles.card}>
        <div className={styles.content}>
          <span className={styles.date}>{date}</span>
          <h2>{props.post.title}</h2>
          <p className={styles.body}>{props.post.summary}</p>
        </div>
        <div className={styles.image}>
          <Image
            src={props.post.imageUrl}
            alt={props.post.title}
            objectFit="cover"
            layout="fill"
          />
        </div>
      </a>
    </Link>
  );
}
