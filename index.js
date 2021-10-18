console.log('React: ', React)
console.log('ReactDOM: ', ReactDOM)

const root = document.getElementById('root')
const elem = React.createElement('ul', null, 
    [
        React.createElement('li', null, 'item1'),
        React.createElement('li', null, 'item2'),
    ]
)

//ReactDOM.render('hello world', root)


const ReactComp = () => {
    const myItem = 'sid'
    return (
    <ul>
        <li>item1</li>
        <li>item2 {myItem}</li>
        <li>{myItem.toUpperCase()}</li>
    </ul>
    )    
}

ReactDOM.render(<ReactComp />, root)
