import express from 'express';
import db from './database/connection';
import convertHoursToMinutes from './utils/convertHoursToMinutes';

const routes = express.Router();

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
}

routes.post('/classes', async (request, response) => {

  const {
    name,
    avatar,
    whatsapp,
    bio,
    subject,
    cost,
    schedule
  } = request.body;

  const insertedUserId = await db('users').insert({
    name,
    avatar,
    whatsapp,
    bio
  });

  const user_id = insertedUserId[0];

  const insertedClassesIds = await db('classes').insert({
    subject,
    cost,
    user_id,
  })

  const class_id = insertedClassesIds[0];

  const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
    return {
      class_id,
      week_day: scheduleItem.week_day,
      from: convertHoursToMinutes(scheduleItem.from),
      to: convertHoursToMinutes(scheduleItem.to)
    };
  })

  await db('class_schedule').insert(classSchedule)

  return response.send();

});

export default routes;