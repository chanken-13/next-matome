import styles from 'src/components/shimabu/Main/Main.module.css';
import { Headline } from 'src/components/shimabu/Headline/Headline';
import { Logo } from 'src/components/shimabu/Logo/Logo';
import { Link } from 'src/components/shimabu/Link/Link';
import { useCallback, useState } from 'react';

const ITEMS = [
  {
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Docs",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Learn",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Templates",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
    title: "Deploy",
    description: "Instantly deploy your Next.js site to a shareable URL with Vercel.",
  },
]

type Props = {
  page: string;
};

export const Main = (props: Props): JSX.Element => {
  const [items, setItems] = useState(ITEMS)
  const handleReduce = useCallback(() => {
    setItems((prev) => {
      return prev.slice(0, prev.length - 1)
    })
  }, [])

  return (
    <main className={styles.main}>

      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.tsx</code>
      </Headline>
      <Logo />
      <Link items={items} handleReduce={handleReduce}/>

    </main>
  )
}
