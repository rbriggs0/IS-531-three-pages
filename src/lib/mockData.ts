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
  // status is the single source of truth for UI
  status: 'free' | 'occupied' | 'conflict';
  thumbnail?: string;
};

export const rooms: Room[] = [
  { id: 'r1', name: 'HBLL 101', location: 'HBLL', capacity: 6, status: 'free', thumbnail: '/images/room-example.png' },
  { id: 'r2', name: 'HBLL 202', location: 'HBLL', capacity: 4, status: 'occupied', thumbnail: '/images/room-example.png' },
  { id: 'r3', name: 'HBLL 303', location: 'HBLL', capacity: 8, status: 'conflict', thumbnail: '/images/room-example.png' },
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
  // Return occupancy derived from the single source of truth in `rooms`
  const now = Date.now();
  return rooms.map((r) => {
    const todaysReservations = reservations.filter((res) => {
      const d = new Date(res.startISO);
      return res.roomId === r.id && d.toDateString() === new Date(now).toDateString();
    });
    return {
      roomId: r.id,
      name: r.name,
      location: r.location,
      capacity: r.capacity,
      status: r.status,
      thumbnail: r.thumbnail,
      reservations: todaysReservations,
      conflict: r.status === 'conflict',
      lastUpdated: new Date().toISOString()
    };
  });
}

