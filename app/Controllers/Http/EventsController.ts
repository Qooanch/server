import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Event from 'App/Models/Event'

export default class EventsController {
  public async getEvents({ request }: HttpContextContract) {
    const { from, to } = request.all()
    let events = Event.query()

    if (from) {
      events = events.where('date', '>=', from)
    }
    if (to) {
      events = events.where('date', '<=', to)
    }

    return events.orderBy('date')
  }

  public async getEvent({ params }: HttpContextContract) {
    const id = params.eventId

    return await Event.query().where('id', id).first()
  }

  public async createEvent(ctx: HttpContextContract) {
    const data = { ...ctx.request.all() }
    await Event.create(data)
    return this.getEvents(ctx)
  }

  public async deleteEvent({ params }: HttpContextContract) {
    return Event.query().where('id', params.eventId).delete()
  }

  public async editEvent({ params, request }: HttpContextContract) {
    return Event.query().where('id', params.eventId).update(request.all())
  }
}
