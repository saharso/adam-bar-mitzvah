import styles from "./Youtube.module.scss";

export default function Youtube(props: { videoId: string; title?: string }) {
  const { videoId, title } = props;
  return (
    <div className={"flex-column h-full gap-1"}>
      <header>
        <div className={"fs-title"}>{title}</div>
      </header>
      <div className={styles.frame}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}?rel=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
