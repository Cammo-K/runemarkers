import { Source } from '@/types';
import styles from '@/components/atoms/TilesSource.module.css';

export default function TilesSource({ source }: { source: Source }) {
  return (
    // <div className={styles.sourceContainer}>
    <>
      <a
        className={styles.link}
        href={source.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {source.name}
      </a>
      {source.modified ? <p className={styles.modified}>(modified)</p> : null}
    </> // </div>
  );
}
