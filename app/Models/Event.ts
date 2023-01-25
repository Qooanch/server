import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public geo: string

  @column()
  public owner: number

  @column()
  public is_public: boolean

  @column.dateTime({ autoCreate: true })
  public date: DateTime
}
