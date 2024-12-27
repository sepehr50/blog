import React from 'react';
import './App.css';
import Header from './component/header';
import Main from './component/main';
import styles from "./styles/app.module.css"

const App = () => {
    const [state, setState] = React.useState("/");

    return (
        <div className={styles.container}>
            <Header page={state} setPage={setState} />
            <Main page={state} />
        </div>
    );
}

export default App;
