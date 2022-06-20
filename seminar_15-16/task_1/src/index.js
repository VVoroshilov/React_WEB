import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';



const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

function withHover(Component, data, propNames=['hovering', 'data']) {
  return class WithHover extends React.Component {
    state = { hovering: false}
    mouseOver = () => this.setState({ hovering: true })
    mouseOut = () => this.setState({ hovering: false })
    render() {
      const props = {
        [propNames[0]]: this.state.hovering,
        [propNames[1]]: data,
      }
      return (
        <div onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <Component {...props}/>
        </div>
      );
    }
  }
}

function Info ({ hovering, data }) {
  return (
    <>
      {hovering === true
        ? <Tooltip data = {data} />
        : null}
      <svg
        className="Icon-svg Icon--hoverable-svg"
        height={"16"}
        viewBox="0 0 16 16" width="16">
          <path d="M9 8a1 1 0 0 0-1-1H5.5a1 1 0 1 0 0 2H7v4a1 1 0 0 0 2 0zM4 0h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4zm4 5.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      </svg>
    </>
  )
}

class Tooltip extends React.Component {
  render(){
    return (
      <div >
        <h4>Подробнее почитать можете по данной ссылке</h4>
        <Linkbutton data={this.props.data}/>
      </div>
    )
  }
}


const columns = [
  {text: "Бе́лая аку́ла[1], или больша́я бе́лая аку́ла[2][3], или аку́ла-людое́д[1], или кархародо́н[1] (лат. Carcharodon carcharias), — вид хрящевых рыб монотипического рода белых акул семейства сельдевых акул. В средствах массовой информации также известна как большая белая акула (буквальный перевод с английского языка).\n" +
          "\n",
  link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%B0%D1%8F_%D0%B0%D0%BA%D1%83%D0%BB%D0%B0",
  src: "Википедия"},
  {text: "Арапаима[2][3][4][5], или гигантская арапаима[4][6], или бразильская арапаима[7], или гигантская арапа́йма[8], или арапайма[9][10], или пираруку[2][4][5], или пураруку[8], или пайче[3] (лат. Arapaima gigas) — тропическая пресноводная лучепёрая рыба из семейства аравановых отряда араванообразных. Из-за своей архаичной морфологии считается живым ископаемым.",
  link: "https://ru.wikipedia.org/wiki/%D0%90%D1%80%D0%B0%D0%BF%D0%B0%D0%B8%D0%BC%D0%B0",
  src: "Википедия"},
  {text: "Щу́ка[1], или обыкнове́нная щу́ка[1] (лат. Esox lucius), — рыба семейства щуковых. Распространена в пресных водах Евразии и Северной Америки. Живёт обычно в прибрежной зоне, в водных зарослях, в непроточных или слабопроточных водах. Может также встречаться и в опреснённых частях морей, например в Финском, Рижском и Куршском заливах Балтийского моря, в Таганрогском заливе Азовского моря. Щука хорошо выдерживает кислую реакцию воды, может комфортно жить в водоёмах с pH 4,75. При снижении содержания кислорода до 3,0—2,0 мг/л наступает угнетение дыхания, поэтому в заморных водоёмах щука часто погибает.",
  link: "https://ru.wikipedia.org/wiki/%D0%A9%D1%83%D0%BA%D0%B0",
  src: "Википедия"},
  {text: "Скаты (лат. Batomorphi[1]) — один из двух надотрядов[К 1] пластиножаберных хрящевых рыб. Содержит четыре отряда и пятнадцать семейств. Для скатов характерно сильно уплощённое тело и большие грудные плавники, сросшиеся с головой. Пасть, ноздри и пять пар жабр находятся на плоской и, как правило, светлой нижней стороне. Хвост бичеобразной формы. Большинство скатов живёт в морской воде, однако существует и несколько пресноводных видов (моторо и другие). Верхняя сторона у скатов приспособлена по расцветке к тому или иному жизненному пространству и может варьировать от светло-песочной до чёрной. На верхней стороне расположены глаза и отверстия, в которые проникает вода для дыхания — брызгальца (первая пара жаберных щелей).",
  link: "https://ru.wikipedia.org/wiki/%D0%A1%D0%BA%D0%B0%D1%82%D1%8B",
  src: "Википедия"}
]

class Linkbutton extends React.Component {
  render() {
      return (
          <a className={"link_button"} href={this.props.data.link} target="_blank">{this.props.data.src}</a>
      );
  }
}



function Card({data}) {
    const InfoWithHover = withHover(Info, data)
      return (
          <div className={"card"}>
              <p className={"card_text"}>{data.text}</p>
              <InfoWithHover data={data}/>
          </div>
      );
}





class Board extends React.Component {
  constructor(props){
      super(props);
      this.state = { data: this.props.data};
  }
  render() {
      return (
          <div className={"list_board"}>
              {
                  this.state.data.map(function (item, index) {
                      return <Card data={item} key={index}/>
                  })
              }
          </div>
      );
  }
}




root.render(
  <StrictMode>
    <Board data={columns}/>
  </StrictMode>
);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
