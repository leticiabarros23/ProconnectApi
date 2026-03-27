import { admin } from "./firebase";

interface EnviarNotificacaoParams {
  fcmToken: string;
  remetenteNome: string;
  textoMensagem: string;
  conversaId: number | string;
}

export async function enviarNotificacaoPush({
  fcmToken,
  remetenteNome,
  textoMensagem,
  conversaId,
}: EnviarNotificacaoParams): Promise<void> {
  try {
    await admin.messaging().send({
      token: fcmToken,
      notification: {
        title: `PróConect: ${remetenteNome}`,
        body: textoMensagem.length > 100
          ? textoMensagem.substring(0, 97) + "..."
          : textoMensagem,
      },
      data: {
        conversaId: String(conversaId),
      },
      android: {
        priority: "high",
        notification: {
          sound: "default",
          channelId: "mensagens",
        },
      },
    });
    console.log(`✅ Push enviado para conversa ${conversaId}`);
  } catch (error: any) {
    // Token inválido/expirado — não quebra o fluxo principal
    if (
    error.code === "messaging/invalid-registration-token" ||
    error.code === "messaging/registration-token-not-registered"
    ) {
    console.warn(`⚠️ Token FCM inválido. Removendo do banco...`);
    } else {
      console.error("❌ Erro ao enviar push notification:", error);
    }
  }
}