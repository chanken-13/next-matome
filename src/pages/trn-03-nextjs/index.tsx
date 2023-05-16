import type { NextPage } from "next";
import Head from "next/head";
import styles from "src/styles/Home.module.css";
import styled from "styled-components";
import Link from "next/link";

const H1 = styled.h1`
  color: red;
`;

const Links = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;

  & a {
    text-decoration: underline;
  }
`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <H1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </H1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div>
        <span>sample</span>
          <Links>
            <Link legacyBehavior href="trn-03-nextjs/sample">
              <a>sample</a>
            </Link>
          </Links>
          <br />

        <span>レンダリング</span>
          <Links>
            <Link legacyBehavior href="trn-03-nextjs/ssg">
              <a>ssg</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/ssr">
              <a>ssr</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/isr">
              <a>isr</a>
            </Link>
          </Links>
          <br />

          <span>動的ルーティング</span>
          <Links>
            <Link legacyBehavior href="trn-03-nextjs/posts/1">
              <a>/posts/1</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/posts/2">
              <a>/posts/2</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/posts/3">
              <a>/posts/3</a>
            </Link>
          </Links>
          <br />

          <span>Next.jsの機能</span>
          <Links>
            <Link legacyBehavior href="trn-03-nextjs/link">
              <a>Link</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/image-sample">
              <a>画像の表示</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/sayhello">
              <a>APIルート</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/env-sample">
              <a>環境変数</a>
            </Link>
          </Links>
          <br />

          <span>以下styled-componentの各サンプルコードのページへのリンクになります</span>
          <Links>
            <Link legacyBehavior href="trn-03-nextjs/badge">
              <a>Badgeの例</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/props-sample">
              <a>propsを使う例</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/mixin-sample">
              <a>mixinを使う例</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/inheritance-sample">
              <a>継承を使う例</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/as-sample">
              <a>スタイルを他のコンポーネントで使用する例</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/styled-link-sample">
              <a>Next.jsのコンポーネントにスタイルを適用する例</a>
            </Link>
            <Link legacyBehavior href="trn-03-nextjs/theme-sample">
              <a>テーマを使う例</a>
            </Link>
          </Links>
        </div>
      </main>
    </div>
  );
};

export default Home;