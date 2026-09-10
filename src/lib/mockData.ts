export type Reservation = {
  id: string;
  roomId: string;
  startISO: string;
  endISO: string;
  reserverName?: string;
};

export type Room = {
  id: string;
  name: string;
  location: string;
  capacity: number;
};

export const rooms: Room[] = [
  { id: 'r1', name: 'HBLL 101', location: 'HBLL', capacity: 6 },
  { id: 'r2', name: 'HBLL 202', location: 'HBLL', capacity: 4 },
  { id: 'r3', name: 'HBLL 303', location: 'HBLL', capacity: 8 },
];

export const reservations: Reservation[] = [
  {
    id: 'res1',
    roomId: 'r1',
    startISO: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    endISO: new Date(Date.now() + 30 * 60 * 1000).toISOString(),
    reserverName: 'Team Alpha'
  },
  {
    id: 'res2',
    roomId: 'r2',
    startISO: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
    endISO: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
    reserverName: 'Jane'
  }
];

export function getOccupancy() {
  // Simple simulated occupancy: room r1 currently occupied, others free or uncertain
  const now = Date.now();
  return rooms.map((r) => {
    const hasCurrentRes = reservations.some(
      (res) => res.roomId === r.id && new Date(res.startISO).getTime() <= now && new Date(res.endISO).getTime() >= now
    );
    let status: 'free' | 'occupied' | 'uncertain' = 'free';
    if (r.id === 'r1') status = 'occupied';
    else if (r.id === 'r3') status = 'uncertain';
    return {
      roomId: r.id,
      status,
      hasCurrentRes,
      checkIns: status === 'occupied' ? 2 : 0,
      lastUpdated: new Date().toISOString()
    };
  });
}

