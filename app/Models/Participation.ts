import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Participation extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public status: string

  @column()
  public userId: number

  @column()
  public eventId: number
}
