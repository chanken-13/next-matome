import Image from 'next/image'
import { Inter } from 'next/font/google'
import { ReactElement } from 'react';
import styles from 'src/components/shimabu/Headline/Headline.module.css'

const inter = Inter({ subsets: ['latin'] })

// propsの型を定義する
type Props = {
  page: string;
  children: ReactElement;
};

export const Headline = (props: Props): JSX.Element => {
  return (
    <>
        <div className={styles.description}>
          <p>
            {props.page} Get started by editing&nbsp;
            {/* <code className={styles.code}>pages/{props.page}.tsx</code> */}
            {props.children}
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
    </>
  )
}
