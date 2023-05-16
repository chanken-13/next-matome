import Head from 'next/head'
import { Main } from 'src/components/shimabu/Main/Main'
import { Header } from 'src/components/shimabu/Header/Header'

const About = (props:any) => {
  return (
    <>
      <Head>
        <title>about page</title>
      </Head>
      <Header />

      {props.isShow ? <h1>{props.doubleCount}</h1> : null}
      <button onClick={props.handleClick}>ボタン</button>
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button>

      <br />
      <input type="text" value={props.text} onChange={props.handleChange}/>
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item:any) => {
          return (
            <li key={item}>{item}</li>
          )
        })}
      </ul>

      <Main page="about"/>
    </>
  )
}

export default About;
