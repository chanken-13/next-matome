import Head from 'next/head'
import { Main } from 'src/components/shimabu/Main/Main'
import { Header } from 'src/components/shimabu/Header/Header'

const Home = (props: any) => {
  const {count, isShow, handleClick, handleDisplay,text, array, handleChange, handleAdd} = props;

  return (
    <>
      <Head>
        <title>index page</title>
      </Head>
      <Header />

      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>

      <br />
      <input type="text" value={text} onChange={handleChange}/>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {array.map((item:any) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main page="index"/>
    </>
  )
}

export default Home;
