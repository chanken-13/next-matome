import Head from 'next/head'
import Link from 'next/link'
import styles from 'src/styles/Home.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

console.log(inter);

const ITEMS = [
  {
    href: "/shimabu",
    title: "study-react（Next.js）",
    description: "Next jsで学ぶReact講座",
  },
  {
    href: "/random-cat",
    title: "Next.jsで猫画像ジェネレーターを作ろう",
    description: "https://typescriptbook.jp/tutorials/nextjs",
  },
  {
    href: "/trn-03-nextjs",
    title: "TypeScriptとReact/Next.jsでつくる実践Webアプリケーション開発",
    description: "第3章",
  },
    {
    href: "/tictactoe",
    title: "三目並べ",
    description: "",
  },
]

const Index = (): JSX.Element => {
  return (
    <>
      <Head><title>Next.js</title></Head>

      <main className={`${styles.main} ${inter.className}`}>
        {/* Link */}
        <div className={styles.grid}>
        {ITEMS.map(item => {
            return (
              <Link
                key={item.href}
                href={item.href}
                className={styles.card}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className={inter.className}>
                  {item.title} <span>-&gt;</span>
                </h2>
                <p className={inter.className}>
                  {item.description}
                </p>
              </Link>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default Index;
