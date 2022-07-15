import type { NextApiRequest, NextApiResponse } from 'next'
import type { User } from '../../../interfaces'

// Fake users data
const users: User[] = [{ email: 'fernanhenriquelete@hotmail.com', senha: 123 }, { email: 'jsadh@asd.com', senha: 123 }]

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  // Get data from your database
  res.status(200).json(users)
}