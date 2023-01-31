import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DateTime } from 'luxon'
import Event from 'App/Models/Event'

export default class EventsController {
  public async getEvents() {
    return Event
      .query()
      .where('date', '>=', DateTime.utc().toSQLDate())
  }

  public async getEvent({ params }: HttpContextContract) {
    const id = params.eventId

    return await Event
      .query()
      .where('id', id)
      .first()
  }

  public async createEvent({ request }: HttpContextContract) {
    const data = { ...request.all() }
    await Event.create(data)
    return this.getEvents()
  }

  public async deleteEvent({ params }: HttpContextContract) {
    return Event
      .query()
      .where('id', params.eventId)
      .delete()
  }

  public async editEvent({ params, request }: HttpContextContract) {
    return Event
      .query()
      .where('id', params.eventId)
      .update(request.all())
  }
}
