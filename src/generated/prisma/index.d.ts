
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Localizacao
 * 
 */
export type Localizacao = $Result.DefaultSelection<Prisma.$LocalizacaoPayload>
/**
 * Model Servico
 * 
 */
export type Servico = $Result.DefaultSelection<Prisma.$ServicoPayload>
/**
 * Model Categoria
 * 
 */
export type Categoria = $Result.DefaultSelection<Prisma.$CategoriaPayload>
/**
 * Model Avaliacao
 * 
 */
export type Avaliacao = $Result.DefaultSelection<Prisma.$AvaliacaoPayload>
/**
 * Model Preco
 * 
 */
export type Preco = $Result.DefaultSelection<Prisma.$PrecoPayload>
/**
 * Model ResetToken
 * 
 */
export type ResetToken = $Result.DefaultSelection<Prisma.$ResetTokenPayload>
/**
 * Model ServicoRealizado
 * 
 */
export type ServicoRealizado = $Result.DefaultSelection<Prisma.$ServicoRealizadoPayload>
/**
 * Model ContatoWhatsapp
 * 
 */
export type ContatoWhatsapp = $Result.DefaultSelection<Prisma.$ContatoWhatsappPayload>
/**
 * Model Segmento
 * 
 */
export type Segmento = $Result.DefaultSelection<Prisma.$SegmentoPayload>
/**
 * Model Portfolio
 * 
 */
