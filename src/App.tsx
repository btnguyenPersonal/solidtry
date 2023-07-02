import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
    const [count, setCount] = createSignal(1);
    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <button class={styles.button} onclick={() => setCount(count() * 2)}>
                    {'numPresses: ' + count()}
                </button>
            </header>
        </div>
    );
};

export default App;
