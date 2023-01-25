import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public login: string

  @column()
  public password: string

  @column()
  public nickname: string

  @column()
  public contact_link: string
}
