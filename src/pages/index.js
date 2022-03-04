import React, {useState} from 'react'
import Layout from '../layouts/layout'
import * as componentStyles from '../styles/main.module.css'

export default function Home() {

    // Playing with state and click events
    const [name, setName] = useState('Original');
    console.log(name);

    const handleClick = () => {
        if (name !== 'Original') {
            setName('Original');
        } else {
            setName('Replacement');
        }
        console.log(name);
    };

    return (
        <Layout>
            <section className={componentStyles.header}>
                <div>
                    <h1>Hi, I'm Ulises, a UX Designer and Illustrator based in Brooklyn, New York</h1>
                    <h3>Currently, I design Marketing Tools for Google. Formerly at Notarize, Broadlume, and Smarking</h3>
                </div>
            </section>
            <button onClick={() => { handleClick() }}>{ name }</button>
        </Layout>

    )
}
