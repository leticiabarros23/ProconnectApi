// src/@types/jsonwebtoken/promises.d.ts
declare module "jsonwebtoken/promises" {
  import type {
    SignOptions,
    VerifyOptions,
    JwtPayload as OriginalJwtPayload,
    Secret,
    GetPublicKeyOrSecret
  } from "jsonwebtoken";

  /** Extensão do Payload para seu caso */
  export interface JwtPayload extends OriginalJwtPayload {
    sub: number;
    email: string;
    iat: number;
    exp: number;
  }

  /**
   * Gera um JWT e retorna uma Promise<string>
   */
  export function sign(
    payload: string | object | Buffer,
    secretOrPrivateKey: Secret,
    options?: SignOptions
  ): Promise<string>;

  /**
   * Verifica um JWT e retorna uma Promise<JwtPayload>
   */
  export function verify(
    token: string,
    secretOrPublicKey: Secret | GetPublicKeyOrSecret,
    options?: VerifyOptions
  ): Promise<JwtPayload>;
}
