import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  public title: string

  public description: string

  public geo: string

  public owner: number

  public is_public: boolean

  @column.dateTime({ autoCreate: true })
  public date: DateTime
}
