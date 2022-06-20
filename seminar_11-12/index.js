const Block = ({ HeaderTag = 'h2', headerText, className = '', children }) => (
    <div className={className}>
        {children}  
      <HeaderTag style={{fontSize: "21px",  fontFamily: 'inherit'}}>{headerText}</HeaderTag>
    </div>
  );
  
  const CountryFilter = ({ value, onChange, countries }) => (
    <Block className="Filter" HeaderTag="h3" headerText="Country">
      <select onChange={onChange} value={value}>
        <option value="">-- Country --</option>
        {countries.map(n => <option key={n}>{n}</option>)}
      </select>
    </Block>
  );
  
  const SizeFilter = ({ value, onChange, sizes }) => (
    <Block className="Filter" HeaderTag="h3" headerText="Size">
      {sizes.map(n => (
        <label className="size" key={n}>
          <input
            type="checkbox"
            value={n}
            checked={value.includes(n)}
            onChange={onChange}
          />
          {n}
        </label>
      ))}
    </Block>
  );
  
  const PriceInput = ({ index, ...props }) => (
    <input className="price-input" data-index={index} {...props} />
  );
  
  const PriceFilter = ({ value, onChange }) => (
    <Block className="Filter" HeaderTag="h3" headerText="Price">
      <PriceInput value={value[0]} onChange={onChange} index="0" />
      &nbsp;-&nbsp;
      <PriceInput value={value[1]} onChange={onChange} index="1" />
    </Block>
  );
  
  const GoodsList = ({ goods }) => (
    <div>
      {goods.map(n => (
        <Block className="good" HeaderTag="h3" headerText={n.name} key={n.id}>
          <img src={n.image} />
          <p style={{fontSize: "16px",  fontFamily: 'inherit'
}}>Цена: {n.cost}</p>
        </Block>
      ))}
    </div>
  );
  
  const App = ({ goods }) => {
    const countries = React.useMemo(() => [...new Set(goods.map(n => n.country))], [ goods ]);
    const sizes = React.useMemo(() => [...new Set(goods.map(n => n.size))], [ goods ]);
  
    const [ country, setCountry ] = React.useState('');
    const [ size, setSize ] = React.useState([]);
    const [ price, setPrice ] = React.useState([ '', '' ]);
  
    const onCountryChange = e => setCountry(e.target.value);
    const onSizeChange = ({ target: { checked, value } }) => {
      setSize((!size.includes(value) && checked)
        ? [ ...size, value ]
        : size.filter(n => n !== value)
      );
    };
    const onPriceChange = ({ target: { value, dataset: { index } } }) => {
      setPrice(price.map((n, i) => i === +index ? value : n));
    };
  
    const filteredGoods = goods.filter(n => (
      (!country || n.country === country) &&
      (!size.length || size.includes(n.size)) &&
      (!price[0] || price[0] <= n.cost) &&
      (!price[1] || price[1] >= n.cost)
    ));
  
    return (
      <div>
        <div className="filters">
          <CountryFilter value={country} onChange={onCountryChange} countries={countries} />
          <SizeFilter value={size} onChange={onSizeChange} sizes={sizes} />
          <PriceFilter value={price} onChange={onPriceChange} />
        </div>
        <GoodsList goods={filteredGoods} />
      </div>
    );
  }
  
  const DATA = [
    {
      "name" : "Shimano Catana",
      "cost" : 1000,
      "country" : "france",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-j/wc500/6289324783.jpg",
      "size": "S"
    },
    {
      "name" : "Dayo SUNDANCER",
      "cost" : 1200,
      "country" : "turkey",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-b/wc500/6124874543.jpg",
      "size": "M"
    },
    {
      "name" : "VICTORY2170",
      "cost" : 1550,
      "country" : "china",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-0/wc500/6292009104.jpg",
      "size": "L"
    },
    {
      "name" : "Спиннинг Японский",
      "cost" : 1800,
      "country" : "russia",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-2/wc500/6276363722.jpg",
       "size": "XL"
    },
    {
      "name" : "BARRACUDA",
      "cost" : 2100,
      "country" : "france",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-v/wc500/6296756527.jpg",
      "size": "XXL"
    },
    {
      "name" : "Anvento RS-151",
      "cost" : 1700,
      "country" : "turkey",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-u/wc500/6068017170.jpg",
      "size": "S"
    },
    {
      "name" : "Vitfishing Prion",
      "cost" : 3000,
      "country" : "china",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-8/wc500/6274763636.jpg",
      "size": "M"
    },
    {
      "name" : "FANTOM MAGNUM ",
      "cost" : 3700,
      "country" : "russia",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-3/wc500/6277571667.jpg",
      "size": "L"
    },
    {
      "name" : "Спиннинг крокодил",
      "cost" : 2700,
      "country" : "france",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-a/wc500/6281179810.jpg",
      "size": "XL"
    },
    {
      "name" : "Рыболов экспресс",
      "cost" : 700,
      "country" : "turkey",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-k/wc500/6240086792.jpg",
      "size": "XXL"
    },
    {
      "name" : "Dayo",
      "cost" : 9700,
      "country" : "china",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-c/wc500/6278354424.jpg",
      "size": "S"
    },
    {
      "name" : "Fantom cost",
      "cost" : 6600,
      "country" : "russia",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-2/wc500/6277559858.jpg",
      "size": "M"
    },
    {
      "name" : "Anvento RS-101",
      "cost" : 900,
      "country" : "france",
      "image" : "https://cdn1.ozone.ru/s3/multimedia-b/wc500/6066054071.jpg",
      "size": "L"
    }
  ].map((n, i) => ({ ...n, id: i + 1 }));
  
  ReactDOM.render(<App goods={DATA} />, document.getElementById('app'));