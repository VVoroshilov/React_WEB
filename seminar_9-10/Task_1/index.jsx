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



class Card extends React.Component {
    render() {
        return (
            <div className={"card"}>
                <p className={"card_text"}>{this.props.data.text}</p>
                <Linkbutton data={this.props.data}/>
            </div>
        );
    }
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
                    this.state.data.map(function (item) {
                        return <Card data={item}/>
                    })
                }
            </div>
        );
    }
}



ReactDOM.render(
    <Board data={columns}/>,
    document.getElementById("list_board")
)

