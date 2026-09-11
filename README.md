# BYU Library Rooms — Three Screens Prototype

Live deploy: (to be added)

Core affordance
----------------
See which BYU library rooms are actually free now — avoid double bookings and wasted trips.

Step 1 — One-sentence foundations
- Need: Students/teams lose time when rooms appear available in the reservation system but are actually occupied or previously used without updated status.
- Persona: Campus students who study on campus 2–3x/week, have 30–90 minute gaps between classes, and sometimes arrive with a group expecting a reserved room.
- Capability: Quickly find a room that is actually free now (or confirm your reservation hasn't been superseded) and see conflict signals.
- Fundamental value: Certainty — saves time and avoids wasted trips or awkward room conflicts.

Three screens
-------------
1) Landing (/) — Job: Signal the core value and primary capability with a dominant affordance sentence and a CTA to find available rooms. Design question: Does the homepage make \"find a room that's really free now\" obvious in 2–3 seconds?

2) Room List (/rooms) — Job: Show rooms grouped with live occupancy badges (Free, Busy, Likely Conflict) so users can scan availability and conflict risk at a glance. Design question: Can users identify available rooms and conflict risk at a glance?

3) Room Detail (/rooms/[id]) — Job: Show a reservation timeline, current occupancy, and actions to report occupancy or claim a reservation. Design question: Does the timeline and actions let users understand whether a reservation is honored or contested?

Feedback questions and predictions
---------------------------------
Need
- Q: \"Tell me about the last time you showed up for a reserved library room — what happened?\"\n  - Prediction: \"We arrived and someone else was already using it or it was messy.\" (room detail & conflict badge)

Value
- Q: \"If this told you whether a room was truly free, what one or two words describe that value?\"\n  - Prediction: \"Certainty / Save time.\" (landing affordance)

Persona
- Q: \"How often do you search for a campus study room between classes?\"\n  - Prediction: \"A few times a week.\" (CTA frequency)

Capability
- Q: \"I’ll show you the Room List for five seconds — what does this product do?\"\n  - Prediction: \"Shows which rooms are free now and flags conflicts.\" (room list badges)

Design justification & first read
--------------------------------
- Affordance sentence is the dominant element on the landing screen to communicate certainty instantly.
- The Room List groups related information (room name, location, status badge) so users can scan by Gestalt proximity and similarity.
- The Room Detail focuses on the timeline and a pair of clear actions (Report / Claim) to keep the screen mission-focused.
- Revision made after initial scaffold: increased hero hierarchy and added an explicit \"Likely conflict\" badge so conflict signaling is more prominent. This change addresses the problem that the original hero gave similar visual weight to descriptive copy and supporting content, which diluted the affordance.

Files of interest
-----------------
- `src/pages/index.tsx` — Landing screen
- `src/pages/rooms/index.tsx` — Room list (uses `getOccupancy()` from `src/lib/mockData.ts`)
- `src/pages/rooms/[id].tsx` — Room detail and timeline (uses `src/components/Timeline.tsx`)
- `src/components/RoomCard.tsx` — Room card with status & conflict badge
- `src/pages/api/occupancy.ts` — Mock API endpoint returning simulated occupancy

Before / After
--------------
- Before (initial AI scaffold): hero text and CTA were lower weight and the list lacked an explicit conflict badge.
- After (this repo): hero is larger and more direct; `RoomCard` displays a distinct \"Likely conflict\" badge when appropriate.

How to run locally
------------------
1. npm install
2. npm run dev

Notes on deployment
-------------------
I created the project and committed locally. To publish and deploy:
1. Create a public GitHub repo and push this repository as the initial commit (preserve history).
2. Connect the repo to Vercel or Netlify for automatic deploys on push.

Additional notes required by the assignment
------------------------------------------
Screen rationale (why each earned a slot)
- Landing (/) — Why it earned a slot: primary acquisition surface; must communicate the product's affordance quickly. The landing hero groups headline, CTA, and an illustrative proof so a first-time user understands the value in under 3 seconds.
- Reserve / Room List (/rooms) — Why it earned a slot: this is the primary working surface where the capability is exercised. Users scan rows for availability; the screen validates scanning & grouping decisions.
- Room Detail (/rooms/[id]) — Why it earned a slot: resolves ambiguity from the list and provides conflict-resolution affordances and timeline clarity; essential for testing the product's core conflict flows.

Before / After evidence (concrete)
- Initial hero (before): `public/screenshots/initial-hero.png`
- Revised hero (after): `public/screenshots/revised-hero.png`

First-read answers (explicit, per assignment)
- Does the landing screen signal the primary capability and value at first glance? — Yes. The headline is dominant and the illustrative proof sits directly under the CTA to reinforce "Certainty".
- Does every element on the landing screen earn its place? — After removing duplicate CTAs and replacing decorative art with proof, each element supports the primary job (headline → CTA → proof).
- What information/actions belong together and which Gestalt principle shows that? — Headline+CTA+proof (proximity, similarity); list rows group thumbnail+name+badge (common region/proximity); detail groups timeline+actions (common region).
- Do screens 2 and 3 stay on mission, and can you return to Home from everywhere? — Yes: Reserve (rooms list) scans availability, Detail resolves conflicts; header logo and Home links return you to landing.
- What did the AI initially get wrong, skip, or oversimplify, and what did you change? — The AI used decorative hero art and duplicate CTAs; I replaced the hero with proof, standardized badges, and removed competing CTAs so the affordance is clearer.



