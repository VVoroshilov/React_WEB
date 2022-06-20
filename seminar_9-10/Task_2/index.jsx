
export default function App() {
    // Объявляем новую переменную состояния "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы нажали {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById("app")
)
// const [age, setAge] = useState(42);
// const [fruit, setFruit] = useState('банан');
// const [todos, setTodos] = useState([{ text: 'Изучить хуки' }]);


