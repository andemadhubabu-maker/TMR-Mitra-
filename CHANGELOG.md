# Changelog

## r64 (Version 1 Beta)
- **New messages and options** from the 18-Oct bulletin: sparks / smoke / smell / brake binding reported by SM, pointsman or gateman; new scenarios for Fire & Safety, Derailment & Train Protection, Crew, Kavach / Alerter, Animals & Wildlife, track buckling, OHE wire / neutral section, sabotage, bomb threat, coach electricals, food, toilet, lost child, passengers on roof, heat illness / snake bite. More FDS findings, Brake Binding, ACP (TXR staff, first and total detention) and Medical (name, PNR, from-to) options.
- **GPS stamp** (Add GPS to message) and **Monthly summary** of saved reports.
- **Load example** now fills every box in every scenario.
- **Other trains affected** (Repercussion) removed from all scenarios.
- **Reasons**: Other first, then related reasons together. Long reasons use a smaller font.
- FIBA: optional second stop at the TXR point. Brake Binding: no double full stop.
- Android app (APK) packaging guide added: docs/APK-GUIDE.md. Manifest completed for packaging.

## r52 (Version 1 Beta)
- **Show: Basics | All boxes** switch above the form. Basics (the default) puts the boxes that can stay empty under "More details": left time, detention, repeated stops, other trains affected, your phone number once it is saved in My profile, and other optional details. On average the form shows 8.9 boxes instead of 11.0. The heading names what is inside, for example "More details (4): left time, detention".
- Nothing is lost: boxes under More details still go into the message when filled. The message is identical in both views (checked for all 139 scenarios). The Follow-up messages keep their boxes visible.
- Your choice is remembered on the phone.

## r51 (Version 1 Beta)
- **Other trains affected:** every message can list the trains affected (train, how it was dealt, minutes). It is written as "Repercussion: 17225 exp (NS-UBL) dealt on loop line Det +10 mins; ..." with a running total in the form. It sits in "More details".
- **New S&T messages:** BPAC / axle counter failure (PLCT, manual preparatory reset), LC gate indication failed (trains followed gate rules), track circuit dropped due to heavy rain or water logging.
- **Fallen person picked up:** the scenario now covers the real 17-October pattern: the train the person fell from, how the SM's message reached the pick-up train, and whether the train stopped at the spot or backed with the SM's permission (the backing boxes show only when backing is chosen).
- More ACP reasons from the bulletin (person fell and relatives pulled the chain, got down for water, could not board, wrong train, nobody claimed responsibility).
- Quick entry finds the new messages. Now 19 categories, 139 scenarios, 278 message formats.

## r50 (Version 1 Beta)
- **Person on Track, as per LP Information** now matches a full real message: age (approximately), train stopped and checked, condition of the person or body (dead body found beside the track, and so on), track free, train started at, detention, and the informed line before "For information and necessary action please."
- **New: Person Fallen from Running Train, Train Backed to Pick Up**: SM permission (with optional name or code), km backed to, first aid, handover station, time and office, hospital, left time and detention.
- **New: Person Fallen from Train, Located by Another Train**: reporting train and LP / Guard, condition, km and line, our train, action taken.
- **New follow-up: What Happened Next**: tick the further actions (backed, first aid, handed over, body under GRP custody, track free, assisting loco, diverted, and so on).
- Passenger Falling from Running Train now asks how the train was stopped and who reported it (optional coach).
- Sparks from Wheels takes loco no., wagon type and number and LC gate no., with brake-binding findings; wording "Train started".
- Run-over messages pre-tick Security and Punctuality Control. Quick entry finds the new messages. Now 19 categories, 136 scenarios, 272 message formats.

## r49 (Version 1 Beta)
- The "Where did it stop?" choice now also covers the station-staff abnormality, sparks and LC gate scenarios; checked in Short format too.
- Pre-ticked "Informed to" lists by category (for example ACP: security, TXR and commercial control). Untick any that were not informed.
- Detention check: with repeated stoppages, a warning shows if the Detention box differs from the total of the stops.
- Quick entry now finds the new scenarios and the Follow-up: Ready / Started messages.
- User guides: section 28 rewritten for the new Rule book amendments screen; new sections 32 to 34 (r46, r47, r48 changes). Messages updated.

## r48 (Version 1 Beta)
- **One "Where did it stop?" choice** in most stopping scenarios, right after the train number and time: mid-section; passing through a station; arriving at, standing at or starting from a platform (scheduled or non-scheduled stop, with PF no.); in the station yard (short of the platform, or moved ahead of it). The boxes and the message wording follow the choice.
- Added to emergency brake, obstruction, boulder, water level, caution order and OHE tripping (and their goods versions). Quick entry understands the new choices.
- Help, What's new and user guides (new section 31) updated in English, Telugu and Hindi.

## r47 (Version 1 Beta)
- **Repeated stoppages:** in Pressure Drop, Brake Binding and Flat Tyre, add each place where the train stopped again with the minutes lost. The total detention is added up automatically ("Total det +13 mins").
- The left time can be left empty in every scenario; the message then says "Train ready and left."
- ACP reasons: the most common ones (culprit not traced in a crowd, pulled by mistake, slept and woke after the destination) are at the top.
- The Follow-up button now carries the stopped time, place and reason of stoppage into the Ready / Started message.
- Help, What's new and user guides (new section 30) updated in English, Telugu and Hindi.

## r46 (Version 1 Beta)
- New category **Follow-up: Train Ready / Started**: second message to Control with ready time, left time (or none) and what the train waited for (line clear, crossing, precedence, path). Includes an "On arrival at ___" version for the next station.
- New scenarios from Control bulletins: abnormality reported by station staff, sparks from wheels, doctor call at station, AC coach power block, LC gate unable to close, emergency brake to avoid person / cattle, staff injured on duty, passenger train held for crossing, goods weighment / interchange / wagon unfit for loading.
- Many new reasons for ACP, FDS, C&W, loco, signal, points, LC and detention.
- "TMR No:" in the message body is now your phone number (CMS ID stays in profile and PDF). Messages close with "Train ready and left at HH:MM hrs. Det+NN mins."
- Now 19 categories, 133 scenarios, 266 message formats. Help and user guides (new section 29) updated in English, Telugu and Hindi.

## r45 (Version 1 Beta)
- Fixed: the name and phone line at the end of a message now always shows the phone number. If the phone box is empty it shows "Ph: ___". A phone number typed in the CMS ID box is moved to the Phone box when you save the profile.
- In-app Help rewritten in English, Telugu and Hindi (19 sections) to match all features.

## r44 (Version 1 Beta)
- Rule book amendments in My Library: **Add amendment** (AS number, date, note, photo or PDF), **Add several** (for example AS 11 to 23 in one go), latest AS and "not entered between" note, edit, delete with Undo, duplicate and future-date checks, included in Library backup.
- Removed a failing update-check request; the update button now clears all old caches.
- New offline helper file (`tmrs-ctrl-msg-v1-beta-r44`), install name "TMR Mitra - Version 1 Beta".
- User guides: new section 28A (35 pages each, English, Telugu, Hindi).

## r43
- Reuse an earlier message (recent list and Saved messages; "Reuse, clear times").

## r42 and earlier
- My Library (ROM, SOB, circulars, flyleaf, SOP, ready reckoner), My record reminders, starter pack, install check, backup reminder, What's new.
- 18 categories, 118 scenarios, Full and Short formats (236 message formats), Quick entry, Emergency window, evidence tools, checklists, reports with signature pad, Telugu/Hindi titles, Night and Outdoor modes, Training mode.
