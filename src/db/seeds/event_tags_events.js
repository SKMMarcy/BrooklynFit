/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const event_tags_events = [
  {
    event_id: 1,
    event_tag_id: 1,
  },
  {
    event_id: 1,
    event_tag_id: 2,
  },
  {
    event_id: 2,
    event_tag_id: 6,
  },
  {
    event_id: 2,
    event_tag_id: 7,
  },
  {
    event_id: 3,
    event_tag_id: 3,
  },
  {
    event_id: 3,
    event_tag_id: 2,
  },
  {
    event_id: 3,
    event_tag_id: 2,
  },
];
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('event_tags_events').del();
  await knex('event_tags_events').insert(event_tags_events);
};
