import Image from "next/image";
import ImgLoading from "../public/images/dog_run_loading.gif";
import styles from "../styles/Loading.module.scss";

export default function Loading() {
  return (
    <div className={styles.loading_body}>
      <Image
        src={ImgLoading}
        alt="Loading"
        width={400}
        height={400}
        layout="intrinsic"
        title="Loading"
      />
    </div>
  );
}
