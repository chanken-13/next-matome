import Link from 'next/link'
import styles from 'src/components/shimabu/Header/Header.module.css'

const NAV_ITEMS =[
 {href: "/shimabu", label: "Index"},
 {href: "/shimabu/about", label: "About"},
];

export const Header = () => {
  return (
      <header className={styles.header}>
        {NAV_ITEMS.map((item) => {
          return (
            <Link key={item.href} href={item.href} className={styles.anchor}>
              {item.label}
            </Link>
          )
        })}
      </header>
  )
}
