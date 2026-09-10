import { NextApiRequest, NextApiResponse } from 'next'
import { getOccupancy } from '../../lib/mockData'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const occ = getOccupancy()
  res.status(200).json({ occupancy: occ, now: new Date().toISOString() })
}

