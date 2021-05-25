export class Backend{
  private static get getBaseUrl(): string {
    return 'https://smart-vacination-card.herokuapp.com/'
  }

  public static get getBaseLogin(): string {
    return this.getBaseUrl + 'login'
  }
}
