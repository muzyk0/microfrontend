import React from 'react';

function App(props: any) {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                {
                    props.users.map((u: any) => <div><span>{u.name}</span> <span>{u.age}</span></div>)
                }
            </header>
        </div>
    );
}

export default App
