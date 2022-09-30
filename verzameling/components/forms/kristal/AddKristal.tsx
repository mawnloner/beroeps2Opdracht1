import { InferGetServerSidePropsType } from 'next';
import { zodiac } from '@prisma/client';
import React from 'react'

export const getServerSideProps = async () => {
    const res = await fetch("@api/kristallen/zodiac/getAll")
    const data:Array<zodiac> = await res.json()
    return {
        props: {
            data,
        }
    }
}

export default function AddKristal({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    console.log(data)
    return (
        <form>
            <input type="text" name="naam" />
            <input type="number" name="prijs" step="0.01" />
            <input type="color" name="kleur" />
            <input type="text" name="gewicht" />
            <input type="checkbox" name="transparant" />
            <select name="zodiac">
            </select>
        </form>
    )
}