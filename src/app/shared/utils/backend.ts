export class Backend {
  private static get getBaseUrl(): string {
    return 'https://smart-vacination-card.herokuapp.com/';
  }

  public static get getBaseLogin(): string {
    return this.getBaseUrl + 'login';
  }

  public static get getBaseUsuario(): string {
    return this.getBaseUrl + 'usuarios';
  }
  public static get getBaseFeedback(): string {
    return this.getBaseUrl + 'feedbacks'
  }

  public static get getBaseEstatistica(): string {
    return this.getBaseUrl + 'estatisticas'
  }

  public static get getBaseVacina(): string {
    return this.getBaseUrl + 'vacinas'
  }
}
