import React from 'react'

import { PrismaClient, test } from '@prisma/client'

let data:test[]
let rows:string

export async function getServerSideProps() {
    const prisma = new PrismaClient()
    data = await prisma.test.findMany()
    const rows = data.map(i => (
        <tr key={i.id}>
            <td key={i.id + '-id'}>{i.id}</td>
            <td key={i.id + '-name'}>{i.name}</td>
            <td key={i.id + '-age'}>{i.age}</td>
            <td key={i.id + '-score'}>{i.score}</td>
        </tr>
    ))
    return {
        props: {
            x: await prisma.test.findMany()
        }
    }
}

export default function Test_table() {
  return (
      <table>
          <tr>
              <th>id</th>
              <th>name</th>
              <th>age</th>
              <th>score</th>
          </tr>
          {rows}
          {/* {x.map(i => (
              <tr key={i.id}>
                  <td key={i.id + '-id'}>{i.id}</td>
                  <td key={i.id + '-name'}>{i.name}</td>
                  <td key={i.id + '-age'}>{i.age}</td>
                  <td key={i.id + '-score'}>{i.score}</td>
              </tr>
          ))} */}
      </table>
  )
}