import React from 'react'

async function getServerSideProps() {
    let res = await fetch("/pages/api/kristallen/zodiac/getAll");
    let data = await res.json();
    return {
        props: {
            zodiac: data
        }
    }
}

function AddKristal(zodiac: Array<Object>) {
    let zodiacOptions
    zodiac.forEach(e => {
        zodiacOptions += <option><option />;
    });
    return (
        <form>
            <input type="text" name="naam" />
            <input type="number" name="prijs" step="0.01" />
            <input type="color" name="kleur" />
            <input type="text" name="gewicht" />
            <input type="checkbox" name="transparant" />
            <select name="zodiac">
                <option value=""></option>
            </select>
        </form>
    )
}

export default AddKristal