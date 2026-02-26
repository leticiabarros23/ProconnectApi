function generateEmailHtml(content: string): string {
  return `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        body { font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 20px auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); overflow: hidden; }
        .header { background-color: #4b01a0; padding: 0; text-align: center; }
        .header img { width: 100%; max-width: 600px; display: block; }
        .content { padding: 30px; text-align: center; color: #333333; }
        .content h2 { color: #4b01a0; font-size: 22px; }
        .content p { font-size: 15px; line-height: 1.6; }
        .btn { display: inline-block; margin-top: 20px; padding: 12px 30px; background-color: #4b01a0; color: #ffffff; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: bold; }
        .link-text { margin-top: 15px; font-size: 13px; color: #777; word-break: break-all; }
        .footer { background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #777; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="https://res.cloudinary.com/drgzynqkt/image/upload/v1772046516/Logo_proconnect_.png" alt="ProConnect">
        </div>
        <div class="content">
          ${content}
        </div>
        <div class="footer">
          <p>Se você não solicitou este e-mail, ignore-o com segurança.</p>
          <p>© 2026 ProConnect - Conectando quem faz com quem precisa</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export { generateEmailHtml };