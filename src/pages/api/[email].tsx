import type { NextApiRequest, NextApiResponse } from 'next'

export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { email, senha },
    method,
  } = req

  switch (method) {
    case 'GET':
      // Get data from your database
      res.status(200).json({ email, senha: `User ${email}` })
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ email, senha: senha || `User ${email}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}