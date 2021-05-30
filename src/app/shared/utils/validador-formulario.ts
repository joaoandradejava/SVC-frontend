export class ValidadorFormulario {
  public static getMensagemCampoObrigatorio(label: string): string {
    return `Preencha o campo ${label}!`;
  }

  public static getMensagemCampoComTamanho(
    label: string,
    min: number,
    max: number
  ): string {
    return `O Campo ${label} tem que ter entre ${min} a ${max}`;
  }

  public static campoInvalido(label: string): string {
    return `${label} inválido!`;
  }
}