export type Portfolio = $Result.DefaultSelection<Prisma.$PortfolioPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.localizacao`: Exposes CRUD operations for the **Localizacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Localizacaos
    * const localizacaos = await prisma.localizacao.findMany()
    * ```
    */
  get localizacao(): Prisma.LocalizacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servico`: Exposes CRUD operations for the **Servico** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicos
    * const servicos = await prisma.servico.findMany()
    * ```
    */
  get servico(): Prisma.ServicoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoria`: Exposes CRUD operations for the **Categoria** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categorias
    * const categorias = await prisma.categoria.findMany()
    * ```
    */
  get categoria(): Prisma.CategoriaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.avaliacao`: Exposes CRUD operations for the **Avaliacao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Avaliacaos
    * const avaliacaos = await prisma.avaliacao.findMany()
    * ```
    */
  get avaliacao(): Prisma.AvaliacaoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preco`: Exposes CRUD operations for the **Preco** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Precos
    * const precos = await prisma.preco.findMany()
    * ```
    */
  get preco(): Prisma.PrecoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resetToken`: Exposes CRUD operations for the **ResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ResetTokens
    * const resetTokens = await prisma.resetToken.findMany()
    * ```
    */
  get resetToken(): Prisma.ResetTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicoRealizado`: Exposes CRUD operations for the **ServicoRealizado** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicoRealizados
    * const servicoRealizados = await prisma.servicoRealizado.findMany()
    * ```
    */
  get servicoRealizado(): Prisma.ServicoRealizadoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contatoWhatsapp`: Exposes CRUD operations for the **ContatoWhatsapp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContatoWhatsapps
    * const contatoWhatsapps = await prisma.contatoWhatsapp.findMany()
    * ```
    */
  get contatoWhatsapp(): Prisma.ContatoWhatsappDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.segmento`: Exposes CRUD operations for the **Segmento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Segmentos
    * const segmentos = await prisma.segmento.findMany()
    * ```
    */
  get segmento(): Prisma.SegmentoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolio`: Exposes CRUD operations for the **Portfolio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Portfolios
    * const portfolios = await prisma.portfolio.findMany()
    * ```
    */
  get portfolio(): Prisma.PortfolioDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.1
   * Query Engine version: 55ae170b1ced7fc6ed07a15f110549408c501bb3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Localizacao: 'Localizacao',
    Servico: 'Servico',
    Categoria: 'Categoria',
    Avaliacao: 'Avaliacao',
    Preco: 'Preco',
    ResetToken: 'ResetToken',
    ServicoRealizado: 'ServicoRealizado',
    ContatoWhatsapp: 'ContatoWhatsapp',
    Segmento: 'Segmento',
    Portfolio: 'Portfolio'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "localizacao" | "servico" | "categoria" | "avaliacao" | "preco" | "resetToken" | "servicoRealizado" | "contatoWhatsapp" | "segmento" | "portfolio"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Localizacao: {
        payload: Prisma.$LocalizacaoPayload<ExtArgs>
        fields: Prisma.LocalizacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LocalizacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LocalizacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          findFirst: {
            args: Prisma.LocalizacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LocalizacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          findMany: {
            args: Prisma.LocalizacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>[]
          }
          create: {
            args: Prisma.LocalizacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          createMany: {
            args: Prisma.LocalizacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LocalizacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>[]
          }
          delete: {
            args: Prisma.LocalizacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          update: {
            args: Prisma.LocalizacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          deleteMany: {
            args: Prisma.LocalizacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LocalizacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LocalizacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>[]
          }
          upsert: {
            args: Prisma.LocalizacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LocalizacaoPayload>
          }
          aggregate: {
            args: Prisma.LocalizacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocalizacao>
          }
          groupBy: {
            args: Prisma.LocalizacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocalizacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LocalizacaoCountArgs<ExtArgs>
            result: $Utils.Optional<LocalizacaoCountAggregateOutputType> | number
          }
        }
      }
      Servico: {
        payload: Prisma.$ServicoPayload<ExtArgs>
        fields: Prisma.ServicoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findFirst: {
            args: Prisma.ServicoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          findMany: {
            args: Prisma.ServicoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          create: {
            args: Prisma.ServicoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          createMany: {
            args: Prisma.ServicoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          delete: {
            args: Prisma.ServicoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          update: {
            args: Prisma.ServicoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          deleteMany: {
            args: Prisma.ServicoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>[]
          }
          upsert: {
            args: Prisma.ServicoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoPayload>
          }
          aggregate: {
            args: Prisma.ServicoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServico>
          }
          groupBy: {
            args: Prisma.ServicoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicoCountAggregateOutputType> | number
          }
        }
      }
      Categoria: {
        payload: Prisma.$CategoriaPayload<ExtArgs>
        fields: Prisma.CategoriaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findFirst: {
            args: Prisma.CategoriaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          findMany: {
            args: Prisma.CategoriaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          create: {
            args: Prisma.CategoriaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          createMany: {
            args: Prisma.CategoriaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          delete: {
            args: Prisma.CategoriaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          update: {
            args: Prisma.CategoriaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          deleteMany: {
            args: Prisma.CategoriaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>[]
          }
          upsert: {
            args: Prisma.CategoriaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriaPayload>
          }
          aggregate: {
            args: Prisma.CategoriaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoria>
          }
          groupBy: {
            args: Prisma.CategoriaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriaCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriaCountAggregateOutputType> | number
          }
        }
      }
      Avaliacao: {
        payload: Prisma.$AvaliacaoPayload<ExtArgs>
        fields: Prisma.AvaliacaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvaliacaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvaliacaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findFirst: {
            args: Prisma.AvaliacaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvaliacaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          findMany: {
            args: Prisma.AvaliacaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          create: {
            args: Prisma.AvaliacaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          createMany: {
            args: Prisma.AvaliacaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvaliacaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          delete: {
            args: Prisma.AvaliacaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          update: {
            args: Prisma.AvaliacaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          deleteMany: {
            args: Prisma.AvaliacaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvaliacaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvaliacaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>[]
          }
          upsert: {
            args: Prisma.AvaliacaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvaliacaoPayload>
          }
          aggregate: {
            args: Prisma.AvaliacaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvaliacao>
          }
          groupBy: {
            args: Prisma.AvaliacaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvaliacaoCountArgs<ExtArgs>
            result: $Utils.Optional<AvaliacaoCountAggregateOutputType> | number
          }
        }
      }
      Preco: {
        payload: Prisma.$PrecoPayload<ExtArgs>
        fields: Prisma.PrecoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PrecoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PrecoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecoPayload>
          }
          findFirst: {
            args: Prisma.PrecoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PrecoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecoPayload>
          }
          findMany: {
            args: Prisma.PrecoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecoPayload>[]
          }
          create: {
            args: Prisma.PrecoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecoPayload>
          }
          createMany: {
            args: Prisma.PrecoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PrecoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecoPayload>[]
          }
          delete: {
            args: Prisma.PrecoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecoPayload>
          }
          update: {
            args: Prisma.PrecoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecoPayload>
          }
          deleteMany: {
            args: Prisma.PrecoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PrecoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PrecoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecoPayload>[]
          }
          upsert: {
            args: Prisma.PrecoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PrecoPayload>
          }
          aggregate: {
            args: Prisma.PrecoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreco>
          }
          groupBy: {
            args: Prisma.PrecoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PrecoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PrecoCountArgs<ExtArgs>
            result: $Utils.Optional<PrecoCountAggregateOutputType> | number
          }
        }
      }
      ResetToken: {
        payload: Prisma.$ResetTokenPayload<ExtArgs>
        fields: Prisma.ResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>
          }
          findFirst: {
            args: Prisma.ResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>
          }
          findMany: {
            args: Prisma.ResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>[]
          }
          create: {
            args: Prisma.ResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>
          }
          createMany: {
            args: Prisma.ResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>[]
          }
          delete: {
            args: Prisma.ResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>
          }
          update: {
            args: Prisma.ResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.ResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.ResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResetTokenPayload>
          }
          aggregate: {
            args: Prisma.ResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResetToken>
          }
          groupBy: {
            args: Prisma.ResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<ResetTokenCountAggregateOutputType> | number
          }
        }
      }
      ServicoRealizado: {
        payload: Prisma.$ServicoRealizadoPayload<ExtArgs>
        fields: Prisma.ServicoRealizadoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicoRealizadoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoRealizadoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicoRealizadoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoRealizadoPayload>
          }
          findFirst: {
            args: Prisma.ServicoRealizadoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoRealizadoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicoRealizadoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoRealizadoPayload>
          }
          findMany: {
            args: Prisma.ServicoRealizadoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoRealizadoPayload>[]
          }
          create: {
            args: Prisma.ServicoRealizadoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoRealizadoPayload>
          }
          createMany: {
            args: Prisma.ServicoRealizadoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicoRealizadoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoRealizadoPayload>[]
          }
          delete: {
            args: Prisma.ServicoRealizadoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoRealizadoPayload>
          }
          update: {
            args: Prisma.ServicoRealizadoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoRealizadoPayload>
          }
          deleteMany: {
            args: Prisma.ServicoRealizadoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicoRealizadoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicoRealizadoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoRealizadoPayload>[]
          }
          upsert: {
            args: Prisma.ServicoRealizadoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicoRealizadoPayload>
          }
          aggregate: {
            args: Prisma.ServicoRealizadoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicoRealizado>
          }
          groupBy: {
            args: Prisma.ServicoRealizadoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicoRealizadoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicoRealizadoCountArgs<ExtArgs>
            result: $Utils.Optional<ServicoRealizadoCountAggregateOutputType> | number
          }
        }
      }
      ContatoWhatsapp: {
        payload: Prisma.$ContatoWhatsappPayload<ExtArgs>
        fields: Prisma.ContatoWhatsappFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContatoWhatsappFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoWhatsappPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContatoWhatsappFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoWhatsappPayload>
          }
          findFirst: {
            args: Prisma.ContatoWhatsappFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoWhatsappPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContatoWhatsappFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoWhatsappPayload>
          }
          findMany: {
            args: Prisma.ContatoWhatsappFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoWhatsappPayload>[]
          }
          create: {
            args: Prisma.ContatoWhatsappCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoWhatsappPayload>
          }
          createMany: {
            args: Prisma.ContatoWhatsappCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContatoWhatsappCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoWhatsappPayload>[]
          }
          delete: {
            args: Prisma.ContatoWhatsappDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoWhatsappPayload>
          }
          update: {
            args: Prisma.ContatoWhatsappUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoWhatsappPayload>
          }
          deleteMany: {
            args: Prisma.ContatoWhatsappDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContatoWhatsappUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContatoWhatsappUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoWhatsappPayload>[]
          }
          upsert: {
            args: Prisma.ContatoWhatsappUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContatoWhatsappPayload>
          }
          aggregate: {
            args: Prisma.ContatoWhatsappAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContatoWhatsapp>
          }
          groupBy: {
            args: Prisma.ContatoWhatsappGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContatoWhatsappGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContatoWhatsappCountArgs<ExtArgs>
            result: $Utils.Optional<ContatoWhatsappCountAggregateOutputType> | number
          }
        }
      }
      Segmento: {
        payload: Prisma.$SegmentoPayload<ExtArgs>
        fields: Prisma.SegmentoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SegmentoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SegmentoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentoPayload>
          }
          findFirst: {
            args: Prisma.SegmentoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SegmentoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentoPayload>
          }
          findMany: {
            args: Prisma.SegmentoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentoPayload>[]
          }
          create: {
            args: Prisma.SegmentoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentoPayload>
          }
          createMany: {
            args: Prisma.SegmentoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SegmentoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentoPayload>[]
          }
          delete: {
            args: Prisma.SegmentoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentoPayload>
          }
          update: {
            args: Prisma.SegmentoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentoPayload>
          }
          deleteMany: {
            args: Prisma.SegmentoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SegmentoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SegmentoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentoPayload>[]
          }
          upsert: {
            args: Prisma.SegmentoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SegmentoPayload>
          }
          aggregate: {
            args: Prisma.SegmentoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSegmento>
          }
          groupBy: {
            args: Prisma.SegmentoGroupByArgs<ExtArgs>
            result: $Utils.Optional<SegmentoGroupByOutputType>[]
          }
          count: {
            args: Prisma.SegmentoCountArgs<ExtArgs>
            result: $Utils.Optional<SegmentoCountAggregateOutputType> | number
          }
        }
      }
      Portfolio: {
        payload: Prisma.$PortfolioPayload<ExtArgs>
        fields: Prisma.PortfolioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findFirst: {
            args: Prisma.PortfolioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          findMany: {
            args: Prisma.PortfolioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          create: {
            args: Prisma.PortfolioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          createMany: {
            args: Prisma.PortfolioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          delete: {
            args: Prisma.PortfolioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          update: {
            args: Prisma.PortfolioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioPayload>
          }
          aggregate: {
            args: Prisma.PortfolioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolio>
          }
          groupBy: {
            args: Prisma.PortfolioGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    localizacao?: LocalizacaoOmit
    servico?: ServicoOmit
    categoria?: CategoriaOmit
    avaliacao?: AvaliacaoOmit
    preco?: PrecoOmit
    resetToken?: ResetTokenOmit
    servicoRealizado?: ServicoRealizadoOmit
    contatoWhatsapp?: ContatoWhatsappOmit
    segmento?: SegmentoOmit
    portfolio?: PortfolioOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    avaliacao: number
    servicos: number
    resetTokens: number
    servicosRealizados: number
    contatosWhatsapp: number
    portfolio: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | UsuarioCountOutputTypeCountAvaliacaoArgs
    servicos?: boolean | UsuarioCountOutputTypeCountServicosArgs
    resetTokens?: boolean | UsuarioCountOutputTypeCountResetTokensArgs
    servicosRealizados?: boolean | UsuarioCountOutputTypeCountServicosRealizadosArgs
    contatosWhatsapp?: boolean | UsuarioCountOutputTypeCountContatosWhatsappArgs
    portfolio?: boolean | UsuarioCountOutputTypeCountPortfolioArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountAvaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountServicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountResetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResetTokenWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountServicosRealizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoRealizadoWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountContatosWhatsappArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContatoWhatsappWhereInput
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountPortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
  }


  /**
   * Count Type LocalizacaoCountOutputType
   */

  export type LocalizacaoCountOutputType = {
    servico: number
  }

  export type LocalizacaoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | LocalizacaoCountOutputTypeCountServicoArgs
  }

  // Custom InputTypes
  /**
   * LocalizacaoCountOutputType without action
   */
  export type LocalizacaoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LocalizacaoCountOutputType
     */
    select?: LocalizacaoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LocalizacaoCountOutputType without action
   */
  export type LocalizacaoCountOutputTypeCountServicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
  }


  /**
   * Count Type ServicoCountOutputType
   */

  export type ServicoCountOutputType = {
    avaliacao: number
    preco: number
    servicosRealizados: number
    contatosWhatsapp: number
    portfolio: number
  }

  export type ServicoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | ServicoCountOutputTypeCountAvaliacaoArgs
    preco?: boolean | ServicoCountOutputTypeCountPrecoArgs
    servicosRealizados?: boolean | ServicoCountOutputTypeCountServicosRealizadosArgs
    contatosWhatsapp?: boolean | ServicoCountOutputTypeCountContatosWhatsappArgs
    portfolio?: boolean | ServicoCountOutputTypeCountPortfolioArgs
  }

  // Custom InputTypes
  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoCountOutputType
     */
    select?: ServicoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountAvaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountPrecoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrecoWhereInput
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountServicosRealizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoRealizadoWhereInput
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountContatosWhatsappArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContatoWhatsappWhereInput
  }

  /**
   * ServicoCountOutputType without action
   */
  export type ServicoCountOutputTypeCountPortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
  }


  /**
   * Count Type CategoriaCountOutputType
   */

  export type CategoriaCountOutputType = {
    servicos: number
  }

  export type CategoriaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servicos?: boolean | CategoriaCountOutputTypeCountServicosArgs
  }

  // Custom InputTypes
  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriaCountOutputType
     */
    select?: CategoriaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriaCountOutputType without action
   */
  export type CategoriaCountOutputTypeCountServicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
  }


  /**
   * Count Type SegmentoCountOutputType
   */

  export type SegmentoCountOutputType = {
    categorias: number
  }

  export type SegmentoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | SegmentoCountOutputTypeCountCategoriasArgs
  }

  // Custom InputTypes
  /**
   * SegmentoCountOutputType without action
   */
  export type SegmentoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SegmentoCountOutputType
     */
    select?: SegmentoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SegmentoCountOutputType without action
   */
  export type SegmentoCountOutputTypeCountCategoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    estado: string | null
    cidade: string | null
    endereco: string | null
    senha: string | null
    criadoEm: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    telefone: string | null
    estado: string | null
    cidade: string | null
    endereco: string | null
    senha: string | null
    criadoEm: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    telefone: number
    estado: number
    cidade: number
    endereco: number
    senha: number
    criadoEm: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    estado?: true
    cidade?: true
    endereco?: true
    senha?: true
    criadoEm?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    estado?: true
    cidade?: true
    endereco?: true
    senha?: true
    criadoEm?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    telefone?: true
    estado?: true
    cidade?: true
    endereco?: true
    senha?: true
    criadoEm?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    estado?: boolean
    cidade?: boolean
    endereco?: boolean
    senha?: boolean
    criadoEm?: boolean
    avaliacao?: boolean | Usuario$avaliacaoArgs<ExtArgs>
    servicos?: boolean | Usuario$servicosArgs<ExtArgs>
    resetTokens?: boolean | Usuario$resetTokensArgs<ExtArgs>
    servicosRealizados?: boolean | Usuario$servicosRealizadosArgs<ExtArgs>
    contatosWhatsapp?: boolean | Usuario$contatosWhatsappArgs<ExtArgs>
    portfolio?: boolean | Usuario$portfolioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    estado?: boolean
    cidade?: boolean
    endereco?: boolean
    senha?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    estado?: boolean
    cidade?: boolean
    endereco?: boolean
    senha?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    telefone?: boolean
    estado?: boolean
    cidade?: boolean
    endereco?: boolean
    senha?: boolean
    criadoEm?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "telefone" | "estado" | "cidade" | "endereco" | "senha" | "criadoEm", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | Usuario$avaliacaoArgs<ExtArgs>
    servicos?: boolean | Usuario$servicosArgs<ExtArgs>
    resetTokens?: boolean | Usuario$resetTokensArgs<ExtArgs>
    servicosRealizados?: boolean | Usuario$servicosRealizadosArgs<ExtArgs>
    contatosWhatsapp?: boolean | Usuario$contatosWhatsappArgs<ExtArgs>
    portfolio?: boolean | Usuario$portfolioArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>[]
      servicos: Prisma.$ServicoPayload<ExtArgs>[]
      resetTokens: Prisma.$ResetTokenPayload<ExtArgs>[]
      servicosRealizados: Prisma.$ServicoRealizadoPayload<ExtArgs>[]
      contatosWhatsapp: Prisma.$ContatoWhatsappPayload<ExtArgs>[]
      portfolio: Prisma.$PortfolioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      telefone: string
      estado: string
      cidade: string
      endereco: string
      senha: string
      criadoEm: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avaliacao<T extends Usuario$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$avaliacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servicos<T extends Usuario$servicosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$servicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resetTokens<T extends Usuario$resetTokensArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$resetTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servicosRealizados<T extends Usuario$servicosRealizadosArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$servicosRealizadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contatosWhatsapp<T extends Usuario$contatosWhatsappArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$contatosWhatsappArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    portfolio<T extends Usuario$portfolioArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$portfolioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nome: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly telefone: FieldRef<"Usuario", 'String'>
    readonly estado: FieldRef<"Usuario", 'String'>
    readonly cidade: FieldRef<"Usuario", 'String'>
    readonly endereco: FieldRef<"Usuario", 'String'>
    readonly senha: FieldRef<"Usuario", 'String'>
    readonly criadoEm: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.avaliacao
   */
  export type Usuario$avaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Usuario.servicos
   */
  export type Usuario$servicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    cursor?: ServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Usuario.resetTokens
   */
  export type Usuario$resetTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    where?: ResetTokenWhereInput
    orderBy?: ResetTokenOrderByWithRelationInput | ResetTokenOrderByWithRelationInput[]
    cursor?: ResetTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResetTokenScalarFieldEnum | ResetTokenScalarFieldEnum[]
  }

  /**
   * Usuario.servicosRealizados
   */
  export type Usuario$servicosRealizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoInclude<ExtArgs> | null
    where?: ServicoRealizadoWhereInput
    orderBy?: ServicoRealizadoOrderByWithRelationInput | ServicoRealizadoOrderByWithRelationInput[]
    cursor?: ServicoRealizadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicoRealizadoScalarFieldEnum | ServicoRealizadoScalarFieldEnum[]
  }

  /**
   * Usuario.contatosWhatsapp
   */
  export type Usuario$contatosWhatsappArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappInclude<ExtArgs> | null
    where?: ContatoWhatsappWhereInput
    orderBy?: ContatoWhatsappOrderByWithRelationInput | ContatoWhatsappOrderByWithRelationInput[]
    cursor?: ContatoWhatsappWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContatoWhatsappScalarFieldEnum | ContatoWhatsappScalarFieldEnum[]
  }

  /**
   * Usuario.portfolio
   */
  export type Usuario$portfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    cursor?: PortfolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Localizacao
   */

  export type AggregateLocalizacao = {
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  export type LocalizacaoAvgAggregateOutputType = {
    id: number | null
  }

  export type LocalizacaoSumAggregateOutputType = {
    id: number | null
  }

  export type LocalizacaoMinAggregateOutputType = {
    id: number | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    criadoEm: Date | null
  }

  export type LocalizacaoMaxAggregateOutputType = {
    id: number | null
    numero: string | null
    bairro: string | null
    cidade: string | null
    estado: string | null
    criadoEm: Date | null
  }

  export type LocalizacaoCountAggregateOutputType = {
    id: number
    numero: number
    bairro: number
    cidade: number
    estado: number
    criadoEm: number
    _all: number
  }


  export type LocalizacaoAvgAggregateInputType = {
    id?: true
  }

  export type LocalizacaoSumAggregateInputType = {
    id?: true
  }

  export type LocalizacaoMinAggregateInputType = {
    id?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    criadoEm?: true
  }

  export type LocalizacaoMaxAggregateInputType = {
    id?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    criadoEm?: true
  }

  export type LocalizacaoCountAggregateInputType = {
    id?: true
    numero?: true
    bairro?: true
    cidade?: true
    estado?: true
    criadoEm?: true
    _all?: true
  }

  export type LocalizacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacao to aggregate.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Localizacaos
    **/
    _count?: true | LocalizacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocalizacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocalizacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocalizacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type GetLocalizacaoAggregateType<T extends LocalizacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateLocalizacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocalizacao[P]>
      : GetScalarType<T[P], AggregateLocalizacao[P]>
  }




  export type LocalizacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LocalizacaoWhereInput
    orderBy?: LocalizacaoOrderByWithAggregationInput | LocalizacaoOrderByWithAggregationInput[]
    by: LocalizacaoScalarFieldEnum[] | LocalizacaoScalarFieldEnum
    having?: LocalizacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocalizacaoCountAggregateInputType | true
    _avg?: LocalizacaoAvgAggregateInputType
    _sum?: LocalizacaoSumAggregateInputType
    _min?: LocalizacaoMinAggregateInputType
    _max?: LocalizacaoMaxAggregateInputType
  }

  export type LocalizacaoGroupByOutputType = {
    id: number
    numero: string
    bairro: string
    cidade: string
    estado: string
    criadoEm: Date
    _count: LocalizacaoCountAggregateOutputType | null
    _avg: LocalizacaoAvgAggregateOutputType | null
    _sum: LocalizacaoSumAggregateOutputType | null
    _min: LocalizacaoMinAggregateOutputType | null
    _max: LocalizacaoMaxAggregateOutputType | null
  }

  type GetLocalizacaoGroupByPayload<T extends LocalizacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocalizacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocalizacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
            : GetScalarType<T[P], LocalizacaoGroupByOutputType[P]>
        }
      >
    >


  export type LocalizacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    criadoEm?: boolean
    servico?: boolean | Localizacao$servicoArgs<ExtArgs>
    _count?: boolean | LocalizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["localizacao"]>

  export type LocalizacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["localizacao"]>

  export type LocalizacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["localizacao"]>

  export type LocalizacaoSelectScalar = {
    id?: boolean
    numero?: boolean
    bairro?: boolean
    cidade?: boolean
    estado?: boolean
    criadoEm?: boolean
  }

  export type LocalizacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "bairro" | "cidade" | "estado" | "criadoEm", ExtArgs["result"]["localizacao"]>
  export type LocalizacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | Localizacao$servicoArgs<ExtArgs>
    _count?: boolean | LocalizacaoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LocalizacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type LocalizacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $LocalizacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Localizacao"
    objects: {
      servico: Prisma.$ServicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: string
      bairro: string
      cidade: string
      estado: string
      criadoEm: Date
    }, ExtArgs["result"]["localizacao"]>
    composites: {}
  }

  type LocalizacaoGetPayload<S extends boolean | null | undefined | LocalizacaoDefaultArgs> = $Result.GetResult<Prisma.$LocalizacaoPayload, S>

  type LocalizacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LocalizacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocalizacaoCountAggregateInputType | true
    }

  export interface LocalizacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Localizacao'], meta: { name: 'Localizacao' } }
    /**
     * Find zero or one Localizacao that matches the filter.
     * @param {LocalizacaoFindUniqueArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LocalizacaoFindUniqueArgs>(args: SelectSubset<T, LocalizacaoFindUniqueArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Localizacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LocalizacaoFindUniqueOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LocalizacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, LocalizacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindFirstArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LocalizacaoFindFirstArgs>(args?: SelectSubset<T, LocalizacaoFindFirstArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Localizacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindFirstOrThrowArgs} args - Arguments to find a Localizacao
     * @example
     * // Get one Localizacao
     * const localizacao = await prisma.localizacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LocalizacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, LocalizacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Localizacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Localizacaos
     * const localizacaos = await prisma.localizacao.findMany()
     * 
     * // Get first 10 Localizacaos
     * const localizacaos = await prisma.localizacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const localizacaoWithIdOnly = await prisma.localizacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LocalizacaoFindManyArgs>(args?: SelectSubset<T, LocalizacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Localizacao.
     * @param {LocalizacaoCreateArgs} args - Arguments to create a Localizacao.
     * @example
     * // Create one Localizacao
     * const Localizacao = await prisma.localizacao.create({
     *   data: {
     *     // ... data to create a Localizacao
     *   }
     * })
     * 
     */
    create<T extends LocalizacaoCreateArgs>(args: SelectSubset<T, LocalizacaoCreateArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Localizacaos.
     * @param {LocalizacaoCreateManyArgs} args - Arguments to create many Localizacaos.
     * @example
     * // Create many Localizacaos
     * const localizacao = await prisma.localizacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LocalizacaoCreateManyArgs>(args?: SelectSubset<T, LocalizacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Localizacaos and returns the data saved in the database.
     * @param {LocalizacaoCreateManyAndReturnArgs} args - Arguments to create many Localizacaos.
     * @example
     * // Create many Localizacaos
     * const localizacao = await prisma.localizacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Localizacaos and only return the `id`
     * const localizacaoWithIdOnly = await prisma.localizacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LocalizacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, LocalizacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Localizacao.
     * @param {LocalizacaoDeleteArgs} args - Arguments to delete one Localizacao.
     * @example
     * // Delete one Localizacao
     * const Localizacao = await prisma.localizacao.delete({
     *   where: {
     *     // ... filter to delete one Localizacao
     *   }
     * })
     * 
     */
    delete<T extends LocalizacaoDeleteArgs>(args: SelectSubset<T, LocalizacaoDeleteArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Localizacao.
     * @param {LocalizacaoUpdateArgs} args - Arguments to update one Localizacao.
     * @example
     * // Update one Localizacao
     * const localizacao = await prisma.localizacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LocalizacaoUpdateArgs>(args: SelectSubset<T, LocalizacaoUpdateArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Localizacaos.
     * @param {LocalizacaoDeleteManyArgs} args - Arguments to filter Localizacaos to delete.
     * @example
     * // Delete a few Localizacaos
     * const { count } = await prisma.localizacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LocalizacaoDeleteManyArgs>(args?: SelectSubset<T, LocalizacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Localizacaos
     * const localizacao = await prisma.localizacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LocalizacaoUpdateManyArgs>(args: SelectSubset<T, LocalizacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Localizacaos and returns the data updated in the database.
     * @param {LocalizacaoUpdateManyAndReturnArgs} args - Arguments to update many Localizacaos.
     * @example
     * // Update many Localizacaos
     * const localizacao = await prisma.localizacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Localizacaos and only return the `id`
     * const localizacaoWithIdOnly = await prisma.localizacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LocalizacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, LocalizacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Localizacao.
     * @param {LocalizacaoUpsertArgs} args - Arguments to update or create a Localizacao.
     * @example
     * // Update or create a Localizacao
     * const localizacao = await prisma.localizacao.upsert({
     *   create: {
     *     // ... data to create a Localizacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Localizacao we want to update
     *   }
     * })
     */
    upsert<T extends LocalizacaoUpsertArgs>(args: SelectSubset<T, LocalizacaoUpsertArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Localizacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoCountArgs} args - Arguments to filter Localizacaos to count.
     * @example
     * // Count the number of Localizacaos
     * const count = await prisma.localizacao.count({
     *   where: {
     *     // ... the filter for the Localizacaos we want to count
     *   }
     * })
    **/
    count<T extends LocalizacaoCountArgs>(
      args?: Subset<T, LocalizacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocalizacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocalizacaoAggregateArgs>(args: Subset<T, LocalizacaoAggregateArgs>): Prisma.PrismaPromise<GetLocalizacaoAggregateType<T>>

    /**
     * Group by Localizacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocalizacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LocalizacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LocalizacaoGroupByArgs['orderBy'] }
        : { orderBy?: LocalizacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LocalizacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocalizacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Localizacao model
   */
  readonly fields: LocalizacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Localizacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LocalizacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servico<T extends Localizacao$servicoArgs<ExtArgs> = {}>(args?: Subset<T, Localizacao$servicoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Localizacao model
   */
  interface LocalizacaoFieldRefs {
    readonly id: FieldRef<"Localizacao", 'Int'>
    readonly numero: FieldRef<"Localizacao", 'String'>
    readonly bairro: FieldRef<"Localizacao", 'String'>
    readonly cidade: FieldRef<"Localizacao", 'String'>
    readonly estado: FieldRef<"Localizacao", 'String'>
    readonly criadoEm: FieldRef<"Localizacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Localizacao findUnique
   */
  export type LocalizacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao findUniqueOrThrow
   */
  export type LocalizacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao findFirst
   */
  export type LocalizacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao findFirstOrThrow
   */
  export type LocalizacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacao to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Localizacaos.
     */
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao findMany
   */
  export type LocalizacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter, which Localizacaos to fetch.
     */
    where?: LocalizacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Localizacaos to fetch.
     */
    orderBy?: LocalizacaoOrderByWithRelationInput | LocalizacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Localizacaos.
     */
    cursor?: LocalizacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Localizacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Localizacaos.
     */
    skip?: number
    distinct?: LocalizacaoScalarFieldEnum | LocalizacaoScalarFieldEnum[]
  }

  /**
   * Localizacao create
   */
  export type LocalizacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Localizacao.
     */
    data: XOR<LocalizacaoCreateInput, LocalizacaoUncheckedCreateInput>
  }

  /**
   * Localizacao createMany
   */
  export type LocalizacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Localizacaos.
     */
    data: LocalizacaoCreateManyInput | LocalizacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Localizacao createManyAndReturn
   */
  export type LocalizacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Localizacaos.
     */
    data: LocalizacaoCreateManyInput | LocalizacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Localizacao update
   */
  export type LocalizacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Localizacao.
     */
    data: XOR<LocalizacaoUpdateInput, LocalizacaoUncheckedUpdateInput>
    /**
     * Choose, which Localizacao to update.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao updateMany
   */
  export type LocalizacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Localizacaos.
     */
    data: XOR<LocalizacaoUpdateManyMutationInput, LocalizacaoUncheckedUpdateManyInput>
    /**
     * Filter which Localizacaos to update
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to update.
     */
    limit?: number
  }

  /**
   * Localizacao updateManyAndReturn
   */
  export type LocalizacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * The data used to update Localizacaos.
     */
    data: XOR<LocalizacaoUpdateManyMutationInput, LocalizacaoUncheckedUpdateManyInput>
    /**
     * Filter which Localizacaos to update
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to update.
     */
    limit?: number
  }

  /**
   * Localizacao upsert
   */
  export type LocalizacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Localizacao to update in case it exists.
     */
    where: LocalizacaoWhereUniqueInput
    /**
     * In case the Localizacao found by the `where` argument doesn't exist, create a new Localizacao with this data.
     */
    create: XOR<LocalizacaoCreateInput, LocalizacaoUncheckedCreateInput>
    /**
     * In case the Localizacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LocalizacaoUpdateInput, LocalizacaoUncheckedUpdateInput>
  }

  /**
   * Localizacao delete
   */
  export type LocalizacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    /**
     * Filter which Localizacao to delete.
     */
    where: LocalizacaoWhereUniqueInput
  }

  /**
   * Localizacao deleteMany
   */
  export type LocalizacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Localizacaos to delete
     */
    where?: LocalizacaoWhereInput
    /**
     * Limit how many Localizacaos to delete.
     */
    limit?: number
  }

  /**
   * Localizacao.servico
   */
  export type Localizacao$servicoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    cursor?: ServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Localizacao without action
   */
  export type LocalizacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
  }


  /**
   * Model Servico
   */

  export type AggregateServico = {
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  export type ServicoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    categoriaId: number | null
    localizacaoId: number | null
  }

  export type ServicoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    categoriaId: number | null
    localizacaoId: number | null
  }

  export type ServicoMinAggregateOutputType = {
    id: number | null
    nomeNegocio: string | null
    descricao: string | null
    imagem: string | null
    disponivel: boolean | null
    usuarioId: number | null
    categoriaId: number | null
    localizacaoId: number | null
    criadoEm: Date | null
  }

  export type ServicoMaxAggregateOutputType = {
    id: number | null
    nomeNegocio: string | null
    descricao: string | null
    imagem: string | null
    disponivel: boolean | null
    usuarioId: number | null
    categoriaId: number | null
    localizacaoId: number | null
    criadoEm: Date | null
  }

  export type ServicoCountAggregateOutputType = {
    id: number
    nomeNegocio: number
    descricao: number
    imagem: number
    disponivel: number
    usuarioId: number
    categoriaId: number
    localizacaoId: number
    criadoEm: number
    _all: number
  }


  export type ServicoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    categoriaId?: true
    localizacaoId?: true
  }

  export type ServicoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    categoriaId?: true
    localizacaoId?: true
  }

  export type ServicoMinAggregateInputType = {
    id?: true
    nomeNegocio?: true
    descricao?: true
    imagem?: true
    disponivel?: true
    usuarioId?: true
    categoriaId?: true
    localizacaoId?: true
    criadoEm?: true
  }

  export type ServicoMaxAggregateInputType = {
    id?: true
    nomeNegocio?: true
    descricao?: true
    imagem?: true
    disponivel?: true
    usuarioId?: true
    categoriaId?: true
    localizacaoId?: true
    criadoEm?: true
  }

  export type ServicoCountAggregateInputType = {
    id?: true
    nomeNegocio?: true
    descricao?: true
    imagem?: true
    disponivel?: true
    usuarioId?: true
    categoriaId?: true
    localizacaoId?: true
    criadoEm?: true
    _all?: true
  }

  export type ServicoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servico to aggregate.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicos
    **/
    _count?: true | ServicoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicoMaxAggregateInputType
  }

  export type GetServicoAggregateType<T extends ServicoAggregateArgs> = {
        [P in keyof T & keyof AggregateServico]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServico[P]>
      : GetScalarType<T[P], AggregateServico[P]>
  }




  export type ServicoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithAggregationInput | ServicoOrderByWithAggregationInput[]
    by: ServicoScalarFieldEnum[] | ServicoScalarFieldEnum
    having?: ServicoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicoCountAggregateInputType | true
    _avg?: ServicoAvgAggregateInputType
    _sum?: ServicoSumAggregateInputType
    _min?: ServicoMinAggregateInputType
    _max?: ServicoMaxAggregateInputType
  }

  export type ServicoGroupByOutputType = {
    id: number
    nomeNegocio: string
    descricao: string
    imagem: string | null
    disponivel: boolean
    usuarioId: number
    categoriaId: number | null
    localizacaoId: number | null
    criadoEm: Date
    _count: ServicoCountAggregateOutputType | null
    _avg: ServicoAvgAggregateOutputType | null
    _sum: ServicoSumAggregateOutputType | null
    _min: ServicoMinAggregateOutputType | null
    _max: ServicoMaxAggregateOutputType | null
  }

  type GetServicoGroupByPayload<T extends ServicoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicoGroupByOutputType[P]>
        }
      >
    >


  export type ServicoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeNegocio?: boolean
    descricao?: boolean
    imagem?: boolean
    disponivel?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    localizacaoId?: boolean
    criadoEm?: boolean
    avaliacao?: boolean | Servico$avaliacaoArgs<ExtArgs>
    preco?: boolean | Servico$precoArgs<ExtArgs>
    categoria?: boolean | Servico$categoriaArgs<ExtArgs>
    localizacao?: boolean | Servico$localizacaoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servicosRealizados?: boolean | Servico$servicosRealizadosArgs<ExtArgs>
    contatosWhatsapp?: boolean | Servico$contatosWhatsappArgs<ExtArgs>
    portfolio?: boolean | Servico$portfolioArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeNegocio?: boolean
    descricao?: boolean
    imagem?: boolean
    disponivel?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    localizacaoId?: boolean
    criadoEm?: boolean
    categoria?: boolean | Servico$categoriaArgs<ExtArgs>
    localizacao?: boolean | Servico$localizacaoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeNegocio?: boolean
    descricao?: boolean
    imagem?: boolean
    disponivel?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    localizacaoId?: boolean
    criadoEm?: boolean
    categoria?: boolean | Servico$categoriaArgs<ExtArgs>
    localizacao?: boolean | Servico$localizacaoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servico"]>

  export type ServicoSelectScalar = {
    id?: boolean
    nomeNegocio?: boolean
    descricao?: boolean
    imagem?: boolean
    disponivel?: boolean
    usuarioId?: boolean
    categoriaId?: boolean
    localizacaoId?: boolean
    criadoEm?: boolean
  }

  export type ServicoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeNegocio" | "descricao" | "imagem" | "disponivel" | "usuarioId" | "categoriaId" | "localizacaoId" | "criadoEm", ExtArgs["result"]["servico"]>
  export type ServicoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    avaliacao?: boolean | Servico$avaliacaoArgs<ExtArgs>
    preco?: boolean | Servico$precoArgs<ExtArgs>
    categoria?: boolean | Servico$categoriaArgs<ExtArgs>
    localizacao?: boolean | Servico$localizacaoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servicosRealizados?: boolean | Servico$servicosRealizadosArgs<ExtArgs>
    contatosWhatsapp?: boolean | Servico$contatosWhatsappArgs<ExtArgs>
    portfolio?: boolean | Servico$portfolioArgs<ExtArgs>
    _count?: boolean | ServicoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | Servico$categoriaArgs<ExtArgs>
    localizacao?: boolean | Servico$localizacaoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ServicoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoria?: boolean | Servico$categoriaArgs<ExtArgs>
    localizacao?: boolean | Servico$localizacaoArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ServicoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servico"
    objects: {
      avaliacao: Prisma.$AvaliacaoPayload<ExtArgs>[]
      preco: Prisma.$PrecoPayload<ExtArgs>[]
      categoria: Prisma.$CategoriaPayload<ExtArgs> | null
      localizacao: Prisma.$LocalizacaoPayload<ExtArgs> | null
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      servicosRealizados: Prisma.$ServicoRealizadoPayload<ExtArgs>[]
      contatosWhatsapp: Prisma.$ContatoWhatsappPayload<ExtArgs>[]
      portfolio: Prisma.$PortfolioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeNegocio: string
      descricao: string
      imagem: string | null
      disponivel: boolean
      usuarioId: number
      categoriaId: number | null
      localizacaoId: number | null
      criadoEm: Date
    }, ExtArgs["result"]["servico"]>
    composites: {}
  }

  type ServicoGetPayload<S extends boolean | null | undefined | ServicoDefaultArgs> = $Result.GetResult<Prisma.$ServicoPayload, S>

  type ServicoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicoCountAggregateInputType | true
    }

  export interface ServicoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servico'], meta: { name: 'Servico' } }
    /**
     * Find zero or one Servico that matches the filter.
     * @param {ServicoFindUniqueArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicoFindUniqueArgs>(args: SelectSubset<T, ServicoFindUniqueArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servico that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicoFindUniqueOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicoFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicoFindFirstArgs>(args?: SelectSubset<T, ServicoFindFirstArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servico that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindFirstOrThrowArgs} args - Arguments to find a Servico
     * @example
     * // Get one Servico
     * const servico = await prisma.servico.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicoFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicos
     * const servicos = await prisma.servico.findMany()
     * 
     * // Get first 10 Servicos
     * const servicos = await prisma.servico.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicoWithIdOnly = await prisma.servico.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicoFindManyArgs>(args?: SelectSubset<T, ServicoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servico.
     * @param {ServicoCreateArgs} args - Arguments to create a Servico.
     * @example
     * // Create one Servico
     * const Servico = await prisma.servico.create({
     *   data: {
     *     // ... data to create a Servico
     *   }
     * })
     * 
     */
    create<T extends ServicoCreateArgs>(args: SelectSubset<T, ServicoCreateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicos.
     * @param {ServicoCreateManyArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicoCreateManyArgs>(args?: SelectSubset<T, ServicoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicos and returns the data saved in the database.
     * @param {ServicoCreateManyAndReturnArgs} args - Arguments to create many Servicos.
     * @example
     * // Create many Servicos
     * const servico = await prisma.servico.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicos and only return the `id`
     * const servicoWithIdOnly = await prisma.servico.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicoCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servico.
     * @param {ServicoDeleteArgs} args - Arguments to delete one Servico.
     * @example
     * // Delete one Servico
     * const Servico = await prisma.servico.delete({
     *   where: {
     *     // ... filter to delete one Servico
     *   }
     * })
     * 
     */
    delete<T extends ServicoDeleteArgs>(args: SelectSubset<T, ServicoDeleteArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servico.
     * @param {ServicoUpdateArgs} args - Arguments to update one Servico.
     * @example
     * // Update one Servico
     * const servico = await prisma.servico.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicoUpdateArgs>(args: SelectSubset<T, ServicoUpdateArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicos.
     * @param {ServicoDeleteManyArgs} args - Arguments to filter Servicos to delete.
     * @example
     * // Delete a few Servicos
     * const { count } = await prisma.servico.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicoDeleteManyArgs>(args?: SelectSubset<T, ServicoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicoUpdateManyArgs>(args: SelectSubset<T, ServicoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicos and returns the data updated in the database.
     * @param {ServicoUpdateManyAndReturnArgs} args - Arguments to update many Servicos.
     * @example
     * // Update many Servicos
     * const servico = await prisma.servico.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicos and only return the `id`
     * const servicoWithIdOnly = await prisma.servico.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicoUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servico.
     * @param {ServicoUpsertArgs} args - Arguments to update or create a Servico.
     * @example
     * // Update or create a Servico
     * const servico = await prisma.servico.upsert({
     *   create: {
     *     // ... data to create a Servico
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servico we want to update
     *   }
     * })
     */
    upsert<T extends ServicoUpsertArgs>(args: SelectSubset<T, ServicoUpsertArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoCountArgs} args - Arguments to filter Servicos to count.
     * @example
     * // Count the number of Servicos
     * const count = await prisma.servico.count({
     *   where: {
     *     // ... the filter for the Servicos we want to count
     *   }
     * })
    **/
    count<T extends ServicoCountArgs>(
      args?: Subset<T, ServicoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicoAggregateArgs>(args: Subset<T, ServicoAggregateArgs>): Prisma.PrismaPromise<GetServicoAggregateType<T>>

    /**
     * Group by Servico.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicoGroupByArgs['orderBy'] }
        : { orderBy?: ServicoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servico model
   */
  readonly fields: ServicoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servico.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    avaliacao<T extends Servico$avaliacaoArgs<ExtArgs> = {}>(args?: Subset<T, Servico$avaliacaoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preco<T extends Servico$precoArgs<ExtArgs> = {}>(args?: Subset<T, Servico$precoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoria<T extends Servico$categoriaArgs<ExtArgs> = {}>(args?: Subset<T, Servico$categoriaArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    localizacao<T extends Servico$localizacaoArgs<ExtArgs> = {}>(args?: Subset<T, Servico$localizacaoArgs<ExtArgs>>): Prisma__LocalizacaoClient<$Result.GetResult<Prisma.$LocalizacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicosRealizados<T extends Servico$servicosRealizadosArgs<ExtArgs> = {}>(args?: Subset<T, Servico$servicosRealizadosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contatosWhatsapp<T extends Servico$contatosWhatsappArgs<ExtArgs> = {}>(args?: Subset<T, Servico$contatosWhatsappArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    portfolio<T extends Servico$portfolioArgs<ExtArgs> = {}>(args?: Subset<T, Servico$portfolioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Servico model
   */
  interface ServicoFieldRefs {
    readonly id: FieldRef<"Servico", 'Int'>
    readonly nomeNegocio: FieldRef<"Servico", 'String'>
    readonly descricao: FieldRef<"Servico", 'String'>
    readonly imagem: FieldRef<"Servico", 'String'>
    readonly disponivel: FieldRef<"Servico", 'Boolean'>
    readonly usuarioId: FieldRef<"Servico", 'Int'>
    readonly categoriaId: FieldRef<"Servico", 'Int'>
    readonly localizacaoId: FieldRef<"Servico", 'Int'>
    readonly criadoEm: FieldRef<"Servico", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Servico findUnique
   */
  export type ServicoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findUniqueOrThrow
   */
  export type ServicoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico findFirst
   */
  export type ServicoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findFirstOrThrow
   */
  export type ServicoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servico to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicos.
     */
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico findMany
   */
  export type ServicoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter, which Servicos to fetch.
     */
    where?: ServicoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicos to fetch.
     */
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicos.
     */
    cursor?: ServicoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicos.
     */
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Servico create
   */
  export type ServicoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to create a Servico.
     */
    data: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
  }

  /**
   * Servico createMany
   */
  export type ServicoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servico createManyAndReturn
   */
  export type ServicoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to create many Servicos.
     */
    data: ServicoCreateManyInput | ServicoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servico update
   */
  export type ServicoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The data needed to update a Servico.
     */
    data: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
    /**
     * Choose, which Servico to update.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico updateMany
   */
  export type ServicoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
  }

  /**
   * Servico updateManyAndReturn
   */
  export type ServicoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * The data used to update Servicos.
     */
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyInput>
    /**
     * Filter which Servicos to update
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Servico upsert
   */
  export type ServicoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * The filter to search for the Servico to update in case it exists.
     */
    where: ServicoWhereUniqueInput
    /**
     * In case the Servico found by the `where` argument doesn't exist, create a new Servico with this data.
     */
    create: XOR<ServicoCreateInput, ServicoUncheckedCreateInput>
    /**
     * In case the Servico was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicoUpdateInput, ServicoUncheckedUpdateInput>
  }

  /**
   * Servico delete
   */
  export type ServicoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    /**
     * Filter which Servico to delete.
     */
    where: ServicoWhereUniqueInput
  }

  /**
   * Servico deleteMany
   */
  export type ServicoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicos to delete
     */
    where?: ServicoWhereInput
    /**
     * Limit how many Servicos to delete.
     */
    limit?: number
  }

  /**
   * Servico.avaliacao
   */
  export type Servico$avaliacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    cursor?: AvaliacaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Servico.preco
   */
  export type Servico$precoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoInclude<ExtArgs> | null
    where?: PrecoWhereInput
    orderBy?: PrecoOrderByWithRelationInput | PrecoOrderByWithRelationInput[]
    cursor?: PrecoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PrecoScalarFieldEnum | PrecoScalarFieldEnum[]
  }

  /**
   * Servico.categoria
   */
  export type Servico$categoriaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
  }

  /**
   * Servico.localizacao
   */
  export type Servico$localizacaoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Localizacao
     */
    select?: LocalizacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Localizacao
     */
    omit?: LocalizacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LocalizacaoInclude<ExtArgs> | null
    where?: LocalizacaoWhereInput
  }

  /**
   * Servico.servicosRealizados
   */
  export type Servico$servicosRealizadosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoInclude<ExtArgs> | null
    where?: ServicoRealizadoWhereInput
    orderBy?: ServicoRealizadoOrderByWithRelationInput | ServicoRealizadoOrderByWithRelationInput[]
    cursor?: ServicoRealizadoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicoRealizadoScalarFieldEnum | ServicoRealizadoScalarFieldEnum[]
  }

  /**
   * Servico.contatosWhatsapp
   */
  export type Servico$contatosWhatsappArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappInclude<ExtArgs> | null
    where?: ContatoWhatsappWhereInput
    orderBy?: ContatoWhatsappOrderByWithRelationInput | ContatoWhatsappOrderByWithRelationInput[]
    cursor?: ContatoWhatsappWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContatoWhatsappScalarFieldEnum | ContatoWhatsappScalarFieldEnum[]
  }

  /**
   * Servico.portfolio
   */
  export type Servico$portfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    cursor?: PortfolioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Servico without action
   */
  export type ServicoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
  }


  /**
   * Model Categoria
   */

  export type AggregateCategoria = {
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  export type CategoriaAvgAggregateOutputType = {
    id: number | null
    segmentoId: number | null
  }

  export type CategoriaSumAggregateOutputType = {
    id: number | null
    segmentoId: number | null
  }

  export type CategoriaMinAggregateOutputType = {
    id: number | null
    nomeServico: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    segmentoId: number | null
  }

  export type CategoriaMaxAggregateOutputType = {
    id: number | null
    nomeServico: string | null
    criadoEm: Date | null
    atualizadoEm: Date | null
    segmentoId: number | null
  }

  export type CategoriaCountAggregateOutputType = {
    id: number
    nomeServico: number
    criadoEm: number
    atualizadoEm: number
    segmentoId: number
    _all: number
  }


  export type CategoriaAvgAggregateInputType = {
    id?: true
    segmentoId?: true
  }

  export type CategoriaSumAggregateInputType = {
    id?: true
    segmentoId?: true
  }

  export type CategoriaMinAggregateInputType = {
    id?: true
    nomeServico?: true
    criadoEm?: true
    atualizadoEm?: true
    segmentoId?: true
  }

  export type CategoriaMaxAggregateInputType = {
    id?: true
    nomeServico?: true
    criadoEm?: true
    atualizadoEm?: true
    segmentoId?: true
  }

  export type CategoriaCountAggregateInputType = {
    id?: true
    nomeServico?: true
    criadoEm?: true
    atualizadoEm?: true
    segmentoId?: true
    _all?: true
  }

  export type CategoriaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categoria to aggregate.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categorias
    **/
    _count?: true | CategoriaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriaMaxAggregateInputType
  }

  export type GetCategoriaAggregateType<T extends CategoriaAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoria]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoria[P]>
      : GetScalarType<T[P], AggregateCategoria[P]>
  }




  export type CategoriaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithAggregationInput | CategoriaOrderByWithAggregationInput[]
    by: CategoriaScalarFieldEnum[] | CategoriaScalarFieldEnum
    having?: CategoriaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriaCountAggregateInputType | true
    _avg?: CategoriaAvgAggregateInputType
    _sum?: CategoriaSumAggregateInputType
    _min?: CategoriaMinAggregateInputType
    _max?: CategoriaMaxAggregateInputType
  }

  export type CategoriaGroupByOutputType = {
    id: number
    nomeServico: string
    criadoEm: Date
    atualizadoEm: Date
    segmentoId: number | null
    _count: CategoriaCountAggregateOutputType | null
    _avg: CategoriaAvgAggregateOutputType | null
    _sum: CategoriaSumAggregateOutputType | null
    _min: CategoriaMinAggregateOutputType | null
    _max: CategoriaMaxAggregateOutputType | null
  }

  type GetCategoriaGroupByPayload<T extends CategoriaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriaGroupByOutputType[P]>
        }
      >
    >


  export type CategoriaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeServico?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    segmentoId?: boolean
    segmento?: boolean | Categoria$segmentoArgs<ExtArgs>
    servicos?: boolean | Categoria$servicosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeServico?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    segmentoId?: boolean
    segmento?: boolean | Categoria$segmentoArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeServico?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    segmentoId?: boolean
    segmento?: boolean | Categoria$segmentoArgs<ExtArgs>
  }, ExtArgs["result"]["categoria"]>

  export type CategoriaSelectScalar = {
    id?: boolean
    nomeServico?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    segmentoId?: boolean
  }

  export type CategoriaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeServico" | "criadoEm" | "atualizadoEm" | "segmentoId", ExtArgs["result"]["categoria"]>
  export type CategoriaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segmento?: boolean | Categoria$segmentoArgs<ExtArgs>
    servicos?: boolean | Categoria$servicosArgs<ExtArgs>
    _count?: boolean | CategoriaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segmento?: boolean | Categoria$segmentoArgs<ExtArgs>
  }
  export type CategoriaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    segmento?: boolean | Categoria$segmentoArgs<ExtArgs>
  }

  export type $CategoriaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categoria"
    objects: {
      segmento: Prisma.$SegmentoPayload<ExtArgs> | null
      servicos: Prisma.$ServicoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeServico: string
      criadoEm: Date
      atualizadoEm: Date
      segmentoId: number | null
    }, ExtArgs["result"]["categoria"]>
    composites: {}
  }

  type CategoriaGetPayload<S extends boolean | null | undefined | CategoriaDefaultArgs> = $Result.GetResult<Prisma.$CategoriaPayload, S>

  type CategoriaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriaCountAggregateInputType | true
    }

  export interface CategoriaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categoria'], meta: { name: 'Categoria' } }
    /**
     * Find zero or one Categoria that matches the filter.
     * @param {CategoriaFindUniqueArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriaFindUniqueArgs>(args: SelectSubset<T, CategoriaFindUniqueArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categoria that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriaFindUniqueOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriaFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriaFindFirstArgs>(args?: SelectSubset<T, CategoriaFindFirstArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categoria that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindFirstOrThrowArgs} args - Arguments to find a Categoria
     * @example
     * // Get one Categoria
     * const categoria = await prisma.categoria.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriaFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categorias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categorias
     * const categorias = await prisma.categoria.findMany()
     * 
     * // Get first 10 Categorias
     * const categorias = await prisma.categoria.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriaWithIdOnly = await prisma.categoria.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriaFindManyArgs>(args?: SelectSubset<T, CategoriaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categoria.
     * @param {CategoriaCreateArgs} args - Arguments to create a Categoria.
     * @example
     * // Create one Categoria
     * const Categoria = await prisma.categoria.create({
     *   data: {
     *     // ... data to create a Categoria
     *   }
     * })
     * 
     */
    create<T extends CategoriaCreateArgs>(args: SelectSubset<T, CategoriaCreateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categorias.
     * @param {CategoriaCreateManyArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriaCreateManyArgs>(args?: SelectSubset<T, CategoriaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categorias and returns the data saved in the database.
     * @param {CategoriaCreateManyAndReturnArgs} args - Arguments to create many Categorias.
     * @example
     * // Create many Categorias
     * const categoria = await prisma.categoria.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriaCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categoria.
     * @param {CategoriaDeleteArgs} args - Arguments to delete one Categoria.
     * @example
     * // Delete one Categoria
     * const Categoria = await prisma.categoria.delete({
     *   where: {
     *     // ... filter to delete one Categoria
     *   }
     * })
     * 
     */
    delete<T extends CategoriaDeleteArgs>(args: SelectSubset<T, CategoriaDeleteArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categoria.
     * @param {CategoriaUpdateArgs} args - Arguments to update one Categoria.
     * @example
     * // Update one Categoria
     * const categoria = await prisma.categoria.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriaUpdateArgs>(args: SelectSubset<T, CategoriaUpdateArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categorias.
     * @param {CategoriaDeleteManyArgs} args - Arguments to filter Categorias to delete.
     * @example
     * // Delete a few Categorias
     * const { count } = await prisma.categoria.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriaDeleteManyArgs>(args?: SelectSubset<T, CategoriaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriaUpdateManyArgs>(args: SelectSubset<T, CategoriaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categorias and returns the data updated in the database.
     * @param {CategoriaUpdateManyAndReturnArgs} args - Arguments to update many Categorias.
     * @example
     * // Update many Categorias
     * const categoria = await prisma.categoria.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categorias and only return the `id`
     * const categoriaWithIdOnly = await prisma.categoria.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoriaUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categoria.
     * @param {CategoriaUpsertArgs} args - Arguments to update or create a Categoria.
     * @example
     * // Update or create a Categoria
     * const categoria = await prisma.categoria.upsert({
     *   create: {
     *     // ... data to create a Categoria
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categoria we want to update
     *   }
     * })
     */
    upsert<T extends CategoriaUpsertArgs>(args: SelectSubset<T, CategoriaUpsertArgs<ExtArgs>>): Prisma__CategoriaClient<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categorias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaCountArgs} args - Arguments to filter Categorias to count.
     * @example
     * // Count the number of Categorias
     * const count = await prisma.categoria.count({
     *   where: {
     *     // ... the filter for the Categorias we want to count
     *   }
     * })
    **/
    count<T extends CategoriaCountArgs>(
      args?: Subset<T, CategoriaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriaAggregateArgs>(args: Subset<T, CategoriaAggregateArgs>): Prisma.PrismaPromise<GetCategoriaAggregateType<T>>

    /**
     * Group by Categoria.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoriaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriaGroupByArgs['orderBy'] }
        : { orderBy?: CategoriaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoriaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categoria model
   */
  readonly fields: CategoriaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categoria.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    segmento<T extends Categoria$segmentoArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$segmentoArgs<ExtArgs>>): Prisma__SegmentoClient<$Result.GetResult<Prisma.$SegmentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    servicos<T extends Categoria$servicosArgs<ExtArgs> = {}>(args?: Subset<T, Categoria$servicosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Categoria model
   */
  interface CategoriaFieldRefs {
    readonly id: FieldRef<"Categoria", 'Int'>
    readonly nomeServico: FieldRef<"Categoria", 'String'>
    readonly criadoEm: FieldRef<"Categoria", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Categoria", 'DateTime'>
    readonly segmentoId: FieldRef<"Categoria", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Categoria findUnique
   */
  export type CategoriaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findUniqueOrThrow
   */
  export type CategoriaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria findFirst
   */
  export type CategoriaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findFirstOrThrow
   */
  export type CategoriaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categoria to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categorias.
     */
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria findMany
   */
  export type CategoriaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter, which Categorias to fetch.
     */
    where?: CategoriaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categorias to fetch.
     */
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categorias.
     */
    cursor?: CategoriaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categorias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categorias.
     */
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Categoria create
   */
  export type CategoriaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to create a Categoria.
     */
    data: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
  }

  /**
   * Categoria createMany
   */
  export type CategoriaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categoria createManyAndReturn
   */
  export type CategoriaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to create many Categorias.
     */
    data: CategoriaCreateManyInput | CategoriaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categoria update
   */
  export type CategoriaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The data needed to update a Categoria.
     */
    data: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
    /**
     * Choose, which Categoria to update.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria updateMany
   */
  export type CategoriaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
  }

  /**
   * Categoria updateManyAndReturn
   */
  export type CategoriaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * The data used to update Categorias.
     */
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyInput>
    /**
     * Filter which Categorias to update
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Categoria upsert
   */
  export type CategoriaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * The filter to search for the Categoria to update in case it exists.
     */
    where: CategoriaWhereUniqueInput
    /**
     * In case the Categoria found by the `where` argument doesn't exist, create a new Categoria with this data.
     */
    create: XOR<CategoriaCreateInput, CategoriaUncheckedCreateInput>
    /**
     * In case the Categoria was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriaUpdateInput, CategoriaUncheckedUpdateInput>
  }

  /**
   * Categoria delete
   */
  export type CategoriaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    /**
     * Filter which Categoria to delete.
     */
    where: CategoriaWhereUniqueInput
  }

  /**
   * Categoria deleteMany
   */
  export type CategoriaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categorias to delete
     */
    where?: CategoriaWhereInput
    /**
     * Limit how many Categorias to delete.
     */
    limit?: number
  }

  /**
   * Categoria.segmento
   */
  export type Categoria$segmentoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentoInclude<ExtArgs> | null
    where?: SegmentoWhereInput
  }

  /**
   * Categoria.servicos
   */
  export type Categoria$servicosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servico
     */
    select?: ServicoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servico
     */
    omit?: ServicoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoInclude<ExtArgs> | null
    where?: ServicoWhereInput
    orderBy?: ServicoOrderByWithRelationInput | ServicoOrderByWithRelationInput[]
    cursor?: ServicoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicoScalarFieldEnum | ServicoScalarFieldEnum[]
  }

  /**
   * Categoria without action
   */
  export type CategoriaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
  }


  /**
   * Model Avaliacao
   */

  export type AggregateAvaliacao = {
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  export type AvaliacaoAvgAggregateOutputType = {
    id: number | null
    star: number | null
    servicoId: number | null
    usuarioId: number | null
  }

  export type AvaliacaoSumAggregateOutputType = {
    id: number | null
    star: number | null
    servicoId: number | null
    usuarioId: number | null
  }

  export type AvaliacaoMinAggregateOutputType = {
    id: number | null
    star: number | null
    descricao: string | null
    servicoId: number | null
    usuarioId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type AvaliacaoMaxAggregateOutputType = {
    id: number | null
    star: number | null
    descricao: string | null
    servicoId: number | null
    usuarioId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type AvaliacaoCountAggregateOutputType = {
    id: number
    star: number
    descricao: number
    servicoId: number
    usuarioId: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type AvaliacaoAvgAggregateInputType = {
    id?: true
    star?: true
    servicoId?: true
    usuarioId?: true
  }

  export type AvaliacaoSumAggregateInputType = {
    id?: true
    star?: true
    servicoId?: true
    usuarioId?: true
  }

  export type AvaliacaoMinAggregateInputType = {
    id?: true
    star?: true
    descricao?: true
    servicoId?: true
    usuarioId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type AvaliacaoMaxAggregateInputType = {
    id?: true
    star?: true
    descricao?: true
    servicoId?: true
    usuarioId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type AvaliacaoCountAggregateInputType = {
    id?: true
    star?: true
    descricao?: true
    servicoId?: true
    usuarioId?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type AvaliacaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacao to aggregate.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Avaliacaos
    **/
    _count?: true | AvaliacaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvaliacaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvaliacaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvaliacaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type GetAvaliacaoAggregateType<T extends AvaliacaoAggregateArgs> = {
        [P in keyof T & keyof AggregateAvaliacao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvaliacao[P]>
      : GetScalarType<T[P], AggregateAvaliacao[P]>
  }




  export type AvaliacaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvaliacaoWhereInput
    orderBy?: AvaliacaoOrderByWithAggregationInput | AvaliacaoOrderByWithAggregationInput[]
    by: AvaliacaoScalarFieldEnum[] | AvaliacaoScalarFieldEnum
    having?: AvaliacaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvaliacaoCountAggregateInputType | true
    _avg?: AvaliacaoAvgAggregateInputType
    _sum?: AvaliacaoSumAggregateInputType
    _min?: AvaliacaoMinAggregateInputType
    _max?: AvaliacaoMaxAggregateInputType
  }

  export type AvaliacaoGroupByOutputType = {
    id: number
    star: number
    descricao: string
    servicoId: number
    usuarioId: number
    criadoEm: Date
    atualizadoEm: Date
    _count: AvaliacaoCountAggregateOutputType | null
    _avg: AvaliacaoAvgAggregateOutputType | null
    _sum: AvaliacaoSumAggregateOutputType | null
    _min: AvaliacaoMinAggregateOutputType | null
    _max: AvaliacaoMaxAggregateOutputType | null
  }

  type GetAvaliacaoGroupByPayload<T extends AvaliacaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvaliacaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvaliacaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
            : GetScalarType<T[P], AvaliacaoGroupByOutputType[P]>
        }
      >
    >


  export type AvaliacaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    star?: boolean
    descricao?: boolean
    servicoId?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    star?: boolean
    descricao?: boolean
    servicoId?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    star?: boolean
    descricao?: boolean
    servicoId?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["avaliacao"]>

  export type AvaliacaoSelectScalar = {
    id?: boolean
    star?: boolean
    descricao?: boolean
    servicoId?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type AvaliacaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "star" | "descricao" | "servicoId" | "usuarioId" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["avaliacao"]>
  export type AvaliacaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type AvaliacaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $AvaliacaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Avaliacao"
    objects: {
      servico: Prisma.$ServicoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      star: number
      descricao: string
      servicoId: number
      usuarioId: number
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["avaliacao"]>
    composites: {}
  }

  type AvaliacaoGetPayload<S extends boolean | null | undefined | AvaliacaoDefaultArgs> = $Result.GetResult<Prisma.$AvaliacaoPayload, S>

  type AvaliacaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvaliacaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvaliacaoCountAggregateInputType | true
    }

  export interface AvaliacaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Avaliacao'], meta: { name: 'Avaliacao' } }
    /**
     * Find zero or one Avaliacao that matches the filter.
     * @param {AvaliacaoFindUniqueArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvaliacaoFindUniqueArgs>(args: SelectSubset<T, AvaliacaoFindUniqueArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Avaliacao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvaliacaoFindUniqueOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvaliacaoFindUniqueOrThrowArgs>(args: SelectSubset<T, AvaliacaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvaliacaoFindFirstArgs>(args?: SelectSubset<T, AvaliacaoFindFirstArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Avaliacao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindFirstOrThrowArgs} args - Arguments to find a Avaliacao
     * @example
     * // Get one Avaliacao
     * const avaliacao = await prisma.avaliacao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvaliacaoFindFirstOrThrowArgs>(args?: SelectSubset<T, AvaliacaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Avaliacaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany()
     * 
     * // Get first 10 Avaliacaos
     * const avaliacaos = await prisma.avaliacao.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvaliacaoFindManyArgs>(args?: SelectSubset<T, AvaliacaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Avaliacao.
     * @param {AvaliacaoCreateArgs} args - Arguments to create a Avaliacao.
     * @example
     * // Create one Avaliacao
     * const Avaliacao = await prisma.avaliacao.create({
     *   data: {
     *     // ... data to create a Avaliacao
     *   }
     * })
     * 
     */
    create<T extends AvaliacaoCreateArgs>(args: SelectSubset<T, AvaliacaoCreateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Avaliacaos.
     * @param {AvaliacaoCreateManyArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvaliacaoCreateManyArgs>(args?: SelectSubset<T, AvaliacaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Avaliacaos and returns the data saved in the database.
     * @param {AvaliacaoCreateManyAndReturnArgs} args - Arguments to create many Avaliacaos.
     * @example
     * // Create many Avaliacaos
     * const avaliacao = await prisma.avaliacao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvaliacaoCreateManyAndReturnArgs>(args?: SelectSubset<T, AvaliacaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Avaliacao.
     * @param {AvaliacaoDeleteArgs} args - Arguments to delete one Avaliacao.
     * @example
     * // Delete one Avaliacao
     * const Avaliacao = await prisma.avaliacao.delete({
     *   where: {
     *     // ... filter to delete one Avaliacao
     *   }
     * })
     * 
     */
    delete<T extends AvaliacaoDeleteArgs>(args: SelectSubset<T, AvaliacaoDeleteArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Avaliacao.
     * @param {AvaliacaoUpdateArgs} args - Arguments to update one Avaliacao.
     * @example
     * // Update one Avaliacao
     * const avaliacao = await prisma.avaliacao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvaliacaoUpdateArgs>(args: SelectSubset<T, AvaliacaoUpdateArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Avaliacaos.
     * @param {AvaliacaoDeleteManyArgs} args - Arguments to filter Avaliacaos to delete.
     * @example
     * // Delete a few Avaliacaos
     * const { count } = await prisma.avaliacao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvaliacaoDeleteManyArgs>(args?: SelectSubset<T, AvaliacaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvaliacaoUpdateManyArgs>(args: SelectSubset<T, AvaliacaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Avaliacaos and returns the data updated in the database.
     * @param {AvaliacaoUpdateManyAndReturnArgs} args - Arguments to update many Avaliacaos.
     * @example
     * // Update many Avaliacaos
     * const avaliacao = await prisma.avaliacao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Avaliacaos and only return the `id`
     * const avaliacaoWithIdOnly = await prisma.avaliacao.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AvaliacaoUpdateManyAndReturnArgs>(args: SelectSubset<T, AvaliacaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Avaliacao.
     * @param {AvaliacaoUpsertArgs} args - Arguments to update or create a Avaliacao.
     * @example
     * // Update or create a Avaliacao
     * const avaliacao = await prisma.avaliacao.upsert({
     *   create: {
     *     // ... data to create a Avaliacao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Avaliacao we want to update
     *   }
     * })
     */
    upsert<T extends AvaliacaoUpsertArgs>(args: SelectSubset<T, AvaliacaoUpsertArgs<ExtArgs>>): Prisma__AvaliacaoClient<$Result.GetResult<Prisma.$AvaliacaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Avaliacaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoCountArgs} args - Arguments to filter Avaliacaos to count.
     * @example
     * // Count the number of Avaliacaos
     * const count = await prisma.avaliacao.count({
     *   where: {
     *     // ... the filter for the Avaliacaos we want to count
     *   }
     * })
    **/
    count<T extends AvaliacaoCountArgs>(
      args?: Subset<T, AvaliacaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvaliacaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvaliacaoAggregateArgs>(args: Subset<T, AvaliacaoAggregateArgs>): Prisma.PrismaPromise<GetAvaliacaoAggregateType<T>>

    /**
     * Group by Avaliacao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvaliacaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvaliacaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvaliacaoGroupByArgs['orderBy'] }
        : { orderBy?: AvaliacaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvaliacaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvaliacaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Avaliacao model
   */
  readonly fields: AvaliacaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Avaliacao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvaliacaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Avaliacao model
   */
  interface AvaliacaoFieldRefs {
    readonly id: FieldRef<"Avaliacao", 'Int'>
    readonly star: FieldRef<"Avaliacao", 'Int'>
    readonly descricao: FieldRef<"Avaliacao", 'String'>
    readonly servicoId: FieldRef<"Avaliacao", 'Int'>
    readonly usuarioId: FieldRef<"Avaliacao", 'Int'>
    readonly criadoEm: FieldRef<"Avaliacao", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Avaliacao", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Avaliacao findUnique
   */
  export type AvaliacaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findUniqueOrThrow
   */
  export type AvaliacaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao findFirst
   */
  export type AvaliacaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findFirstOrThrow
   */
  export type AvaliacaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacao to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Avaliacaos.
     */
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao findMany
   */
  export type AvaliacaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter, which Avaliacaos to fetch.
     */
    where?: AvaliacaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Avaliacaos to fetch.
     */
    orderBy?: AvaliacaoOrderByWithRelationInput | AvaliacaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Avaliacaos.
     */
    cursor?: AvaliacaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Avaliacaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Avaliacaos.
     */
    skip?: number
    distinct?: AvaliacaoScalarFieldEnum | AvaliacaoScalarFieldEnum[]
  }

  /**
   * Avaliacao create
   */
  export type AvaliacaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Avaliacao.
     */
    data: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
  }

  /**
   * Avaliacao createMany
   */
  export type AvaliacaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Avaliacao createManyAndReturn
   */
  export type AvaliacaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to create many Avaliacaos.
     */
    data: AvaliacaoCreateManyInput | AvaliacaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao update
   */
  export type AvaliacaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Avaliacao.
     */
    data: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
    /**
     * Choose, which Avaliacao to update.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao updateMany
   */
  export type AvaliacaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
  }

  /**
   * Avaliacao updateManyAndReturn
   */
  export type AvaliacaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * The data used to update Avaliacaos.
     */
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyInput>
    /**
     * Filter which Avaliacaos to update
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Avaliacao upsert
   */
  export type AvaliacaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Avaliacao to update in case it exists.
     */
    where: AvaliacaoWhereUniqueInput
    /**
     * In case the Avaliacao found by the `where` argument doesn't exist, create a new Avaliacao with this data.
     */
    create: XOR<AvaliacaoCreateInput, AvaliacaoUncheckedCreateInput>
    /**
     * In case the Avaliacao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvaliacaoUpdateInput, AvaliacaoUncheckedUpdateInput>
  }

  /**
   * Avaliacao delete
   */
  export type AvaliacaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
    /**
     * Filter which Avaliacao to delete.
     */
    where: AvaliacaoWhereUniqueInput
  }

  /**
   * Avaliacao deleteMany
   */
  export type AvaliacaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Avaliacaos to delete
     */
    where?: AvaliacaoWhereInput
    /**
     * Limit how many Avaliacaos to delete.
     */
    limit?: number
  }

  /**
   * Avaliacao without action
   */
  export type AvaliacaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Avaliacao
     */
    select?: AvaliacaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Avaliacao
     */
    omit?: AvaliacaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvaliacaoInclude<ExtArgs> | null
  }


  /**
   * Model Preco
   */

  export type AggregatePreco = {
    _count: PrecoCountAggregateOutputType | null
    _avg: PrecoAvgAggregateOutputType | null
    _sum: PrecoSumAggregateOutputType | null
    _min: PrecoMinAggregateOutputType | null
    _max: PrecoMaxAggregateOutputType | null
  }

  export type PrecoAvgAggregateOutputType = {
    id: number | null
    precificacao: number | null
    servicoId: number | null
  }

  export type PrecoSumAggregateOutputType = {
    id: number | null
    precificacao: number | null
    servicoId: number | null
  }

  export type PrecoMinAggregateOutputType = {
    id: number | null
    nomeservico: string | null
    precificacao: number | null
    servicoId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PrecoMaxAggregateOutputType = {
    id: number | null
    nomeservico: string | null
    precificacao: number | null
    servicoId: number | null
    criadoEm: Date | null
    atualizadoEm: Date | null
  }

  export type PrecoCountAggregateOutputType = {
    id: number
    nomeservico: number
    precificacao: number
    servicoId: number
    criadoEm: number
    atualizadoEm: number
    _all: number
  }


  export type PrecoAvgAggregateInputType = {
    id?: true
    precificacao?: true
    servicoId?: true
  }

  export type PrecoSumAggregateInputType = {
    id?: true
    precificacao?: true
    servicoId?: true
  }

  export type PrecoMinAggregateInputType = {
    id?: true
    nomeservico?: true
    precificacao?: true
    servicoId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PrecoMaxAggregateInputType = {
    id?: true
    nomeservico?: true
    precificacao?: true
    servicoId?: true
    criadoEm?: true
    atualizadoEm?: true
  }

  export type PrecoCountAggregateInputType = {
    id?: true
    nomeservico?: true
    precificacao?: true
    servicoId?: true
    criadoEm?: true
    atualizadoEm?: true
    _all?: true
  }

  export type PrecoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preco to aggregate.
     */
    where?: PrecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Precos to fetch.
     */
    orderBy?: PrecoOrderByWithRelationInput | PrecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PrecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Precos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Precos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Precos
    **/
    _count?: true | PrecoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PrecoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PrecoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PrecoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PrecoMaxAggregateInputType
  }

  export type GetPrecoAggregateType<T extends PrecoAggregateArgs> = {
        [P in keyof T & keyof AggregatePreco]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreco[P]>
      : GetScalarType<T[P], AggregatePreco[P]>
  }




  export type PrecoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PrecoWhereInput
    orderBy?: PrecoOrderByWithAggregationInput | PrecoOrderByWithAggregationInput[]
    by: PrecoScalarFieldEnum[] | PrecoScalarFieldEnum
    having?: PrecoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PrecoCountAggregateInputType | true
    _avg?: PrecoAvgAggregateInputType
    _sum?: PrecoSumAggregateInputType
    _min?: PrecoMinAggregateInputType
    _max?: PrecoMaxAggregateInputType
  }

  export type PrecoGroupByOutputType = {
    id: number
    nomeservico: string
    precificacao: number
    servicoId: number
    criadoEm: Date
    atualizadoEm: Date
    _count: PrecoCountAggregateOutputType | null
    _avg: PrecoAvgAggregateOutputType | null
    _sum: PrecoSumAggregateOutputType | null
    _min: PrecoMinAggregateOutputType | null
    _max: PrecoMaxAggregateOutputType | null
  }

  type GetPrecoGroupByPayload<T extends PrecoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PrecoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PrecoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PrecoGroupByOutputType[P]>
            : GetScalarType<T[P], PrecoGroupByOutputType[P]>
        }
      >
    >


  export type PrecoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeservico?: boolean
    precificacao?: boolean
    servicoId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preco"]>

  export type PrecoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeservico?: boolean
    precificacao?: boolean
    servicoId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preco"]>

  export type PrecoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nomeservico?: boolean
    precificacao?: boolean
    servicoId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preco"]>

  export type PrecoSelectScalar = {
    id?: boolean
    nomeservico?: boolean
    precificacao?: boolean
    servicoId?: boolean
    criadoEm?: boolean
    atualizadoEm?: boolean
  }

  export type PrecoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nomeservico" | "precificacao" | "servicoId" | "criadoEm" | "atualizadoEm", ExtArgs["result"]["preco"]>
  export type PrecoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type PrecoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type PrecoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }

  export type $PrecoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preco"
    objects: {
      servico: Prisma.$ServicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nomeservico: string
      precificacao: number
      servicoId: number
      criadoEm: Date
      atualizadoEm: Date
    }, ExtArgs["result"]["preco"]>
    composites: {}
  }

  type PrecoGetPayload<S extends boolean | null | undefined | PrecoDefaultArgs> = $Result.GetResult<Prisma.$PrecoPayload, S>

  type PrecoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PrecoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PrecoCountAggregateInputType | true
    }

  export interface PrecoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preco'], meta: { name: 'Preco' } }
    /**
     * Find zero or one Preco that matches the filter.
     * @param {PrecoFindUniqueArgs} args - Arguments to find a Preco
     * @example
     * // Get one Preco
     * const preco = await prisma.preco.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PrecoFindUniqueArgs>(args: SelectSubset<T, PrecoFindUniqueArgs<ExtArgs>>): Prisma__PrecoClient<$Result.GetResult<Prisma.$PrecoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preco that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PrecoFindUniqueOrThrowArgs} args - Arguments to find a Preco
     * @example
     * // Get one Preco
     * const preco = await prisma.preco.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PrecoFindUniqueOrThrowArgs>(args: SelectSubset<T, PrecoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PrecoClient<$Result.GetResult<Prisma.$PrecoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preco that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecoFindFirstArgs} args - Arguments to find a Preco
     * @example
     * // Get one Preco
     * const preco = await prisma.preco.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PrecoFindFirstArgs>(args?: SelectSubset<T, PrecoFindFirstArgs<ExtArgs>>): Prisma__PrecoClient<$Result.GetResult<Prisma.$PrecoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preco that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecoFindFirstOrThrowArgs} args - Arguments to find a Preco
     * @example
     * // Get one Preco
     * const preco = await prisma.preco.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PrecoFindFirstOrThrowArgs>(args?: SelectSubset<T, PrecoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PrecoClient<$Result.GetResult<Prisma.$PrecoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Precos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Precos
     * const precos = await prisma.preco.findMany()
     * 
     * // Get first 10 Precos
     * const precos = await prisma.preco.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const precoWithIdOnly = await prisma.preco.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PrecoFindManyArgs>(args?: SelectSubset<T, PrecoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preco.
     * @param {PrecoCreateArgs} args - Arguments to create a Preco.
     * @example
     * // Create one Preco
     * const Preco = await prisma.preco.create({
     *   data: {
     *     // ... data to create a Preco
     *   }
     * })
     * 
     */
    create<T extends PrecoCreateArgs>(args: SelectSubset<T, PrecoCreateArgs<ExtArgs>>): Prisma__PrecoClient<$Result.GetResult<Prisma.$PrecoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Precos.
     * @param {PrecoCreateManyArgs} args - Arguments to create many Precos.
     * @example
     * // Create many Precos
     * const preco = await prisma.preco.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PrecoCreateManyArgs>(args?: SelectSubset<T, PrecoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Precos and returns the data saved in the database.
     * @param {PrecoCreateManyAndReturnArgs} args - Arguments to create many Precos.
     * @example
     * // Create many Precos
     * const preco = await prisma.preco.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Precos and only return the `id`
     * const precoWithIdOnly = await prisma.preco.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PrecoCreateManyAndReturnArgs>(args?: SelectSubset<T, PrecoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preco.
     * @param {PrecoDeleteArgs} args - Arguments to delete one Preco.
     * @example
     * // Delete one Preco
     * const Preco = await prisma.preco.delete({
     *   where: {
     *     // ... filter to delete one Preco
     *   }
     * })
     * 
     */
    delete<T extends PrecoDeleteArgs>(args: SelectSubset<T, PrecoDeleteArgs<ExtArgs>>): Prisma__PrecoClient<$Result.GetResult<Prisma.$PrecoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preco.
     * @param {PrecoUpdateArgs} args - Arguments to update one Preco.
     * @example
     * // Update one Preco
     * const preco = await prisma.preco.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PrecoUpdateArgs>(args: SelectSubset<T, PrecoUpdateArgs<ExtArgs>>): Prisma__PrecoClient<$Result.GetResult<Prisma.$PrecoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Precos.
     * @param {PrecoDeleteManyArgs} args - Arguments to filter Precos to delete.
     * @example
     * // Delete a few Precos
     * const { count } = await prisma.preco.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PrecoDeleteManyArgs>(args?: SelectSubset<T, PrecoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Precos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Precos
     * const preco = await prisma.preco.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PrecoUpdateManyArgs>(args: SelectSubset<T, PrecoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Precos and returns the data updated in the database.
     * @param {PrecoUpdateManyAndReturnArgs} args - Arguments to update many Precos.
     * @example
     * // Update many Precos
     * const preco = await prisma.preco.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Precos and only return the `id`
     * const precoWithIdOnly = await prisma.preco.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PrecoUpdateManyAndReturnArgs>(args: SelectSubset<T, PrecoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PrecoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preco.
     * @param {PrecoUpsertArgs} args - Arguments to update or create a Preco.
     * @example
     * // Update or create a Preco
     * const preco = await prisma.preco.upsert({
     *   create: {
     *     // ... data to create a Preco
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preco we want to update
     *   }
     * })
     */
    upsert<T extends PrecoUpsertArgs>(args: SelectSubset<T, PrecoUpsertArgs<ExtArgs>>): Prisma__PrecoClient<$Result.GetResult<Prisma.$PrecoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Precos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecoCountArgs} args - Arguments to filter Precos to count.
     * @example
     * // Count the number of Precos
     * const count = await prisma.preco.count({
     *   where: {
     *     // ... the filter for the Precos we want to count
     *   }
     * })
    **/
    count<T extends PrecoCountArgs>(
      args?: Subset<T, PrecoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PrecoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PrecoAggregateArgs>(args: Subset<T, PrecoAggregateArgs>): Prisma.PrismaPromise<GetPrecoAggregateType<T>>

    /**
     * Group by Preco.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PrecoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PrecoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PrecoGroupByArgs['orderBy'] }
        : { orderBy?: PrecoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PrecoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPrecoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preco model
   */
  readonly fields: PrecoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preco.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PrecoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Preco model
   */
  interface PrecoFieldRefs {
    readonly id: FieldRef<"Preco", 'Int'>
    readonly nomeservico: FieldRef<"Preco", 'String'>
    readonly precificacao: FieldRef<"Preco", 'Float'>
    readonly servicoId: FieldRef<"Preco", 'Int'>
    readonly criadoEm: FieldRef<"Preco", 'DateTime'>
    readonly atualizadoEm: FieldRef<"Preco", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Preco findUnique
   */
  export type PrecoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoInclude<ExtArgs> | null
    /**
     * Filter, which Preco to fetch.
     */
    where: PrecoWhereUniqueInput
  }

  /**
   * Preco findUniqueOrThrow
   */
  export type PrecoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoInclude<ExtArgs> | null
    /**
     * Filter, which Preco to fetch.
     */
    where: PrecoWhereUniqueInput
  }

  /**
   * Preco findFirst
   */
  export type PrecoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoInclude<ExtArgs> | null
    /**
     * Filter, which Preco to fetch.
     */
    where?: PrecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Precos to fetch.
     */
    orderBy?: PrecoOrderByWithRelationInput | PrecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Precos.
     */
    cursor?: PrecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Precos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Precos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Precos.
     */
    distinct?: PrecoScalarFieldEnum | PrecoScalarFieldEnum[]
  }

  /**
   * Preco findFirstOrThrow
   */
  export type PrecoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoInclude<ExtArgs> | null
    /**
     * Filter, which Preco to fetch.
     */
    where?: PrecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Precos to fetch.
     */
    orderBy?: PrecoOrderByWithRelationInput | PrecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Precos.
     */
    cursor?: PrecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Precos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Precos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Precos.
     */
    distinct?: PrecoScalarFieldEnum | PrecoScalarFieldEnum[]
  }

  /**
   * Preco findMany
   */
  export type PrecoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoInclude<ExtArgs> | null
    /**
     * Filter, which Precos to fetch.
     */
    where?: PrecoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Precos to fetch.
     */
    orderBy?: PrecoOrderByWithRelationInput | PrecoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Precos.
     */
    cursor?: PrecoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Precos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Precos.
     */
    skip?: number
    distinct?: PrecoScalarFieldEnum | PrecoScalarFieldEnum[]
  }

  /**
   * Preco create
   */
  export type PrecoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoInclude<ExtArgs> | null
    /**
     * The data needed to create a Preco.
     */
    data: XOR<PrecoCreateInput, PrecoUncheckedCreateInput>
  }

  /**
   * Preco createMany
   */
  export type PrecoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Precos.
     */
    data: PrecoCreateManyInput | PrecoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preco createManyAndReturn
   */
  export type PrecoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * The data used to create many Precos.
     */
    data: PrecoCreateManyInput | PrecoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preco update
   */
  export type PrecoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoInclude<ExtArgs> | null
    /**
     * The data needed to update a Preco.
     */
    data: XOR<PrecoUpdateInput, PrecoUncheckedUpdateInput>
    /**
     * Choose, which Preco to update.
     */
    where: PrecoWhereUniqueInput
  }

  /**
   * Preco updateMany
   */
  export type PrecoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Precos.
     */
    data: XOR<PrecoUpdateManyMutationInput, PrecoUncheckedUpdateManyInput>
    /**
     * Filter which Precos to update
     */
    where?: PrecoWhereInput
    /**
     * Limit how many Precos to update.
     */
    limit?: number
  }

  /**
   * Preco updateManyAndReturn
   */
  export type PrecoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * The data used to update Precos.
     */
    data: XOR<PrecoUpdateManyMutationInput, PrecoUncheckedUpdateManyInput>
    /**
     * Filter which Precos to update
     */
    where?: PrecoWhereInput
    /**
     * Limit how many Precos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preco upsert
   */
  export type PrecoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoInclude<ExtArgs> | null
    /**
     * The filter to search for the Preco to update in case it exists.
     */
    where: PrecoWhereUniqueInput
    /**
     * In case the Preco found by the `where` argument doesn't exist, create a new Preco with this data.
     */
    create: XOR<PrecoCreateInput, PrecoUncheckedCreateInput>
    /**
     * In case the Preco was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PrecoUpdateInput, PrecoUncheckedUpdateInput>
  }

  /**
   * Preco delete
   */
  export type PrecoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoInclude<ExtArgs> | null
    /**
     * Filter which Preco to delete.
     */
    where: PrecoWhereUniqueInput
  }

  /**
   * Preco deleteMany
   */
  export type PrecoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Precos to delete
     */
    where?: PrecoWhereInput
    /**
     * Limit how many Precos to delete.
     */
    limit?: number
  }

  /**
   * Preco without action
   */
  export type PrecoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preco
     */
    select?: PrecoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preco
     */
    omit?: PrecoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PrecoInclude<ExtArgs> | null
  }


  /**
   * Model ResetToken
   */

  export type AggregateResetToken = {
    _count: ResetTokenCountAggregateOutputType | null
    _avg: ResetTokenAvgAggregateOutputType | null
    _sum: ResetTokenSumAggregateOutputType | null
    _min: ResetTokenMinAggregateOutputType | null
    _max: ResetTokenMaxAggregateOutputType | null
  }

  export type ResetTokenAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type ResetTokenSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
  }

  export type ResetTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
    usuarioId: number | null
  }

  export type ResetTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    createdAt: Date | null
    expiresAt: Date | null
    usuarioId: number | null
  }

  export type ResetTokenCountAggregateOutputType = {
    id: number
    token: number
    createdAt: number
    expiresAt: number
    usuarioId: number
    _all: number
  }


  export type ResetTokenAvgAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type ResetTokenSumAggregateInputType = {
    id?: true
    usuarioId?: true
  }

  export type ResetTokenMinAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    usuarioId?: true
  }

  export type ResetTokenMaxAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    usuarioId?: true
  }

  export type ResetTokenCountAggregateInputType = {
    id?: true
    token?: true
    createdAt?: true
    expiresAt?: true
    usuarioId?: true
    _all?: true
  }

  export type ResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResetToken to aggregate.
     */
    where?: ResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetTokens to fetch.
     */
    orderBy?: ResetTokenOrderByWithRelationInput | ResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ResetTokens
    **/
    _count?: true | ResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResetTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResetTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResetTokenMaxAggregateInputType
  }

  export type GetResetTokenAggregateType<T extends ResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResetToken[P]>
      : GetScalarType<T[P], AggregateResetToken[P]>
  }




  export type ResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResetTokenWhereInput
    orderBy?: ResetTokenOrderByWithAggregationInput | ResetTokenOrderByWithAggregationInput[]
    by: ResetTokenScalarFieldEnum[] | ResetTokenScalarFieldEnum
    having?: ResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResetTokenCountAggregateInputType | true
    _avg?: ResetTokenAvgAggregateInputType
    _sum?: ResetTokenSumAggregateInputType
    _min?: ResetTokenMinAggregateInputType
    _max?: ResetTokenMaxAggregateInputType
  }

  export type ResetTokenGroupByOutputType = {
    id: number
    token: string
    createdAt: Date
    expiresAt: Date
    usuarioId: number
    _count: ResetTokenCountAggregateOutputType | null
    _avg: ResetTokenAvgAggregateOutputType | null
    _sum: ResetTokenSumAggregateOutputType | null
    _min: ResetTokenMinAggregateOutputType | null
    _max: ResetTokenMaxAggregateOutputType | null
  }

  type GetResetTokenGroupByPayload<T extends ResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], ResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type ResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetToken"]>

  export type ResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetToken"]>

  export type ResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    usuarioId?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resetToken"]>

  export type ResetTokenSelectScalar = {
    id?: boolean
    token?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    usuarioId?: boolean
  }

  export type ResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "createdAt" | "expiresAt" | "usuarioId", ExtArgs["result"]["resetToken"]>
  export type ResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type ResetTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $ResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ResetToken"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      createdAt: Date
      expiresAt: Date
      usuarioId: number
    }, ExtArgs["result"]["resetToken"]>
    composites: {}
  }

  type ResetTokenGetPayload<S extends boolean | null | undefined | ResetTokenDefaultArgs> = $Result.GetResult<Prisma.$ResetTokenPayload, S>

  type ResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResetTokenCountAggregateInputType | true
    }

  export interface ResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ResetToken'], meta: { name: 'ResetToken' } }
    /**
     * Find zero or one ResetToken that matches the filter.
     * @param {ResetTokenFindUniqueArgs} args - Arguments to find a ResetToken
     * @example
     * // Get one ResetToken
     * const resetToken = await prisma.resetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResetTokenFindUniqueArgs>(args: SelectSubset<T, ResetTokenFindUniqueArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResetTokenFindUniqueOrThrowArgs} args - Arguments to find a ResetToken
     * @example
     * // Get one ResetToken
     * const resetToken = await prisma.resetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, ResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenFindFirstArgs} args - Arguments to find a ResetToken
     * @example
     * // Get one ResetToken
     * const resetToken = await prisma.resetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResetTokenFindFirstArgs>(args?: SelectSubset<T, ResetTokenFindFirstArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenFindFirstOrThrowArgs} args - Arguments to find a ResetToken
     * @example
     * // Get one ResetToken
     * const resetToken = await prisma.resetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, ResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ResetTokens
     * const resetTokens = await prisma.resetToken.findMany()
     * 
     * // Get first 10 ResetTokens
     * const resetTokens = await prisma.resetToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resetTokenWithIdOnly = await prisma.resetToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResetTokenFindManyArgs>(args?: SelectSubset<T, ResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ResetToken.
     * @param {ResetTokenCreateArgs} args - Arguments to create a ResetToken.
     * @example
     * // Create one ResetToken
     * const ResetToken = await prisma.resetToken.create({
     *   data: {
     *     // ... data to create a ResetToken
     *   }
     * })
     * 
     */
    create<T extends ResetTokenCreateArgs>(args: SelectSubset<T, ResetTokenCreateArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ResetTokens.
     * @param {ResetTokenCreateManyArgs} args - Arguments to create many ResetTokens.
     * @example
     * // Create many ResetTokens
     * const resetToken = await prisma.resetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResetTokenCreateManyArgs>(args?: SelectSubset<T, ResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ResetTokens and returns the data saved in the database.
     * @param {ResetTokenCreateManyAndReturnArgs} args - Arguments to create many ResetTokens.
     * @example
     * // Create many ResetTokens
     * const resetToken = await prisma.resetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ResetTokens and only return the `id`
     * const resetTokenWithIdOnly = await prisma.resetToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, ResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ResetToken.
     * @param {ResetTokenDeleteArgs} args - Arguments to delete one ResetToken.
     * @example
     * // Delete one ResetToken
     * const ResetToken = await prisma.resetToken.delete({
     *   where: {
     *     // ... filter to delete one ResetToken
     *   }
     * })
     * 
     */
    delete<T extends ResetTokenDeleteArgs>(args: SelectSubset<T, ResetTokenDeleteArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ResetToken.
     * @param {ResetTokenUpdateArgs} args - Arguments to update one ResetToken.
     * @example
     * // Update one ResetToken
     * const resetToken = await prisma.resetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResetTokenUpdateArgs>(args: SelectSubset<T, ResetTokenUpdateArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ResetTokens.
     * @param {ResetTokenDeleteManyArgs} args - Arguments to filter ResetTokens to delete.
     * @example
     * // Delete a few ResetTokens
     * const { count } = await prisma.resetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResetTokenDeleteManyArgs>(args?: SelectSubset<T, ResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ResetTokens
     * const resetToken = await prisma.resetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResetTokenUpdateManyArgs>(args: SelectSubset<T, ResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ResetTokens and returns the data updated in the database.
     * @param {ResetTokenUpdateManyAndReturnArgs} args - Arguments to update many ResetTokens.
     * @example
     * // Update many ResetTokens
     * const resetToken = await prisma.resetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ResetTokens and only return the `id`
     * const resetTokenWithIdOnly = await prisma.resetToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, ResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ResetToken.
     * @param {ResetTokenUpsertArgs} args - Arguments to update or create a ResetToken.
     * @example
     * // Update or create a ResetToken
     * const resetToken = await prisma.resetToken.upsert({
     *   create: {
     *     // ... data to create a ResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ResetToken we want to update
     *   }
     * })
     */
    upsert<T extends ResetTokenUpsertArgs>(args: SelectSubset<T, ResetTokenUpsertArgs<ExtArgs>>): Prisma__ResetTokenClient<$Result.GetResult<Prisma.$ResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenCountArgs} args - Arguments to filter ResetTokens to count.
     * @example
     * // Count the number of ResetTokens
     * const count = await prisma.resetToken.count({
     *   where: {
     *     // ... the filter for the ResetTokens we want to count
     *   }
     * })
    **/
    count<T extends ResetTokenCountArgs>(
      args?: Subset<T, ResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResetTokenAggregateArgs>(args: Subset<T, ResetTokenAggregateArgs>): Prisma.PrismaPromise<GetResetTokenAggregateType<T>>

    /**
     * Group by ResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: ResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ResetToken model
   */
  readonly fields: ResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ResetToken model
   */
  interface ResetTokenFieldRefs {
    readonly id: FieldRef<"ResetToken", 'Int'>
    readonly token: FieldRef<"ResetToken", 'String'>
    readonly createdAt: FieldRef<"ResetToken", 'DateTime'>
    readonly expiresAt: FieldRef<"ResetToken", 'DateTime'>
    readonly usuarioId: FieldRef<"ResetToken", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ResetToken findUnique
   */
  export type ResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetToken to fetch.
     */
    where: ResetTokenWhereUniqueInput
  }

  /**
   * ResetToken findUniqueOrThrow
   */
  export type ResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetToken to fetch.
     */
    where: ResetTokenWhereUniqueInput
  }

  /**
   * ResetToken findFirst
   */
  export type ResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetToken to fetch.
     */
    where?: ResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetTokens to fetch.
     */
    orderBy?: ResetTokenOrderByWithRelationInput | ResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetTokens.
     */
    cursor?: ResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetTokens.
     */
    distinct?: ResetTokenScalarFieldEnum | ResetTokenScalarFieldEnum[]
  }

  /**
   * ResetToken findFirstOrThrow
   */
  export type ResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetToken to fetch.
     */
    where?: ResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetTokens to fetch.
     */
    orderBy?: ResetTokenOrderByWithRelationInput | ResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ResetTokens.
     */
    cursor?: ResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ResetTokens.
     */
    distinct?: ResetTokenScalarFieldEnum | ResetTokenScalarFieldEnum[]
  }

  /**
   * ResetToken findMany
   */
  export type ResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which ResetTokens to fetch.
     */
    where?: ResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ResetTokens to fetch.
     */
    orderBy?: ResetTokenOrderByWithRelationInput | ResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ResetTokens.
     */
    cursor?: ResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ResetTokens.
     */
    skip?: number
    distinct?: ResetTokenScalarFieldEnum | ResetTokenScalarFieldEnum[]
  }

  /**
   * ResetToken create
   */
  export type ResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a ResetToken.
     */
    data: XOR<ResetTokenCreateInput, ResetTokenUncheckedCreateInput>
  }

  /**
   * ResetToken createMany
   */
  export type ResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ResetTokens.
     */
    data: ResetTokenCreateManyInput | ResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ResetToken createManyAndReturn
   */
  export type ResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many ResetTokens.
     */
    data: ResetTokenCreateManyInput | ResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResetToken update
   */
  export type ResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a ResetToken.
     */
    data: XOR<ResetTokenUpdateInput, ResetTokenUncheckedUpdateInput>
    /**
     * Choose, which ResetToken to update.
     */
    where: ResetTokenWhereUniqueInput
  }

  /**
   * ResetToken updateMany
   */
  export type ResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ResetTokens.
     */
    data: XOR<ResetTokenUpdateManyMutationInput, ResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which ResetTokens to update
     */
    where?: ResetTokenWhereInput
    /**
     * Limit how many ResetTokens to update.
     */
    limit?: number
  }

  /**
   * ResetToken updateManyAndReturn
   */
  export type ResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update ResetTokens.
     */
    data: XOR<ResetTokenUpdateManyMutationInput, ResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which ResetTokens to update
     */
    where?: ResetTokenWhereInput
    /**
     * Limit how many ResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ResetToken upsert
   */
  export type ResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the ResetToken to update in case it exists.
     */
    where: ResetTokenWhereUniqueInput
    /**
     * In case the ResetToken found by the `where` argument doesn't exist, create a new ResetToken with this data.
     */
    create: XOR<ResetTokenCreateInput, ResetTokenUncheckedCreateInput>
    /**
     * In case the ResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResetTokenUpdateInput, ResetTokenUncheckedUpdateInput>
  }

  /**
   * ResetToken delete
   */
  export type ResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
    /**
     * Filter which ResetToken to delete.
     */
    where: ResetTokenWhereUniqueInput
  }

  /**
   * ResetToken deleteMany
   */
  export type ResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ResetTokens to delete
     */
    where?: ResetTokenWhereInput
    /**
     * Limit how many ResetTokens to delete.
     */
    limit?: number
  }

  /**
   * ResetToken without action
   */
  export type ResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ResetToken
     */
    select?: ResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ResetToken
     */
    omit?: ResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResetTokenInclude<ExtArgs> | null
  }


  /**
   * Model ServicoRealizado
   */

  export type AggregateServicoRealizado = {
    _count: ServicoRealizadoCountAggregateOutputType | null
    _avg: ServicoRealizadoAvgAggregateOutputType | null
    _sum: ServicoRealizadoSumAggregateOutputType | null
    _min: ServicoRealizadoMinAggregateOutputType | null
    _max: ServicoRealizadoMaxAggregateOutputType | null
  }

  export type ServicoRealizadoAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    servicoId: number | null
  }

  export type ServicoRealizadoSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    servicoId: number | null
  }

  export type ServicoRealizadoMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    servicoId: number | null
    confirmado: boolean | null
    respondidoEm: Date | null
    realizadoEm: Date | null
  }

  export type ServicoRealizadoMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    servicoId: number | null
    confirmado: boolean | null
    respondidoEm: Date | null
    realizadoEm: Date | null
  }

  export type ServicoRealizadoCountAggregateOutputType = {
    id: number
    usuarioId: number
    servicoId: number
    confirmado: number
    respondidoEm: number
    realizadoEm: number
    _all: number
  }


  export type ServicoRealizadoAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    servicoId?: true
  }

  export type ServicoRealizadoSumAggregateInputType = {
    id?: true
    usuarioId?: true
    servicoId?: true
  }

  export type ServicoRealizadoMinAggregateInputType = {
    id?: true
    usuarioId?: true
    servicoId?: true
    confirmado?: true
    respondidoEm?: true
    realizadoEm?: true
  }

  export type ServicoRealizadoMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    servicoId?: true
    confirmado?: true
    respondidoEm?: true
    realizadoEm?: true
  }

  export type ServicoRealizadoCountAggregateInputType = {
    id?: true
    usuarioId?: true
    servicoId?: true
    confirmado?: true
    respondidoEm?: true
    realizadoEm?: true
    _all?: true
  }

  export type ServicoRealizadoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicoRealizado to aggregate.
     */
    where?: ServicoRealizadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicoRealizados to fetch.
     */
    orderBy?: ServicoRealizadoOrderByWithRelationInput | ServicoRealizadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicoRealizadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicoRealizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicoRealizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicoRealizados
    **/
    _count?: true | ServicoRealizadoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicoRealizadoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicoRealizadoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicoRealizadoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicoRealizadoMaxAggregateInputType
  }

  export type GetServicoRealizadoAggregateType<T extends ServicoRealizadoAggregateArgs> = {
        [P in keyof T & keyof AggregateServicoRealizado]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicoRealizado[P]>
      : GetScalarType<T[P], AggregateServicoRealizado[P]>
  }




  export type ServicoRealizadoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicoRealizadoWhereInput
    orderBy?: ServicoRealizadoOrderByWithAggregationInput | ServicoRealizadoOrderByWithAggregationInput[]
    by: ServicoRealizadoScalarFieldEnum[] | ServicoRealizadoScalarFieldEnum
    having?: ServicoRealizadoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicoRealizadoCountAggregateInputType | true
    _avg?: ServicoRealizadoAvgAggregateInputType
    _sum?: ServicoRealizadoSumAggregateInputType
    _min?: ServicoRealizadoMinAggregateInputType
    _max?: ServicoRealizadoMaxAggregateInputType
  }

  export type ServicoRealizadoGroupByOutputType = {
    id: number
    usuarioId: number
    servicoId: number
    confirmado: boolean | null
    respondidoEm: Date | null
    realizadoEm: Date
    _count: ServicoRealizadoCountAggregateOutputType | null
    _avg: ServicoRealizadoAvgAggregateOutputType | null
    _sum: ServicoRealizadoSumAggregateOutputType | null
    _min: ServicoRealizadoMinAggregateOutputType | null
    _max: ServicoRealizadoMaxAggregateOutputType | null
  }

  type GetServicoRealizadoGroupByPayload<T extends ServicoRealizadoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicoRealizadoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicoRealizadoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicoRealizadoGroupByOutputType[P]>
            : GetScalarType<T[P], ServicoRealizadoGroupByOutputType[P]>
        }
      >
    >


  export type ServicoRealizadoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    servicoId?: boolean
    confirmado?: boolean
    respondidoEm?: boolean
    realizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicoRealizado"]>

  export type ServicoRealizadoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    servicoId?: boolean
    confirmado?: boolean
    respondidoEm?: boolean
    realizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicoRealizado"]>

  export type ServicoRealizadoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    servicoId?: boolean
    confirmado?: boolean
    respondidoEm?: boolean
    realizadoEm?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicoRealizado"]>

  export type ServicoRealizadoSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    servicoId?: boolean
    confirmado?: boolean
    respondidoEm?: boolean
    realizadoEm?: boolean
  }

  export type ServicoRealizadoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "servicoId" | "confirmado" | "respondidoEm" | "realizadoEm", ExtArgs["result"]["servicoRealizado"]>
  export type ServicoRealizadoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type ServicoRealizadoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type ServicoRealizadoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }

  export type $ServicoRealizadoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicoRealizado"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      servico: Prisma.$ServicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      servicoId: number
      confirmado: boolean | null
      respondidoEm: Date | null
      realizadoEm: Date
    }, ExtArgs["result"]["servicoRealizado"]>
    composites: {}
  }

  type ServicoRealizadoGetPayload<S extends boolean | null | undefined | ServicoRealizadoDefaultArgs> = $Result.GetResult<Prisma.$ServicoRealizadoPayload, S>

  type ServicoRealizadoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicoRealizadoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicoRealizadoCountAggregateInputType | true
    }

  export interface ServicoRealizadoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicoRealizado'], meta: { name: 'ServicoRealizado' } }
    /**
     * Find zero or one ServicoRealizado that matches the filter.
     * @param {ServicoRealizadoFindUniqueArgs} args - Arguments to find a ServicoRealizado
     * @example
     * // Get one ServicoRealizado
     * const servicoRealizado = await prisma.servicoRealizado.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicoRealizadoFindUniqueArgs>(args: SelectSubset<T, ServicoRealizadoFindUniqueArgs<ExtArgs>>): Prisma__ServicoRealizadoClient<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServicoRealizado that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicoRealizadoFindUniqueOrThrowArgs} args - Arguments to find a ServicoRealizado
     * @example
     * // Get one ServicoRealizado
     * const servicoRealizado = await prisma.servicoRealizado.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicoRealizadoFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicoRealizadoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicoRealizadoClient<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicoRealizado that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoRealizadoFindFirstArgs} args - Arguments to find a ServicoRealizado
     * @example
     * // Get one ServicoRealizado
     * const servicoRealizado = await prisma.servicoRealizado.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicoRealizadoFindFirstArgs>(args?: SelectSubset<T, ServicoRealizadoFindFirstArgs<ExtArgs>>): Prisma__ServicoRealizadoClient<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicoRealizado that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoRealizadoFindFirstOrThrowArgs} args - Arguments to find a ServicoRealizado
     * @example
     * // Get one ServicoRealizado
     * const servicoRealizado = await prisma.servicoRealizado.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicoRealizadoFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicoRealizadoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicoRealizadoClient<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServicoRealizados that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoRealizadoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicoRealizados
     * const servicoRealizados = await prisma.servicoRealizado.findMany()
     * 
     * // Get first 10 ServicoRealizados
     * const servicoRealizados = await prisma.servicoRealizado.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicoRealizadoWithIdOnly = await prisma.servicoRealizado.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicoRealizadoFindManyArgs>(args?: SelectSubset<T, ServicoRealizadoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServicoRealizado.
     * @param {ServicoRealizadoCreateArgs} args - Arguments to create a ServicoRealizado.
     * @example
     * // Create one ServicoRealizado
     * const ServicoRealizado = await prisma.servicoRealizado.create({
     *   data: {
     *     // ... data to create a ServicoRealizado
     *   }
     * })
     * 
     */
    create<T extends ServicoRealizadoCreateArgs>(args: SelectSubset<T, ServicoRealizadoCreateArgs<ExtArgs>>): Prisma__ServicoRealizadoClient<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServicoRealizados.
     * @param {ServicoRealizadoCreateManyArgs} args - Arguments to create many ServicoRealizados.
     * @example
     * // Create many ServicoRealizados
     * const servicoRealizado = await prisma.servicoRealizado.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicoRealizadoCreateManyArgs>(args?: SelectSubset<T, ServicoRealizadoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServicoRealizados and returns the data saved in the database.
     * @param {ServicoRealizadoCreateManyAndReturnArgs} args - Arguments to create many ServicoRealizados.
     * @example
     * // Create many ServicoRealizados
     * const servicoRealizado = await prisma.servicoRealizado.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServicoRealizados and only return the `id`
     * const servicoRealizadoWithIdOnly = await prisma.servicoRealizado.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicoRealizadoCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicoRealizadoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServicoRealizado.
     * @param {ServicoRealizadoDeleteArgs} args - Arguments to delete one ServicoRealizado.
     * @example
     * // Delete one ServicoRealizado
     * const ServicoRealizado = await prisma.servicoRealizado.delete({
     *   where: {
     *     // ... filter to delete one ServicoRealizado
     *   }
     * })
     * 
     */
    delete<T extends ServicoRealizadoDeleteArgs>(args: SelectSubset<T, ServicoRealizadoDeleteArgs<ExtArgs>>): Prisma__ServicoRealizadoClient<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServicoRealizado.
     * @param {ServicoRealizadoUpdateArgs} args - Arguments to update one ServicoRealizado.
     * @example
     * // Update one ServicoRealizado
     * const servicoRealizado = await prisma.servicoRealizado.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicoRealizadoUpdateArgs>(args: SelectSubset<T, ServicoRealizadoUpdateArgs<ExtArgs>>): Prisma__ServicoRealizadoClient<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServicoRealizados.
     * @param {ServicoRealizadoDeleteManyArgs} args - Arguments to filter ServicoRealizados to delete.
     * @example
     * // Delete a few ServicoRealizados
     * const { count } = await prisma.servicoRealizado.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicoRealizadoDeleteManyArgs>(args?: SelectSubset<T, ServicoRealizadoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicoRealizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoRealizadoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicoRealizados
     * const servicoRealizado = await prisma.servicoRealizado.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicoRealizadoUpdateManyArgs>(args: SelectSubset<T, ServicoRealizadoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicoRealizados and returns the data updated in the database.
     * @param {ServicoRealizadoUpdateManyAndReturnArgs} args - Arguments to update many ServicoRealizados.
     * @example
     * // Update many ServicoRealizados
     * const servicoRealizado = await prisma.servicoRealizado.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServicoRealizados and only return the `id`
     * const servicoRealizadoWithIdOnly = await prisma.servicoRealizado.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicoRealizadoUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicoRealizadoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServicoRealizado.
     * @param {ServicoRealizadoUpsertArgs} args - Arguments to update or create a ServicoRealizado.
     * @example
     * // Update or create a ServicoRealizado
     * const servicoRealizado = await prisma.servicoRealizado.upsert({
     *   create: {
     *     // ... data to create a ServicoRealizado
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicoRealizado we want to update
     *   }
     * })
     */
    upsert<T extends ServicoRealizadoUpsertArgs>(args: SelectSubset<T, ServicoRealizadoUpsertArgs<ExtArgs>>): Prisma__ServicoRealizadoClient<$Result.GetResult<Prisma.$ServicoRealizadoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServicoRealizados.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoRealizadoCountArgs} args - Arguments to filter ServicoRealizados to count.
     * @example
     * // Count the number of ServicoRealizados
     * const count = await prisma.servicoRealizado.count({
     *   where: {
     *     // ... the filter for the ServicoRealizados we want to count
     *   }
     * })
    **/
    count<T extends ServicoRealizadoCountArgs>(
      args?: Subset<T, ServicoRealizadoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicoRealizadoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicoRealizado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoRealizadoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicoRealizadoAggregateArgs>(args: Subset<T, ServicoRealizadoAggregateArgs>): Prisma.PrismaPromise<GetServicoRealizadoAggregateType<T>>

    /**
     * Group by ServicoRealizado.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicoRealizadoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicoRealizadoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicoRealizadoGroupByArgs['orderBy'] }
        : { orderBy?: ServicoRealizadoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicoRealizadoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicoRealizadoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicoRealizado model
   */
  readonly fields: ServicoRealizadoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicoRealizado.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicoRealizadoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServicoRealizado model
   */
  interface ServicoRealizadoFieldRefs {
    readonly id: FieldRef<"ServicoRealizado", 'Int'>
    readonly usuarioId: FieldRef<"ServicoRealizado", 'Int'>
    readonly servicoId: FieldRef<"ServicoRealizado", 'Int'>
    readonly confirmado: FieldRef<"ServicoRealizado", 'Boolean'>
    readonly respondidoEm: FieldRef<"ServicoRealizado", 'DateTime'>
    readonly realizadoEm: FieldRef<"ServicoRealizado", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ServicoRealizado findUnique
   */
  export type ServicoRealizadoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoInclude<ExtArgs> | null
    /**
     * Filter, which ServicoRealizado to fetch.
     */
    where: ServicoRealizadoWhereUniqueInput
  }

  /**
   * ServicoRealizado findUniqueOrThrow
   */
  export type ServicoRealizadoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoInclude<ExtArgs> | null
    /**
     * Filter, which ServicoRealizado to fetch.
     */
    where: ServicoRealizadoWhereUniqueInput
  }

  /**
   * ServicoRealizado findFirst
   */
  export type ServicoRealizadoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoInclude<ExtArgs> | null
    /**
     * Filter, which ServicoRealizado to fetch.
     */
    where?: ServicoRealizadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicoRealizados to fetch.
     */
    orderBy?: ServicoRealizadoOrderByWithRelationInput | ServicoRealizadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicoRealizados.
     */
    cursor?: ServicoRealizadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicoRealizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicoRealizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicoRealizados.
     */
    distinct?: ServicoRealizadoScalarFieldEnum | ServicoRealizadoScalarFieldEnum[]
  }

  /**
   * ServicoRealizado findFirstOrThrow
   */
  export type ServicoRealizadoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoInclude<ExtArgs> | null
    /**
     * Filter, which ServicoRealizado to fetch.
     */
    where?: ServicoRealizadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicoRealizados to fetch.
     */
    orderBy?: ServicoRealizadoOrderByWithRelationInput | ServicoRealizadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicoRealizados.
     */
    cursor?: ServicoRealizadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicoRealizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicoRealizados.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicoRealizados.
     */
    distinct?: ServicoRealizadoScalarFieldEnum | ServicoRealizadoScalarFieldEnum[]
  }

  /**
   * ServicoRealizado findMany
   */
  export type ServicoRealizadoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoInclude<ExtArgs> | null
    /**
     * Filter, which ServicoRealizados to fetch.
     */
    where?: ServicoRealizadoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicoRealizados to fetch.
     */
    orderBy?: ServicoRealizadoOrderByWithRelationInput | ServicoRealizadoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicoRealizados.
     */
    cursor?: ServicoRealizadoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicoRealizados from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicoRealizados.
     */
    skip?: number
    distinct?: ServicoRealizadoScalarFieldEnum | ServicoRealizadoScalarFieldEnum[]
  }

  /**
   * ServicoRealizado create
   */
  export type ServicoRealizadoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoInclude<ExtArgs> | null
    /**
     * The data needed to create a ServicoRealizado.
     */
    data: XOR<ServicoRealizadoCreateInput, ServicoRealizadoUncheckedCreateInput>
  }

  /**
   * ServicoRealizado createMany
   */
  export type ServicoRealizadoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicoRealizados.
     */
    data: ServicoRealizadoCreateManyInput | ServicoRealizadoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServicoRealizado createManyAndReturn
   */
  export type ServicoRealizadoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * The data used to create many ServicoRealizados.
     */
    data: ServicoRealizadoCreateManyInput | ServicoRealizadoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicoRealizado update
   */
  export type ServicoRealizadoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoInclude<ExtArgs> | null
    /**
     * The data needed to update a ServicoRealizado.
     */
    data: XOR<ServicoRealizadoUpdateInput, ServicoRealizadoUncheckedUpdateInput>
    /**
     * Choose, which ServicoRealizado to update.
     */
    where: ServicoRealizadoWhereUniqueInput
  }

  /**
   * ServicoRealizado updateMany
   */
  export type ServicoRealizadoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicoRealizados.
     */
    data: XOR<ServicoRealizadoUpdateManyMutationInput, ServicoRealizadoUncheckedUpdateManyInput>
    /**
     * Filter which ServicoRealizados to update
     */
    where?: ServicoRealizadoWhereInput
    /**
     * Limit how many ServicoRealizados to update.
     */
    limit?: number
  }

  /**
   * ServicoRealizado updateManyAndReturn
   */
  export type ServicoRealizadoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * The data used to update ServicoRealizados.
     */
    data: XOR<ServicoRealizadoUpdateManyMutationInput, ServicoRealizadoUncheckedUpdateManyInput>
    /**
     * Filter which ServicoRealizados to update
     */
    where?: ServicoRealizadoWhereInput
    /**
     * Limit how many ServicoRealizados to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicoRealizado upsert
   */
  export type ServicoRealizadoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoInclude<ExtArgs> | null
    /**
     * The filter to search for the ServicoRealizado to update in case it exists.
     */
    where: ServicoRealizadoWhereUniqueInput
    /**
     * In case the ServicoRealizado found by the `where` argument doesn't exist, create a new ServicoRealizado with this data.
     */
    create: XOR<ServicoRealizadoCreateInput, ServicoRealizadoUncheckedCreateInput>
    /**
     * In case the ServicoRealizado was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicoRealizadoUpdateInput, ServicoRealizadoUncheckedUpdateInput>
  }

  /**
   * ServicoRealizado delete
   */
  export type ServicoRealizadoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoInclude<ExtArgs> | null
    /**
     * Filter which ServicoRealizado to delete.
     */
    where: ServicoRealizadoWhereUniqueInput
  }

  /**
   * ServicoRealizado deleteMany
   */
  export type ServicoRealizadoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicoRealizados to delete
     */
    where?: ServicoRealizadoWhereInput
    /**
     * Limit how many ServicoRealizados to delete.
     */
    limit?: number
  }

  /**
   * ServicoRealizado without action
   */
  export type ServicoRealizadoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicoRealizado
     */
    select?: ServicoRealizadoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicoRealizado
     */
    omit?: ServicoRealizadoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicoRealizadoInclude<ExtArgs> | null
  }


  /**
   * Model ContatoWhatsapp
   */

  export type AggregateContatoWhatsapp = {
    _count: ContatoWhatsappCountAggregateOutputType | null
    _avg: ContatoWhatsappAvgAggregateOutputType | null
    _sum: ContatoWhatsappSumAggregateOutputType | null
    _min: ContatoWhatsappMinAggregateOutputType | null
    _max: ContatoWhatsappMaxAggregateOutputType | null
  }

  export type ContatoWhatsappAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    servicoId: number | null
  }

  export type ContatoWhatsappSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    servicoId: number | null
  }

  export type ContatoWhatsappMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    servicoId: number | null
    clicadoEm: Date | null
    perguntado: boolean | null
  }

  export type ContatoWhatsappMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    servicoId: number | null
    clicadoEm: Date | null
    perguntado: boolean | null
  }

  export type ContatoWhatsappCountAggregateOutputType = {
    id: number
    usuarioId: number
    servicoId: number
    clicadoEm: number
    perguntado: number
    _all: number
  }


  export type ContatoWhatsappAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    servicoId?: true
  }

  export type ContatoWhatsappSumAggregateInputType = {
    id?: true
    usuarioId?: true
    servicoId?: true
  }

  export type ContatoWhatsappMinAggregateInputType = {
    id?: true
    usuarioId?: true
    servicoId?: true
    clicadoEm?: true
    perguntado?: true
  }

  export type ContatoWhatsappMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    servicoId?: true
    clicadoEm?: true
    perguntado?: true
  }

  export type ContatoWhatsappCountAggregateInputType = {
    id?: true
    usuarioId?: true
    servicoId?: true
    clicadoEm?: true
    perguntado?: true
    _all?: true
  }

  export type ContatoWhatsappAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContatoWhatsapp to aggregate.
     */
    where?: ContatoWhatsappWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContatoWhatsapps to fetch.
     */
    orderBy?: ContatoWhatsappOrderByWithRelationInput | ContatoWhatsappOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContatoWhatsappWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContatoWhatsapps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContatoWhatsapps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContatoWhatsapps
    **/
    _count?: true | ContatoWhatsappCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContatoWhatsappAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContatoWhatsappSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContatoWhatsappMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContatoWhatsappMaxAggregateInputType
  }

  export type GetContatoWhatsappAggregateType<T extends ContatoWhatsappAggregateArgs> = {
        [P in keyof T & keyof AggregateContatoWhatsapp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContatoWhatsapp[P]>
      : GetScalarType<T[P], AggregateContatoWhatsapp[P]>
  }




  export type ContatoWhatsappGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContatoWhatsappWhereInput
    orderBy?: ContatoWhatsappOrderByWithAggregationInput | ContatoWhatsappOrderByWithAggregationInput[]
    by: ContatoWhatsappScalarFieldEnum[] | ContatoWhatsappScalarFieldEnum
    having?: ContatoWhatsappScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContatoWhatsappCountAggregateInputType | true
    _avg?: ContatoWhatsappAvgAggregateInputType
    _sum?: ContatoWhatsappSumAggregateInputType
    _min?: ContatoWhatsappMinAggregateInputType
    _max?: ContatoWhatsappMaxAggregateInputType
  }

  export type ContatoWhatsappGroupByOutputType = {
    id: number
    usuarioId: number
    servicoId: number
    clicadoEm: Date
    perguntado: boolean
    _count: ContatoWhatsappCountAggregateOutputType | null
    _avg: ContatoWhatsappAvgAggregateOutputType | null
    _sum: ContatoWhatsappSumAggregateOutputType | null
    _min: ContatoWhatsappMinAggregateOutputType | null
    _max: ContatoWhatsappMaxAggregateOutputType | null
  }

  type GetContatoWhatsappGroupByPayload<T extends ContatoWhatsappGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContatoWhatsappGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContatoWhatsappGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContatoWhatsappGroupByOutputType[P]>
            : GetScalarType<T[P], ContatoWhatsappGroupByOutputType[P]>
        }
      >
    >


  export type ContatoWhatsappSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    servicoId?: boolean
    clicadoEm?: boolean
    perguntado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contatoWhatsapp"]>

  export type ContatoWhatsappSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    servicoId?: boolean
    clicadoEm?: boolean
    perguntado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contatoWhatsapp"]>

  export type ContatoWhatsappSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    servicoId?: boolean
    clicadoEm?: boolean
    perguntado?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contatoWhatsapp"]>

  export type ContatoWhatsappSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    servicoId?: boolean
    clicadoEm?: boolean
    perguntado?: boolean
  }

  export type ContatoWhatsappOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "servicoId" | "clicadoEm" | "perguntado", ExtArgs["result"]["contatoWhatsapp"]>
  export type ContatoWhatsappInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type ContatoWhatsappIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }
  export type ContatoWhatsappIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
  }

  export type $ContatoWhatsappPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContatoWhatsapp"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      servico: Prisma.$ServicoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      servicoId: number
      clicadoEm: Date
      perguntado: boolean
    }, ExtArgs["result"]["contatoWhatsapp"]>
    composites: {}
  }

  type ContatoWhatsappGetPayload<S extends boolean | null | undefined | ContatoWhatsappDefaultArgs> = $Result.GetResult<Prisma.$ContatoWhatsappPayload, S>

  type ContatoWhatsappCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContatoWhatsappFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContatoWhatsappCountAggregateInputType | true
    }

  export interface ContatoWhatsappDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContatoWhatsapp'], meta: { name: 'ContatoWhatsapp' } }
    /**
     * Find zero or one ContatoWhatsapp that matches the filter.
     * @param {ContatoWhatsappFindUniqueArgs} args - Arguments to find a ContatoWhatsapp
     * @example
     * // Get one ContatoWhatsapp
     * const contatoWhatsapp = await prisma.contatoWhatsapp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContatoWhatsappFindUniqueArgs>(args: SelectSubset<T, ContatoWhatsappFindUniqueArgs<ExtArgs>>): Prisma__ContatoWhatsappClient<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContatoWhatsapp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContatoWhatsappFindUniqueOrThrowArgs} args - Arguments to find a ContatoWhatsapp
     * @example
     * // Get one ContatoWhatsapp
     * const contatoWhatsapp = await prisma.contatoWhatsapp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContatoWhatsappFindUniqueOrThrowArgs>(args: SelectSubset<T, ContatoWhatsappFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContatoWhatsappClient<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContatoWhatsapp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoWhatsappFindFirstArgs} args - Arguments to find a ContatoWhatsapp
     * @example
     * // Get one ContatoWhatsapp
     * const contatoWhatsapp = await prisma.contatoWhatsapp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContatoWhatsappFindFirstArgs>(args?: SelectSubset<T, ContatoWhatsappFindFirstArgs<ExtArgs>>): Prisma__ContatoWhatsappClient<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContatoWhatsapp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoWhatsappFindFirstOrThrowArgs} args - Arguments to find a ContatoWhatsapp
     * @example
     * // Get one ContatoWhatsapp
     * const contatoWhatsapp = await prisma.contatoWhatsapp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContatoWhatsappFindFirstOrThrowArgs>(args?: SelectSubset<T, ContatoWhatsappFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContatoWhatsappClient<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContatoWhatsapps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoWhatsappFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContatoWhatsapps
     * const contatoWhatsapps = await prisma.contatoWhatsapp.findMany()
     * 
     * // Get first 10 ContatoWhatsapps
     * const contatoWhatsapps = await prisma.contatoWhatsapp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contatoWhatsappWithIdOnly = await prisma.contatoWhatsapp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContatoWhatsappFindManyArgs>(args?: SelectSubset<T, ContatoWhatsappFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContatoWhatsapp.
     * @param {ContatoWhatsappCreateArgs} args - Arguments to create a ContatoWhatsapp.
     * @example
     * // Create one ContatoWhatsapp
     * const ContatoWhatsapp = await prisma.contatoWhatsapp.create({
     *   data: {
     *     // ... data to create a ContatoWhatsapp
     *   }
     * })
     * 
     */
    create<T extends ContatoWhatsappCreateArgs>(args: SelectSubset<T, ContatoWhatsappCreateArgs<ExtArgs>>): Prisma__ContatoWhatsappClient<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContatoWhatsapps.
     * @param {ContatoWhatsappCreateManyArgs} args - Arguments to create many ContatoWhatsapps.
     * @example
     * // Create many ContatoWhatsapps
     * const contatoWhatsapp = await prisma.contatoWhatsapp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContatoWhatsappCreateManyArgs>(args?: SelectSubset<T, ContatoWhatsappCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContatoWhatsapps and returns the data saved in the database.
     * @param {ContatoWhatsappCreateManyAndReturnArgs} args - Arguments to create many ContatoWhatsapps.
     * @example
     * // Create many ContatoWhatsapps
     * const contatoWhatsapp = await prisma.contatoWhatsapp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContatoWhatsapps and only return the `id`
     * const contatoWhatsappWithIdOnly = await prisma.contatoWhatsapp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContatoWhatsappCreateManyAndReturnArgs>(args?: SelectSubset<T, ContatoWhatsappCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContatoWhatsapp.
     * @param {ContatoWhatsappDeleteArgs} args - Arguments to delete one ContatoWhatsapp.
     * @example
     * // Delete one ContatoWhatsapp
     * const ContatoWhatsapp = await prisma.contatoWhatsapp.delete({
     *   where: {
     *     // ... filter to delete one ContatoWhatsapp
     *   }
     * })
     * 
     */
    delete<T extends ContatoWhatsappDeleteArgs>(args: SelectSubset<T, ContatoWhatsappDeleteArgs<ExtArgs>>): Prisma__ContatoWhatsappClient<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContatoWhatsapp.
     * @param {ContatoWhatsappUpdateArgs} args - Arguments to update one ContatoWhatsapp.
     * @example
     * // Update one ContatoWhatsapp
     * const contatoWhatsapp = await prisma.contatoWhatsapp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContatoWhatsappUpdateArgs>(args: SelectSubset<T, ContatoWhatsappUpdateArgs<ExtArgs>>): Prisma__ContatoWhatsappClient<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContatoWhatsapps.
     * @param {ContatoWhatsappDeleteManyArgs} args - Arguments to filter ContatoWhatsapps to delete.
     * @example
     * // Delete a few ContatoWhatsapps
     * const { count } = await prisma.contatoWhatsapp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContatoWhatsappDeleteManyArgs>(args?: SelectSubset<T, ContatoWhatsappDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContatoWhatsapps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoWhatsappUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContatoWhatsapps
     * const contatoWhatsapp = await prisma.contatoWhatsapp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContatoWhatsappUpdateManyArgs>(args: SelectSubset<T, ContatoWhatsappUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContatoWhatsapps and returns the data updated in the database.
     * @param {ContatoWhatsappUpdateManyAndReturnArgs} args - Arguments to update many ContatoWhatsapps.
     * @example
     * // Update many ContatoWhatsapps
     * const contatoWhatsapp = await prisma.contatoWhatsapp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContatoWhatsapps and only return the `id`
     * const contatoWhatsappWithIdOnly = await prisma.contatoWhatsapp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContatoWhatsappUpdateManyAndReturnArgs>(args: SelectSubset<T, ContatoWhatsappUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContatoWhatsapp.
     * @param {ContatoWhatsappUpsertArgs} args - Arguments to update or create a ContatoWhatsapp.
     * @example
     * // Update or create a ContatoWhatsapp
     * const contatoWhatsapp = await prisma.contatoWhatsapp.upsert({
     *   create: {
     *     // ... data to create a ContatoWhatsapp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContatoWhatsapp we want to update
     *   }
     * })
     */
    upsert<T extends ContatoWhatsappUpsertArgs>(args: SelectSubset<T, ContatoWhatsappUpsertArgs<ExtArgs>>): Prisma__ContatoWhatsappClient<$Result.GetResult<Prisma.$ContatoWhatsappPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContatoWhatsapps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoWhatsappCountArgs} args - Arguments to filter ContatoWhatsapps to count.
     * @example
     * // Count the number of ContatoWhatsapps
     * const count = await prisma.contatoWhatsapp.count({
     *   where: {
     *     // ... the filter for the ContatoWhatsapps we want to count
     *   }
     * })
    **/
    count<T extends ContatoWhatsappCountArgs>(
      args?: Subset<T, ContatoWhatsappCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContatoWhatsappCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContatoWhatsapp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoWhatsappAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContatoWhatsappAggregateArgs>(args: Subset<T, ContatoWhatsappAggregateArgs>): Prisma.PrismaPromise<GetContatoWhatsappAggregateType<T>>

    /**
     * Group by ContatoWhatsapp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContatoWhatsappGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContatoWhatsappGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContatoWhatsappGroupByArgs['orderBy'] }
        : { orderBy?: ContatoWhatsappGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContatoWhatsappGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContatoWhatsappGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContatoWhatsapp model
   */
  readonly fields: ContatoWhatsappFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContatoWhatsapp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContatoWhatsappClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContatoWhatsapp model
   */
  interface ContatoWhatsappFieldRefs {
    readonly id: FieldRef<"ContatoWhatsapp", 'Int'>
    readonly usuarioId: FieldRef<"ContatoWhatsapp", 'Int'>
    readonly servicoId: FieldRef<"ContatoWhatsapp", 'Int'>
    readonly clicadoEm: FieldRef<"ContatoWhatsapp", 'DateTime'>
    readonly perguntado: FieldRef<"ContatoWhatsapp", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ContatoWhatsapp findUnique
   */
  export type ContatoWhatsappFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappInclude<ExtArgs> | null
    /**
     * Filter, which ContatoWhatsapp to fetch.
     */
    where: ContatoWhatsappWhereUniqueInput
  }

  /**
   * ContatoWhatsapp findUniqueOrThrow
   */
  export type ContatoWhatsappFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappInclude<ExtArgs> | null
    /**
     * Filter, which ContatoWhatsapp to fetch.
     */
    where: ContatoWhatsappWhereUniqueInput
  }

  /**
   * ContatoWhatsapp findFirst
   */
  export type ContatoWhatsappFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappInclude<ExtArgs> | null
    /**
     * Filter, which ContatoWhatsapp to fetch.
     */
    where?: ContatoWhatsappWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContatoWhatsapps to fetch.
     */
    orderBy?: ContatoWhatsappOrderByWithRelationInput | ContatoWhatsappOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContatoWhatsapps.
     */
    cursor?: ContatoWhatsappWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContatoWhatsapps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContatoWhatsapps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContatoWhatsapps.
     */
    distinct?: ContatoWhatsappScalarFieldEnum | ContatoWhatsappScalarFieldEnum[]
  }

  /**
   * ContatoWhatsapp findFirstOrThrow
   */
  export type ContatoWhatsappFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappInclude<ExtArgs> | null
    /**
     * Filter, which ContatoWhatsapp to fetch.
     */
    where?: ContatoWhatsappWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContatoWhatsapps to fetch.
     */
    orderBy?: ContatoWhatsappOrderByWithRelationInput | ContatoWhatsappOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContatoWhatsapps.
     */
    cursor?: ContatoWhatsappWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContatoWhatsapps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContatoWhatsapps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContatoWhatsapps.
     */
    distinct?: ContatoWhatsappScalarFieldEnum | ContatoWhatsappScalarFieldEnum[]
  }

  /**
   * ContatoWhatsapp findMany
   */
  export type ContatoWhatsappFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappInclude<ExtArgs> | null
    /**
     * Filter, which ContatoWhatsapps to fetch.
     */
    where?: ContatoWhatsappWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContatoWhatsapps to fetch.
     */
    orderBy?: ContatoWhatsappOrderByWithRelationInput | ContatoWhatsappOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContatoWhatsapps.
     */
    cursor?: ContatoWhatsappWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContatoWhatsapps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContatoWhatsapps.
     */
    skip?: number
    distinct?: ContatoWhatsappScalarFieldEnum | ContatoWhatsappScalarFieldEnum[]
  }

  /**
   * ContatoWhatsapp create
   */
  export type ContatoWhatsappCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappInclude<ExtArgs> | null
    /**
     * The data needed to create a ContatoWhatsapp.
     */
    data: XOR<ContatoWhatsappCreateInput, ContatoWhatsappUncheckedCreateInput>
  }

  /**
   * ContatoWhatsapp createMany
   */
  export type ContatoWhatsappCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContatoWhatsapps.
     */
    data: ContatoWhatsappCreateManyInput | ContatoWhatsappCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContatoWhatsapp createManyAndReturn
   */
  export type ContatoWhatsappCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * The data used to create many ContatoWhatsapps.
     */
    data: ContatoWhatsappCreateManyInput | ContatoWhatsappCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContatoWhatsapp update
   */
  export type ContatoWhatsappUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappInclude<ExtArgs> | null
    /**
     * The data needed to update a ContatoWhatsapp.
     */
    data: XOR<ContatoWhatsappUpdateInput, ContatoWhatsappUncheckedUpdateInput>
    /**
     * Choose, which ContatoWhatsapp to update.
     */
    where: ContatoWhatsappWhereUniqueInput
  }

  /**
   * ContatoWhatsapp updateMany
   */
  export type ContatoWhatsappUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContatoWhatsapps.
     */
    data: XOR<ContatoWhatsappUpdateManyMutationInput, ContatoWhatsappUncheckedUpdateManyInput>
    /**
     * Filter which ContatoWhatsapps to update
     */
    where?: ContatoWhatsappWhereInput
    /**
     * Limit how many ContatoWhatsapps to update.
     */
    limit?: number
  }

  /**
   * ContatoWhatsapp updateManyAndReturn
   */
  export type ContatoWhatsappUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * The data used to update ContatoWhatsapps.
     */
    data: XOR<ContatoWhatsappUpdateManyMutationInput, ContatoWhatsappUncheckedUpdateManyInput>
    /**
     * Filter which ContatoWhatsapps to update
     */
    where?: ContatoWhatsappWhereInput
    /**
     * Limit how many ContatoWhatsapps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContatoWhatsapp upsert
   */
  export type ContatoWhatsappUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappInclude<ExtArgs> | null
    /**
     * The filter to search for the ContatoWhatsapp to update in case it exists.
     */
    where: ContatoWhatsappWhereUniqueInput
    /**
     * In case the ContatoWhatsapp found by the `where` argument doesn't exist, create a new ContatoWhatsapp with this data.
     */
    create: XOR<ContatoWhatsappCreateInput, ContatoWhatsappUncheckedCreateInput>
    /**
     * In case the ContatoWhatsapp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContatoWhatsappUpdateInput, ContatoWhatsappUncheckedUpdateInput>
  }

  /**
   * ContatoWhatsapp delete
   */
  export type ContatoWhatsappDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappInclude<ExtArgs> | null
    /**
     * Filter which ContatoWhatsapp to delete.
     */
    where: ContatoWhatsappWhereUniqueInput
  }

  /**
   * ContatoWhatsapp deleteMany
   */
  export type ContatoWhatsappDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContatoWhatsapps to delete
     */
    where?: ContatoWhatsappWhereInput
    /**
     * Limit how many ContatoWhatsapps to delete.
     */
    limit?: number
  }

  /**
   * ContatoWhatsapp without action
   */
  export type ContatoWhatsappDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContatoWhatsapp
     */
    select?: ContatoWhatsappSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContatoWhatsapp
     */
    omit?: ContatoWhatsappOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContatoWhatsappInclude<ExtArgs> | null
  }


  /**
   * Model Segmento
   */

  export type AggregateSegmento = {
    _count: SegmentoCountAggregateOutputType | null
    _avg: SegmentoAvgAggregateOutputType | null
    _sum: SegmentoSumAggregateOutputType | null
    _min: SegmentoMinAggregateOutputType | null
    _max: SegmentoMaxAggregateOutputType | null
  }

  export type SegmentoAvgAggregateOutputType = {
    id: number | null
  }

  export type SegmentoSumAggregateOutputType = {
    id: number | null
  }

  export type SegmentoMinAggregateOutputType = {
    id: number | null
    nome: string | null
    icone: string | null
    criadoEm: Date | null
  }

  export type SegmentoMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    icone: string | null
    criadoEm: Date | null
  }

  export type SegmentoCountAggregateOutputType = {
    id: number
    nome: number
    icone: number
    criadoEm: number
    _all: number
  }


  export type SegmentoAvgAggregateInputType = {
    id?: true
  }

  export type SegmentoSumAggregateInputType = {
    id?: true
  }

  export type SegmentoMinAggregateInputType = {
    id?: true
    nome?: true
    icone?: true
    criadoEm?: true
  }

  export type SegmentoMaxAggregateInputType = {
    id?: true
    nome?: true
    icone?: true
    criadoEm?: true
  }

  export type SegmentoCountAggregateInputType = {
    id?: true
    nome?: true
    icone?: true
    criadoEm?: true
    _all?: true
  }

  export type SegmentoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Segmento to aggregate.
     */
    where?: SegmentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segmentos to fetch.
     */
    orderBy?: SegmentoOrderByWithRelationInput | SegmentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SegmentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segmentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segmentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Segmentos
    **/
    _count?: true | SegmentoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SegmentoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SegmentoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SegmentoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SegmentoMaxAggregateInputType
  }

  export type GetSegmentoAggregateType<T extends SegmentoAggregateArgs> = {
        [P in keyof T & keyof AggregateSegmento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSegmento[P]>
      : GetScalarType<T[P], AggregateSegmento[P]>
  }




  export type SegmentoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SegmentoWhereInput
    orderBy?: SegmentoOrderByWithAggregationInput | SegmentoOrderByWithAggregationInput[]
    by: SegmentoScalarFieldEnum[] | SegmentoScalarFieldEnum
    having?: SegmentoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SegmentoCountAggregateInputType | true
    _avg?: SegmentoAvgAggregateInputType
    _sum?: SegmentoSumAggregateInputType
    _min?: SegmentoMinAggregateInputType
    _max?: SegmentoMaxAggregateInputType
  }

  export type SegmentoGroupByOutputType = {
    id: number
    nome: string
    icone: string | null
    criadoEm: Date
    _count: SegmentoCountAggregateOutputType | null
    _avg: SegmentoAvgAggregateOutputType | null
    _sum: SegmentoSumAggregateOutputType | null
    _min: SegmentoMinAggregateOutputType | null
    _max: SegmentoMaxAggregateOutputType | null
  }

  type GetSegmentoGroupByPayload<T extends SegmentoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SegmentoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SegmentoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SegmentoGroupByOutputType[P]>
            : GetScalarType<T[P], SegmentoGroupByOutputType[P]>
        }
      >
    >


  export type SegmentoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    icone?: boolean
    criadoEm?: boolean
    categorias?: boolean | Segmento$categoriasArgs<ExtArgs>
    _count?: boolean | SegmentoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["segmento"]>

  export type SegmentoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    icone?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["segmento"]>

  export type SegmentoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    icone?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["segmento"]>

  export type SegmentoSelectScalar = {
    id?: boolean
    nome?: boolean
    icone?: boolean
    criadoEm?: boolean
  }

  export type SegmentoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "icone" | "criadoEm", ExtArgs["result"]["segmento"]>
  export type SegmentoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categorias?: boolean | Segmento$categoriasArgs<ExtArgs>
    _count?: boolean | SegmentoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SegmentoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SegmentoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SegmentoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Segmento"
    objects: {
      categorias: Prisma.$CategoriaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      icone: string | null
      criadoEm: Date
    }, ExtArgs["result"]["segmento"]>
    composites: {}
  }

  type SegmentoGetPayload<S extends boolean | null | undefined | SegmentoDefaultArgs> = $Result.GetResult<Prisma.$SegmentoPayload, S>

  type SegmentoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SegmentoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SegmentoCountAggregateInputType | true
    }

  export interface SegmentoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Segmento'], meta: { name: 'Segmento' } }
    /**
     * Find zero or one Segmento that matches the filter.
     * @param {SegmentoFindUniqueArgs} args - Arguments to find a Segmento
     * @example
     * // Get one Segmento
     * const segmento = await prisma.segmento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SegmentoFindUniqueArgs>(args: SelectSubset<T, SegmentoFindUniqueArgs<ExtArgs>>): Prisma__SegmentoClient<$Result.GetResult<Prisma.$SegmentoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Segmento that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SegmentoFindUniqueOrThrowArgs} args - Arguments to find a Segmento
     * @example
     * // Get one Segmento
     * const segmento = await prisma.segmento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SegmentoFindUniqueOrThrowArgs>(args: SelectSubset<T, SegmentoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SegmentoClient<$Result.GetResult<Prisma.$SegmentoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Segmento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentoFindFirstArgs} args - Arguments to find a Segmento
     * @example
     * // Get one Segmento
     * const segmento = await prisma.segmento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SegmentoFindFirstArgs>(args?: SelectSubset<T, SegmentoFindFirstArgs<ExtArgs>>): Prisma__SegmentoClient<$Result.GetResult<Prisma.$SegmentoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Segmento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentoFindFirstOrThrowArgs} args - Arguments to find a Segmento
     * @example
     * // Get one Segmento
     * const segmento = await prisma.segmento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SegmentoFindFirstOrThrowArgs>(args?: SelectSubset<T, SegmentoFindFirstOrThrowArgs<ExtArgs>>): Prisma__SegmentoClient<$Result.GetResult<Prisma.$SegmentoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Segmentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Segmentos
     * const segmentos = await prisma.segmento.findMany()
     * 
     * // Get first 10 Segmentos
     * const segmentos = await prisma.segmento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const segmentoWithIdOnly = await prisma.segmento.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SegmentoFindManyArgs>(args?: SelectSubset<T, SegmentoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Segmento.
     * @param {SegmentoCreateArgs} args - Arguments to create a Segmento.
     * @example
     * // Create one Segmento
     * const Segmento = await prisma.segmento.create({
     *   data: {
     *     // ... data to create a Segmento
     *   }
     * })
     * 
     */
    create<T extends SegmentoCreateArgs>(args: SelectSubset<T, SegmentoCreateArgs<ExtArgs>>): Prisma__SegmentoClient<$Result.GetResult<Prisma.$SegmentoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Segmentos.
     * @param {SegmentoCreateManyArgs} args - Arguments to create many Segmentos.
     * @example
     * // Create many Segmentos
     * const segmento = await prisma.segmento.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SegmentoCreateManyArgs>(args?: SelectSubset<T, SegmentoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Segmentos and returns the data saved in the database.
     * @param {SegmentoCreateManyAndReturnArgs} args - Arguments to create many Segmentos.
     * @example
     * // Create many Segmentos
     * const segmento = await prisma.segmento.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Segmentos and only return the `id`
     * const segmentoWithIdOnly = await prisma.segmento.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SegmentoCreateManyAndReturnArgs>(args?: SelectSubset<T, SegmentoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Segmento.
     * @param {SegmentoDeleteArgs} args - Arguments to delete one Segmento.
     * @example
     * // Delete one Segmento
     * const Segmento = await prisma.segmento.delete({
     *   where: {
     *     // ... filter to delete one Segmento
     *   }
     * })
     * 
     */
    delete<T extends SegmentoDeleteArgs>(args: SelectSubset<T, SegmentoDeleteArgs<ExtArgs>>): Prisma__SegmentoClient<$Result.GetResult<Prisma.$SegmentoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Segmento.
     * @param {SegmentoUpdateArgs} args - Arguments to update one Segmento.
     * @example
     * // Update one Segmento
     * const segmento = await prisma.segmento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SegmentoUpdateArgs>(args: SelectSubset<T, SegmentoUpdateArgs<ExtArgs>>): Prisma__SegmentoClient<$Result.GetResult<Prisma.$SegmentoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Segmentos.
     * @param {SegmentoDeleteManyArgs} args - Arguments to filter Segmentos to delete.
     * @example
     * // Delete a few Segmentos
     * const { count } = await prisma.segmento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SegmentoDeleteManyArgs>(args?: SelectSubset<T, SegmentoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Segmentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Segmentos
     * const segmento = await prisma.segmento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SegmentoUpdateManyArgs>(args: SelectSubset<T, SegmentoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Segmentos and returns the data updated in the database.
     * @param {SegmentoUpdateManyAndReturnArgs} args - Arguments to update many Segmentos.
     * @example
     * // Update many Segmentos
     * const segmento = await prisma.segmento.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Segmentos and only return the `id`
     * const segmentoWithIdOnly = await prisma.segmento.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SegmentoUpdateManyAndReturnArgs>(args: SelectSubset<T, SegmentoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SegmentoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Segmento.
     * @param {SegmentoUpsertArgs} args - Arguments to update or create a Segmento.
     * @example
     * // Update or create a Segmento
     * const segmento = await prisma.segmento.upsert({
     *   create: {
     *     // ... data to create a Segmento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Segmento we want to update
     *   }
     * })
     */
    upsert<T extends SegmentoUpsertArgs>(args: SelectSubset<T, SegmentoUpsertArgs<ExtArgs>>): Prisma__SegmentoClient<$Result.GetResult<Prisma.$SegmentoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Segmentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentoCountArgs} args - Arguments to filter Segmentos to count.
     * @example
     * // Count the number of Segmentos
     * const count = await prisma.segmento.count({
     *   where: {
     *     // ... the filter for the Segmentos we want to count
     *   }
     * })
    **/
    count<T extends SegmentoCountArgs>(
      args?: Subset<T, SegmentoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SegmentoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Segmento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SegmentoAggregateArgs>(args: Subset<T, SegmentoAggregateArgs>): Prisma.PrismaPromise<GetSegmentoAggregateType<T>>

    /**
     * Group by Segmento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SegmentoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SegmentoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SegmentoGroupByArgs['orderBy'] }
        : { orderBy?: SegmentoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SegmentoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSegmentoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Segmento model
   */
  readonly fields: SegmentoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Segmento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SegmentoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categorias<T extends Segmento$categoriasArgs<ExtArgs> = {}>(args?: Subset<T, Segmento$categoriasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Segmento model
   */
  interface SegmentoFieldRefs {
    readonly id: FieldRef<"Segmento", 'Int'>
    readonly nome: FieldRef<"Segmento", 'String'>
    readonly icone: FieldRef<"Segmento", 'String'>
    readonly criadoEm: FieldRef<"Segmento", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Segmento findUnique
   */
  export type SegmentoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentoInclude<ExtArgs> | null
    /**
     * Filter, which Segmento to fetch.
     */
    where: SegmentoWhereUniqueInput
  }

  /**
   * Segmento findUniqueOrThrow
   */
  export type SegmentoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentoInclude<ExtArgs> | null
    /**
     * Filter, which Segmento to fetch.
     */
    where: SegmentoWhereUniqueInput
  }

  /**
   * Segmento findFirst
   */
  export type SegmentoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentoInclude<ExtArgs> | null
    /**
     * Filter, which Segmento to fetch.
     */
    where?: SegmentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segmentos to fetch.
     */
    orderBy?: SegmentoOrderByWithRelationInput | SegmentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Segmentos.
     */
    cursor?: SegmentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segmentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segmentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Segmentos.
     */
    distinct?: SegmentoScalarFieldEnum | SegmentoScalarFieldEnum[]
  }

  /**
   * Segmento findFirstOrThrow
   */
  export type SegmentoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentoInclude<ExtArgs> | null
    /**
     * Filter, which Segmento to fetch.
     */
    where?: SegmentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segmentos to fetch.
     */
    orderBy?: SegmentoOrderByWithRelationInput | SegmentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Segmentos.
     */
    cursor?: SegmentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segmentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segmentos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Segmentos.
     */
    distinct?: SegmentoScalarFieldEnum | SegmentoScalarFieldEnum[]
  }

  /**
   * Segmento findMany
   */
  export type SegmentoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentoInclude<ExtArgs> | null
    /**
     * Filter, which Segmentos to fetch.
     */
    where?: SegmentoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Segmentos to fetch.
     */
    orderBy?: SegmentoOrderByWithRelationInput | SegmentoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Segmentos.
     */
    cursor?: SegmentoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Segmentos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Segmentos.
     */
    skip?: number
    distinct?: SegmentoScalarFieldEnum | SegmentoScalarFieldEnum[]
  }

  /**
   * Segmento create
   */
  export type SegmentoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentoInclude<ExtArgs> | null
    /**
     * The data needed to create a Segmento.
     */
    data: XOR<SegmentoCreateInput, SegmentoUncheckedCreateInput>
  }

  /**
   * Segmento createMany
   */
  export type SegmentoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Segmentos.
     */
    data: SegmentoCreateManyInput | SegmentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Segmento createManyAndReturn
   */
  export type SegmentoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * The data used to create many Segmentos.
     */
    data: SegmentoCreateManyInput | SegmentoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Segmento update
   */
  export type SegmentoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentoInclude<ExtArgs> | null
    /**
     * The data needed to update a Segmento.
     */
    data: XOR<SegmentoUpdateInput, SegmentoUncheckedUpdateInput>
    /**
     * Choose, which Segmento to update.
     */
    where: SegmentoWhereUniqueInput
  }

  /**
   * Segmento updateMany
   */
  export type SegmentoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Segmentos.
     */
    data: XOR<SegmentoUpdateManyMutationInput, SegmentoUncheckedUpdateManyInput>
    /**
     * Filter which Segmentos to update
     */
    where?: SegmentoWhereInput
    /**
     * Limit how many Segmentos to update.
     */
    limit?: number
  }

  /**
   * Segmento updateManyAndReturn
   */
  export type SegmentoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * The data used to update Segmentos.
     */
    data: XOR<SegmentoUpdateManyMutationInput, SegmentoUncheckedUpdateManyInput>
    /**
     * Filter which Segmentos to update
     */
    where?: SegmentoWhereInput
    /**
     * Limit how many Segmentos to update.
     */
    limit?: number
  }

  /**
   * Segmento upsert
   */
  export type SegmentoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentoInclude<ExtArgs> | null
    /**
     * The filter to search for the Segmento to update in case it exists.
     */
    where: SegmentoWhereUniqueInput
    /**
     * In case the Segmento found by the `where` argument doesn't exist, create a new Segmento with this data.
     */
    create: XOR<SegmentoCreateInput, SegmentoUncheckedCreateInput>
    /**
     * In case the Segmento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SegmentoUpdateInput, SegmentoUncheckedUpdateInput>
  }

  /**
   * Segmento delete
   */
  export type SegmentoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentoInclude<ExtArgs> | null
    /**
     * Filter which Segmento to delete.
     */
    where: SegmentoWhereUniqueInput
  }

  /**
   * Segmento deleteMany
   */
  export type SegmentoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Segmentos to delete
     */
    where?: SegmentoWhereInput
    /**
     * Limit how many Segmentos to delete.
     */
    limit?: number
  }

  /**
   * Segmento.categorias
   */
  export type Segmento$categoriasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categoria
     */
    select?: CategoriaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categoria
     */
    omit?: CategoriaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriaInclude<ExtArgs> | null
    where?: CategoriaWhereInput
    orderBy?: CategoriaOrderByWithRelationInput | CategoriaOrderByWithRelationInput[]
    cursor?: CategoriaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriaScalarFieldEnum | CategoriaScalarFieldEnum[]
  }

  /**
   * Segmento without action
   */
  export type SegmentoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Segmento
     */
    select?: SegmentoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Segmento
     */
    omit?: SegmentoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SegmentoInclude<ExtArgs> | null
  }


  /**
   * Model Portfolio
   */

  export type AggregatePortfolio = {
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  export type PortfolioAvgAggregateOutputType = {
    id: number | null
    servicoId: number | null
    usuarioId: number | null
  }

  export type PortfolioSumAggregateOutputType = {
    id: number | null
    servicoId: number | null
    usuarioId: number | null
  }

  export type PortfolioMinAggregateOutputType = {
    id: number | null
    url: string | null
    servicoId: number | null
    usuarioId: number | null
    criadoEm: Date | null
  }

  export type PortfolioMaxAggregateOutputType = {
    id: number | null
    url: string | null
    servicoId: number | null
    usuarioId: number | null
    criadoEm: Date | null
  }

  export type PortfolioCountAggregateOutputType = {
    id: number
    url: number
    servicoId: number
    usuarioId: number
    criadoEm: number
    _all: number
  }


  export type PortfolioAvgAggregateInputType = {
    id?: true
    servicoId?: true
    usuarioId?: true
  }

  export type PortfolioSumAggregateInputType = {
    id?: true
    servicoId?: true
    usuarioId?: true
  }

  export type PortfolioMinAggregateInputType = {
    id?: true
    url?: true
    servicoId?: true
    usuarioId?: true
    criadoEm?: true
  }

  export type PortfolioMaxAggregateInputType = {
    id?: true
    url?: true
    servicoId?: true
    usuarioId?: true
    criadoEm?: true
  }

  export type PortfolioCountAggregateInputType = {
    id?: true
    url?: true
    servicoId?: true
    usuarioId?: true
    criadoEm?: true
    _all?: true
  }

  export type PortfolioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolio to aggregate.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Portfolios
    **/
    _count?: true | PortfolioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PortfolioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PortfolioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioMaxAggregateInputType
  }

  export type GetPortfolioAggregateType<T extends PortfolioAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolio[P]>
      : GetScalarType<T[P], AggregatePortfolio[P]>
  }




  export type PortfolioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioWhereInput
    orderBy?: PortfolioOrderByWithAggregationInput | PortfolioOrderByWithAggregationInput[]
    by: PortfolioScalarFieldEnum[] | PortfolioScalarFieldEnum
    having?: PortfolioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioCountAggregateInputType | true
    _avg?: PortfolioAvgAggregateInputType
    _sum?: PortfolioSumAggregateInputType
    _min?: PortfolioMinAggregateInputType
    _max?: PortfolioMaxAggregateInputType
  }

  export type PortfolioGroupByOutputType = {
    id: number
    url: string
    servicoId: number
    usuarioId: number
    criadoEm: Date
    _count: PortfolioCountAggregateOutputType | null
    _avg: PortfolioAvgAggregateOutputType | null
    _sum: PortfolioSumAggregateOutputType | null
    _min: PortfolioMinAggregateOutputType | null
    _max: PortfolioMaxAggregateOutputType | null
  }

  type GetPortfolioGroupByPayload<T extends PortfolioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    servicoId?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    servicoId?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    servicoId?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolio"]>

  export type PortfolioSelectScalar = {
    id?: boolean
    url?: boolean
    servicoId?: boolean
    usuarioId?: boolean
    criadoEm?: boolean
  }

  export type PortfolioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "servicoId" | "usuarioId" | "criadoEm", ExtArgs["result"]["portfolio"]>
  export type PortfolioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PortfolioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }
  export type PortfolioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    servico?: boolean | ServicoDefaultArgs<ExtArgs>
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
  }

  export type $PortfolioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Portfolio"
    objects: {
      servico: Prisma.$ServicoPayload<ExtArgs>
      usuario: Prisma.$UsuarioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      servicoId: number
      usuarioId: number
      criadoEm: Date
    }, ExtArgs["result"]["portfolio"]>
    composites: {}
  }

  type PortfolioGetPayload<S extends boolean | null | undefined | PortfolioDefaultArgs> = $Result.GetResult<Prisma.$PortfolioPayload, S>

  type PortfolioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioCountAggregateInputType | true
    }

  export interface PortfolioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Portfolio'], meta: { name: 'Portfolio' } }
    /**
     * Find zero or one Portfolio that matches the filter.
     * @param {PortfolioFindUniqueArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioFindUniqueArgs>(args: SelectSubset<T, PortfolioFindUniqueArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Portfolio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioFindUniqueOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioFindFirstArgs>(args?: SelectSubset<T, PortfolioFindFirstArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Portfolio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindFirstOrThrowArgs} args - Arguments to find a Portfolio
     * @example
     * // Get one Portfolio
     * const portfolio = await prisma.portfolio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Portfolios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Portfolios
     * const portfolios = await prisma.portfolio.findMany()
     * 
     * // Get first 10 Portfolios
     * const portfolios = await prisma.portfolio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioFindManyArgs>(args?: SelectSubset<T, PortfolioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Portfolio.
     * @param {PortfolioCreateArgs} args - Arguments to create a Portfolio.
     * @example
     * // Create one Portfolio
     * const Portfolio = await prisma.portfolio.create({
     *   data: {
     *     // ... data to create a Portfolio
     *   }
     * })
     * 
     */
    create<T extends PortfolioCreateArgs>(args: SelectSubset<T, PortfolioCreateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Portfolios.
     * @param {PortfolioCreateManyArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioCreateManyArgs>(args?: SelectSubset<T, PortfolioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Portfolios and returns the data saved in the database.
     * @param {PortfolioCreateManyAndReturnArgs} args - Arguments to create many Portfolios.
     * @example
     * // Create many Portfolios
     * const portfolio = await prisma.portfolio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Portfolio.
     * @param {PortfolioDeleteArgs} args - Arguments to delete one Portfolio.
     * @example
     * // Delete one Portfolio
     * const Portfolio = await prisma.portfolio.delete({
     *   where: {
     *     // ... filter to delete one Portfolio
     *   }
     * })
     * 
     */
    delete<T extends PortfolioDeleteArgs>(args: SelectSubset<T, PortfolioDeleteArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Portfolio.
     * @param {PortfolioUpdateArgs} args - Arguments to update one Portfolio.
     * @example
     * // Update one Portfolio
     * const portfolio = await prisma.portfolio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioUpdateArgs>(args: SelectSubset<T, PortfolioUpdateArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Portfolios.
     * @param {PortfolioDeleteManyArgs} args - Arguments to filter Portfolios to delete.
     * @example
     * // Delete a few Portfolios
     * const { count } = await prisma.portfolio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioDeleteManyArgs>(args?: SelectSubset<T, PortfolioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioUpdateManyArgs>(args: SelectSubset<T, PortfolioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Portfolios and returns the data updated in the database.
     * @param {PortfolioUpdateManyAndReturnArgs} args - Arguments to update many Portfolios.
     * @example
     * // Update many Portfolios
     * const portfolio = await prisma.portfolio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Portfolios and only return the `id`
     * const portfolioWithIdOnly = await prisma.portfolio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Portfolio.
     * @param {PortfolioUpsertArgs} args - Arguments to update or create a Portfolio.
     * @example
     * // Update or create a Portfolio
     * const portfolio = await prisma.portfolio.upsert({
     *   create: {
     *     // ... data to create a Portfolio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Portfolio we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioUpsertArgs>(args: SelectSubset<T, PortfolioUpsertArgs<ExtArgs>>): Prisma__PortfolioClient<$Result.GetResult<Prisma.$PortfolioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Portfolios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioCountArgs} args - Arguments to filter Portfolios to count.
     * @example
     * // Count the number of Portfolios
     * const count = await prisma.portfolio.count({
     *   where: {
     *     // ... the filter for the Portfolios we want to count
     *   }
     * })
    **/
    count<T extends PortfolioCountArgs>(
      args?: Subset<T, PortfolioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioAggregateArgs>(args: Subset<T, PortfolioAggregateArgs>): Prisma.PrismaPromise<GetPortfolioAggregateType<T>>

    /**
     * Group by Portfolio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Portfolio model
   */
  readonly fields: PortfolioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Portfolio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    servico<T extends ServicoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicoDefaultArgs<ExtArgs>>): Prisma__ServicoClient<$Result.GetResult<Prisma.$ServicoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Portfolio model
   */
  interface PortfolioFieldRefs {
    readonly id: FieldRef<"Portfolio", 'Int'>
    readonly url: FieldRef<"Portfolio", 'String'>
    readonly servicoId: FieldRef<"Portfolio", 'Int'>
    readonly usuarioId: FieldRef<"Portfolio", 'Int'>
    readonly criadoEm: FieldRef<"Portfolio", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Portfolio findUnique
   */
  export type PortfolioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findUniqueOrThrow
   */
  export type PortfolioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio findFirst
   */
  export type PortfolioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findFirstOrThrow
   */
  export type PortfolioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolio to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Portfolios.
     */
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio findMany
   */
  export type PortfolioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter, which Portfolios to fetch.
     */
    where?: PortfolioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Portfolios to fetch.
     */
    orderBy?: PortfolioOrderByWithRelationInput | PortfolioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Portfolios.
     */
    cursor?: PortfolioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Portfolios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Portfolios.
     */
    skip?: number
    distinct?: PortfolioScalarFieldEnum | PortfolioScalarFieldEnum[]
  }

  /**
   * Portfolio create
   */
  export type PortfolioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to create a Portfolio.
     */
    data: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
  }

  /**
   * Portfolio createMany
   */
  export type PortfolioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Portfolio createManyAndReturn
   */
  export type PortfolioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * The data used to create many Portfolios.
     */
    data: PortfolioCreateManyInput | PortfolioCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Portfolio update
   */
  export type PortfolioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The data needed to update a Portfolio.
     */
    data: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
    /**
     * Choose, which Portfolio to update.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio updateMany
   */
  export type PortfolioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
  }

  /**
   * Portfolio updateManyAndReturn
   */
  export type PortfolioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * The data used to update Portfolios.
     */
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyInput>
    /**
     * Filter which Portfolios to update
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Portfolio upsert
   */
  export type PortfolioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * The filter to search for the Portfolio to update in case it exists.
     */
    where: PortfolioWhereUniqueInput
    /**
     * In case the Portfolio found by the `where` argument doesn't exist, create a new Portfolio with this data.
     */
    create: XOR<PortfolioCreateInput, PortfolioUncheckedCreateInput>
    /**
     * In case the Portfolio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioUpdateInput, PortfolioUncheckedUpdateInput>
  }

  /**
   * Portfolio delete
   */
  export type PortfolioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
    /**
     * Filter which Portfolio to delete.
     */
    where: PortfolioWhereUniqueInput
  }

  /**
   * Portfolio deleteMany
   */
  export type PortfolioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Portfolios to delete
     */
    where?: PortfolioWhereInput
    /**
     * Limit how many Portfolios to delete.
     */
    limit?: number
  }

  /**
   * Portfolio without action
   */
  export type PortfolioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Portfolio
     */
    select?: PortfolioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Portfolio
     */
    omit?: PortfolioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    telefone: 'telefone',
    estado: 'estado',
    cidade: 'cidade',
    endereco: 'endereco',
    senha: 'senha',
    criadoEm: 'criadoEm'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const LocalizacaoScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    bairro: 'bairro',
    cidade: 'cidade',
    estado: 'estado',
    criadoEm: 'criadoEm'
  };

  export type LocalizacaoScalarFieldEnum = (typeof LocalizacaoScalarFieldEnum)[keyof typeof LocalizacaoScalarFieldEnum]


  export const ServicoScalarFieldEnum: {
    id: 'id',
    nomeNegocio: 'nomeNegocio',
    descricao: 'descricao',
    imagem: 'imagem',
    disponivel: 'disponivel',
    usuarioId: 'usuarioId',
    categoriaId: 'categoriaId',
    localizacaoId: 'localizacaoId',
    criadoEm: 'criadoEm'
  };

  export type ServicoScalarFieldEnum = (typeof ServicoScalarFieldEnum)[keyof typeof ServicoScalarFieldEnum]


  export const CategoriaScalarFieldEnum: {
    id: 'id',
    nomeServico: 'nomeServico',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm',
    segmentoId: 'segmentoId'
  };

  export type CategoriaScalarFieldEnum = (typeof CategoriaScalarFieldEnum)[keyof typeof CategoriaScalarFieldEnum]


  export const AvaliacaoScalarFieldEnum: {
    id: 'id',
    star: 'star',
    descricao: 'descricao',
    servicoId: 'servicoId',
    usuarioId: 'usuarioId',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type AvaliacaoScalarFieldEnum = (typeof AvaliacaoScalarFieldEnum)[keyof typeof AvaliacaoScalarFieldEnum]


  export const PrecoScalarFieldEnum: {
    id: 'id',
    nomeservico: 'nomeservico',
    precificacao: 'precificacao',
    servicoId: 'servicoId',
    criadoEm: 'criadoEm',
    atualizadoEm: 'atualizadoEm'
  };

  export type PrecoScalarFieldEnum = (typeof PrecoScalarFieldEnum)[keyof typeof PrecoScalarFieldEnum]


  export const ResetTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    usuarioId: 'usuarioId'
  };

  export type ResetTokenScalarFieldEnum = (typeof ResetTokenScalarFieldEnum)[keyof typeof ResetTokenScalarFieldEnum]


  export const ServicoRealizadoScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    servicoId: 'servicoId',
    confirmado: 'confirmado',
    respondidoEm: 'respondidoEm',
    realizadoEm: 'realizadoEm'
  };

  export type ServicoRealizadoScalarFieldEnum = (typeof ServicoRealizadoScalarFieldEnum)[keyof typeof ServicoRealizadoScalarFieldEnum]


  export const ContatoWhatsappScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    servicoId: 'servicoId',
    clicadoEm: 'clicadoEm',
    perguntado: 'perguntado'
  };

  export type ContatoWhatsappScalarFieldEnum = (typeof ContatoWhatsappScalarFieldEnum)[keyof typeof ContatoWhatsappScalarFieldEnum]


  export const SegmentoScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    icone: 'icone',
    criadoEm: 'criadoEm'
  };

  export type SegmentoScalarFieldEnum = (typeof SegmentoScalarFieldEnum)[keyof typeof SegmentoScalarFieldEnum]


  export const PortfolioScalarFieldEnum: {
    id: 'id',
    url: 'url',
    servicoId: 'servicoId',
    usuarioId: 'usuarioId',
    criadoEm: 'criadoEm'
  };

  export type PortfolioScalarFieldEnum = (typeof PortfolioScalarFieldEnum)[keyof typeof PortfolioScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nome?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    estado?: StringFilter<"Usuario"> | string
    cidade?: StringFilter<"Usuario"> | string
    endereco?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    avaliacao?: AvaliacaoListRelationFilter
    servicos?: ServicoListRelationFilter
    resetTokens?: ResetTokenListRelationFilter
    servicosRealizados?: ServicoRealizadoListRelationFilter
    contatosWhatsapp?: ContatoWhatsappListRelationFilter
    portfolio?: PortfolioListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    endereco?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    avaliacao?: AvaliacaoOrderByRelationAggregateInput
    servicos?: ServicoOrderByRelationAggregateInput
    resetTokens?: ResetTokenOrderByRelationAggregateInput
    servicosRealizados?: ServicoRealizadoOrderByRelationAggregateInput
    contatosWhatsapp?: ContatoWhatsappOrderByRelationAggregateInput
    portfolio?: PortfolioOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nome?: StringFilter<"Usuario"> | string
    telefone?: StringFilter<"Usuario"> | string
    estado?: StringFilter<"Usuario"> | string
    cidade?: StringFilter<"Usuario"> | string
    endereco?: StringFilter<"Usuario"> | string
    senha?: StringFilter<"Usuario"> | string
    criadoEm?: DateTimeFilter<"Usuario"> | Date | string
    avaliacao?: AvaliacaoListRelationFilter
    servicos?: ServicoListRelationFilter
    resetTokens?: ResetTokenListRelationFilter
    servicosRealizados?: ServicoRealizadoListRelationFilter
    contatosWhatsapp?: ContatoWhatsappListRelationFilter
    portfolio?: PortfolioListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    endereco?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nome?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    telefone?: StringWithAggregatesFilter<"Usuario"> | string
    estado?: StringWithAggregatesFilter<"Usuario"> | string
    cidade?: StringWithAggregatesFilter<"Usuario"> | string
    endereco?: StringWithAggregatesFilter<"Usuario"> | string
    senha?: StringWithAggregatesFilter<"Usuario"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type LocalizacaoWhereInput = {
    AND?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    OR?: LocalizacaoWhereInput[]
    NOT?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    id?: IntFilter<"Localizacao"> | number
    numero?: StringFilter<"Localizacao"> | string
    bairro?: StringFilter<"Localizacao"> | string
    cidade?: StringFilter<"Localizacao"> | string
    estado?: StringFilter<"Localizacao"> | string
    criadoEm?: DateTimeFilter<"Localizacao"> | Date | string
    servico?: ServicoListRelationFilter
  }

  export type LocalizacaoOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
    servico?: ServicoOrderByRelationAggregateInput
  }

  export type LocalizacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    OR?: LocalizacaoWhereInput[]
    NOT?: LocalizacaoWhereInput | LocalizacaoWhereInput[]
    numero?: StringFilter<"Localizacao"> | string
    bairro?: StringFilter<"Localizacao"> | string
    cidade?: StringFilter<"Localizacao"> | string
    estado?: StringFilter<"Localizacao"> | string
    criadoEm?: DateTimeFilter<"Localizacao"> | Date | string
    servico?: ServicoListRelationFilter
  }, "id">

  export type LocalizacaoOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
    _count?: LocalizacaoCountOrderByAggregateInput
    _avg?: LocalizacaoAvgOrderByAggregateInput
    _max?: LocalizacaoMaxOrderByAggregateInput
    _min?: LocalizacaoMinOrderByAggregateInput
    _sum?: LocalizacaoSumOrderByAggregateInput
  }

  export type LocalizacaoScalarWhereWithAggregatesInput = {
    AND?: LocalizacaoScalarWhereWithAggregatesInput | LocalizacaoScalarWhereWithAggregatesInput[]
    OR?: LocalizacaoScalarWhereWithAggregatesInput[]
    NOT?: LocalizacaoScalarWhereWithAggregatesInput | LocalizacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Localizacao"> | number
    numero?: StringWithAggregatesFilter<"Localizacao"> | string
    bairro?: StringWithAggregatesFilter<"Localizacao"> | string
    cidade?: StringWithAggregatesFilter<"Localizacao"> | string
    estado?: StringWithAggregatesFilter<"Localizacao"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Localizacao"> | Date | string
  }

  export type ServicoWhereInput = {
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    id?: IntFilter<"Servico"> | number
    nomeNegocio?: StringFilter<"Servico"> | string
    descricao?: StringFilter<"Servico"> | string
    imagem?: StringNullableFilter<"Servico"> | string | null
    disponivel?: BoolFilter<"Servico"> | boolean
    usuarioId?: IntFilter<"Servico"> | number
    categoriaId?: IntNullableFilter<"Servico"> | number | null
    localizacaoId?: IntNullableFilter<"Servico"> | number | null
    criadoEm?: DateTimeFilter<"Servico"> | Date | string
    avaliacao?: AvaliacaoListRelationFilter
    preco?: PrecoListRelationFilter
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    localizacao?: XOR<LocalizacaoNullableScalarRelationFilter, LocalizacaoWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servicosRealizados?: ServicoRealizadoListRelationFilter
    contatosWhatsapp?: ContatoWhatsappListRelationFilter
    portfolio?: PortfolioListRelationFilter
  }

  export type ServicoOrderByWithRelationInput = {
    id?: SortOrder
    nomeNegocio?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrderInput | SortOrder
    disponivel?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    localizacaoId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    avaliacao?: AvaliacaoOrderByRelationAggregateInput
    preco?: PrecoOrderByRelationAggregateInput
    categoria?: CategoriaOrderByWithRelationInput
    localizacao?: LocalizacaoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
    servicosRealizados?: ServicoRealizadoOrderByRelationAggregateInput
    contatosWhatsapp?: ContatoWhatsappOrderByRelationAggregateInput
    portfolio?: PortfolioOrderByRelationAggregateInput
  }

  export type ServicoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicoWhereInput | ServicoWhereInput[]
    OR?: ServicoWhereInput[]
    NOT?: ServicoWhereInput | ServicoWhereInput[]
    nomeNegocio?: StringFilter<"Servico"> | string
    descricao?: StringFilter<"Servico"> | string
    imagem?: StringNullableFilter<"Servico"> | string | null
    disponivel?: BoolFilter<"Servico"> | boolean
    usuarioId?: IntFilter<"Servico"> | number
    categoriaId?: IntNullableFilter<"Servico"> | number | null
    localizacaoId?: IntNullableFilter<"Servico"> | number | null
    criadoEm?: DateTimeFilter<"Servico"> | Date | string
    avaliacao?: AvaliacaoListRelationFilter
    preco?: PrecoListRelationFilter
    categoria?: XOR<CategoriaNullableScalarRelationFilter, CategoriaWhereInput> | null
    localizacao?: XOR<LocalizacaoNullableScalarRelationFilter, LocalizacaoWhereInput> | null
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servicosRealizados?: ServicoRealizadoListRelationFilter
    contatosWhatsapp?: ContatoWhatsappListRelationFilter
    portfolio?: PortfolioListRelationFilter
  }, "id">

  export type ServicoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeNegocio?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrderInput | SortOrder
    disponivel?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrderInput | SortOrder
    localizacaoId?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: ServicoCountOrderByAggregateInput
    _avg?: ServicoAvgOrderByAggregateInput
    _max?: ServicoMaxOrderByAggregateInput
    _min?: ServicoMinOrderByAggregateInput
    _sum?: ServicoSumOrderByAggregateInput
  }

  export type ServicoScalarWhereWithAggregatesInput = {
    AND?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    OR?: ServicoScalarWhereWithAggregatesInput[]
    NOT?: ServicoScalarWhereWithAggregatesInput | ServicoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Servico"> | number
    nomeNegocio?: StringWithAggregatesFilter<"Servico"> | string
    descricao?: StringWithAggregatesFilter<"Servico"> | string
    imagem?: StringNullableWithAggregatesFilter<"Servico"> | string | null
    disponivel?: BoolWithAggregatesFilter<"Servico"> | boolean
    usuarioId?: IntWithAggregatesFilter<"Servico"> | number
    categoriaId?: IntNullableWithAggregatesFilter<"Servico"> | number | null
    localizacaoId?: IntNullableWithAggregatesFilter<"Servico"> | number | null
    criadoEm?: DateTimeWithAggregatesFilter<"Servico"> | Date | string
  }

  export type CategoriaWhereInput = {
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nomeServico?: StringFilter<"Categoria"> | string
    criadoEm?: DateTimeFilter<"Categoria"> | Date | string
    atualizadoEm?: DateTimeFilter<"Categoria"> | Date | string
    segmentoId?: IntNullableFilter<"Categoria"> | number | null
    segmento?: XOR<SegmentoNullableScalarRelationFilter, SegmentoWhereInput> | null
    servicos?: ServicoListRelationFilter
  }

  export type CategoriaOrderByWithRelationInput = {
    id?: SortOrder
    nomeServico?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    segmentoId?: SortOrderInput | SortOrder
    segmento?: SegmentoOrderByWithRelationInput
    servicos?: ServicoOrderByRelationAggregateInput
  }

  export type CategoriaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nomeServico?: string
    AND?: CategoriaWhereInput | CategoriaWhereInput[]
    OR?: CategoriaWhereInput[]
    NOT?: CategoriaWhereInput | CategoriaWhereInput[]
    criadoEm?: DateTimeFilter<"Categoria"> | Date | string
    atualizadoEm?: DateTimeFilter<"Categoria"> | Date | string
    segmentoId?: IntNullableFilter<"Categoria"> | number | null
    segmento?: XOR<SegmentoNullableScalarRelationFilter, SegmentoWhereInput> | null
    servicos?: ServicoListRelationFilter
  }, "id" | "nomeServico">

  export type CategoriaOrderByWithAggregationInput = {
    id?: SortOrder
    nomeServico?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    segmentoId?: SortOrderInput | SortOrder
    _count?: CategoriaCountOrderByAggregateInput
    _avg?: CategoriaAvgOrderByAggregateInput
    _max?: CategoriaMaxOrderByAggregateInput
    _min?: CategoriaMinOrderByAggregateInput
    _sum?: CategoriaSumOrderByAggregateInput
  }

  export type CategoriaScalarWhereWithAggregatesInput = {
    AND?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    OR?: CategoriaScalarWhereWithAggregatesInput[]
    NOT?: CategoriaScalarWhereWithAggregatesInput | CategoriaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Categoria"> | number
    nomeServico?: StringWithAggregatesFilter<"Categoria"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Categoria"> | Date | string
    segmentoId?: IntNullableWithAggregatesFilter<"Categoria"> | number | null
  }

  export type AvaliacaoWhereInput = {
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    star?: IntFilter<"Avaliacao"> | number
    descricao?: StringFilter<"Avaliacao"> | string
    servicoId?: IntFilter<"Avaliacao"> | number
    usuarioId?: IntFilter<"Avaliacao"> | number
    criadoEm?: DateTimeFilter<"Avaliacao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Avaliacao"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type AvaliacaoOrderByWithRelationInput = {
    id?: SortOrder
    star?: SortOrder
    descricao?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    servico?: ServicoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type AvaliacaoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    OR?: AvaliacaoWhereInput[]
    NOT?: AvaliacaoWhereInput | AvaliacaoWhereInput[]
    star?: IntFilter<"Avaliacao"> | number
    descricao?: StringFilter<"Avaliacao"> | string
    servicoId?: IntFilter<"Avaliacao"> | number
    usuarioId?: IntFilter<"Avaliacao"> | number
    criadoEm?: DateTimeFilter<"Avaliacao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Avaliacao"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type AvaliacaoOrderByWithAggregationInput = {
    id?: SortOrder
    star?: SortOrder
    descricao?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: AvaliacaoCountOrderByAggregateInput
    _avg?: AvaliacaoAvgOrderByAggregateInput
    _max?: AvaliacaoMaxOrderByAggregateInput
    _min?: AvaliacaoMinOrderByAggregateInput
    _sum?: AvaliacaoSumOrderByAggregateInput
  }

  export type AvaliacaoScalarWhereWithAggregatesInput = {
    AND?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    OR?: AvaliacaoScalarWhereWithAggregatesInput[]
    NOT?: AvaliacaoScalarWhereWithAggregatesInput | AvaliacaoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Avaliacao"> | number
    star?: IntWithAggregatesFilter<"Avaliacao"> | number
    descricao?: StringWithAggregatesFilter<"Avaliacao"> | string
    servicoId?: IntWithAggregatesFilter<"Avaliacao"> | number
    usuarioId?: IntWithAggregatesFilter<"Avaliacao"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Avaliacao"> | Date | string
  }

  export type PrecoWhereInput = {
    AND?: PrecoWhereInput | PrecoWhereInput[]
    OR?: PrecoWhereInput[]
    NOT?: PrecoWhereInput | PrecoWhereInput[]
    id?: IntFilter<"Preco"> | number
    nomeservico?: StringFilter<"Preco"> | string
    precificacao?: FloatFilter<"Preco"> | number
    servicoId?: IntFilter<"Preco"> | number
    criadoEm?: DateTimeFilter<"Preco"> | Date | string
    atualizadoEm?: DateTimeFilter<"Preco"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }

  export type PrecoOrderByWithRelationInput = {
    id?: SortOrder
    nomeservico?: SortOrder
    precificacao?: SortOrder
    servicoId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    servico?: ServicoOrderByWithRelationInput
  }

  export type PrecoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PrecoWhereInput | PrecoWhereInput[]
    OR?: PrecoWhereInput[]
    NOT?: PrecoWhereInput | PrecoWhereInput[]
    nomeservico?: StringFilter<"Preco"> | string
    precificacao?: FloatFilter<"Preco"> | number
    servicoId?: IntFilter<"Preco"> | number
    criadoEm?: DateTimeFilter<"Preco"> | Date | string
    atualizadoEm?: DateTimeFilter<"Preco"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }, "id">

  export type PrecoOrderByWithAggregationInput = {
    id?: SortOrder
    nomeservico?: SortOrder
    precificacao?: SortOrder
    servicoId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    _count?: PrecoCountOrderByAggregateInput
    _avg?: PrecoAvgOrderByAggregateInput
    _max?: PrecoMaxOrderByAggregateInput
    _min?: PrecoMinOrderByAggregateInput
    _sum?: PrecoSumOrderByAggregateInput
  }

  export type PrecoScalarWhereWithAggregatesInput = {
    AND?: PrecoScalarWhereWithAggregatesInput | PrecoScalarWhereWithAggregatesInput[]
    OR?: PrecoScalarWhereWithAggregatesInput[]
    NOT?: PrecoScalarWhereWithAggregatesInput | PrecoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Preco"> | number
    nomeservico?: StringWithAggregatesFilter<"Preco"> | string
    precificacao?: FloatWithAggregatesFilter<"Preco"> | number
    servicoId?: IntWithAggregatesFilter<"Preco"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"Preco"> | Date | string
    atualizadoEm?: DateTimeWithAggregatesFilter<"Preco"> | Date | string
  }

  export type ResetTokenWhereInput = {
    AND?: ResetTokenWhereInput | ResetTokenWhereInput[]
    OR?: ResetTokenWhereInput[]
    NOT?: ResetTokenWhereInput | ResetTokenWhereInput[]
    id?: IntFilter<"ResetToken"> | number
    token?: StringFilter<"ResetToken"> | string
    createdAt?: DateTimeFilter<"ResetToken"> | Date | string
    expiresAt?: DateTimeFilter<"ResetToken"> | Date | string
    usuarioId?: IntFilter<"ResetToken"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type ResetTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    usuarioId?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type ResetTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: ResetTokenWhereInput | ResetTokenWhereInput[]
    OR?: ResetTokenWhereInput[]
    NOT?: ResetTokenWhereInput | ResetTokenWhereInput[]
    createdAt?: DateTimeFilter<"ResetToken"> | Date | string
    expiresAt?: DateTimeFilter<"ResetToken"> | Date | string
    usuarioId?: IntFilter<"ResetToken"> | number
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id" | "token">

  export type ResetTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    usuarioId?: SortOrder
    _count?: ResetTokenCountOrderByAggregateInput
    _avg?: ResetTokenAvgOrderByAggregateInput
    _max?: ResetTokenMaxOrderByAggregateInput
    _min?: ResetTokenMinOrderByAggregateInput
    _sum?: ResetTokenSumOrderByAggregateInput
  }

  export type ResetTokenScalarWhereWithAggregatesInput = {
    AND?: ResetTokenScalarWhereWithAggregatesInput | ResetTokenScalarWhereWithAggregatesInput[]
    OR?: ResetTokenScalarWhereWithAggregatesInput[]
    NOT?: ResetTokenScalarWhereWithAggregatesInput | ResetTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ResetToken"> | number
    token?: StringWithAggregatesFilter<"ResetToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ResetToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"ResetToken"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"ResetToken"> | number
  }

  export type ServicoRealizadoWhereInput = {
    AND?: ServicoRealizadoWhereInput | ServicoRealizadoWhereInput[]
    OR?: ServicoRealizadoWhereInput[]
    NOT?: ServicoRealizadoWhereInput | ServicoRealizadoWhereInput[]
    id?: IntFilter<"ServicoRealizado"> | number
    usuarioId?: IntFilter<"ServicoRealizado"> | number
    servicoId?: IntFilter<"ServicoRealizado"> | number
    confirmado?: BoolNullableFilter<"ServicoRealizado"> | boolean | null
    respondidoEm?: DateTimeNullableFilter<"ServicoRealizado"> | Date | string | null
    realizadoEm?: DateTimeFilter<"ServicoRealizado"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }

  export type ServicoRealizadoOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    confirmado?: SortOrderInput | SortOrder
    respondidoEm?: SortOrderInput | SortOrder
    realizadoEm?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    servico?: ServicoOrderByWithRelationInput
  }

  export type ServicoRealizadoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_servicoId?: ServicoRealizadoUsuarioIdServicoIdCompoundUniqueInput
    AND?: ServicoRealizadoWhereInput | ServicoRealizadoWhereInput[]
    OR?: ServicoRealizadoWhereInput[]
    NOT?: ServicoRealizadoWhereInput | ServicoRealizadoWhereInput[]
    usuarioId?: IntFilter<"ServicoRealizado"> | number
    servicoId?: IntFilter<"ServicoRealizado"> | number
    confirmado?: BoolNullableFilter<"ServicoRealizado"> | boolean | null
    respondidoEm?: DateTimeNullableFilter<"ServicoRealizado"> | Date | string | null
    realizadoEm?: DateTimeFilter<"ServicoRealizado"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }, "id" | "usuarioId_servicoId">

  export type ServicoRealizadoOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    confirmado?: SortOrderInput | SortOrder
    respondidoEm?: SortOrderInput | SortOrder
    realizadoEm?: SortOrder
    _count?: ServicoRealizadoCountOrderByAggregateInput
    _avg?: ServicoRealizadoAvgOrderByAggregateInput
    _max?: ServicoRealizadoMaxOrderByAggregateInput
    _min?: ServicoRealizadoMinOrderByAggregateInput
    _sum?: ServicoRealizadoSumOrderByAggregateInput
  }

  export type ServicoRealizadoScalarWhereWithAggregatesInput = {
    AND?: ServicoRealizadoScalarWhereWithAggregatesInput | ServicoRealizadoScalarWhereWithAggregatesInput[]
    OR?: ServicoRealizadoScalarWhereWithAggregatesInput[]
    NOT?: ServicoRealizadoScalarWhereWithAggregatesInput | ServicoRealizadoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ServicoRealizado"> | number
    usuarioId?: IntWithAggregatesFilter<"ServicoRealizado"> | number
    servicoId?: IntWithAggregatesFilter<"ServicoRealizado"> | number
    confirmado?: BoolNullableWithAggregatesFilter<"ServicoRealizado"> | boolean | null
    respondidoEm?: DateTimeNullableWithAggregatesFilter<"ServicoRealizado"> | Date | string | null
    realizadoEm?: DateTimeWithAggregatesFilter<"ServicoRealizado"> | Date | string
  }

  export type ContatoWhatsappWhereInput = {
    AND?: ContatoWhatsappWhereInput | ContatoWhatsappWhereInput[]
    OR?: ContatoWhatsappWhereInput[]
    NOT?: ContatoWhatsappWhereInput | ContatoWhatsappWhereInput[]
    id?: IntFilter<"ContatoWhatsapp"> | number
    usuarioId?: IntFilter<"ContatoWhatsapp"> | number
    servicoId?: IntFilter<"ContatoWhatsapp"> | number
    clicadoEm?: DateTimeFilter<"ContatoWhatsapp"> | Date | string
    perguntado?: BoolFilter<"ContatoWhatsapp"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }

  export type ContatoWhatsappOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    clicadoEm?: SortOrder
    perguntado?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    servico?: ServicoOrderByWithRelationInput
  }

  export type ContatoWhatsappWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    usuarioId_servicoId?: ContatoWhatsappUsuarioIdServicoIdCompoundUniqueInput
    AND?: ContatoWhatsappWhereInput | ContatoWhatsappWhereInput[]
    OR?: ContatoWhatsappWhereInput[]
    NOT?: ContatoWhatsappWhereInput | ContatoWhatsappWhereInput[]
    usuarioId?: IntFilter<"ContatoWhatsapp"> | number
    servicoId?: IntFilter<"ContatoWhatsapp"> | number
    clicadoEm?: DateTimeFilter<"ContatoWhatsapp"> | Date | string
    perguntado?: BoolFilter<"ContatoWhatsapp"> | boolean
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
  }, "id" | "usuarioId_servicoId">

  export type ContatoWhatsappOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    clicadoEm?: SortOrder
    perguntado?: SortOrder
    _count?: ContatoWhatsappCountOrderByAggregateInput
    _avg?: ContatoWhatsappAvgOrderByAggregateInput
    _max?: ContatoWhatsappMaxOrderByAggregateInput
    _min?: ContatoWhatsappMinOrderByAggregateInput
    _sum?: ContatoWhatsappSumOrderByAggregateInput
  }

  export type ContatoWhatsappScalarWhereWithAggregatesInput = {
    AND?: ContatoWhatsappScalarWhereWithAggregatesInput | ContatoWhatsappScalarWhereWithAggregatesInput[]
    OR?: ContatoWhatsappScalarWhereWithAggregatesInput[]
    NOT?: ContatoWhatsappScalarWhereWithAggregatesInput | ContatoWhatsappScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContatoWhatsapp"> | number
    usuarioId?: IntWithAggregatesFilter<"ContatoWhatsapp"> | number
    servicoId?: IntWithAggregatesFilter<"ContatoWhatsapp"> | number
    clicadoEm?: DateTimeWithAggregatesFilter<"ContatoWhatsapp"> | Date | string
    perguntado?: BoolWithAggregatesFilter<"ContatoWhatsapp"> | boolean
  }

  export type SegmentoWhereInput = {
    AND?: SegmentoWhereInput | SegmentoWhereInput[]
    OR?: SegmentoWhereInput[]
    NOT?: SegmentoWhereInput | SegmentoWhereInput[]
    id?: IntFilter<"Segmento"> | number
    nome?: StringFilter<"Segmento"> | string
    icone?: StringNullableFilter<"Segmento"> | string | null
    criadoEm?: DateTimeFilter<"Segmento"> | Date | string
    categorias?: CategoriaListRelationFilter
  }

  export type SegmentoOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    icone?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    categorias?: CategoriaOrderByRelationAggregateInput
  }

  export type SegmentoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nome?: string
    AND?: SegmentoWhereInput | SegmentoWhereInput[]
    OR?: SegmentoWhereInput[]
    NOT?: SegmentoWhereInput | SegmentoWhereInput[]
    icone?: StringNullableFilter<"Segmento"> | string | null
    criadoEm?: DateTimeFilter<"Segmento"> | Date | string
    categorias?: CategoriaListRelationFilter
  }, "id" | "nome">

  export type SegmentoOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    icone?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: SegmentoCountOrderByAggregateInput
    _avg?: SegmentoAvgOrderByAggregateInput
    _max?: SegmentoMaxOrderByAggregateInput
    _min?: SegmentoMinOrderByAggregateInput
    _sum?: SegmentoSumOrderByAggregateInput
  }

  export type SegmentoScalarWhereWithAggregatesInput = {
    AND?: SegmentoScalarWhereWithAggregatesInput | SegmentoScalarWhereWithAggregatesInput[]
    OR?: SegmentoScalarWhereWithAggregatesInput[]
    NOT?: SegmentoScalarWhereWithAggregatesInput | SegmentoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Segmento"> | number
    nome?: StringWithAggregatesFilter<"Segmento"> | string
    icone?: StringNullableWithAggregatesFilter<"Segmento"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Segmento"> | Date | string
  }

  export type PortfolioWhereInput = {
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    id?: IntFilter<"Portfolio"> | number
    url?: StringFilter<"Portfolio"> | string
    servicoId?: IntFilter<"Portfolio"> | number
    usuarioId?: IntFilter<"Portfolio"> | number
    criadoEm?: DateTimeFilter<"Portfolio"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }

  export type PortfolioOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    servico?: ServicoOrderByWithRelationInput
    usuario?: UsuarioOrderByWithRelationInput
  }

  export type PortfolioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PortfolioWhereInput | PortfolioWhereInput[]
    OR?: PortfolioWhereInput[]
    NOT?: PortfolioWhereInput | PortfolioWhereInput[]
    url?: StringFilter<"Portfolio"> | string
    servicoId?: IntFilter<"Portfolio"> | number
    usuarioId?: IntFilter<"Portfolio"> | number
    criadoEm?: DateTimeFilter<"Portfolio"> | Date | string
    servico?: XOR<ServicoScalarRelationFilter, ServicoWhereInput>
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
  }, "id">

  export type PortfolioOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    _count?: PortfolioCountOrderByAggregateInput
    _avg?: PortfolioAvgOrderByAggregateInput
    _max?: PortfolioMaxOrderByAggregateInput
    _min?: PortfolioMinOrderByAggregateInput
    _sum?: PortfolioSumOrderByAggregateInput
  }

  export type PortfolioScalarWhereWithAggregatesInput = {
    AND?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    OR?: PortfolioScalarWhereWithAggregatesInput[]
    NOT?: PortfolioScalarWhereWithAggregatesInput | PortfolioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Portfolio"> | number
    url?: StringWithAggregatesFilter<"Portfolio"> | string
    servicoId?: IntWithAggregatesFilter<"Portfolio"> | number
    usuarioId?: IntWithAggregatesFilter<"Portfolio"> | number
    criadoEm?: DateTimeWithAggregatesFilter<"Portfolio"> | Date | string
  }

  export type UsuarioCreateInput = {
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    servicos?: ServicoCreateNestedManyWithoutUsuarioInput
    resetTokens?: ResetTokenCreateNestedManyWithoutUsuarioInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutUsuarioInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutUsuarioInput
    portfolio?: PortfolioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    servicos?: ServicoUncheckedCreateNestedManyWithoutUsuarioInput
    resetTokens?: ResetTokenUncheckedCreateNestedManyWithoutUsuarioInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutUsuarioInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutUsuarioInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    servicos?: ServicoUpdateManyWithoutUsuarioNestedInput
    resetTokens?: ResetTokenUpdateManyWithoutUsuarioNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutUsuarioNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutUsuarioNestedInput
    portfolio?: PortfolioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    servicos?: ServicoUncheckedUpdateManyWithoutUsuarioNestedInput
    resetTokens?: ResetTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutUsuarioNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutUsuarioNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoCreateInput = {
    numero: string
    bairro: string
    cidade: string
    estado: string
    criadoEm?: Date | string
    servico?: ServicoCreateNestedManyWithoutLocalizacaoInput
  }

  export type LocalizacaoUncheckedCreateInput = {
    id?: number
    numero: string
    bairro: string
    cidade: string
    estado: string
    criadoEm?: Date | string
    servico?: ServicoUncheckedCreateNestedManyWithoutLocalizacaoInput
  }

  export type LocalizacaoUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateManyWithoutLocalizacaoNestedInput
  }

  export type LocalizacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUncheckedUpdateManyWithoutLocalizacaoNestedInput
  }

  export type LocalizacaoCreateManyInput = {
    id?: number
    numero: string
    bairro: string
    cidade: string
    estado: string
    criadoEm?: Date | string
  }

  export type LocalizacaoUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoCreateInput = {
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutServicoInput
    preco?: PrecoCreateNestedManyWithoutServicoInput
    categoria?: CategoriaCreateNestedOneWithoutServicosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutServicoInput
    usuario: UsuarioCreateNestedOneWithoutServicosInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    usuarioId: number
    categoriaId?: number | null
    localizacaoId?: number | null
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutServicoInput
    preco?: PrecoUncheckedCreateNestedManyWithoutServicoInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoUpdateInput = {
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutServicoNestedInput
    preco?: PrecoUpdateManyWithoutServicoNestedInput
    categoria?: CategoriaUpdateOneWithoutServicosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutServicoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutServicosNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    localizacaoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutServicoNestedInput
    preco?: PrecoUncheckedUpdateManyWithoutServicoNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type ServicoCreateManyInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    usuarioId: number
    categoriaId?: number | null
    localizacaoId?: number | null
    criadoEm?: Date | string
  }

  export type ServicoUpdateManyMutationInput = {
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    localizacaoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateInput = {
    nomeServico: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    segmento?: SegmentoCreateNestedOneWithoutCategoriasInput
    servicos?: ServicoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateInput = {
    id?: number
    nomeServico: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    segmentoId?: number | null
    servicos?: ServicoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUpdateInput = {
    nomeServico?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    segmento?: SegmentoUpdateOneWithoutCategoriasNestedInput
    servicos?: ServicoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeServico?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    segmentoId?: NullableIntFieldUpdateOperationsInput | number | null
    servicos?: ServicoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaCreateManyInput = {
    id?: number
    nomeServico: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    segmentoId?: number | null
  }

  export type CategoriaUpdateManyMutationInput = {
    nomeServico?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeServico?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    segmentoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AvaliacaoCreateInput = {
    star: number
    descricao: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    servico: ServicoCreateNestedOneWithoutAvaliacaoInput
    usuario: UsuarioCreateNestedOneWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateInput = {
    id?: number
    star: number
    descricao: string
    servicoId: number
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AvaliacaoUpdateInput = {
    star?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateOneRequiredWithoutAvaliacaoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    star?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    servicoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoCreateManyInput = {
    id?: number
    star: number
    descricao: string
    servicoId: number
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AvaliacaoUpdateManyMutationInput = {
    star?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    star?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    servicoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrecoCreateInput = {
    nomeservico: string
    precificacao: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    servico: ServicoCreateNestedOneWithoutPrecoInput
  }

  export type PrecoUncheckedCreateInput = {
    id?: number
    nomeservico: string
    precificacao: number
    servicoId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PrecoUpdateInput = {
    nomeservico?: StringFieldUpdateOperationsInput | string
    precificacao?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateOneRequiredWithoutPrecoNestedInput
  }

  export type PrecoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeservico?: StringFieldUpdateOperationsInput | string
    precificacao?: FloatFieldUpdateOperationsInput | number
    servicoId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrecoCreateManyInput = {
    id?: number
    nomeservico: string
    precificacao: number
    servicoId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PrecoUpdateManyMutationInput = {
    nomeservico?: StringFieldUpdateOperationsInput | string
    precificacao?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrecoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeservico?: StringFieldUpdateOperationsInput | string
    precificacao?: FloatFieldUpdateOperationsInput | number
    servicoId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTokenCreateInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    usuario: UsuarioCreateNestedOneWithoutResetTokensInput
  }

  export type ResetTokenUncheckedCreateInput = {
    id?: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    usuarioId: number
  }

  export type ResetTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutResetTokensNestedInput
  }

  export type ResetTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ResetTokenCreateManyInput = {
    id?: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    usuarioId: number
  }

  export type ResetTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ServicoRealizadoCreateInput = {
    confirmado?: boolean | null
    respondidoEm?: Date | string | null
    realizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutServicosRealizadosInput
    servico: ServicoCreateNestedOneWithoutServicosRealizadosInput
  }

  export type ServicoRealizadoUncheckedCreateInput = {
    id?: number
    usuarioId: number
    servicoId: number
    confirmado?: boolean | null
    respondidoEm?: Date | string | null
    realizadoEm?: Date | string
  }

  export type ServicoRealizadoUpdateInput = {
    confirmado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respondidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutServicosRealizadosNestedInput
    servico?: ServicoUpdateOneRequiredWithoutServicosRealizadosNestedInput
  }

  export type ServicoRealizadoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    servicoId?: IntFieldUpdateOperationsInput | number
    confirmado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respondidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoRealizadoCreateManyInput = {
    id?: number
    usuarioId: number
    servicoId: number
    confirmado?: boolean | null
    respondidoEm?: Date | string | null
    realizadoEm?: Date | string
  }

  export type ServicoRealizadoUpdateManyMutationInput = {
    confirmado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respondidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoRealizadoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    servicoId?: IntFieldUpdateOperationsInput | number
    confirmado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respondidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContatoWhatsappCreateInput = {
    clicadoEm?: Date | string
    perguntado?: boolean
    usuario: UsuarioCreateNestedOneWithoutContatosWhatsappInput
    servico: ServicoCreateNestedOneWithoutContatosWhatsappInput
  }

  export type ContatoWhatsappUncheckedCreateInput = {
    id?: number
    usuarioId: number
    servicoId: number
    clicadoEm?: Date | string
    perguntado?: boolean
  }

  export type ContatoWhatsappUpdateInput = {
    clicadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntado?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutContatosWhatsappNestedInput
    servico?: ServicoUpdateOneRequiredWithoutContatosWhatsappNestedInput
  }

  export type ContatoWhatsappUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    servicoId?: IntFieldUpdateOperationsInput | number
    clicadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContatoWhatsappCreateManyInput = {
    id?: number
    usuarioId: number
    servicoId: number
    clicadoEm?: Date | string
    perguntado?: boolean
  }

  export type ContatoWhatsappUpdateManyMutationInput = {
    clicadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContatoWhatsappUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    servicoId?: IntFieldUpdateOperationsInput | number
    clicadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SegmentoCreateInput = {
    nome: string
    icone?: string | null
    criadoEm?: Date | string
    categorias?: CategoriaCreateNestedManyWithoutSegmentoInput
  }

  export type SegmentoUncheckedCreateInput = {
    id?: number
    nome: string
    icone?: string | null
    criadoEm?: Date | string
    categorias?: CategoriaUncheckedCreateNestedManyWithoutSegmentoInput
  }

  export type SegmentoUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: CategoriaUpdateManyWithoutSegmentoNestedInput
  }

  export type SegmentoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    categorias?: CategoriaUncheckedUpdateManyWithoutSegmentoNestedInput
  }

  export type SegmentoCreateManyInput = {
    id?: number
    nome: string
    icone?: string | null
    criadoEm?: Date | string
  }

  export type SegmentoUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SegmentoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCreateInput = {
    url: string
    criadoEm?: Date | string
    servico: ServicoCreateNestedOneWithoutPortfolioInput
    usuario: UsuarioCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateInput = {
    id?: number
    url: string
    servicoId: number
    usuarioId: number
    criadoEm?: Date | string
  }

  export type PortfolioUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateOneRequiredWithoutPortfolioNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    servicoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioCreateManyInput = {
    id?: number
    url: string
    servicoId: number
    usuarioId: number
    criadoEm?: Date | string
  }

  export type PortfolioUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    servicoId?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AvaliacaoListRelationFilter = {
    every?: AvaliacaoWhereInput
    some?: AvaliacaoWhereInput
    none?: AvaliacaoWhereInput
  }

  export type ServicoListRelationFilter = {
    every?: ServicoWhereInput
    some?: ServicoWhereInput
    none?: ServicoWhereInput
  }

  export type ResetTokenListRelationFilter = {
    every?: ResetTokenWhereInput
    some?: ResetTokenWhereInput
    none?: ResetTokenWhereInput
  }

  export type ServicoRealizadoListRelationFilter = {
    every?: ServicoRealizadoWhereInput
    some?: ServicoRealizadoWhereInput
    none?: ServicoRealizadoWhereInput
  }

  export type ContatoWhatsappListRelationFilter = {
    every?: ContatoWhatsappWhereInput
    some?: ContatoWhatsappWhereInput
    none?: ContatoWhatsappWhereInput
  }

  export type PortfolioListRelationFilter = {
    every?: PortfolioWhereInput
    some?: PortfolioWhereInput
    none?: PortfolioWhereInput
  }

  export type AvaliacaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResetTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicoRealizadoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContatoWhatsappOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    endereco?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    endereco?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefone?: SortOrder
    estado?: SortOrder
    cidade?: SortOrder
    endereco?: SortOrder
    senha?: SortOrder
    criadoEm?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type LocalizacaoCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
  }

  export type LocalizacaoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LocalizacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
  }

  export type LocalizacaoMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    bairro?: SortOrder
    cidade?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
  }

  export type LocalizacaoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type PrecoListRelationFilter = {
    every?: PrecoWhereInput
    some?: PrecoWhereInput
    none?: PrecoWhereInput
  }

  export type CategoriaNullableScalarRelationFilter = {
    is?: CategoriaWhereInput | null
    isNot?: CategoriaWhereInput | null
  }

  export type LocalizacaoNullableScalarRelationFilter = {
    is?: LocalizacaoWhereInput | null
    isNot?: LocalizacaoWhereInput | null
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PrecoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServicoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeNegocio?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    disponivel?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
    localizacaoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type ServicoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
    localizacaoId?: SortOrder
  }

  export type ServicoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeNegocio?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    disponivel?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
    localizacaoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type ServicoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeNegocio?: SortOrder
    descricao?: SortOrder
    imagem?: SortOrder
    disponivel?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
    localizacaoId?: SortOrder
    criadoEm?: SortOrder
  }

  export type ServicoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    categoriaId?: SortOrder
    localizacaoId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SegmentoNullableScalarRelationFilter = {
    is?: SegmentoWhereInput | null
    isNot?: SegmentoWhereInput | null
  }

  export type CategoriaCountOrderByAggregateInput = {
    id?: SortOrder
    nomeServico?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    segmentoId?: SortOrder
  }

  export type CategoriaAvgOrderByAggregateInput = {
    id?: SortOrder
    segmentoId?: SortOrder
  }

  export type CategoriaMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeServico?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    segmentoId?: SortOrder
  }

  export type CategoriaMinOrderByAggregateInput = {
    id?: SortOrder
    nomeServico?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
    segmentoId?: SortOrder
  }

  export type CategoriaSumOrderByAggregateInput = {
    id?: SortOrder
    segmentoId?: SortOrder
  }

  export type ServicoScalarRelationFilter = {
    is?: ServicoWhereInput
    isNot?: ServicoWhereInput
  }

  export type AvaliacaoCountOrderByAggregateInput = {
    id?: SortOrder
    star?: SortOrder
    descricao?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type AvaliacaoAvgOrderByAggregateInput = {
    id?: SortOrder
    star?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type AvaliacaoMaxOrderByAggregateInput = {
    id?: SortOrder
    star?: SortOrder
    descricao?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type AvaliacaoMinOrderByAggregateInput = {
    id?: SortOrder
    star?: SortOrder
    descricao?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type AvaliacaoSumOrderByAggregateInput = {
    id?: SortOrder
    star?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PrecoCountOrderByAggregateInput = {
    id?: SortOrder
    nomeservico?: SortOrder
    precificacao?: SortOrder
    servicoId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PrecoAvgOrderByAggregateInput = {
    id?: SortOrder
    precificacao?: SortOrder
    servicoId?: SortOrder
  }

  export type PrecoMaxOrderByAggregateInput = {
    id?: SortOrder
    nomeservico?: SortOrder
    precificacao?: SortOrder
    servicoId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PrecoMinOrderByAggregateInput = {
    id?: SortOrder
    nomeservico?: SortOrder
    precificacao?: SortOrder
    servicoId?: SortOrder
    criadoEm?: SortOrder
    atualizadoEm?: SortOrder
  }

  export type PrecoSumOrderByAggregateInput = {
    id?: SortOrder
    precificacao?: SortOrder
    servicoId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ResetTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type ResetTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type ResetTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type ResetTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    usuarioId?: SortOrder
  }

  export type ResetTokenSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ServicoRealizadoUsuarioIdServicoIdCompoundUniqueInput = {
    usuarioId: number
    servicoId: number
  }

  export type ServicoRealizadoCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    confirmado?: SortOrder
    respondidoEm?: SortOrder
    realizadoEm?: SortOrder
  }

  export type ServicoRealizadoAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
  }

  export type ServicoRealizadoMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    confirmado?: SortOrder
    respondidoEm?: SortOrder
    realizadoEm?: SortOrder
  }

  export type ServicoRealizadoMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    confirmado?: SortOrder
    respondidoEm?: SortOrder
    realizadoEm?: SortOrder
  }

  export type ServicoRealizadoSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ContatoWhatsappUsuarioIdServicoIdCompoundUniqueInput = {
    usuarioId: number
    servicoId: number
  }

  export type ContatoWhatsappCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    clicadoEm?: SortOrder
    perguntado?: SortOrder
  }

  export type ContatoWhatsappAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
  }

  export type ContatoWhatsappMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    clicadoEm?: SortOrder
    perguntado?: SortOrder
  }

  export type ContatoWhatsappMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
    clicadoEm?: SortOrder
    perguntado?: SortOrder
  }

  export type ContatoWhatsappSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    servicoId?: SortOrder
  }

  export type CategoriaListRelationFilter = {
    every?: CategoriaWhereInput
    some?: CategoriaWhereInput
    none?: CategoriaWhereInput
  }

  export type CategoriaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SegmentoCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    icone?: SortOrder
    criadoEm?: SortOrder
  }

  export type SegmentoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SegmentoMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    icone?: SortOrder
    criadoEm?: SortOrder
  }

  export type SegmentoMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    icone?: SortOrder
    criadoEm?: SortOrder
  }

  export type SegmentoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PortfolioCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type PortfolioAvgOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type PortfolioMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type PortfolioMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
    criadoEm?: SortOrder
  }

  export type PortfolioSumOrderByAggregateInput = {
    id?: SortOrder
    servicoId?: SortOrder
    usuarioId?: SortOrder
  }

  export type AvaliacaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type ServicoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ServicoCreateWithoutUsuarioInput, ServicoUncheckedCreateWithoutUsuarioInput> | ServicoCreateWithoutUsuarioInput[] | ServicoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutUsuarioInput | ServicoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ServicoCreateManyUsuarioInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type ResetTokenCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ResetTokenCreateWithoutUsuarioInput, ResetTokenUncheckedCreateWithoutUsuarioInput> | ResetTokenCreateWithoutUsuarioInput[] | ResetTokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ResetTokenCreateOrConnectWithoutUsuarioInput | ResetTokenCreateOrConnectWithoutUsuarioInput[]
    createMany?: ResetTokenCreateManyUsuarioInputEnvelope
    connect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
  }

  export type ServicoRealizadoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ServicoRealizadoCreateWithoutUsuarioInput, ServicoRealizadoUncheckedCreateWithoutUsuarioInput> | ServicoRealizadoCreateWithoutUsuarioInput[] | ServicoRealizadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ServicoRealizadoCreateOrConnectWithoutUsuarioInput | ServicoRealizadoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ServicoRealizadoCreateManyUsuarioInputEnvelope
    connect?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
  }

  export type ContatoWhatsappCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ContatoWhatsappCreateWithoutUsuarioInput, ContatoWhatsappUncheckedCreateWithoutUsuarioInput> | ContatoWhatsappCreateWithoutUsuarioInput[] | ContatoWhatsappUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ContatoWhatsappCreateOrConnectWithoutUsuarioInput | ContatoWhatsappCreateOrConnectWithoutUsuarioInput[]
    createMany?: ContatoWhatsappCreateManyUsuarioInputEnvelope
    connect?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
  }

  export type PortfolioCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PortfolioCreateWithoutUsuarioInput, PortfolioUncheckedCreateWithoutUsuarioInput> | PortfolioCreateWithoutUsuarioInput[] | PortfolioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUsuarioInput | PortfolioCreateOrConnectWithoutUsuarioInput[]
    createMany?: PortfolioCreateManyUsuarioInputEnvelope
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type ServicoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ServicoCreateWithoutUsuarioInput, ServicoUncheckedCreateWithoutUsuarioInput> | ServicoCreateWithoutUsuarioInput[] | ServicoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutUsuarioInput | ServicoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ServicoCreateManyUsuarioInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type ResetTokenUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ResetTokenCreateWithoutUsuarioInput, ResetTokenUncheckedCreateWithoutUsuarioInput> | ResetTokenCreateWithoutUsuarioInput[] | ResetTokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ResetTokenCreateOrConnectWithoutUsuarioInput | ResetTokenCreateOrConnectWithoutUsuarioInput[]
    createMany?: ResetTokenCreateManyUsuarioInputEnvelope
    connect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
  }

  export type ServicoRealizadoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ServicoRealizadoCreateWithoutUsuarioInput, ServicoRealizadoUncheckedCreateWithoutUsuarioInput> | ServicoRealizadoCreateWithoutUsuarioInput[] | ServicoRealizadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ServicoRealizadoCreateOrConnectWithoutUsuarioInput | ServicoRealizadoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ServicoRealizadoCreateManyUsuarioInputEnvelope
    connect?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
  }

  export type ContatoWhatsappUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ContatoWhatsappCreateWithoutUsuarioInput, ContatoWhatsappUncheckedCreateWithoutUsuarioInput> | ContatoWhatsappCreateWithoutUsuarioInput[] | ContatoWhatsappUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ContatoWhatsappCreateOrConnectWithoutUsuarioInput | ContatoWhatsappCreateOrConnectWithoutUsuarioInput[]
    createMany?: ContatoWhatsappCreateManyUsuarioInputEnvelope
    connect?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
  }

  export type PortfolioUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<PortfolioCreateWithoutUsuarioInput, PortfolioUncheckedCreateWithoutUsuarioInput> | PortfolioCreateWithoutUsuarioInput[] | PortfolioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUsuarioInput | PortfolioCreateOrConnectWithoutUsuarioInput[]
    createMany?: PortfolioCreateManyUsuarioInputEnvelope
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AvaliacaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutUsuarioInput | AvaliacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type ServicoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ServicoCreateWithoutUsuarioInput, ServicoUncheckedCreateWithoutUsuarioInput> | ServicoCreateWithoutUsuarioInput[] | ServicoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutUsuarioInput | ServicoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutUsuarioInput | ServicoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ServicoCreateManyUsuarioInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutUsuarioInput | ServicoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutUsuarioInput | ServicoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type ResetTokenUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ResetTokenCreateWithoutUsuarioInput, ResetTokenUncheckedCreateWithoutUsuarioInput> | ResetTokenCreateWithoutUsuarioInput[] | ResetTokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ResetTokenCreateOrConnectWithoutUsuarioInput | ResetTokenCreateOrConnectWithoutUsuarioInput[]
    upsert?: ResetTokenUpsertWithWhereUniqueWithoutUsuarioInput | ResetTokenUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ResetTokenCreateManyUsuarioInputEnvelope
    set?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    disconnect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    delete?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    connect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    update?: ResetTokenUpdateWithWhereUniqueWithoutUsuarioInput | ResetTokenUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ResetTokenUpdateManyWithWhereWithoutUsuarioInput | ResetTokenUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ResetTokenScalarWhereInput | ResetTokenScalarWhereInput[]
  }

  export type ServicoRealizadoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ServicoRealizadoCreateWithoutUsuarioInput, ServicoRealizadoUncheckedCreateWithoutUsuarioInput> | ServicoRealizadoCreateWithoutUsuarioInput[] | ServicoRealizadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ServicoRealizadoCreateOrConnectWithoutUsuarioInput | ServicoRealizadoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ServicoRealizadoUpsertWithWhereUniqueWithoutUsuarioInput | ServicoRealizadoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ServicoRealizadoCreateManyUsuarioInputEnvelope
    set?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    disconnect?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    delete?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    connect?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    update?: ServicoRealizadoUpdateWithWhereUniqueWithoutUsuarioInput | ServicoRealizadoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ServicoRealizadoUpdateManyWithWhereWithoutUsuarioInput | ServicoRealizadoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ServicoRealizadoScalarWhereInput | ServicoRealizadoScalarWhereInput[]
  }

  export type ContatoWhatsappUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ContatoWhatsappCreateWithoutUsuarioInput, ContatoWhatsappUncheckedCreateWithoutUsuarioInput> | ContatoWhatsappCreateWithoutUsuarioInput[] | ContatoWhatsappUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ContatoWhatsappCreateOrConnectWithoutUsuarioInput | ContatoWhatsappCreateOrConnectWithoutUsuarioInput[]
    upsert?: ContatoWhatsappUpsertWithWhereUniqueWithoutUsuarioInput | ContatoWhatsappUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ContatoWhatsappCreateManyUsuarioInputEnvelope
    set?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    disconnect?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    delete?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    connect?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    update?: ContatoWhatsappUpdateWithWhereUniqueWithoutUsuarioInput | ContatoWhatsappUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ContatoWhatsappUpdateManyWithWhereWithoutUsuarioInput | ContatoWhatsappUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ContatoWhatsappScalarWhereInput | ContatoWhatsappScalarWhereInput[]
  }

  export type PortfolioUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PortfolioCreateWithoutUsuarioInput, PortfolioUncheckedCreateWithoutUsuarioInput> | PortfolioCreateWithoutUsuarioInput[] | PortfolioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUsuarioInput | PortfolioCreateOrConnectWithoutUsuarioInput[]
    upsert?: PortfolioUpsertWithWhereUniqueWithoutUsuarioInput | PortfolioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PortfolioCreateManyUsuarioInputEnvelope
    set?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    disconnect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    delete?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    update?: PortfolioUpdateWithWhereUniqueWithoutUsuarioInput | PortfolioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PortfolioUpdateManyWithWhereWithoutUsuarioInput | PortfolioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput> | AvaliacaoCreateWithoutUsuarioInput[] | AvaliacaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutUsuarioInput | AvaliacaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: AvaliacaoCreateManyUsuarioInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput | AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutUsuarioInput | AvaliacaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type ServicoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ServicoCreateWithoutUsuarioInput, ServicoUncheckedCreateWithoutUsuarioInput> | ServicoCreateWithoutUsuarioInput[] | ServicoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutUsuarioInput | ServicoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutUsuarioInput | ServicoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ServicoCreateManyUsuarioInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutUsuarioInput | ServicoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutUsuarioInput | ServicoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type ResetTokenUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ResetTokenCreateWithoutUsuarioInput, ResetTokenUncheckedCreateWithoutUsuarioInput> | ResetTokenCreateWithoutUsuarioInput[] | ResetTokenUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ResetTokenCreateOrConnectWithoutUsuarioInput | ResetTokenCreateOrConnectWithoutUsuarioInput[]
    upsert?: ResetTokenUpsertWithWhereUniqueWithoutUsuarioInput | ResetTokenUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ResetTokenCreateManyUsuarioInputEnvelope
    set?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    disconnect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    delete?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    connect?: ResetTokenWhereUniqueInput | ResetTokenWhereUniqueInput[]
    update?: ResetTokenUpdateWithWhereUniqueWithoutUsuarioInput | ResetTokenUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ResetTokenUpdateManyWithWhereWithoutUsuarioInput | ResetTokenUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ResetTokenScalarWhereInput | ResetTokenScalarWhereInput[]
  }

  export type ServicoRealizadoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ServicoRealizadoCreateWithoutUsuarioInput, ServicoRealizadoUncheckedCreateWithoutUsuarioInput> | ServicoRealizadoCreateWithoutUsuarioInput[] | ServicoRealizadoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ServicoRealizadoCreateOrConnectWithoutUsuarioInput | ServicoRealizadoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ServicoRealizadoUpsertWithWhereUniqueWithoutUsuarioInput | ServicoRealizadoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ServicoRealizadoCreateManyUsuarioInputEnvelope
    set?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    disconnect?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    delete?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    connect?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    update?: ServicoRealizadoUpdateWithWhereUniqueWithoutUsuarioInput | ServicoRealizadoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ServicoRealizadoUpdateManyWithWhereWithoutUsuarioInput | ServicoRealizadoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ServicoRealizadoScalarWhereInput | ServicoRealizadoScalarWhereInput[]
  }

  export type ContatoWhatsappUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ContatoWhatsappCreateWithoutUsuarioInput, ContatoWhatsappUncheckedCreateWithoutUsuarioInput> | ContatoWhatsappCreateWithoutUsuarioInput[] | ContatoWhatsappUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ContatoWhatsappCreateOrConnectWithoutUsuarioInput | ContatoWhatsappCreateOrConnectWithoutUsuarioInput[]
    upsert?: ContatoWhatsappUpsertWithWhereUniqueWithoutUsuarioInput | ContatoWhatsappUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ContatoWhatsappCreateManyUsuarioInputEnvelope
    set?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    disconnect?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    delete?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    connect?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    update?: ContatoWhatsappUpdateWithWhereUniqueWithoutUsuarioInput | ContatoWhatsappUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ContatoWhatsappUpdateManyWithWhereWithoutUsuarioInput | ContatoWhatsappUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ContatoWhatsappScalarWhereInput | ContatoWhatsappScalarWhereInput[]
  }

  export type PortfolioUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<PortfolioCreateWithoutUsuarioInput, PortfolioUncheckedCreateWithoutUsuarioInput> | PortfolioCreateWithoutUsuarioInput[] | PortfolioUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutUsuarioInput | PortfolioCreateOrConnectWithoutUsuarioInput[]
    upsert?: PortfolioUpsertWithWhereUniqueWithoutUsuarioInput | PortfolioUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: PortfolioCreateManyUsuarioInputEnvelope
    set?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    disconnect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    delete?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    update?: PortfolioUpdateWithWhereUniqueWithoutUsuarioInput | PortfolioUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: PortfolioUpdateManyWithWhereWithoutUsuarioInput | PortfolioUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
  }

  export type ServicoCreateNestedManyWithoutLocalizacaoInput = {
    create?: XOR<ServicoCreateWithoutLocalizacaoInput, ServicoUncheckedCreateWithoutLocalizacaoInput> | ServicoCreateWithoutLocalizacaoInput[] | ServicoUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutLocalizacaoInput | ServicoCreateOrConnectWithoutLocalizacaoInput[]
    createMany?: ServicoCreateManyLocalizacaoInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type ServicoUncheckedCreateNestedManyWithoutLocalizacaoInput = {
    create?: XOR<ServicoCreateWithoutLocalizacaoInput, ServicoUncheckedCreateWithoutLocalizacaoInput> | ServicoCreateWithoutLocalizacaoInput[] | ServicoUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutLocalizacaoInput | ServicoCreateOrConnectWithoutLocalizacaoInput[]
    createMany?: ServicoCreateManyLocalizacaoInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type ServicoUpdateManyWithoutLocalizacaoNestedInput = {
    create?: XOR<ServicoCreateWithoutLocalizacaoInput, ServicoUncheckedCreateWithoutLocalizacaoInput> | ServicoCreateWithoutLocalizacaoInput[] | ServicoUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutLocalizacaoInput | ServicoCreateOrConnectWithoutLocalizacaoInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutLocalizacaoInput | ServicoUpsertWithWhereUniqueWithoutLocalizacaoInput[]
    createMany?: ServicoCreateManyLocalizacaoInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutLocalizacaoInput | ServicoUpdateWithWhereUniqueWithoutLocalizacaoInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutLocalizacaoInput | ServicoUpdateManyWithWhereWithoutLocalizacaoInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type ServicoUncheckedUpdateManyWithoutLocalizacaoNestedInput = {
    create?: XOR<ServicoCreateWithoutLocalizacaoInput, ServicoUncheckedCreateWithoutLocalizacaoInput> | ServicoCreateWithoutLocalizacaoInput[] | ServicoUncheckedCreateWithoutLocalizacaoInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutLocalizacaoInput | ServicoCreateOrConnectWithoutLocalizacaoInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutLocalizacaoInput | ServicoUpsertWithWhereUniqueWithoutLocalizacaoInput[]
    createMany?: ServicoCreateManyLocalizacaoInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutLocalizacaoInput | ServicoUpdateWithWhereUniqueWithoutLocalizacaoInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutLocalizacaoInput | ServicoUpdateManyWithWhereWithoutLocalizacaoInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type AvaliacaoCreateNestedManyWithoutServicoInput = {
    create?: XOR<AvaliacaoCreateWithoutServicoInput, AvaliacaoUncheckedCreateWithoutServicoInput> | AvaliacaoCreateWithoutServicoInput[] | AvaliacaoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutServicoInput | AvaliacaoCreateOrConnectWithoutServicoInput[]
    createMany?: AvaliacaoCreateManyServicoInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type PrecoCreateNestedManyWithoutServicoInput = {
    create?: XOR<PrecoCreateWithoutServicoInput, PrecoUncheckedCreateWithoutServicoInput> | PrecoCreateWithoutServicoInput[] | PrecoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: PrecoCreateOrConnectWithoutServicoInput | PrecoCreateOrConnectWithoutServicoInput[]
    createMany?: PrecoCreateManyServicoInputEnvelope
    connect?: PrecoWhereUniqueInput | PrecoWhereUniqueInput[]
  }

  export type CategoriaCreateNestedOneWithoutServicosInput = {
    create?: XOR<CategoriaCreateWithoutServicosInput, CategoriaUncheckedCreateWithoutServicosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutServicosInput
    connect?: CategoriaWhereUniqueInput
  }

  export type LocalizacaoCreateNestedOneWithoutServicoInput = {
    create?: XOR<LocalizacaoCreateWithoutServicoInput, LocalizacaoUncheckedCreateWithoutServicoInput>
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutServicoInput
    connect?: LocalizacaoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutServicosInput = {
    create?: XOR<UsuarioCreateWithoutServicosInput, UsuarioUncheckedCreateWithoutServicosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutServicosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ServicoRealizadoCreateNestedManyWithoutServicoInput = {
    create?: XOR<ServicoRealizadoCreateWithoutServicoInput, ServicoRealizadoUncheckedCreateWithoutServicoInput> | ServicoRealizadoCreateWithoutServicoInput[] | ServicoRealizadoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ServicoRealizadoCreateOrConnectWithoutServicoInput | ServicoRealizadoCreateOrConnectWithoutServicoInput[]
    createMany?: ServicoRealizadoCreateManyServicoInputEnvelope
    connect?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
  }

  export type ContatoWhatsappCreateNestedManyWithoutServicoInput = {
    create?: XOR<ContatoWhatsappCreateWithoutServicoInput, ContatoWhatsappUncheckedCreateWithoutServicoInput> | ContatoWhatsappCreateWithoutServicoInput[] | ContatoWhatsappUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ContatoWhatsappCreateOrConnectWithoutServicoInput | ContatoWhatsappCreateOrConnectWithoutServicoInput[]
    createMany?: ContatoWhatsappCreateManyServicoInputEnvelope
    connect?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
  }

  export type PortfolioCreateNestedManyWithoutServicoInput = {
    create?: XOR<PortfolioCreateWithoutServicoInput, PortfolioUncheckedCreateWithoutServicoInput> | PortfolioCreateWithoutServicoInput[] | PortfolioUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutServicoInput | PortfolioCreateOrConnectWithoutServicoInput[]
    createMany?: PortfolioCreateManyServicoInputEnvelope
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
  }

  export type AvaliacaoUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<AvaliacaoCreateWithoutServicoInput, AvaliacaoUncheckedCreateWithoutServicoInput> | AvaliacaoCreateWithoutServicoInput[] | AvaliacaoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutServicoInput | AvaliacaoCreateOrConnectWithoutServicoInput[]
    createMany?: AvaliacaoCreateManyServicoInputEnvelope
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
  }

  export type PrecoUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<PrecoCreateWithoutServicoInput, PrecoUncheckedCreateWithoutServicoInput> | PrecoCreateWithoutServicoInput[] | PrecoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: PrecoCreateOrConnectWithoutServicoInput | PrecoCreateOrConnectWithoutServicoInput[]
    createMany?: PrecoCreateManyServicoInputEnvelope
    connect?: PrecoWhereUniqueInput | PrecoWhereUniqueInput[]
  }

  export type ServicoRealizadoUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<ServicoRealizadoCreateWithoutServicoInput, ServicoRealizadoUncheckedCreateWithoutServicoInput> | ServicoRealizadoCreateWithoutServicoInput[] | ServicoRealizadoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ServicoRealizadoCreateOrConnectWithoutServicoInput | ServicoRealizadoCreateOrConnectWithoutServicoInput[]
    createMany?: ServicoRealizadoCreateManyServicoInputEnvelope
    connect?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
  }

  export type ContatoWhatsappUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<ContatoWhatsappCreateWithoutServicoInput, ContatoWhatsappUncheckedCreateWithoutServicoInput> | ContatoWhatsappCreateWithoutServicoInput[] | ContatoWhatsappUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ContatoWhatsappCreateOrConnectWithoutServicoInput | ContatoWhatsappCreateOrConnectWithoutServicoInput[]
    createMany?: ContatoWhatsappCreateManyServicoInputEnvelope
    connect?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
  }

  export type PortfolioUncheckedCreateNestedManyWithoutServicoInput = {
    create?: XOR<PortfolioCreateWithoutServicoInput, PortfolioUncheckedCreateWithoutServicoInput> | PortfolioCreateWithoutServicoInput[] | PortfolioUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutServicoInput | PortfolioCreateOrConnectWithoutServicoInput[]
    createMany?: PortfolioCreateManyServicoInputEnvelope
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AvaliacaoUpdateManyWithoutServicoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutServicoInput, AvaliacaoUncheckedCreateWithoutServicoInput> | AvaliacaoCreateWithoutServicoInput[] | AvaliacaoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutServicoInput | AvaliacaoCreateOrConnectWithoutServicoInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutServicoInput | AvaliacaoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: AvaliacaoCreateManyServicoInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutServicoInput | AvaliacaoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutServicoInput | AvaliacaoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type PrecoUpdateManyWithoutServicoNestedInput = {
    create?: XOR<PrecoCreateWithoutServicoInput, PrecoUncheckedCreateWithoutServicoInput> | PrecoCreateWithoutServicoInput[] | PrecoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: PrecoCreateOrConnectWithoutServicoInput | PrecoCreateOrConnectWithoutServicoInput[]
    upsert?: PrecoUpsertWithWhereUniqueWithoutServicoInput | PrecoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: PrecoCreateManyServicoInputEnvelope
    set?: PrecoWhereUniqueInput | PrecoWhereUniqueInput[]
    disconnect?: PrecoWhereUniqueInput | PrecoWhereUniqueInput[]
    delete?: PrecoWhereUniqueInput | PrecoWhereUniqueInput[]
    connect?: PrecoWhereUniqueInput | PrecoWhereUniqueInput[]
    update?: PrecoUpdateWithWhereUniqueWithoutServicoInput | PrecoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: PrecoUpdateManyWithWhereWithoutServicoInput | PrecoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: PrecoScalarWhereInput | PrecoScalarWhereInput[]
  }

  export type CategoriaUpdateOneWithoutServicosNestedInput = {
    create?: XOR<CategoriaCreateWithoutServicosInput, CategoriaUncheckedCreateWithoutServicosInput>
    connectOrCreate?: CategoriaCreateOrConnectWithoutServicosInput
    upsert?: CategoriaUpsertWithoutServicosInput
    disconnect?: CategoriaWhereInput | boolean
    delete?: CategoriaWhereInput | boolean
    connect?: CategoriaWhereUniqueInput
    update?: XOR<XOR<CategoriaUpdateToOneWithWhereWithoutServicosInput, CategoriaUpdateWithoutServicosInput>, CategoriaUncheckedUpdateWithoutServicosInput>
  }

  export type LocalizacaoUpdateOneWithoutServicoNestedInput = {
    create?: XOR<LocalizacaoCreateWithoutServicoInput, LocalizacaoUncheckedCreateWithoutServicoInput>
    connectOrCreate?: LocalizacaoCreateOrConnectWithoutServicoInput
    upsert?: LocalizacaoUpsertWithoutServicoInput
    disconnect?: LocalizacaoWhereInput | boolean
    delete?: LocalizacaoWhereInput | boolean
    connect?: LocalizacaoWhereUniqueInput
    update?: XOR<XOR<LocalizacaoUpdateToOneWithWhereWithoutServicoInput, LocalizacaoUpdateWithoutServicoInput>, LocalizacaoUncheckedUpdateWithoutServicoInput>
  }

  export type UsuarioUpdateOneRequiredWithoutServicosNestedInput = {
    create?: XOR<UsuarioCreateWithoutServicosInput, UsuarioUncheckedCreateWithoutServicosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutServicosInput
    upsert?: UsuarioUpsertWithoutServicosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutServicosInput, UsuarioUpdateWithoutServicosInput>, UsuarioUncheckedUpdateWithoutServicosInput>
  }

  export type ServicoRealizadoUpdateManyWithoutServicoNestedInput = {
    create?: XOR<ServicoRealizadoCreateWithoutServicoInput, ServicoRealizadoUncheckedCreateWithoutServicoInput> | ServicoRealizadoCreateWithoutServicoInput[] | ServicoRealizadoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ServicoRealizadoCreateOrConnectWithoutServicoInput | ServicoRealizadoCreateOrConnectWithoutServicoInput[]
    upsert?: ServicoRealizadoUpsertWithWhereUniqueWithoutServicoInput | ServicoRealizadoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: ServicoRealizadoCreateManyServicoInputEnvelope
    set?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    disconnect?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    delete?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    connect?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    update?: ServicoRealizadoUpdateWithWhereUniqueWithoutServicoInput | ServicoRealizadoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: ServicoRealizadoUpdateManyWithWhereWithoutServicoInput | ServicoRealizadoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: ServicoRealizadoScalarWhereInput | ServicoRealizadoScalarWhereInput[]
  }

  export type ContatoWhatsappUpdateManyWithoutServicoNestedInput = {
    create?: XOR<ContatoWhatsappCreateWithoutServicoInput, ContatoWhatsappUncheckedCreateWithoutServicoInput> | ContatoWhatsappCreateWithoutServicoInput[] | ContatoWhatsappUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ContatoWhatsappCreateOrConnectWithoutServicoInput | ContatoWhatsappCreateOrConnectWithoutServicoInput[]
    upsert?: ContatoWhatsappUpsertWithWhereUniqueWithoutServicoInput | ContatoWhatsappUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: ContatoWhatsappCreateManyServicoInputEnvelope
    set?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    disconnect?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    delete?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    connect?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    update?: ContatoWhatsappUpdateWithWhereUniqueWithoutServicoInput | ContatoWhatsappUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: ContatoWhatsappUpdateManyWithWhereWithoutServicoInput | ContatoWhatsappUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: ContatoWhatsappScalarWhereInput | ContatoWhatsappScalarWhereInput[]
  }

  export type PortfolioUpdateManyWithoutServicoNestedInput = {
    create?: XOR<PortfolioCreateWithoutServicoInput, PortfolioUncheckedCreateWithoutServicoInput> | PortfolioCreateWithoutServicoInput[] | PortfolioUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutServicoInput | PortfolioCreateOrConnectWithoutServicoInput[]
    upsert?: PortfolioUpsertWithWhereUniqueWithoutServicoInput | PortfolioUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: PortfolioCreateManyServicoInputEnvelope
    set?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    disconnect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    delete?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    update?: PortfolioUpdateWithWhereUniqueWithoutServicoInput | PortfolioUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: PortfolioUpdateManyWithWhereWithoutServicoInput | PortfolioUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AvaliacaoUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<AvaliacaoCreateWithoutServicoInput, AvaliacaoUncheckedCreateWithoutServicoInput> | AvaliacaoCreateWithoutServicoInput[] | AvaliacaoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: AvaliacaoCreateOrConnectWithoutServicoInput | AvaliacaoCreateOrConnectWithoutServicoInput[]
    upsert?: AvaliacaoUpsertWithWhereUniqueWithoutServicoInput | AvaliacaoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: AvaliacaoCreateManyServicoInputEnvelope
    set?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    disconnect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    delete?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    connect?: AvaliacaoWhereUniqueInput | AvaliacaoWhereUniqueInput[]
    update?: AvaliacaoUpdateWithWhereUniqueWithoutServicoInput | AvaliacaoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: AvaliacaoUpdateManyWithWhereWithoutServicoInput | AvaliacaoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
  }

  export type PrecoUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<PrecoCreateWithoutServicoInput, PrecoUncheckedCreateWithoutServicoInput> | PrecoCreateWithoutServicoInput[] | PrecoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: PrecoCreateOrConnectWithoutServicoInput | PrecoCreateOrConnectWithoutServicoInput[]
    upsert?: PrecoUpsertWithWhereUniqueWithoutServicoInput | PrecoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: PrecoCreateManyServicoInputEnvelope
    set?: PrecoWhereUniqueInput | PrecoWhereUniqueInput[]
    disconnect?: PrecoWhereUniqueInput | PrecoWhereUniqueInput[]
    delete?: PrecoWhereUniqueInput | PrecoWhereUniqueInput[]
    connect?: PrecoWhereUniqueInput | PrecoWhereUniqueInput[]
    update?: PrecoUpdateWithWhereUniqueWithoutServicoInput | PrecoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: PrecoUpdateManyWithWhereWithoutServicoInput | PrecoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: PrecoScalarWhereInput | PrecoScalarWhereInput[]
  }

  export type ServicoRealizadoUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<ServicoRealizadoCreateWithoutServicoInput, ServicoRealizadoUncheckedCreateWithoutServicoInput> | ServicoRealizadoCreateWithoutServicoInput[] | ServicoRealizadoUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ServicoRealizadoCreateOrConnectWithoutServicoInput | ServicoRealizadoCreateOrConnectWithoutServicoInput[]
    upsert?: ServicoRealizadoUpsertWithWhereUniqueWithoutServicoInput | ServicoRealizadoUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: ServicoRealizadoCreateManyServicoInputEnvelope
    set?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    disconnect?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    delete?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    connect?: ServicoRealizadoWhereUniqueInput | ServicoRealizadoWhereUniqueInput[]
    update?: ServicoRealizadoUpdateWithWhereUniqueWithoutServicoInput | ServicoRealizadoUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: ServicoRealizadoUpdateManyWithWhereWithoutServicoInput | ServicoRealizadoUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: ServicoRealizadoScalarWhereInput | ServicoRealizadoScalarWhereInput[]
  }

  export type ContatoWhatsappUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<ContatoWhatsappCreateWithoutServicoInput, ContatoWhatsappUncheckedCreateWithoutServicoInput> | ContatoWhatsappCreateWithoutServicoInput[] | ContatoWhatsappUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: ContatoWhatsappCreateOrConnectWithoutServicoInput | ContatoWhatsappCreateOrConnectWithoutServicoInput[]
    upsert?: ContatoWhatsappUpsertWithWhereUniqueWithoutServicoInput | ContatoWhatsappUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: ContatoWhatsappCreateManyServicoInputEnvelope
    set?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    disconnect?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    delete?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    connect?: ContatoWhatsappWhereUniqueInput | ContatoWhatsappWhereUniqueInput[]
    update?: ContatoWhatsappUpdateWithWhereUniqueWithoutServicoInput | ContatoWhatsappUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: ContatoWhatsappUpdateManyWithWhereWithoutServicoInput | ContatoWhatsappUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: ContatoWhatsappScalarWhereInput | ContatoWhatsappScalarWhereInput[]
  }

  export type PortfolioUncheckedUpdateManyWithoutServicoNestedInput = {
    create?: XOR<PortfolioCreateWithoutServicoInput, PortfolioUncheckedCreateWithoutServicoInput> | PortfolioCreateWithoutServicoInput[] | PortfolioUncheckedCreateWithoutServicoInput[]
    connectOrCreate?: PortfolioCreateOrConnectWithoutServicoInput | PortfolioCreateOrConnectWithoutServicoInput[]
    upsert?: PortfolioUpsertWithWhereUniqueWithoutServicoInput | PortfolioUpsertWithWhereUniqueWithoutServicoInput[]
    createMany?: PortfolioCreateManyServicoInputEnvelope
    set?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    disconnect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    delete?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    connect?: PortfolioWhereUniqueInput | PortfolioWhereUniqueInput[]
    update?: PortfolioUpdateWithWhereUniqueWithoutServicoInput | PortfolioUpdateWithWhereUniqueWithoutServicoInput[]
    updateMany?: PortfolioUpdateManyWithWhereWithoutServicoInput | PortfolioUpdateManyWithWhereWithoutServicoInput[]
    deleteMany?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
  }

  export type SegmentoCreateNestedOneWithoutCategoriasInput = {
    create?: XOR<SegmentoCreateWithoutCategoriasInput, SegmentoUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: SegmentoCreateOrConnectWithoutCategoriasInput
    connect?: SegmentoWhereUniqueInput
  }

  export type ServicoCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ServicoCreateWithoutCategoriaInput, ServicoUncheckedCreateWithoutCategoriaInput> | ServicoCreateWithoutCategoriaInput[] | ServicoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutCategoriaInput | ServicoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ServicoCreateManyCategoriaInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type ServicoUncheckedCreateNestedManyWithoutCategoriaInput = {
    create?: XOR<ServicoCreateWithoutCategoriaInput, ServicoUncheckedCreateWithoutCategoriaInput> | ServicoCreateWithoutCategoriaInput[] | ServicoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutCategoriaInput | ServicoCreateOrConnectWithoutCategoriaInput[]
    createMany?: ServicoCreateManyCategoriaInputEnvelope
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
  }

  export type SegmentoUpdateOneWithoutCategoriasNestedInput = {
    create?: XOR<SegmentoCreateWithoutCategoriasInput, SegmentoUncheckedCreateWithoutCategoriasInput>
    connectOrCreate?: SegmentoCreateOrConnectWithoutCategoriasInput
    upsert?: SegmentoUpsertWithoutCategoriasInput
    disconnect?: SegmentoWhereInput | boolean
    delete?: SegmentoWhereInput | boolean
    connect?: SegmentoWhereUniqueInput
    update?: XOR<XOR<SegmentoUpdateToOneWithWhereWithoutCategoriasInput, SegmentoUpdateWithoutCategoriasInput>, SegmentoUncheckedUpdateWithoutCategoriasInput>
  }

  export type ServicoUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ServicoCreateWithoutCategoriaInput, ServicoUncheckedCreateWithoutCategoriaInput> | ServicoCreateWithoutCategoriaInput[] | ServicoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutCategoriaInput | ServicoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutCategoriaInput | ServicoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ServicoCreateManyCategoriaInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutCategoriaInput | ServicoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutCategoriaInput | ServicoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type ServicoUncheckedUpdateManyWithoutCategoriaNestedInput = {
    create?: XOR<ServicoCreateWithoutCategoriaInput, ServicoUncheckedCreateWithoutCategoriaInput> | ServicoCreateWithoutCategoriaInput[] | ServicoUncheckedCreateWithoutCategoriaInput[]
    connectOrCreate?: ServicoCreateOrConnectWithoutCategoriaInput | ServicoCreateOrConnectWithoutCategoriaInput[]
    upsert?: ServicoUpsertWithWhereUniqueWithoutCategoriaInput | ServicoUpsertWithWhereUniqueWithoutCategoriaInput[]
    createMany?: ServicoCreateManyCategoriaInputEnvelope
    set?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    disconnect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    delete?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    connect?: ServicoWhereUniqueInput | ServicoWhereUniqueInput[]
    update?: ServicoUpdateWithWhereUniqueWithoutCategoriaInput | ServicoUpdateWithWhereUniqueWithoutCategoriaInput[]
    updateMany?: ServicoUpdateManyWithWhereWithoutCategoriaInput | ServicoUpdateManyWithWhereWithoutCategoriaInput[]
    deleteMany?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
  }

  export type ServicoCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<ServicoCreateWithoutAvaliacaoInput, ServicoUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutAvaliacaoInput
    connect?: ServicoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutAvaliacaoInput = {
    create?: XOR<UsuarioCreateWithoutAvaliacaoInput, UsuarioUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvaliacaoInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ServicoUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<ServicoCreateWithoutAvaliacaoInput, ServicoUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutAvaliacaoInput
    upsert?: ServicoUpsertWithoutAvaliacaoInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutAvaliacaoInput, ServicoUpdateWithoutAvaliacaoInput>, ServicoUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type UsuarioUpdateOneRequiredWithoutAvaliacaoNestedInput = {
    create?: XOR<UsuarioCreateWithoutAvaliacaoInput, UsuarioUncheckedCreateWithoutAvaliacaoInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutAvaliacaoInput
    upsert?: UsuarioUpsertWithoutAvaliacaoInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutAvaliacaoInput, UsuarioUpdateWithoutAvaliacaoInput>, UsuarioUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type ServicoCreateNestedOneWithoutPrecoInput = {
    create?: XOR<ServicoCreateWithoutPrecoInput, ServicoUncheckedCreateWithoutPrecoInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutPrecoInput
    connect?: ServicoWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ServicoUpdateOneRequiredWithoutPrecoNestedInput = {
    create?: XOR<ServicoCreateWithoutPrecoInput, ServicoUncheckedCreateWithoutPrecoInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutPrecoInput
    upsert?: ServicoUpsertWithoutPrecoInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutPrecoInput, ServicoUpdateWithoutPrecoInput>, ServicoUncheckedUpdateWithoutPrecoInput>
  }

  export type UsuarioCreateNestedOneWithoutResetTokensInput = {
    create?: XOR<UsuarioCreateWithoutResetTokensInput, UsuarioUncheckedCreateWithoutResetTokensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResetTokensInput
    connect?: UsuarioWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutResetTokensNestedInput = {
    create?: XOR<UsuarioCreateWithoutResetTokensInput, UsuarioUncheckedCreateWithoutResetTokensInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutResetTokensInput
    upsert?: UsuarioUpsertWithoutResetTokensInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutResetTokensInput, UsuarioUpdateWithoutResetTokensInput>, UsuarioUncheckedUpdateWithoutResetTokensInput>
  }

  export type UsuarioCreateNestedOneWithoutServicosRealizadosInput = {
    create?: XOR<UsuarioCreateWithoutServicosRealizadosInput, UsuarioUncheckedCreateWithoutServicosRealizadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutServicosRealizadosInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ServicoCreateNestedOneWithoutServicosRealizadosInput = {
    create?: XOR<ServicoCreateWithoutServicosRealizadosInput, ServicoUncheckedCreateWithoutServicosRealizadosInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutServicosRealizadosInput
    connect?: ServicoWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UsuarioUpdateOneRequiredWithoutServicosRealizadosNestedInput = {
    create?: XOR<UsuarioCreateWithoutServicosRealizadosInput, UsuarioUncheckedCreateWithoutServicosRealizadosInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutServicosRealizadosInput
    upsert?: UsuarioUpsertWithoutServicosRealizadosInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutServicosRealizadosInput, UsuarioUpdateWithoutServicosRealizadosInput>, UsuarioUncheckedUpdateWithoutServicosRealizadosInput>
  }

  export type ServicoUpdateOneRequiredWithoutServicosRealizadosNestedInput = {
    create?: XOR<ServicoCreateWithoutServicosRealizadosInput, ServicoUncheckedCreateWithoutServicosRealizadosInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutServicosRealizadosInput
    upsert?: ServicoUpsertWithoutServicosRealizadosInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutServicosRealizadosInput, ServicoUpdateWithoutServicosRealizadosInput>, ServicoUncheckedUpdateWithoutServicosRealizadosInput>
  }

  export type UsuarioCreateNestedOneWithoutContatosWhatsappInput = {
    create?: XOR<UsuarioCreateWithoutContatosWhatsappInput, UsuarioUncheckedCreateWithoutContatosWhatsappInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutContatosWhatsappInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ServicoCreateNestedOneWithoutContatosWhatsappInput = {
    create?: XOR<ServicoCreateWithoutContatosWhatsappInput, ServicoUncheckedCreateWithoutContatosWhatsappInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutContatosWhatsappInput
    connect?: ServicoWhereUniqueInput
  }

  export type UsuarioUpdateOneRequiredWithoutContatosWhatsappNestedInput = {
    create?: XOR<UsuarioCreateWithoutContatosWhatsappInput, UsuarioUncheckedCreateWithoutContatosWhatsappInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutContatosWhatsappInput
    upsert?: UsuarioUpsertWithoutContatosWhatsappInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutContatosWhatsappInput, UsuarioUpdateWithoutContatosWhatsappInput>, UsuarioUncheckedUpdateWithoutContatosWhatsappInput>
  }

  export type ServicoUpdateOneRequiredWithoutContatosWhatsappNestedInput = {
    create?: XOR<ServicoCreateWithoutContatosWhatsappInput, ServicoUncheckedCreateWithoutContatosWhatsappInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutContatosWhatsappInput
    upsert?: ServicoUpsertWithoutContatosWhatsappInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutContatosWhatsappInput, ServicoUpdateWithoutContatosWhatsappInput>, ServicoUncheckedUpdateWithoutContatosWhatsappInput>
  }

  export type CategoriaCreateNestedManyWithoutSegmentoInput = {
    create?: XOR<CategoriaCreateWithoutSegmentoInput, CategoriaUncheckedCreateWithoutSegmentoInput> | CategoriaCreateWithoutSegmentoInput[] | CategoriaUncheckedCreateWithoutSegmentoInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutSegmentoInput | CategoriaCreateOrConnectWithoutSegmentoInput[]
    createMany?: CategoriaCreateManySegmentoInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type CategoriaUncheckedCreateNestedManyWithoutSegmentoInput = {
    create?: XOR<CategoriaCreateWithoutSegmentoInput, CategoriaUncheckedCreateWithoutSegmentoInput> | CategoriaCreateWithoutSegmentoInput[] | CategoriaUncheckedCreateWithoutSegmentoInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutSegmentoInput | CategoriaCreateOrConnectWithoutSegmentoInput[]
    createMany?: CategoriaCreateManySegmentoInputEnvelope
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
  }

  export type CategoriaUpdateManyWithoutSegmentoNestedInput = {
    create?: XOR<CategoriaCreateWithoutSegmentoInput, CategoriaUncheckedCreateWithoutSegmentoInput> | CategoriaCreateWithoutSegmentoInput[] | CategoriaUncheckedCreateWithoutSegmentoInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutSegmentoInput | CategoriaCreateOrConnectWithoutSegmentoInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutSegmentoInput | CategoriaUpsertWithWhereUniqueWithoutSegmentoInput[]
    createMany?: CategoriaCreateManySegmentoInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutSegmentoInput | CategoriaUpdateWithWhereUniqueWithoutSegmentoInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutSegmentoInput | CategoriaUpdateManyWithWhereWithoutSegmentoInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type CategoriaUncheckedUpdateManyWithoutSegmentoNestedInput = {
    create?: XOR<CategoriaCreateWithoutSegmentoInput, CategoriaUncheckedCreateWithoutSegmentoInput> | CategoriaCreateWithoutSegmentoInput[] | CategoriaUncheckedCreateWithoutSegmentoInput[]
    connectOrCreate?: CategoriaCreateOrConnectWithoutSegmentoInput | CategoriaCreateOrConnectWithoutSegmentoInput[]
    upsert?: CategoriaUpsertWithWhereUniqueWithoutSegmentoInput | CategoriaUpsertWithWhereUniqueWithoutSegmentoInput[]
    createMany?: CategoriaCreateManySegmentoInputEnvelope
    set?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    disconnect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    delete?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    connect?: CategoriaWhereUniqueInput | CategoriaWhereUniqueInput[]
    update?: CategoriaUpdateWithWhereUniqueWithoutSegmentoInput | CategoriaUpdateWithWhereUniqueWithoutSegmentoInput[]
    updateMany?: CategoriaUpdateManyWithWhereWithoutSegmentoInput | CategoriaUpdateManyWithWhereWithoutSegmentoInput[]
    deleteMany?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
  }

  export type ServicoCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<ServicoCreateWithoutPortfolioInput, ServicoUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutPortfolioInput
    connect?: ServicoWhereUniqueInput
  }

  export type UsuarioCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<UsuarioCreateWithoutPortfolioInput, UsuarioUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPortfolioInput
    connect?: UsuarioWhereUniqueInput
  }

  export type ServicoUpdateOneRequiredWithoutPortfolioNestedInput = {
    create?: XOR<ServicoCreateWithoutPortfolioInput, ServicoUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: ServicoCreateOrConnectWithoutPortfolioInput
    upsert?: ServicoUpsertWithoutPortfolioInput
    connect?: ServicoWhereUniqueInput
    update?: XOR<XOR<ServicoUpdateToOneWithWhereWithoutPortfolioInput, ServicoUpdateWithoutPortfolioInput>, ServicoUncheckedUpdateWithoutPortfolioInput>
  }

  export type UsuarioUpdateOneRequiredWithoutPortfolioNestedInput = {
    create?: XOR<UsuarioCreateWithoutPortfolioInput, UsuarioUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutPortfolioInput
    upsert?: UsuarioUpsertWithoutPortfolioInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutPortfolioInput, UsuarioUpdateWithoutPortfolioInput>, UsuarioUncheckedUpdateWithoutPortfolioInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type AvaliacaoCreateWithoutUsuarioInput = {
    star: number
    descricao: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    servico: ServicoCreateNestedOneWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    star: number
    descricao: string
    servicoId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutUsuarioInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type AvaliacaoCreateManyUsuarioInputEnvelope = {
    data: AvaliacaoCreateManyUsuarioInput | AvaliacaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ServicoCreateWithoutUsuarioInput = {
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutServicoInput
    preco?: PrecoCreateNestedManyWithoutServicoInput
    categoria?: CategoriaCreateNestedOneWithoutServicosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutServicoInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    categoriaId?: number | null
    localizacaoId?: number | null
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutServicoInput
    preco?: PrecoUncheckedCreateNestedManyWithoutServicoInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutUsuarioInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutUsuarioInput, ServicoUncheckedCreateWithoutUsuarioInput>
  }

  export type ServicoCreateManyUsuarioInputEnvelope = {
    data: ServicoCreateManyUsuarioInput | ServicoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ResetTokenCreateWithoutUsuarioInput = {
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ResetTokenUncheckedCreateWithoutUsuarioInput = {
    id?: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ResetTokenCreateOrConnectWithoutUsuarioInput = {
    where: ResetTokenWhereUniqueInput
    create: XOR<ResetTokenCreateWithoutUsuarioInput, ResetTokenUncheckedCreateWithoutUsuarioInput>
  }

  export type ResetTokenCreateManyUsuarioInputEnvelope = {
    data: ResetTokenCreateManyUsuarioInput | ResetTokenCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ServicoRealizadoCreateWithoutUsuarioInput = {
    confirmado?: boolean | null
    respondidoEm?: Date | string | null
    realizadoEm?: Date | string
    servico: ServicoCreateNestedOneWithoutServicosRealizadosInput
  }

  export type ServicoRealizadoUncheckedCreateWithoutUsuarioInput = {
    id?: number
    servicoId: number
    confirmado?: boolean | null
    respondidoEm?: Date | string | null
    realizadoEm?: Date | string
  }

  export type ServicoRealizadoCreateOrConnectWithoutUsuarioInput = {
    where: ServicoRealizadoWhereUniqueInput
    create: XOR<ServicoRealizadoCreateWithoutUsuarioInput, ServicoRealizadoUncheckedCreateWithoutUsuarioInput>
  }

  export type ServicoRealizadoCreateManyUsuarioInputEnvelope = {
    data: ServicoRealizadoCreateManyUsuarioInput | ServicoRealizadoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ContatoWhatsappCreateWithoutUsuarioInput = {
    clicadoEm?: Date | string
    perguntado?: boolean
    servico: ServicoCreateNestedOneWithoutContatosWhatsappInput
  }

  export type ContatoWhatsappUncheckedCreateWithoutUsuarioInput = {
    id?: number
    servicoId: number
    clicadoEm?: Date | string
    perguntado?: boolean
  }

  export type ContatoWhatsappCreateOrConnectWithoutUsuarioInput = {
    where: ContatoWhatsappWhereUniqueInput
    create: XOR<ContatoWhatsappCreateWithoutUsuarioInput, ContatoWhatsappUncheckedCreateWithoutUsuarioInput>
  }

  export type ContatoWhatsappCreateManyUsuarioInputEnvelope = {
    data: ContatoWhatsappCreateManyUsuarioInput | ContatoWhatsappCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioCreateWithoutUsuarioInput = {
    url: string
    criadoEm?: Date | string
    servico: ServicoCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutUsuarioInput = {
    id?: number
    url: string
    servicoId: number
    criadoEm?: Date | string
  }

  export type PortfolioCreateOrConnectWithoutUsuarioInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutUsuarioInput, PortfolioUncheckedCreateWithoutUsuarioInput>
  }

  export type PortfolioCreateManyUsuarioInputEnvelope = {
    data: PortfolioCreateManyUsuarioInput | PortfolioCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutUsuarioInput, AvaliacaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<AvaliacaoCreateWithoutUsuarioInput, AvaliacaoUncheckedCreateWithoutUsuarioInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutUsuarioInput, AvaliacaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type AvaliacaoScalarWhereInput = {
    AND?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    OR?: AvaliacaoScalarWhereInput[]
    NOT?: AvaliacaoScalarWhereInput | AvaliacaoScalarWhereInput[]
    id?: IntFilter<"Avaliacao"> | number
    star?: IntFilter<"Avaliacao"> | number
    descricao?: StringFilter<"Avaliacao"> | string
    servicoId?: IntFilter<"Avaliacao"> | number
    usuarioId?: IntFilter<"Avaliacao"> | number
    criadoEm?: DateTimeFilter<"Avaliacao"> | Date | string
    atualizadoEm?: DateTimeFilter<"Avaliacao"> | Date | string
  }

  export type ServicoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ServicoWhereUniqueInput
    update: XOR<ServicoUpdateWithoutUsuarioInput, ServicoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ServicoCreateWithoutUsuarioInput, ServicoUncheckedCreateWithoutUsuarioInput>
  }

  export type ServicoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ServicoWhereUniqueInput
    data: XOR<ServicoUpdateWithoutUsuarioInput, ServicoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ServicoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ServicoScalarWhereInput
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ServicoScalarWhereInput = {
    AND?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
    OR?: ServicoScalarWhereInput[]
    NOT?: ServicoScalarWhereInput | ServicoScalarWhereInput[]
    id?: IntFilter<"Servico"> | number
    nomeNegocio?: StringFilter<"Servico"> | string
    descricao?: StringFilter<"Servico"> | string
    imagem?: StringNullableFilter<"Servico"> | string | null
    disponivel?: BoolFilter<"Servico"> | boolean
    usuarioId?: IntFilter<"Servico"> | number
    categoriaId?: IntNullableFilter<"Servico"> | number | null
    localizacaoId?: IntNullableFilter<"Servico"> | number | null
    criadoEm?: DateTimeFilter<"Servico"> | Date | string
  }

  export type ResetTokenUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ResetTokenWhereUniqueInput
    update: XOR<ResetTokenUpdateWithoutUsuarioInput, ResetTokenUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ResetTokenCreateWithoutUsuarioInput, ResetTokenUncheckedCreateWithoutUsuarioInput>
  }

  export type ResetTokenUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ResetTokenWhereUniqueInput
    data: XOR<ResetTokenUpdateWithoutUsuarioInput, ResetTokenUncheckedUpdateWithoutUsuarioInput>
  }

  export type ResetTokenUpdateManyWithWhereWithoutUsuarioInput = {
    where: ResetTokenScalarWhereInput
    data: XOR<ResetTokenUpdateManyMutationInput, ResetTokenUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ResetTokenScalarWhereInput = {
    AND?: ResetTokenScalarWhereInput | ResetTokenScalarWhereInput[]
    OR?: ResetTokenScalarWhereInput[]
    NOT?: ResetTokenScalarWhereInput | ResetTokenScalarWhereInput[]
    id?: IntFilter<"ResetToken"> | number
    token?: StringFilter<"ResetToken"> | string
    createdAt?: DateTimeFilter<"ResetToken"> | Date | string
    expiresAt?: DateTimeFilter<"ResetToken"> | Date | string
    usuarioId?: IntFilter<"ResetToken"> | number
  }

  export type ServicoRealizadoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ServicoRealizadoWhereUniqueInput
    update: XOR<ServicoRealizadoUpdateWithoutUsuarioInput, ServicoRealizadoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ServicoRealizadoCreateWithoutUsuarioInput, ServicoRealizadoUncheckedCreateWithoutUsuarioInput>
  }

  export type ServicoRealizadoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ServicoRealizadoWhereUniqueInput
    data: XOR<ServicoRealizadoUpdateWithoutUsuarioInput, ServicoRealizadoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ServicoRealizadoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ServicoRealizadoScalarWhereInput
    data: XOR<ServicoRealizadoUpdateManyMutationInput, ServicoRealizadoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ServicoRealizadoScalarWhereInput = {
    AND?: ServicoRealizadoScalarWhereInput | ServicoRealizadoScalarWhereInput[]
    OR?: ServicoRealizadoScalarWhereInput[]
    NOT?: ServicoRealizadoScalarWhereInput | ServicoRealizadoScalarWhereInput[]
    id?: IntFilter<"ServicoRealizado"> | number
    usuarioId?: IntFilter<"ServicoRealizado"> | number
    servicoId?: IntFilter<"ServicoRealizado"> | number
    confirmado?: BoolNullableFilter<"ServicoRealizado"> | boolean | null
    respondidoEm?: DateTimeNullableFilter<"ServicoRealizado"> | Date | string | null
    realizadoEm?: DateTimeFilter<"ServicoRealizado"> | Date | string
  }

  export type ContatoWhatsappUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ContatoWhatsappWhereUniqueInput
    update: XOR<ContatoWhatsappUpdateWithoutUsuarioInput, ContatoWhatsappUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ContatoWhatsappCreateWithoutUsuarioInput, ContatoWhatsappUncheckedCreateWithoutUsuarioInput>
  }

  export type ContatoWhatsappUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ContatoWhatsappWhereUniqueInput
    data: XOR<ContatoWhatsappUpdateWithoutUsuarioInput, ContatoWhatsappUncheckedUpdateWithoutUsuarioInput>
  }

  export type ContatoWhatsappUpdateManyWithWhereWithoutUsuarioInput = {
    where: ContatoWhatsappScalarWhereInput
    data: XOR<ContatoWhatsappUpdateManyMutationInput, ContatoWhatsappUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ContatoWhatsappScalarWhereInput = {
    AND?: ContatoWhatsappScalarWhereInput | ContatoWhatsappScalarWhereInput[]
    OR?: ContatoWhatsappScalarWhereInput[]
    NOT?: ContatoWhatsappScalarWhereInput | ContatoWhatsappScalarWhereInput[]
    id?: IntFilter<"ContatoWhatsapp"> | number
    usuarioId?: IntFilter<"ContatoWhatsapp"> | number
    servicoId?: IntFilter<"ContatoWhatsapp"> | number
    clicadoEm?: DateTimeFilter<"ContatoWhatsapp"> | Date | string
    perguntado?: BoolFilter<"ContatoWhatsapp"> | boolean
  }

  export type PortfolioUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: PortfolioWhereUniqueInput
    update: XOR<PortfolioUpdateWithoutUsuarioInput, PortfolioUncheckedUpdateWithoutUsuarioInput>
    create: XOR<PortfolioCreateWithoutUsuarioInput, PortfolioUncheckedCreateWithoutUsuarioInput>
  }

  export type PortfolioUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: PortfolioWhereUniqueInput
    data: XOR<PortfolioUpdateWithoutUsuarioInput, PortfolioUncheckedUpdateWithoutUsuarioInput>
  }

  export type PortfolioUpdateManyWithWhereWithoutUsuarioInput = {
    where: PortfolioScalarWhereInput
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type PortfolioScalarWhereInput = {
    AND?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
    OR?: PortfolioScalarWhereInput[]
    NOT?: PortfolioScalarWhereInput | PortfolioScalarWhereInput[]
    id?: IntFilter<"Portfolio"> | number
    url?: StringFilter<"Portfolio"> | string
    servicoId?: IntFilter<"Portfolio"> | number
    usuarioId?: IntFilter<"Portfolio"> | number
    criadoEm?: DateTimeFilter<"Portfolio"> | Date | string
  }

  export type ServicoCreateWithoutLocalizacaoInput = {
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutServicoInput
    preco?: PrecoCreateNestedManyWithoutServicoInput
    categoria?: CategoriaCreateNestedOneWithoutServicosInput
    usuario: UsuarioCreateNestedOneWithoutServicosInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutLocalizacaoInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    usuarioId: number
    categoriaId?: number | null
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutServicoInput
    preco?: PrecoUncheckedCreateNestedManyWithoutServicoInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutLocalizacaoInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutLocalizacaoInput, ServicoUncheckedCreateWithoutLocalizacaoInput>
  }

  export type ServicoCreateManyLocalizacaoInputEnvelope = {
    data: ServicoCreateManyLocalizacaoInput | ServicoCreateManyLocalizacaoInput[]
    skipDuplicates?: boolean
  }

  export type ServicoUpsertWithWhereUniqueWithoutLocalizacaoInput = {
    where: ServicoWhereUniqueInput
    update: XOR<ServicoUpdateWithoutLocalizacaoInput, ServicoUncheckedUpdateWithoutLocalizacaoInput>
    create: XOR<ServicoCreateWithoutLocalizacaoInput, ServicoUncheckedCreateWithoutLocalizacaoInput>
  }

  export type ServicoUpdateWithWhereUniqueWithoutLocalizacaoInput = {
    where: ServicoWhereUniqueInput
    data: XOR<ServicoUpdateWithoutLocalizacaoInput, ServicoUncheckedUpdateWithoutLocalizacaoInput>
  }

  export type ServicoUpdateManyWithWhereWithoutLocalizacaoInput = {
    where: ServicoScalarWhereInput
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyWithoutLocalizacaoInput>
  }

  export type AvaliacaoCreateWithoutServicoInput = {
    star: number
    descricao: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutAvaliacaoInput
  }

  export type AvaliacaoUncheckedCreateWithoutServicoInput = {
    id?: number
    star: number
    descricao: string
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type AvaliacaoCreateOrConnectWithoutServicoInput = {
    where: AvaliacaoWhereUniqueInput
    create: XOR<AvaliacaoCreateWithoutServicoInput, AvaliacaoUncheckedCreateWithoutServicoInput>
  }

  export type AvaliacaoCreateManyServicoInputEnvelope = {
    data: AvaliacaoCreateManyServicoInput | AvaliacaoCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type PrecoCreateWithoutServicoInput = {
    nomeservico: string
    precificacao: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PrecoUncheckedCreateWithoutServicoInput = {
    id?: number
    nomeservico: string
    precificacao: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PrecoCreateOrConnectWithoutServicoInput = {
    where: PrecoWhereUniqueInput
    create: XOR<PrecoCreateWithoutServicoInput, PrecoUncheckedCreateWithoutServicoInput>
  }

  export type PrecoCreateManyServicoInputEnvelope = {
    data: PrecoCreateManyServicoInput | PrecoCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaCreateWithoutServicosInput = {
    nomeServico: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    segmento?: SegmentoCreateNestedOneWithoutCategoriasInput
  }

  export type CategoriaUncheckedCreateWithoutServicosInput = {
    id?: number
    nomeServico: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    segmentoId?: number | null
  }

  export type CategoriaCreateOrConnectWithoutServicosInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutServicosInput, CategoriaUncheckedCreateWithoutServicosInput>
  }

  export type LocalizacaoCreateWithoutServicoInput = {
    numero: string
    bairro: string
    cidade: string
    estado: string
    criadoEm?: Date | string
  }

  export type LocalizacaoUncheckedCreateWithoutServicoInput = {
    id?: number
    numero: string
    bairro: string
    cidade: string
    estado: string
    criadoEm?: Date | string
  }

  export type LocalizacaoCreateOrConnectWithoutServicoInput = {
    where: LocalizacaoWhereUniqueInput
    create: XOR<LocalizacaoCreateWithoutServicoInput, LocalizacaoUncheckedCreateWithoutServicoInput>
  }

  export type UsuarioCreateWithoutServicosInput = {
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    resetTokens?: ResetTokenCreateNestedManyWithoutUsuarioInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutUsuarioInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutUsuarioInput
    portfolio?: PortfolioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutServicosInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    resetTokens?: ResetTokenUncheckedCreateNestedManyWithoutUsuarioInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutUsuarioInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutUsuarioInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutServicosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutServicosInput, UsuarioUncheckedCreateWithoutServicosInput>
  }

  export type ServicoRealizadoCreateWithoutServicoInput = {
    confirmado?: boolean | null
    respondidoEm?: Date | string | null
    realizadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutServicosRealizadosInput
  }

  export type ServicoRealizadoUncheckedCreateWithoutServicoInput = {
    id?: number
    usuarioId: number
    confirmado?: boolean | null
    respondidoEm?: Date | string | null
    realizadoEm?: Date | string
  }

  export type ServicoRealizadoCreateOrConnectWithoutServicoInput = {
    where: ServicoRealizadoWhereUniqueInput
    create: XOR<ServicoRealizadoCreateWithoutServicoInput, ServicoRealizadoUncheckedCreateWithoutServicoInput>
  }

  export type ServicoRealizadoCreateManyServicoInputEnvelope = {
    data: ServicoRealizadoCreateManyServicoInput | ServicoRealizadoCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type ContatoWhatsappCreateWithoutServicoInput = {
    clicadoEm?: Date | string
    perguntado?: boolean
    usuario: UsuarioCreateNestedOneWithoutContatosWhatsappInput
  }

  export type ContatoWhatsappUncheckedCreateWithoutServicoInput = {
    id?: number
    usuarioId: number
    clicadoEm?: Date | string
    perguntado?: boolean
  }

  export type ContatoWhatsappCreateOrConnectWithoutServicoInput = {
    where: ContatoWhatsappWhereUniqueInput
    create: XOR<ContatoWhatsappCreateWithoutServicoInput, ContatoWhatsappUncheckedCreateWithoutServicoInput>
  }

  export type ContatoWhatsappCreateManyServicoInputEnvelope = {
    data: ContatoWhatsappCreateManyServicoInput | ContatoWhatsappCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type PortfolioCreateWithoutServicoInput = {
    url: string
    criadoEm?: Date | string
    usuario: UsuarioCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioUncheckedCreateWithoutServicoInput = {
    id?: number
    url: string
    usuarioId: number
    criadoEm?: Date | string
  }

  export type PortfolioCreateOrConnectWithoutServicoInput = {
    where: PortfolioWhereUniqueInput
    create: XOR<PortfolioCreateWithoutServicoInput, PortfolioUncheckedCreateWithoutServicoInput>
  }

  export type PortfolioCreateManyServicoInputEnvelope = {
    data: PortfolioCreateManyServicoInput | PortfolioCreateManyServicoInput[]
    skipDuplicates?: boolean
  }

  export type AvaliacaoUpsertWithWhereUniqueWithoutServicoInput = {
    where: AvaliacaoWhereUniqueInput
    update: XOR<AvaliacaoUpdateWithoutServicoInput, AvaliacaoUncheckedUpdateWithoutServicoInput>
    create: XOR<AvaliacaoCreateWithoutServicoInput, AvaliacaoUncheckedCreateWithoutServicoInput>
  }

  export type AvaliacaoUpdateWithWhereUniqueWithoutServicoInput = {
    where: AvaliacaoWhereUniqueInput
    data: XOR<AvaliacaoUpdateWithoutServicoInput, AvaliacaoUncheckedUpdateWithoutServicoInput>
  }

  export type AvaliacaoUpdateManyWithWhereWithoutServicoInput = {
    where: AvaliacaoScalarWhereInput
    data: XOR<AvaliacaoUpdateManyMutationInput, AvaliacaoUncheckedUpdateManyWithoutServicoInput>
  }

  export type PrecoUpsertWithWhereUniqueWithoutServicoInput = {
    where: PrecoWhereUniqueInput
    update: XOR<PrecoUpdateWithoutServicoInput, PrecoUncheckedUpdateWithoutServicoInput>
    create: XOR<PrecoCreateWithoutServicoInput, PrecoUncheckedCreateWithoutServicoInput>
  }

  export type PrecoUpdateWithWhereUniqueWithoutServicoInput = {
    where: PrecoWhereUniqueInput
    data: XOR<PrecoUpdateWithoutServicoInput, PrecoUncheckedUpdateWithoutServicoInput>
  }

  export type PrecoUpdateManyWithWhereWithoutServicoInput = {
    where: PrecoScalarWhereInput
    data: XOR<PrecoUpdateManyMutationInput, PrecoUncheckedUpdateManyWithoutServicoInput>
  }

  export type PrecoScalarWhereInput = {
    AND?: PrecoScalarWhereInput | PrecoScalarWhereInput[]
    OR?: PrecoScalarWhereInput[]
    NOT?: PrecoScalarWhereInput | PrecoScalarWhereInput[]
    id?: IntFilter<"Preco"> | number
    nomeservico?: StringFilter<"Preco"> | string
    precificacao?: FloatFilter<"Preco"> | number
    servicoId?: IntFilter<"Preco"> | number
    criadoEm?: DateTimeFilter<"Preco"> | Date | string
    atualizadoEm?: DateTimeFilter<"Preco"> | Date | string
  }

  export type CategoriaUpsertWithoutServicosInput = {
    update: XOR<CategoriaUpdateWithoutServicosInput, CategoriaUncheckedUpdateWithoutServicosInput>
    create: XOR<CategoriaCreateWithoutServicosInput, CategoriaUncheckedCreateWithoutServicosInput>
    where?: CategoriaWhereInput
  }

  export type CategoriaUpdateToOneWithWhereWithoutServicosInput = {
    where?: CategoriaWhereInput
    data: XOR<CategoriaUpdateWithoutServicosInput, CategoriaUncheckedUpdateWithoutServicosInput>
  }

  export type CategoriaUpdateWithoutServicosInput = {
    nomeServico?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    segmento?: SegmentoUpdateOneWithoutCategoriasNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutServicosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeServico?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    segmentoId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LocalizacaoUpsertWithoutServicoInput = {
    update: XOR<LocalizacaoUpdateWithoutServicoInput, LocalizacaoUncheckedUpdateWithoutServicoInput>
    create: XOR<LocalizacaoCreateWithoutServicoInput, LocalizacaoUncheckedCreateWithoutServicoInput>
    where?: LocalizacaoWhereInput
  }

  export type LocalizacaoUpdateToOneWithWhereWithoutServicoInput = {
    where?: LocalizacaoWhereInput
    data: XOR<LocalizacaoUpdateWithoutServicoInput, LocalizacaoUncheckedUpdateWithoutServicoInput>
  }

  export type LocalizacaoUpdateWithoutServicoInput = {
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LocalizacaoUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    bairro?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUpsertWithoutServicosInput = {
    update: XOR<UsuarioUpdateWithoutServicosInput, UsuarioUncheckedUpdateWithoutServicosInput>
    create: XOR<UsuarioCreateWithoutServicosInput, UsuarioUncheckedCreateWithoutServicosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutServicosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutServicosInput, UsuarioUncheckedUpdateWithoutServicosInput>
  }

  export type UsuarioUpdateWithoutServicosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    resetTokens?: ResetTokenUpdateManyWithoutUsuarioNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutUsuarioNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutUsuarioNestedInput
    portfolio?: PortfolioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutServicosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    resetTokens?: ResetTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutUsuarioNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutUsuarioNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ServicoRealizadoUpsertWithWhereUniqueWithoutServicoInput = {
    where: ServicoRealizadoWhereUniqueInput
    update: XOR<ServicoRealizadoUpdateWithoutServicoInput, ServicoRealizadoUncheckedUpdateWithoutServicoInput>
    create: XOR<ServicoRealizadoCreateWithoutServicoInput, ServicoRealizadoUncheckedCreateWithoutServicoInput>
  }

  export type ServicoRealizadoUpdateWithWhereUniqueWithoutServicoInput = {
    where: ServicoRealizadoWhereUniqueInput
    data: XOR<ServicoRealizadoUpdateWithoutServicoInput, ServicoRealizadoUncheckedUpdateWithoutServicoInput>
  }

  export type ServicoRealizadoUpdateManyWithWhereWithoutServicoInput = {
    where: ServicoRealizadoScalarWhereInput
    data: XOR<ServicoRealizadoUpdateManyMutationInput, ServicoRealizadoUncheckedUpdateManyWithoutServicoInput>
  }

  export type ContatoWhatsappUpsertWithWhereUniqueWithoutServicoInput = {
    where: ContatoWhatsappWhereUniqueInput
    update: XOR<ContatoWhatsappUpdateWithoutServicoInput, ContatoWhatsappUncheckedUpdateWithoutServicoInput>
    create: XOR<ContatoWhatsappCreateWithoutServicoInput, ContatoWhatsappUncheckedCreateWithoutServicoInput>
  }

  export type ContatoWhatsappUpdateWithWhereUniqueWithoutServicoInput = {
    where: ContatoWhatsappWhereUniqueInput
    data: XOR<ContatoWhatsappUpdateWithoutServicoInput, ContatoWhatsappUncheckedUpdateWithoutServicoInput>
  }

  export type ContatoWhatsappUpdateManyWithWhereWithoutServicoInput = {
    where: ContatoWhatsappScalarWhereInput
    data: XOR<ContatoWhatsappUpdateManyMutationInput, ContatoWhatsappUncheckedUpdateManyWithoutServicoInput>
  }

  export type PortfolioUpsertWithWhereUniqueWithoutServicoInput = {
    where: PortfolioWhereUniqueInput
    update: XOR<PortfolioUpdateWithoutServicoInput, PortfolioUncheckedUpdateWithoutServicoInput>
    create: XOR<PortfolioCreateWithoutServicoInput, PortfolioUncheckedCreateWithoutServicoInput>
  }

  export type PortfolioUpdateWithWhereUniqueWithoutServicoInput = {
    where: PortfolioWhereUniqueInput
    data: XOR<PortfolioUpdateWithoutServicoInput, PortfolioUncheckedUpdateWithoutServicoInput>
  }

  export type PortfolioUpdateManyWithWhereWithoutServicoInput = {
    where: PortfolioScalarWhereInput
    data: XOR<PortfolioUpdateManyMutationInput, PortfolioUncheckedUpdateManyWithoutServicoInput>
  }

  export type SegmentoCreateWithoutCategoriasInput = {
    nome: string
    icone?: string | null
    criadoEm?: Date | string
  }

  export type SegmentoUncheckedCreateWithoutCategoriasInput = {
    id?: number
    nome: string
    icone?: string | null
    criadoEm?: Date | string
  }

  export type SegmentoCreateOrConnectWithoutCategoriasInput = {
    where: SegmentoWhereUniqueInput
    create: XOR<SegmentoCreateWithoutCategoriasInput, SegmentoUncheckedCreateWithoutCategoriasInput>
  }

  export type ServicoCreateWithoutCategoriaInput = {
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutServicoInput
    preco?: PrecoCreateNestedManyWithoutServicoInput
    localizacao?: LocalizacaoCreateNestedOneWithoutServicoInput
    usuario: UsuarioCreateNestedOneWithoutServicosInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutCategoriaInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    usuarioId: number
    localizacaoId?: number | null
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutServicoInput
    preco?: PrecoUncheckedCreateNestedManyWithoutServicoInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutCategoriaInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutCategoriaInput, ServicoUncheckedCreateWithoutCategoriaInput>
  }

  export type ServicoCreateManyCategoriaInputEnvelope = {
    data: ServicoCreateManyCategoriaInput | ServicoCreateManyCategoriaInput[]
    skipDuplicates?: boolean
  }

  export type SegmentoUpsertWithoutCategoriasInput = {
    update: XOR<SegmentoUpdateWithoutCategoriasInput, SegmentoUncheckedUpdateWithoutCategoriasInput>
    create: XOR<SegmentoCreateWithoutCategoriasInput, SegmentoUncheckedCreateWithoutCategoriasInput>
    where?: SegmentoWhereInput
  }

  export type SegmentoUpdateToOneWithWhereWithoutCategoriasInput = {
    where?: SegmentoWhereInput
    data: XOR<SegmentoUpdateWithoutCategoriasInput, SegmentoUncheckedUpdateWithoutCategoriasInput>
  }

  export type SegmentoUpdateWithoutCategoriasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SegmentoUncheckedUpdateWithoutCategoriasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    icone?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoUpsertWithWhereUniqueWithoutCategoriaInput = {
    where: ServicoWhereUniqueInput
    update: XOR<ServicoUpdateWithoutCategoriaInput, ServicoUncheckedUpdateWithoutCategoriaInput>
    create: XOR<ServicoCreateWithoutCategoriaInput, ServicoUncheckedCreateWithoutCategoriaInput>
  }

  export type ServicoUpdateWithWhereUniqueWithoutCategoriaInput = {
    where: ServicoWhereUniqueInput
    data: XOR<ServicoUpdateWithoutCategoriaInput, ServicoUncheckedUpdateWithoutCategoriaInput>
  }

  export type ServicoUpdateManyWithWhereWithoutCategoriaInput = {
    where: ServicoScalarWhereInput
    data: XOR<ServicoUpdateManyMutationInput, ServicoUncheckedUpdateManyWithoutCategoriaInput>
  }

  export type ServicoCreateWithoutAvaliacaoInput = {
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    criadoEm?: Date | string
    preco?: PrecoCreateNestedManyWithoutServicoInput
    categoria?: CategoriaCreateNestedOneWithoutServicosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutServicoInput
    usuario: UsuarioCreateNestedOneWithoutServicosInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutAvaliacaoInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    usuarioId: number
    categoriaId?: number | null
    localizacaoId?: number | null
    criadoEm?: Date | string
    preco?: PrecoUncheckedCreateNestedManyWithoutServicoInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutAvaliacaoInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutAvaliacaoInput, ServicoUncheckedCreateWithoutAvaliacaoInput>
  }

  export type UsuarioCreateWithoutAvaliacaoInput = {
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    servicos?: ServicoCreateNestedManyWithoutUsuarioInput
    resetTokens?: ResetTokenCreateNestedManyWithoutUsuarioInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutUsuarioInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutUsuarioInput
    portfolio?: PortfolioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutAvaliacaoInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    servicos?: ServicoUncheckedCreateNestedManyWithoutUsuarioInput
    resetTokens?: ResetTokenUncheckedCreateNestedManyWithoutUsuarioInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutUsuarioInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutUsuarioInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutAvaliacaoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAvaliacaoInput, UsuarioUncheckedCreateWithoutAvaliacaoInput>
  }

  export type ServicoUpsertWithoutAvaliacaoInput = {
    update: XOR<ServicoUpdateWithoutAvaliacaoInput, ServicoUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<ServicoCreateWithoutAvaliacaoInput, ServicoUncheckedCreateWithoutAvaliacaoInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutAvaliacaoInput, ServicoUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type ServicoUpdateWithoutAvaliacaoInput = {
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: PrecoUpdateManyWithoutServicoNestedInput
    categoria?: CategoriaUpdateOneWithoutServicosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutServicoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutServicosNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    localizacaoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    preco?: PrecoUncheckedUpdateManyWithoutServicoNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type UsuarioUpsertWithoutAvaliacaoInput = {
    update: XOR<UsuarioUpdateWithoutAvaliacaoInput, UsuarioUncheckedUpdateWithoutAvaliacaoInput>
    create: XOR<UsuarioCreateWithoutAvaliacaoInput, UsuarioUncheckedCreateWithoutAvaliacaoInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutAvaliacaoInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutAvaliacaoInput, UsuarioUncheckedUpdateWithoutAvaliacaoInput>
  }

  export type UsuarioUpdateWithoutAvaliacaoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUpdateManyWithoutUsuarioNestedInput
    resetTokens?: ResetTokenUpdateManyWithoutUsuarioNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutUsuarioNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutUsuarioNestedInput
    portfolio?: PortfolioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAvaliacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUncheckedUpdateManyWithoutUsuarioNestedInput
    resetTokens?: ResetTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutUsuarioNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutUsuarioNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ServicoCreateWithoutPrecoInput = {
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutServicoInput
    categoria?: CategoriaCreateNestedOneWithoutServicosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutServicoInput
    usuario: UsuarioCreateNestedOneWithoutServicosInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutPrecoInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    usuarioId: number
    categoriaId?: number | null
    localizacaoId?: number | null
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutServicoInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutPrecoInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutPrecoInput, ServicoUncheckedCreateWithoutPrecoInput>
  }

  export type ServicoUpsertWithoutPrecoInput = {
    update: XOR<ServicoUpdateWithoutPrecoInput, ServicoUncheckedUpdateWithoutPrecoInput>
    create: XOR<ServicoCreateWithoutPrecoInput, ServicoUncheckedCreateWithoutPrecoInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutPrecoInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutPrecoInput, ServicoUncheckedUpdateWithoutPrecoInput>
  }

  export type ServicoUpdateWithoutPrecoInput = {
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutServicoNestedInput
    categoria?: CategoriaUpdateOneWithoutServicosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutServicoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutServicosNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutPrecoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    localizacaoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutServicoNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type UsuarioCreateWithoutResetTokensInput = {
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    servicos?: ServicoCreateNestedManyWithoutUsuarioInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutUsuarioInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutUsuarioInput
    portfolio?: PortfolioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutResetTokensInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    servicos?: ServicoUncheckedCreateNestedManyWithoutUsuarioInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutUsuarioInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutUsuarioInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutResetTokensInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutResetTokensInput, UsuarioUncheckedCreateWithoutResetTokensInput>
  }

  export type UsuarioUpsertWithoutResetTokensInput = {
    update: XOR<UsuarioUpdateWithoutResetTokensInput, UsuarioUncheckedUpdateWithoutResetTokensInput>
    create: XOR<UsuarioCreateWithoutResetTokensInput, UsuarioUncheckedCreateWithoutResetTokensInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutResetTokensInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutResetTokensInput, UsuarioUncheckedUpdateWithoutResetTokensInput>
  }

  export type UsuarioUpdateWithoutResetTokensInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    servicos?: ServicoUpdateManyWithoutUsuarioNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutUsuarioNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutUsuarioNestedInput
    portfolio?: PortfolioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutResetTokensInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    servicos?: ServicoUncheckedUpdateManyWithoutUsuarioNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutUsuarioNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutUsuarioNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateWithoutServicosRealizadosInput = {
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    servicos?: ServicoCreateNestedManyWithoutUsuarioInput
    resetTokens?: ResetTokenCreateNestedManyWithoutUsuarioInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutUsuarioInput
    portfolio?: PortfolioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutServicosRealizadosInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    servicos?: ServicoUncheckedCreateNestedManyWithoutUsuarioInput
    resetTokens?: ResetTokenUncheckedCreateNestedManyWithoutUsuarioInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutUsuarioInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutServicosRealizadosInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutServicosRealizadosInput, UsuarioUncheckedCreateWithoutServicosRealizadosInput>
  }

  export type ServicoCreateWithoutServicosRealizadosInput = {
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutServicoInput
    preco?: PrecoCreateNestedManyWithoutServicoInput
    categoria?: CategoriaCreateNestedOneWithoutServicosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutServicoInput
    usuario: UsuarioCreateNestedOneWithoutServicosInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutServicosRealizadosInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    usuarioId: number
    categoriaId?: number | null
    localizacaoId?: number | null
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutServicoInput
    preco?: PrecoUncheckedCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutServicosRealizadosInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutServicosRealizadosInput, ServicoUncheckedCreateWithoutServicosRealizadosInput>
  }

  export type UsuarioUpsertWithoutServicosRealizadosInput = {
    update: XOR<UsuarioUpdateWithoutServicosRealizadosInput, UsuarioUncheckedUpdateWithoutServicosRealizadosInput>
    create: XOR<UsuarioCreateWithoutServicosRealizadosInput, UsuarioUncheckedCreateWithoutServicosRealizadosInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutServicosRealizadosInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutServicosRealizadosInput, UsuarioUncheckedUpdateWithoutServicosRealizadosInput>
  }

  export type UsuarioUpdateWithoutServicosRealizadosInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    servicos?: ServicoUpdateManyWithoutUsuarioNestedInput
    resetTokens?: ResetTokenUpdateManyWithoutUsuarioNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutUsuarioNestedInput
    portfolio?: PortfolioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutServicosRealizadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    servicos?: ServicoUncheckedUpdateManyWithoutUsuarioNestedInput
    resetTokens?: ResetTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutUsuarioNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ServicoUpsertWithoutServicosRealizadosInput = {
    update: XOR<ServicoUpdateWithoutServicosRealizadosInput, ServicoUncheckedUpdateWithoutServicosRealizadosInput>
    create: XOR<ServicoCreateWithoutServicosRealizadosInput, ServicoUncheckedCreateWithoutServicosRealizadosInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutServicosRealizadosInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutServicosRealizadosInput, ServicoUncheckedUpdateWithoutServicosRealizadosInput>
  }

  export type ServicoUpdateWithoutServicosRealizadosInput = {
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutServicoNestedInput
    preco?: PrecoUpdateManyWithoutServicoNestedInput
    categoria?: CategoriaUpdateOneWithoutServicosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutServicoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutServicosNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutServicosRealizadosInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    localizacaoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutServicoNestedInput
    preco?: PrecoUncheckedUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type UsuarioCreateWithoutContatosWhatsappInput = {
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    servicos?: ServicoCreateNestedManyWithoutUsuarioInput
    resetTokens?: ResetTokenCreateNestedManyWithoutUsuarioInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutUsuarioInput
    portfolio?: PortfolioCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutContatosWhatsappInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    servicos?: ServicoUncheckedCreateNestedManyWithoutUsuarioInput
    resetTokens?: ResetTokenUncheckedCreateNestedManyWithoutUsuarioInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutUsuarioInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutContatosWhatsappInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutContatosWhatsappInput, UsuarioUncheckedCreateWithoutContatosWhatsappInput>
  }

  export type ServicoCreateWithoutContatosWhatsappInput = {
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutServicoInput
    preco?: PrecoCreateNestedManyWithoutServicoInput
    categoria?: CategoriaCreateNestedOneWithoutServicosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutServicoInput
    usuario: UsuarioCreateNestedOneWithoutServicosInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutContatosWhatsappInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    usuarioId: number
    categoriaId?: number | null
    localizacaoId?: number | null
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutServicoInput
    preco?: PrecoUncheckedCreateNestedManyWithoutServicoInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutServicoInput
    portfolio?: PortfolioUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutContatosWhatsappInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutContatosWhatsappInput, ServicoUncheckedCreateWithoutContatosWhatsappInput>
  }

  export type UsuarioUpsertWithoutContatosWhatsappInput = {
    update: XOR<UsuarioUpdateWithoutContatosWhatsappInput, UsuarioUncheckedUpdateWithoutContatosWhatsappInput>
    create: XOR<UsuarioCreateWithoutContatosWhatsappInput, UsuarioUncheckedCreateWithoutContatosWhatsappInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutContatosWhatsappInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutContatosWhatsappInput, UsuarioUncheckedUpdateWithoutContatosWhatsappInput>
  }

  export type UsuarioUpdateWithoutContatosWhatsappInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    servicos?: ServicoUpdateManyWithoutUsuarioNestedInput
    resetTokens?: ResetTokenUpdateManyWithoutUsuarioNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutUsuarioNestedInput
    portfolio?: PortfolioUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutContatosWhatsappInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    servicos?: ServicoUncheckedUpdateManyWithoutUsuarioNestedInput
    resetTokens?: ResetTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutUsuarioNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type ServicoUpsertWithoutContatosWhatsappInput = {
    update: XOR<ServicoUpdateWithoutContatosWhatsappInput, ServicoUncheckedUpdateWithoutContatosWhatsappInput>
    create: XOR<ServicoCreateWithoutContatosWhatsappInput, ServicoUncheckedCreateWithoutContatosWhatsappInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutContatosWhatsappInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutContatosWhatsappInput, ServicoUncheckedUpdateWithoutContatosWhatsappInput>
  }

  export type ServicoUpdateWithoutContatosWhatsappInput = {
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutServicoNestedInput
    preco?: PrecoUpdateManyWithoutServicoNestedInput
    categoria?: CategoriaUpdateOneWithoutServicosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutServicoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutServicosNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutContatosWhatsappInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    localizacaoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutServicoNestedInput
    preco?: PrecoUncheckedUpdateManyWithoutServicoNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type CategoriaCreateWithoutSegmentoInput = {
    nomeServico: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    servicos?: ServicoCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaUncheckedCreateWithoutSegmentoInput = {
    id?: number
    nomeServico: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
    servicos?: ServicoUncheckedCreateNestedManyWithoutCategoriaInput
  }

  export type CategoriaCreateOrConnectWithoutSegmentoInput = {
    where: CategoriaWhereUniqueInput
    create: XOR<CategoriaCreateWithoutSegmentoInput, CategoriaUncheckedCreateWithoutSegmentoInput>
  }

  export type CategoriaCreateManySegmentoInputEnvelope = {
    data: CategoriaCreateManySegmentoInput | CategoriaCreateManySegmentoInput[]
    skipDuplicates?: boolean
  }

  export type CategoriaUpsertWithWhereUniqueWithoutSegmentoInput = {
    where: CategoriaWhereUniqueInput
    update: XOR<CategoriaUpdateWithoutSegmentoInput, CategoriaUncheckedUpdateWithoutSegmentoInput>
    create: XOR<CategoriaCreateWithoutSegmentoInput, CategoriaUncheckedCreateWithoutSegmentoInput>
  }

  export type CategoriaUpdateWithWhereUniqueWithoutSegmentoInput = {
    where: CategoriaWhereUniqueInput
    data: XOR<CategoriaUpdateWithoutSegmentoInput, CategoriaUncheckedUpdateWithoutSegmentoInput>
  }

  export type CategoriaUpdateManyWithWhereWithoutSegmentoInput = {
    where: CategoriaScalarWhereInput
    data: XOR<CategoriaUpdateManyMutationInput, CategoriaUncheckedUpdateManyWithoutSegmentoInput>
  }

  export type CategoriaScalarWhereInput = {
    AND?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    OR?: CategoriaScalarWhereInput[]
    NOT?: CategoriaScalarWhereInput | CategoriaScalarWhereInput[]
    id?: IntFilter<"Categoria"> | number
    nomeServico?: StringFilter<"Categoria"> | string
    criadoEm?: DateTimeFilter<"Categoria"> | Date | string
    atualizadoEm?: DateTimeFilter<"Categoria"> | Date | string
    segmentoId?: IntNullableFilter<"Categoria"> | number | null
  }

  export type ServicoCreateWithoutPortfolioInput = {
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutServicoInput
    preco?: PrecoCreateNestedManyWithoutServicoInput
    categoria?: CategoriaCreateNestedOneWithoutServicosInput
    localizacao?: LocalizacaoCreateNestedOneWithoutServicoInput
    usuario: UsuarioCreateNestedOneWithoutServicosInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutServicoInput
  }

  export type ServicoUncheckedCreateWithoutPortfolioInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    usuarioId: number
    categoriaId?: number | null
    localizacaoId?: number | null
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutServicoInput
    preco?: PrecoUncheckedCreateNestedManyWithoutServicoInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutServicoInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutServicoInput
  }

  export type ServicoCreateOrConnectWithoutPortfolioInput = {
    where: ServicoWhereUniqueInput
    create: XOR<ServicoCreateWithoutPortfolioInput, ServicoUncheckedCreateWithoutPortfolioInput>
  }

  export type UsuarioCreateWithoutPortfolioInput = {
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    avaliacao?: AvaliacaoCreateNestedManyWithoutUsuarioInput
    servicos?: ServicoCreateNestedManyWithoutUsuarioInput
    resetTokens?: ResetTokenCreateNestedManyWithoutUsuarioInput
    servicosRealizados?: ServicoRealizadoCreateNestedManyWithoutUsuarioInput
    contatosWhatsapp?: ContatoWhatsappCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateWithoutPortfolioInput = {
    id?: number
    nome: string
    email: string
    telefone: string
    estado: string
    cidade: string
    endereco: string
    senha: string
    criadoEm?: Date | string
    avaliacao?: AvaliacaoUncheckedCreateNestedManyWithoutUsuarioInput
    servicos?: ServicoUncheckedCreateNestedManyWithoutUsuarioInput
    resetTokens?: ResetTokenUncheckedCreateNestedManyWithoutUsuarioInput
    servicosRealizados?: ServicoRealizadoUncheckedCreateNestedManyWithoutUsuarioInput
    contatosWhatsapp?: ContatoWhatsappUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioCreateOrConnectWithoutPortfolioInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutPortfolioInput, UsuarioUncheckedCreateWithoutPortfolioInput>
  }

  export type ServicoUpsertWithoutPortfolioInput = {
    update: XOR<ServicoUpdateWithoutPortfolioInput, ServicoUncheckedUpdateWithoutPortfolioInput>
    create: XOR<ServicoCreateWithoutPortfolioInput, ServicoUncheckedCreateWithoutPortfolioInput>
    where?: ServicoWhereInput
  }

  export type ServicoUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: ServicoWhereInput
    data: XOR<ServicoUpdateWithoutPortfolioInput, ServicoUncheckedUpdateWithoutPortfolioInput>
  }

  export type ServicoUpdateWithoutPortfolioInput = {
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutServicoNestedInput
    preco?: PrecoUpdateManyWithoutServicoNestedInput
    categoria?: CategoriaUpdateOneWithoutServicosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutServicoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutServicosNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    localizacaoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutServicoNestedInput
    preco?: PrecoUncheckedUpdateManyWithoutServicoNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type UsuarioUpsertWithoutPortfolioInput = {
    update: XOR<UsuarioUpdateWithoutPortfolioInput, UsuarioUncheckedUpdateWithoutPortfolioInput>
    create: XOR<UsuarioCreateWithoutPortfolioInput, UsuarioUncheckedCreateWithoutPortfolioInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutPortfolioInput, UsuarioUncheckedUpdateWithoutPortfolioInput>
  }

  export type UsuarioUpdateWithoutPortfolioInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutUsuarioNestedInput
    servicos?: ServicoUpdateManyWithoutUsuarioNestedInput
    resetTokens?: ResetTokenUpdateManyWithoutUsuarioNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutUsuarioNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutPortfolioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefone?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    cidade?: StringFieldUpdateOperationsInput | string
    endereco?: StringFieldUpdateOperationsInput | string
    senha?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutUsuarioNestedInput
    servicos?: ServicoUncheckedUpdateManyWithoutUsuarioNestedInput
    resetTokens?: ResetTokenUncheckedUpdateManyWithoutUsuarioNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutUsuarioNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type AvaliacaoCreateManyUsuarioInput = {
    id?: number
    star: number
    descricao: string
    servicoId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ServicoCreateManyUsuarioInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    categoriaId?: number | null
    localizacaoId?: number | null
    criadoEm?: Date | string
  }

  export type ResetTokenCreateManyUsuarioInput = {
    id?: number
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type ServicoRealizadoCreateManyUsuarioInput = {
    id?: number
    servicoId: number
    confirmado?: boolean | null
    respondidoEm?: Date | string | null
    realizadoEm?: Date | string
  }

  export type ContatoWhatsappCreateManyUsuarioInput = {
    id?: number
    servicoId: number
    clicadoEm?: Date | string
    perguntado?: boolean
  }

  export type PortfolioCreateManyUsuarioInput = {
    id?: number
    url: string
    servicoId: number
    criadoEm?: Date | string
  }

  export type AvaliacaoUpdateWithoutUsuarioInput = {
    star?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    star?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    servicoId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    star?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    servicoId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoUpdateWithoutUsuarioInput = {
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutServicoNestedInput
    preco?: PrecoUpdateManyWithoutServicoNestedInput
    categoria?: CategoriaUpdateOneWithoutServicosNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutServicoNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    localizacaoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutServicoNestedInput
    preco?: PrecoUncheckedUpdateManyWithoutServicoNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    localizacaoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTokenUpdateWithoutUsuarioInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTokenUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResetTokenUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoRealizadoUpdateWithoutUsuarioInput = {
    confirmado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respondidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateOneRequiredWithoutServicosRealizadosNestedInput
  }

  export type ServicoRealizadoUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: IntFieldUpdateOperationsInput | number
    confirmado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respondidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoRealizadoUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: IntFieldUpdateOperationsInput | number
    confirmado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respondidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContatoWhatsappUpdateWithoutUsuarioInput = {
    clicadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntado?: BoolFieldUpdateOperationsInput | boolean
    servico?: ServicoUpdateOneRequiredWithoutContatosWhatsappNestedInput
  }

  export type ContatoWhatsappUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: IntFieldUpdateOperationsInput | number
    clicadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContatoWhatsappUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    servicoId?: IntFieldUpdateOperationsInput | number
    clicadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PortfolioUpdateWithoutUsuarioInput = {
    url?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    servico?: ServicoUpdateOneRequiredWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    servicoId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    servicoId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoCreateManyLocalizacaoInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    usuarioId: number
    categoriaId?: number | null
    criadoEm?: Date | string
  }

  export type ServicoUpdateWithoutLocalizacaoInput = {
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutServicoNestedInput
    preco?: PrecoUpdateManyWithoutServicoNestedInput
    categoria?: CategoriaUpdateOneWithoutServicosNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutServicosNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutLocalizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutServicoNestedInput
    preco?: PrecoUncheckedUpdateManyWithoutServicoNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateManyWithoutLocalizacaoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    categoriaId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoCreateManyServicoInput = {
    id?: number
    star: number
    descricao: string
    usuarioId: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type PrecoCreateManyServicoInput = {
    id?: number
    nomeservico: string
    precificacao: number
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type ServicoRealizadoCreateManyServicoInput = {
    id?: number
    usuarioId: number
    confirmado?: boolean | null
    respondidoEm?: Date | string | null
    realizadoEm?: Date | string
  }

  export type ContatoWhatsappCreateManyServicoInput = {
    id?: number
    usuarioId: number
    clicadoEm?: Date | string
    perguntado?: boolean
  }

  export type PortfolioCreateManyServicoInput = {
    id?: number
    url: string
    usuarioId: number
    criadoEm?: Date | string
  }

  export type AvaliacaoUpdateWithoutServicoInput = {
    star?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutAvaliacaoNestedInput
  }

  export type AvaliacaoUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    star?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvaliacaoUncheckedUpdateManyWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    star?: IntFieldUpdateOperationsInput | number
    descricao?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrecoUpdateWithoutServicoInput = {
    nomeservico?: StringFieldUpdateOperationsInput | string
    precificacao?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrecoUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeservico?: StringFieldUpdateOperationsInput | string
    precificacao?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PrecoUncheckedUpdateManyWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeservico?: StringFieldUpdateOperationsInput | string
    precificacao?: FloatFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoRealizadoUpdateWithoutServicoInput = {
    confirmado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respondidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutServicosRealizadosNestedInput
  }

  export type ServicoRealizadoUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    confirmado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respondidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoRealizadoUncheckedUpdateManyWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    confirmado?: NullableBoolFieldUpdateOperationsInput | boolean | null
    respondidoEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    realizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContatoWhatsappUpdateWithoutServicoInput = {
    clicadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntado?: BoolFieldUpdateOperationsInput | boolean
    usuario?: UsuarioUpdateOneRequiredWithoutContatosWhatsappNestedInput
  }

  export type ContatoWhatsappUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    clicadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ContatoWhatsappUncheckedUpdateManyWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    clicadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    perguntado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PortfolioUpdateWithoutServicoInput = {
    url?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutPortfolioNestedInput
  }

  export type PortfolioUncheckedUpdateWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PortfolioUncheckedUpdateManyWithoutServicoInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicoCreateManyCategoriaInput = {
    id?: number
    nomeNegocio: string
    descricao: string
    imagem?: string | null
    disponivel?: boolean
    usuarioId: number
    localizacaoId?: number | null
    criadoEm?: Date | string
  }

  export type ServicoUpdateWithoutCategoriaInput = {
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUpdateManyWithoutServicoNestedInput
    preco?: PrecoUpdateManyWithoutServicoNestedInput
    localizacao?: LocalizacaoUpdateOneWithoutServicoNestedInput
    usuario?: UsuarioUpdateOneRequiredWithoutServicosNestedInput
    servicosRealizados?: ServicoRealizadoUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    localizacaoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    avaliacao?: AvaliacaoUncheckedUpdateManyWithoutServicoNestedInput
    preco?: PrecoUncheckedUpdateManyWithoutServicoNestedInput
    servicosRealizados?: ServicoRealizadoUncheckedUpdateManyWithoutServicoNestedInput
    contatosWhatsapp?: ContatoWhatsappUncheckedUpdateManyWithoutServicoNestedInput
    portfolio?: PortfolioUncheckedUpdateManyWithoutServicoNestedInput
  }

  export type ServicoUncheckedUpdateManyWithoutCategoriaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeNegocio?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    imagem?: NullableStringFieldUpdateOperationsInput | string | null
    disponivel?: BoolFieldUpdateOperationsInput | boolean
    usuarioId?: IntFieldUpdateOperationsInput | number
    localizacaoId?: NullableIntFieldUpdateOperationsInput | number | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoriaCreateManySegmentoInput = {
    id?: number
    nomeServico: string
    criadoEm?: Date | string
    atualizadoEm?: Date | string
  }

  export type CategoriaUpdateWithoutSegmentoInput = {
    nomeServico?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateWithoutSegmentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeServico?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    servicos?: ServicoUncheckedUpdateManyWithoutCategoriaNestedInput
  }

  export type CategoriaUncheckedUpdateManyWithoutSegmentoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nomeServico?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    atualizadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}